#!/usr/bin/env node
// Paper-to-dataset links for the Critical Zone products list (epic ticket T6c, CUAHSI/CUAHSI3-website#87).
//
// For every paper with a DOI in content/critical-zone/products.json, asks DataCite which records name that DOI in their
// relatedIdentifiers (the links live with the dataset: a repository writes "this dataset supplements that paper"; the paper's own
// record usually says nothing back, which is why OpenAlex finds none). Keeps only the SUPPORTING relations Jordan chose on
// 29 October 2026 and maps them to the `related` field of the product schema (scripts/content-schemas.mjs):
//
//   DataCite relation on the dataset's record   `related` relation   meaning, from the dataset's side
//   IsSupplementTo, IsSupplementedBy            supports             the dataset (or software) is data that supports the paper
//   IsCitedBy, IsReferencedBy                   cited-by             the paper cites the dataset
//   IsDescribedBy                               described-by         the paper describes the dataset
//
// Not kept, and counted: a dataset record that itself Cites/References the paper (the dataset names the paper as a source, which is
// not data for the paper). IsSupplementedBy is stored as `supports` too, by Jordan's ruling of 31 October 2026: on the dataset's record it says the
// paper supplements the dataset, so the direction is the reverse of IsSupplementTo, but the two are kept together as supporting links. Where one dataset
// and paper have two kept relations, the strongest is stored (supports, then described-by, then cited-by) and the pair is counted.
//
// A person's confirmed links (--confirmed <csv>, columns paper_doi,dataset_doi and optionally relation, default supports) are merged
// in with source `manual`; a confirmed link overrides a programmatic one for the same paper and dataset.
//
// It writes ONE proposal file and nothing to content/ (C3, C7): the links to add to products already in the list, and the datasets
// found that are not in the list yet, as candidate products for Jordan's review (decision 2: a dataset linked to a Critical Zone paper
// counts as a Critical Zone product, whatever repository holds it).
//
// Usage:
//   node scripts/cz-links.mjs [--out agent/reports/<YYMMDD>_cz-links-proposal.json] [--cache .agent/links/cache] [--confirmed <csv>]
//        [--delay 1000] [--limit N] [--date YYYY-MM-DD] [--refresh]
// Every network response is cached under --cache (named by a hash of the URL), so a second run makes no requests unless --refresh is
// given. --delay ms (default 1000) before every network request; DataCite is a public API. --limit asks only the first N papers
// (for a trial). No dependencies.

import fs from 'node:fs'
import path from 'node:path'
import crypto from 'node:crypto'

const args = process.argv.slice(2)
const opt = (name, dflt) => { const i = args.indexOf(`--${name}`); return i >= 0 ? args[i + 1] : dflt }
const flag = name => args.includes(`--${name}`)
const today = opt('date', new Date().toISOString().slice(0, 10))
const OUT = opt('out', `agent/reports/${today.slice(2).replaceAll('-', '')}_cz-links-proposal.json`)
const CACHE = opt('cache', '.agent/links/cache')
const CONFIRMED = opt('confirmed', '')
const DELAY = Number(opt('delay', '1000'))
const LIMIT = Number(opt('limit', '0'))
const UA = 'CUAHSI-website-links (help@cuahsi.org)'
const PRODUCTS = 'content/critical-zone/products.json'

const sleep = ms => new Promise(r => setTimeout(r, ms))
const sha = s => crypto.createHash('sha1').update(s).digest('hex')
const stats = { requests: 0, cached: 0, failed: [] }
fs.mkdirSync(CACHE, { recursive: true })

// One GET, cached by URL; returns parsed JSON, or null on a 404 or after the retries fail (recorded in stats.failed).
async function getJson(url) {
  const file = path.join(CACHE, sha(url).slice(0, 16))
  if (!flag('refresh') && fs.existsSync(file)) { stats.cached++; return JSON.parse(fs.readFileSync(file, 'utf8')) }
  for (let attempt = 1; attempt <= 4; attempt++) {
    await sleep(DELAY * (attempt === 1 ? 1 : attempt * 3)); stats.requests++
    let res
    try { res = await fetch(url, { headers: { 'User-Agent': UA, Accept: 'application/vnd.api+json' }, signal: AbortSignal.timeout(30000) }) }
    catch (e) { if (attempt === 4) { stats.failed.push({ url, why: String(e) }); return null } continue }
    if (res.status === 404) { fs.writeFileSync(file, 'null'); return null }
    if (res.status === 429 || res.status >= 500) { if (attempt === 4) { stats.failed.push({ url, why: `HTTP ${res.status}` }); return null } continue }
    if (!res.ok) { stats.failed.push({ url, why: `HTTP ${res.status}` }); return null }
    const body = await res.text()
    let parsed
    try { parsed = JSON.parse(body) } catch (e) { stats.failed.push({ url, why: 'not JSON' }); return null }   // an error page is not cached
    fs.writeFileSync(file, body)
    return parsed
  }
  return null
}

const KEEP = {
  IsSupplementTo: 'supports', IsSupplementedBy: 'supports',
  IsCitedBy: 'cited-by', IsReferencedBy: 'cited-by',
  IsDescribedBy: 'described-by',
}
const DATASET_NAMES_PAPER = new Set(['Cites', 'References'])   // the dataset cites the paper: counted, not kept
const RANK = { supports: 3, 'described-by': 2, 'cited-by': 1 }   // when a pair has two kept relations, the strongest is stored
const WANTED_TYPES = { Dataset: 'dataset', Software: 'software' }

const products = JSON.parse(fs.readFileSync(PRODUCTS, 'utf8'))
const lc = s => String(s ?? '').toLowerCase()
const doiOf = p => p.doi ?? (p.hydroshare_id ? `10.4211/hs.${p.hydroshare_id}` : '')
const listed = new Map()   // lowercase doi -> product (a HydroShare resource without a DOI is matched on its 10.4211/hs.<id> DOI)
for (const p of products) { const d = doiOf(p); if (d) listed.set(lc(d), p) }
let papers = products.filter(p => p.type === 'paper' && p.doi)
const papersInList = papers.length
if (LIMIT) papers = papers.slice(0, LIMIT)
const paperDois = new Set(papers.map(p => lc(p.doi)))

const found = new Map()   // `${datasetDoi}|${paperDoi}` -> link
const seenRelations = {}  // every DataCite relation seen between a record (of any type) and a paper, kept or not
let pairsWithTwoRelations = 0, supplementedBy = 0
let datasetNamesPaper = 0 // links where a dataset or software record itself Cites/References the paper: counted, not kept
const datasetRecords = new Map()   // lowercase dataset doi -> metadata
let withAnyRecord = 0

for (const [i, paper] of papers.entries()) {
  const q = encodeURIComponent(`relatedIdentifiers.relatedIdentifier:"${paper.doi}"`)
  let url = `https://api.datacite.org/dois?query=${q}&page[size]=100&include=client`
  let sawAny = false
  while (url) {
    const j = await getJson(url)
    if (!j) break
    const clients = new Map((j.included ?? []).filter(x => x.type === 'clients').map(x => [x.id, x.attributes?.name]))
    for (const rec of j.data ?? []) {
      const a = rec.attributes ?? {}
      const dsDoi = lc(a.doi)
      if (!dsDoi || dsDoi === lc(paper.doi)) continue
      const rel = (a.relatedIdentifiers ?? []).filter(r => lc(r.relatedIdentifier).replace(/^https?:\/\/(dx\.)?doi\.org\//, '') === lc(paper.doi))
      if (!rel.length) continue
      sawAny = true
      const general = a.types?.resourceTypeGeneral
      for (const r of rel) {
        seenRelations[r.relationType] = (seenRelations[r.relationType] ?? 0) + 1
        if (DATASET_NAMES_PAPER.has(r.relationType) && WANTED_TYPES[general]) datasetNamesPaper++
        if (r.relationType === 'IsSupplementedBy' && WANTED_TYPES[general]) supplementedBy++   // counted separately, stored as supports
        if (!KEEP[r.relationType]) continue
        if (!WANTED_TYPES[general]) { seenRelations[`(kept relation on a ${general ?? 'untyped'} record, not a dataset or software: skipped)`] = (seenRelations[`(kept relation on a ${general ?? 'untyped'} record, not a dataset or software: skipped)`] ?? 0) + 1; continue }
        const key = `${dsDoi}|${lc(paper.doi)}`
        const have = found.get(key)
        if (have) { pairsWithTwoRelations++; if (RANK[KEEP[r.relationType]] <= RANK[have.relation]) continue }
        found.set(key, { dataset_doi: a.doi, paper_doi: paper.doi, relation: KEEP[r.relationType], datacite_relation: r.relationType, source: 'datacite' })
      }
      if (!datasetRecords.has(dsDoi)) datasetRecords.set(dsDoi, {
        doi: a.doi, title: a.titles?.[0]?.title, type: WANTED_TYPES[general], resource_type_general: general, year: a.publicationYear,
        repository: clients.get(rec.relationships?.client?.data?.id) ?? a.publisher, url: a.url,
      })
    }
    url = j.links?.next ?? ''
  }
  if (sawAny) withAnyRecord++
  if ((i + 1) % 100 === 0) console.log(`  ${i + 1} of ${papers.length} papers asked`)
}

const notKept = datasetNamesPaper

// confirmed links
let confirmedRows = 0, overridden = 0
const confirmedNotAsked = []
if (CONFIRMED) {
  const [head, ...rows] = fs.readFileSync(CONFIRMED, 'utf8').trim().split('\n')
  const cols = head.split(',').map(s => s.trim())
  const ip = cols.indexOf('paper_doi'), id = cols.indexOf('dataset_doi'), ir = cols.indexOf('relation')
  if (ip < 0 || id < 0) throw new Error('--confirmed needs the columns paper_doi and dataset_doi')
  for (const row of rows.filter(r => r.trim())) {
    // no quoted commas: a DOI contains none; a https://doi.org/ prefix is dropped
    const c = row.split(',').map(s => s.trim().replace(/^https?:\/\/(dx\.)?doi\.org\//i, ''))
    const relation = ir >= 0 && c[ir] ? c[ir] : 'supports'
    if (!['supports', 'cited-by', 'described-by'].includes(relation)) throw new Error(`unknown relation "${relation}" in ${CONFIRMED}`)
    const k = `${lc(c[id])}|${lc(c[ip])}`
    if (found.has(k)) overridden++
    found.set(k, { dataset_doi: c[id], paper_doi: c[ip], relation, source: 'manual' })
    confirmedRows++
    if (!listed.has(lc(c[ip]))) confirmedNotAsked.push(c[ip])
    if (!datasetRecords.has(lc(c[id])) && !listed.has(lc(c[id]))) {
      const j = await getJson(`https://api.datacite.org/dois/${encodeURI(lc(c[id]))}?include=client`)
      const a = j?.data?.attributes
      if (a) datasetRecords.set(lc(c[id]), { doi: a.doi, title: a.titles?.[0]?.title, type: WANTED_TYPES[a.types?.resourceTypeGeneral] ?? 'dataset', resource_type_general: a.types?.resourceTypeGeneral, year: a.publicationYear, repository: (j.included ?? []).find(x => x.type === 'clients')?.attributes?.name ?? a.publisher, url: a.url })
    }
  }
}

// ---- split into links on products already in the list, and candidate datasets not in it
const links = [...found.values()]
const onListed = new Map()      // product doi -> [{ relation, doi: paper doi, source }]
const candidates = new Map()    // dataset doi -> candidate product
for (const l of links) {
  const ds = listed.get(lc(l.dataset_doi))
  const entry = { relation: l.relation, doi: l.paper_doi, source: l.source }
  if (ds) {
    const k = doiOf(ds)
    onListed.set(k, [...(onListed.get(k) ?? []), entry])
  } else {
    const rec = datasetRecords.get(lc(l.dataset_doi)) ?? { doi: l.dataset_doi }
    const c = candidates.get(lc(l.dataset_doi)) ?? { ...rec, type: rec.type ?? 'dataset', ...(rec.title ? {} : { no_datacite_record: true }), related: [] }
    c.related.push(entry)
    candidates.set(lc(l.dataset_doi), c)
  }
}
const byRepo = {}
for (const c of candidates.values()) byRepo[c.repository ?? '(unknown)'] = (byRepo[c.repository ?? '(unknown)'] ?? 0) + 1
const byRelation = {}
for (const l of links) byRelation[l.relation] = (byRelation[l.relation] ?? 0) + 1
const papersWithLink = new Set(links.map(l => lc(l.paper_doi)).filter(d => paperDois.has(d)))

const byOf = (items, f) => { const m = {}; for (const x of items) { const k = f(x); m[k] = (m[k] ?? 0) + 1 } return Object.fromEntries(Object.entries(m).sort((a, b) => b[1] - a[1])) }
const linkedPapers = [...papersWithLink].map(d => listed.get(d)).filter(Boolean)
const candidateList = [...candidates.values()]
const out = {
  generated: today,
  script: 'scripts/cz-links.mjs',
  note: 'A proposal for review. Not content: nothing here is in content/. Links to add to products already in the list, and datasets found that are not in the list yet (candidate products for Jordan to review).',
  options: { delay_ms: DELAY, limit: LIMIT || null, confirmed_file: CONFIRMED || null },
  requests: { network: stats.requests, cached: stats.cached, failed: stats.failed },
  counts: {
    papers_with_doi_in_list: papersInList,
    papers_asked: papers.length,
    papers_with_a_datacite_record_naming_them: withAnyRecord,
    papers_with_a_supporting_link: papersWithLink.size,
    supporting_links: links.length,
    supporting_links_by_relation: byRelation,
    confirmed_links_read: confirmedRows,
    confirmed_links_that_overrode_a_datacite_link: overridden,
    confirmed_links_for_papers_not_in_the_list: confirmedNotAsked.length,
    datasets_found: new Set(links.map(l => lc(l.dataset_doi))).size,
    datasets_already_in_the_list: onListed.size,
    datasets_not_in_the_list: candidates.size,
    datasets_not_in_the_list_by_repository: Object.fromEntries(Object.entries(byRepo).sort((a, b) => b[1] - a[1])),
    dataset_cites_paper_relations_seen_and_not_kept: notKept,
    dataset_is_supplemented_by_paper_relations_seen_and_stored_as_supports: supplementedBy,
    pairs_with_two_kept_relations_strongest_stored: pairsWithTwoRelations,
    papers_with_a_link_by_era: byOf(linkedPapers, p => p.era ?? '(none)'),
    papers_with_a_link_by_first_site: byOf(linkedPapers, p => (p.sites ?? [])[0] ?? '(none)'),
    candidate_datasets_by_type: byOf(candidateList, c => c.resource_type_general ?? '(no record)'),
    candidate_datasets_by_published_five_years: byOf(candidateList, c => (c.year ? `${Math.floor(c.year / 5) * 5}` : '(none)')),
    distinct_papers_naming_a_candidate: new Set(candidateList.flatMap(c => c.related.map(r => lc(r.doi)))).size,
    candidates_linked_to_more_than_one_paper: candidateList.filter(c => c.related.length > 1).length,
    every_relation_seen_between_a_record_and_a_paper: seenRelations,
  },
  add_related_to_products_in_the_list: [...onListed].map(([doi, related]) => ({ doi, title: listed.get(lc(doi))?.title, related })),
  candidate_products_not_in_the_list: candidateList,
}
// a readable table of the candidates next to the JSON, for review
const mdEsc = t => String(t ?? '').replaceAll('|', '/').replace(/\s+/g, ' ').trim()
const paperTitle = d => mdEsc(listed.get(lc(d))?.title ?? d)
const table = [
  `# Candidate products from DataCite links (generated by scripts/cz-links.mjs, ${today})`, '',
  `${candidateList.length} datasets and software items that a paper in the list names (by a supporting DataCite relation or a confirmed link) and that are not in the list. Not content: for review. Machine-readable form: ${path.basename(OUT)}, key candidate_products_not_in_the_list.`, '',
  '| # | Title | Type | Repository | Year | Link | The paper in the list that names it | Relation |', '|---|---|---|---|---|---|---|---|',
  ...candidateList.map((c, i) => `| ${i + 1} | ${mdEsc(c.title ?? '(no DataCite record)')} | ${c.type ?? ''} | ${mdEsc(c.repository)} | ${c.year ?? ''} | [${c.doi}](https://doi.org/${c.doi}) | ${c.related.map(r => `${paperTitle(r.doi)} ([doi](https://doi.org/${r.doi}))`).join('; ')} | ${[...new Set(c.related.map(r => r.relation))].join(', ')} |`), '',
].join('\n')
fs.mkdirSync(path.dirname(OUT), { recursive: true })
fs.writeFileSync(OUT.replace(/_cz-links-proposal\.json$/, '_cz-links-candidates.md').replace(/\.json$/, '.md'), table)
fs.writeFileSync(OUT, JSON.stringify(out, null, 2) + '\n')
console.log(JSON.stringify(out.counts, null, 2))
console.log(`wrote ${OUT}; ${stats.requests} requests, ${stats.cached} from cache, ${stats.failed.length} failed`)
