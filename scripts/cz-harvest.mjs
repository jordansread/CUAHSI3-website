#!/usr/bin/env node
// Critical Zone product harvest (epic ticket T6, CUAHSI/CUAHSI3-website#68).
//
// Gathers candidate Critical Zone products from the three routes in the 20 October 2026 footprint analysis and writes ONE
// proposal file. It does not write to content/: the output is for review, and T8/T11 decide what becomes content.
//   1. CZO archive   dataset pages (czo-archive.criticalzone.org/<site>/data/dataset/<id>/), listed in the T1 inventory CSV
//   2. Discover      https://contribute.criticalzone.org/api/discovery/search (the public JSON API behind discover.criticalzone.org)
//   3. Award search  DataCite and Crossref records whose funding names an NSF award that is in content/awards/awards.json
//                    and is a Critical Zone award (title or sentence mentions the Critical Zone, a CZO or a Network Cluster/Hub)
//   4. Archive publications (epic ticket T6b, CUAHSI/CUAHSI3-website#86; --only pubs)  the archive's publication detail pages,
//                    /<site>/publications/pub/<slug>/, read from the saved T1 crawl (no request to the archive). Jordan decided on
//                    29 October 2026 that every product type counts and that an archive link may stand in for a missing DOI.
//   5. PAR exports   (--par-dir <folder>) CSV or XML files a person exported from par.nsf.gov in a browser. The script never
//                    fetches PAR: its export returned a bot-check page to a script.
// Records are merged on the HydroShare resource id, or on the DOI when there is none; each record keeps one entry per
// source that named it (url, title, date retrieved).
//
// Usage:
//   node scripts/cz-harvest.mjs [--out agent/reports/<YYMMDD>_cz-harvest-proposal.json] [--cache .agent/harvest/cache]
//        [--archive-dir .agent/crawl,.agent/crawl2,.agent/crawl3] [--only archive,discover,datacite,crossref,pubs,par] [--par-dir <folder>]
//        [--delay 3000] [--date YYYY-MM-DD] [--refresh]
// Every network response is cached under --cache (named by a hash of the URL), so a second run makes no requests unless
// --refresh is given. --archive-dir lists folders laid out like scripts/legacy-crawl.mjs output (html/<sha1 of url, 12 chars>.html);
// an archive page found in none of them is fetched live. No dependencies.
//
// Politeness: --delay ms (default 3000) before every network request. Both legacy sites' robots.txt say `Crawl-delay: 3` and
// nothing else. DataCite and Crossref are public APIs; Crossref gets a mailto. HydroShare is never contacted: views and
// downloads (T2) are a later step and need landing pages at 5 s or more.
//
// Known blind spot: data outside the three routes is missed. The analysis found, for example, about 80 Boulder Creek datasets
// in eight repositories that carry no award number and are not in the CZO archive or Discover. The analysis's name search for
// Boulder Creek is not reproduced here. A dataset whose funding metadata omits the award number is invisible to route 3.

import fs from 'node:fs'
import path from 'node:path'
import crypto from 'node:crypto'

const args = process.argv.slice(2)
const opt = (name, dflt) => { const i = args.indexOf(`--${name}`); return i >= 0 ? args[i + 1] : dflt }
const flag = name => args.includes(`--${name}`)
const today = opt('date', new Date().toISOString().slice(0, 10))
const OUT = opt('out', `agent/reports/${today.slice(2).replaceAll('-', '')}_cz-harvest-proposal.json`)
const CACHE = opt('cache', '.agent/harvest/cache')
const ARCHIVE_DIRS = opt('archive-dir', '.agent/crawl,.agent/crawl2,.agent/crawl3').split(',').filter(Boolean)
const PAR_DIR = opt('par-dir', '')
const ONLY = new Set(opt('only', `archive,discover,datacite,crossref,pubs${PAR_DIR ? ',par' : ''}`).split(','))
const DELAY = Number(opt('delay', '3000'))
const UA = 'CUAHSI-website-harvest (help@cuahsi.org)'
const INVENTORY = 'agent/reports/261028_cz-legacy-inventory.csv'

const sleep = ms => new Promise(r => setTimeout(r, ms))
const sha = s => crypto.createHash('sha1').update(s).digest('hex')
const stats = { requests: 0, cached: 0 }

fs.mkdirSync(CACHE, { recursive: true })

// One network GET, cached by URL. Returns the body text, or null on a 404 (a gone archive page is a result, not a failure).
async function get(url) {
  const file = path.join(CACHE, sha(url).slice(0, 16))
  if (!flag('refresh') && fs.existsSync(file)) { stats.cached++; return fs.readFileSync(file, 'utf8') }
  await sleep(DELAY)
  stats.requests++
  let res
  for (let attempt = 1; ; attempt++) {   // retry 429 and 5xx with a growing wait; any other failure stops the run
    res = await fetch(url, { headers: { 'User-Agent': UA, Accept: '*/*' } })
    if (res.status === 404) return null
    if (res.ok) break
    if ((res.status === 429 || res.status >= 500) && attempt < 4) { await sleep(DELAY * attempt * 3); stats.requests++; continue }
    throw new Error(`${res.status} for ${url}`)
  }
  const text = await res.text()
  fs.writeFileSync(file, text)
  return text
}

const decode = s => s
  .replace(/&#(\d+);/g, (_, n) => String.fromCodePoint(Number(n)))
  .replace(/&#x([0-9a-f]+);/gi, (_, n) => String.fromCodePoint(parseInt(n, 16)))
  .replace(/&nbsp;/g, ' ').replace(/&amp;/g, '&').replace(/&quot;/g, '"').replace(/&lt;/g, '<').replace(/&gt;/g, '>')
  .replace(/&ndash;/g, '–').replace(/&mdash;/g, '—').replace(/&rsquo;/g, '’').replace(/&lsquo;/g, '‘')
const clean = s => decode(s.replace(/<[^>]+>/g, ' ')).replace(/\s+/g, ' ').trim()

const HS_ID = /\b([0-9a-f]{32})\b/
const hsFromDoi = doi => (doi.match(/^10\.4211\/hs\.([0-9a-f]{32})$/i) || [])[1]?.toLowerCase()

// ---- awards registry -------------------------------------------------------------------------------------------------
const registry = JSON.parse(fs.readFileSync('content/awards/awards.json', 'utf8'))
const czAwards = registry.filter(a => a.funder === 'NSF' && /critical zone|\bCZO\b|network (cluster|hub)/i.test(a.text))
const idByNumber = new Map()   // NSF number -> registry id of the plain `nsf-<number>` entry
for (const a of registry) if (a.id === `nsf-${a.number}`) idByNumber.set(a.number, a.id)
const unmatchedAwards = new Map()   // award numbers cited by a record that the registry lacks -> count

const SITE_BY_CLUSTER = {
  'CZO National': 'national', 'CZO Shale-Hills': 'shale-hills', 'CZO Catalina-Jemez': 'catalina-jemez', 'CZO Boulder': 'boulder',
  'CZO Calhoun': 'calhoun', 'CZO Christina': 'christina', 'CZO Eel': 'eel', 'CZO IML': 'iml', 'CZO Luquillo': 'luquillo',
  'CZO Reynolds': 'reynolds', 'CZO Sierra': 'sierra', 'Urban Cluster': 'urban', 'Dynamic Water Cluster': 'dynamic-water',
  'Drylands Cluster': 'drylands', 'Coastal Cluster': 'coastal', 'CINET Cluster': 'cinet', 'Dust^2 Cluster': 'dust2',
  'Big Data Cluster': 'bigdata', 'Bedrock Cluster': 'bedrock', 'GeoMicroBio Cluster': 'geomicrobiology', 'CZNet Hub': 'hub',
}
const CZO_SITES = new Set(['national', 'boulder', 'calhoun', 'catalina-jemez', 'christina', 'eel', 'iml', 'luquillo', 'reynolds', 'shale-hills', 'sierra'])

// ---- merge ------------------------------------------------------------------------------------------------------------
const records = new Map()   // key -> record
const keyOf = r => r.hydroshare_id ? `hs:${r.hydroshare_id}` : r.doi ? `doi:${r.doi.toLowerCase()}` : r.url ? `url:${r.url.replace(/\/+$/, '').toLowerCase()}` : null
let keyless = 0

function add(part, src) {
  // part: { title, type, doi, url, hydroshare_id, repository, year, sites, awardNumbers }; src: { source, source_url, title }
  if (part.doi) part.doi = part.doi.replace(/^https?:\/\/(dx\.)?doi\.org\//i, '').replace(/[\s.,;]+$/, '')
  if (!part.hydroshare_id && part.doi) part.hydroshare_id = hsFromDoi(part.doi)
  let key = keyOf(part)
  // A DOI-only record may belong to a HydroShare record already seen under its DOI: look up by DOI too.
  if (!key) { keyless++; return }
  let rec = records.get(key)
  if (!rec && part.doi) rec = records.get(`doi:${part.doi.toLowerCase()}`)
  if (!rec) {
    rec = { title: part.title, type: part.type, sources: [], sites: new Set(), awardNumbers: new Set() }
    records.set(key, rec)
  }
  if (part.hydroshare_id && !rec.hydroshare_id) { rec.hydroshare_id = part.hydroshare_id; records.set(`hs:${part.hydroshare_id}`, rec) }
  for (const f of ['doi', 'url', 'repository', 'year']) if (part[f] && !rec[f]) rec[f] = part[f]
  // Register every key the record is now known by, so a later part with only its DOI (or only its HydroShare id) finds it.
  if (rec.doi) records.set(`doi:${rec.doi.toLowerCase()}`, rec)
  if (rec.hydroshare_id) records.set(`hs:${rec.hydroshare_id}`, rec)
  if (src.source === 'discover' && part.title) rec.title = part.title   // the repository's own title wins over the archive's
  if (!rec.type) rec.type = part.type
  for (const s of part.sites || []) rec.sites.add(s)
  for (const n of part.awardNumbers || []) rec.awardNumbers.add(n)
  rec.sources.push({ ...src, retrieved: today })
}

// ---- route 1: CZO archive dataset pages ----------------------------------------------------------------------------
async function archivePage(url) {
  const name = sha(url).slice(0, 12) + '.html'
  for (const d of ARCHIVE_DIRS) {
    const p = path.join(d, 'html', name)
    if (fs.existsSync(p)) return { html: fs.readFileSync(p, 'utf8'), from: 'saved' }
  }
  return { html: await get(url), from: 'live' }
}

async function routeArchive() {
  const rows = fs.readFileSync(INVENTORY, 'utf8').split('\n').slice(1).filter(Boolean)
    .map(l => l.match(/^"([^"]*)"(?:,"([^"]*)")*/)).filter(Boolean)
    .map(m => m[1])
  const urls = rows.filter(u => /\/data\/dataset\/\d+\/?$/.test(u))
  const out = { pages: urls.length, parsed: 0, gone: 0, noResource: 0, fetchedLive: 0, savedPages: 0 }
  for (const url of urls) {
    const { html, from } = await archivePage(url)
    if (html === null) { out.gone++; continue }
    from === 'live' ? out.fetchedLive++ : out.savedPages++
    const title = clean((html.match(/<h2[^>]*class="titleh2"[^>]*>([\s\S]*?)<\/h2>/) || [])[1] || '')
    const afterTitle = html.slice(html.indexOf('</h2>')).replace(/<!--[\s\S]*?-->/g, '')
    const region = afterTitle.slice(0, Math.max(afterTitle.indexOf('data-use-policy'), 0) || afterTitle.length)
    const ids = [...new Set([...region.matchAll(/hydroshare\.org\/resource\/([0-9a-f]{32})/gi)].map(m => m[1].toLowerCase()))]
    const site = (url.match(/czo-archive\.criticalzone\.org\/([^/]+)\//) || [])[1]
    const sites = new Set(site && CZO_SITES.has(site) ? [site] : [])
    for (const m of region.matchAll(/href="\/([a-z-]+)\/data\/datasets\/"/g)) if (CZO_SITES.has(m[1])) sites.add(m[1])
    if (!ids.length || !title) { out.noResource++; continue }
    out.parsed++
    for (const id of ids) add({ title, type: 'dataset', hydroshare_id: id, url: `https://www.hydroshare.org/resource/${id}/`, repository: 'HydroShare', sites: [...sites] },
      { source: 'czo-archive', source_url: url, title })
  }
  return out
}

// ---- route 2: Discover index ----------------------------------------------------------------------------------------
async function routeDiscover() {
  const base = 'https://contribute.criticalzone.org/api/discovery/search?pageSize=100&pageNumber='
  const out = { total: 0, fetched: 0 }
  for (let n = 1; ; n++) {
    const text = await get(base + n)
    if (!text) break
    const page = JSON.parse(text)
    out.total = page.meta?.count?.total ?? out.total
    for (const r of page.docs || []) {
      out.fetched++
      const url = r.url || ''
      const doi = (url.match(/^https?:\/\/(?:dx\.)?doi\.org\/(10\..+)$/i) || [])[1]
      const provider = r.provider?.name || r.provider
      let hs = (url.match(/hydroshare\.org\/resource\/([0-9a-f]{32})/i) || [])[1]
      if (!hs && provider === 'HydroShare' && HS_ID.test(r.repository_identifier || '')) hs = r.repository_identifier
      const nums = new Set()
      for (const f of r.funding || []) for (const m of String(f.identifier ?? '').matchAll(/\b(\d{7})\b/g)) nums.add(m[1])
      const sites = (r.clusters || []).map(c => SITE_BY_CLUSTER[c]).filter(Boolean)
      add({ title: clean(r.name || ''), type: 'dataset', doi, url: hs ? `https://www.hydroshare.org/resource/${hs.toLowerCase()}/` : url,
        hydroshare_id: hs?.toLowerCase(), repository: provider, year: r.datePublished ? Number(r.datePublished.slice(0, 4)) : undefined,
        sites, awardNumbers: [...nums] },
      { source: 'discover', source_url: url, title: clean(r.name || '') })
    }
    if (out.fetched >= out.total || !(page.docs || []).length) break
  }
  return out
}

// ---- route 3: award-number search ----------------------------------------------------------------------------------------
// A heuristic: NSF award numbers are 7 digits and other funders reuse them (a US-Israel BSF grant 2012340 matched an NSF number in the
// first test). A funder counts as NSF only when its name STARTS with NSF or "[United States | U.S.] National Science Foundation" (so
// "Binational Science Foundation", "Swiss National Science Foundation" and "National Science Foundation of Sri Lanka" do not pass), or is one of NSF's divisions by name, or has an
// NSF funder DOI; the CZO's own names and the bare division code "EAR" (seen in Crossref) are accepted as aliases. The award string must
// contain the number as a whole number, not as part of a longer one.
const NSF_FUNDER = /^\s*(the\s+)?((u\.?s\.?a?\.?|united states( of america)?)\s+)?(nsf\b|national science foundation(?!\s+of\b))|^\s*(division of (earth|environmental|ocean|atmospheric)|directorate for (geosciences|biological|engineering))|10\.13039\/1000000(01|8\d)/i
const NSF_ALIAS = /\bCZO\b|critical zone|^EAR$/i
const hasNumber = (award, n) => new RegExp(`(?<!\\d)${n}(?!\\d)`).test(String(award ?? ''))
const isNsf = f => {
  const name = String(f.funderName || f.name || '').trim()
  return NSF_FUNDER.test(`${name} ${f.funderIdentifier || f.DOI || ''}`) || NSF_ALIAS.test(name)
}


async function routeDatacite() {
  const out = { awards: czAwards.length, records: 0 }
  for (const a of czAwards) {
    let url = `https://api.datacite.org/dois?query=${encodeURIComponent(`fundingReferences.awardNumber:"${a.number}"`)}&page%5Bsize%5D=100`
    while (url) {
      const body = await get(url)
      if (body === null) break   // an unknown query is empty, not a failure
      const j = JSON.parse(body)
      for (const d of j.data || []) {
        const at = d.attributes
        const refs = (at.fundingReferences || []).filter(f => hasNumber(f.awardNumber, a.number) && isNsf(f))
        if (!refs.length) continue
        out.records++
        const g = at.types?.resourceTypeGeneral
        const type = g === 'Dataset' ? 'dataset' : g === 'Software' ? 'software' : g === 'Model' ? 'model' : 'paper'
        const title = clean((at.titles?.[0]?.title) || '')
        add({ title, type, doi: at.doi, url: at.url || `https://doi.org/${at.doi}`, repository: at.publisher?.name || at.publisher,
          year: at.publicationYear || undefined, awardNumbers: [a.number] },
        { source: 'datacite', source_url: `https://doi.org/${at.doi}`, title, resource_type: g || null })
      }
      url = j.links?.next || null
    }
  }
  return out
}

async function routeCrossref() {
  const out = { awards: czAwards.length, records: 0 }
  for (const a of czAwards) {
    let cursor = '*'
    while (cursor) {
      const url = `https://api.crossref.org/works?filter=award.number:${a.number}&rows=100&cursor=${encodeURIComponent(cursor)}&mailto=help@cuahsi.org`
      const body = await get(url)
      if (body === null) break
      const m = JSON.parse(body).message
      for (const it of m.items || []) {
        const fs_ = (it.funder || []).filter(f => (f.award || []).some(x => hasNumber(x, a.number)) && isNsf(f))
        if (!fs_.length) continue
        out.records++
        const title = clean((it.title || [])[0] || '')
        if (!title) continue
        const year = it.issued?.['date-parts']?.[0]?.[0]
        add({ title, type: it.type === 'dataset' ? 'dataset' : 'paper', doi: it.DOI, url: it.URL, repository: it.publisher, year, awardNumbers: [a.number] },
          { source: 'crossref', source_url: `https://doi.org/${it.DOI}`, title, resource_type: it.type || null })
      }
      cursor = (m.items || []).length === 100 ? m['next-cursor'] : null
    }
  }
  return out
}


// ---- route 4: archive publication pages (T6b) ---------------------------------------------------------------------------
// Detail pages: /<site>/publications/pub/<slug>/. Layout (read from saved pages): a link to the section (paper-book, talk-poster,
// dissertation-thesis, undergrad-thesis, report-proposal), <h4> title, <h5> "authors (year)", <h5 italic> venue, a sidebar "See Full
// Text" link (a DOI address or the publisher's page) and an <h6> list of every observatory that lists the publication.
const PUB_TYPES = { 'paper-book': 'paper/book', 'talk-poster': 'talk/poster', 'dissertation-thesis': 'dissertation/thesis', 'undergrad-thesis': 'undergraduate thesis', 'report-proposal': 'report/proposal' }
const normTitle = t => t.toLowerCase().normalize('NFKD').replace(/[̀-ͯ]/g, '').replace(/[^a-z0-9]+/g, ' ').trim()
const doiIn = s => {
  const m = String(s || '').replace(/[?#].*$/, '').replace(/\/(abstract|full|pdf|epdf|summary)\/?$/i, '').match(/10\.\d{4,9}\/[^\s"'<>]*[^\s"'<>.,;)\]]/)
  if (!m) return undefined
  try { return decodeURIComponent(m[0]).replace(/&amp;/g, '&') } catch { return m[0].replace(/&amp;/g, '&') }
}

function parsePub(html, url) {
  const a = html.indexOf('<!-- TITLE, AUTHORS'), b = html.indexOf('<!-- REPRESENTATIVE IMAGE')
  if (a < 0 || b < a) return null
  const block = html.slice(a, b)
  const typeSlug = (block.match(/href="\/[a-z-]+\/publications\/([a-z-]+)\/"/) || [])[1] || 'untyped'   // a few pages have no section link
  const title = clean((block.match(/<h4[^>]*>([\s\S]*?)<\/h4>/) || [])[1] || '')
  const h5 = [...block.matchAll(/<h5[^>]*>([\s\S]*?)<\/h5>/g)].map(m => clean(m[1]))
  const authors = h5[0] || ''
  const year = Number((authors.match(/\((\d{4})\)\s*$/) || [])[1]) || undefined
  const venue = (h5[1] || '').replace(/\b(National|Cross-CZO|Boulder|Calhoun|Catalina-Jemez|Christina|Eel|IML|Luquillo|Reynolds|Shale-Hills|Sierra)\b\s*$/, '').trim()
  let full = (block.match(/<a href="([^"]+)"[^>]*>\s*See Full Text/) || [])[1]
  if (full && /^https?:\/\/(dx\.)?doi\.org\//i.test(full)) full = full.replace(/\s+|%20/g, '')   // a stray space inside a DOI address (seen on the archive)
  const doi = doiIn(full) ?? doiIn(html.slice(html.indexOf('<!-- REPRESENTATIVE IMAGE')).match(/DOI:\s*<?[^>]*>?\s*10\.[^<\s]+/)?.[0])
  const siteOf = (url.match(/czo-archive\.criticalzone\.org\/([^/]+)\//) || [])[1]
  const sites = new Set(siteOf && CZO_SITES.has(siteOf) ? [siteOf] : [])
  for (const m of block.matchAll(/<h6[\s\S]*?<\/h6>/g)) for (const l of m[0].matchAll(/href="\/([a-z-]+)\/publications\/"/g)) if (CZO_SITES.has(l[1])) sites.add(l[1])
  return { typeSlug, title, authors, year, venue, fullText: full && /^https?:/i.test(full) ? full : undefined, doi, sites: [...sites] }
}

// HTTP status of an address (decision of 29 Oct 2026: an archive link may stand in for a missing DOI if it does not 404). Cached.
async function linkStatus(url) {
  const file = path.join(CACHE, 'status-' + sha(url).slice(0, 16))
  if (!flag('refresh') && fs.existsSync(file)) { stats.cached++; return fs.readFileSync(file, 'utf8') }
  await sleep(DELAY); stats.requests++
  let st
  try { st = String((await fetch(url, { headers: { 'User-Agent': UA }, signal: AbortSignal.timeout(20000) })).status) } catch (e) { return 'error' }   // not cached: try again next run
  fs.writeFileSync(file, st)
  return st
}

async function routePubs() {
  const rows = fs.readFileSync(INVENTORY, 'utf8').split('\n').slice(1).filter(Boolean).map(l => {
    const f = [...l.matchAll(/"([^"]*)"/g)].map(m => m[1]); return { url: f[0], status: f[6] }
  }).filter(r => /\/publications\/pub\/[^/]+\/?$/.test(r.url))
  const out = { pages: rows.length, parsed: 0, gone_404: 0, not_parseable: [], with_doi: 0, with_external_link_no_doi: 0, archive_link_only: 0,
    by_type: {}, by_site_page_count: {}, external_links_checked: 0, external_links_not_ok: [], distinct_publications: 0, distinct_with_doi: 0, distinct_by_type: {}, distinct_by_site: {}, merged_across_sites: 0 }
  const pages = []
  for (const r of rows) {
    if (r.status === '404') { out.gone_404++; continue }
    const { html } = await archivePage(r.url)
    if (html === null) { out.gone_404++; continue }
    const p = parsePub(html, r.url)
    if (!p || !p.title) { out.not_parseable.push(r.url); continue }
    out.parsed++
    p.pageUrl = r.url
    if (p.doi) out.with_doi++; else if (p.fullText) out.with_external_link_no_doi++; else out.archive_link_only++
    out.by_type[p.typeSlug] = (out.by_type[p.typeSlug] || 0) + 1
    const site = (r.url.match(/criticalzone\.org\/([^/]+)\//) || [])[1]
    out.by_site_page_count[site] = (out.by_site_page_count[site] || 0) + 1
    pages.push(p)
  }
  // Group the same publication listed under several observatories: by DOI, else by normalised title + year + type.
  // A page without a DOI joins a DOI group when title, year and type match.
  const groups = new Map(), byTitle = new Map()
  const tkey = p => `${normTitle(p.title)}|${p.year ?? ''}|${p.typeSlug}`   // a talk and a paper with one title are two works
  for (const p of pages.filter(p => p.doi)) {
    const k = `doi:${p.doi.toLowerCase()}`
    if (!groups.has(k)) { groups.set(k, []); byTitle.set(tkey(p), k) }
    groups.get(k).push(p)
  }
  for (const p of pages.filter(p => !p.doi)) {
    const k = byTitle.get(tkey(p)) ?? `t:${tkey(p)}`
    if (!groups.has(k)) { groups.set(k, []); byTitle.set(tkey(p), byTitle.get(tkey(p)) ?? k) }
    groups.get(k).push(p)
  }
  for (const g of groups.values()) {
    const sites = [...new Set(g.flatMap(p => p.sites))]
    const doi = g.find(p => p.doi)?.doi
    const fullText = g.find(p => p.fullText)?.fullText
    const first = [...g].sort((a, b) => a.pageUrl.localeCompare(b.pageUrl))[0]
    let url = doi ? `https://doi.org/${doi}` : fullText || first.pageUrl
    if (!doi && fullText) {   // no DOI: the publisher's address must answer, or the archive page stands in
      out.external_links_checked++
      const st = await linkStatus(fullText)
      if (['404', '410', '400', 'error'].includes(st)) {   // anything that is not a 404 passes, as Jordan decided; a 400 is a malformed address and 'error' is no answer
         out.external_links_not_ok.push({ url: fullText, status: st }); url = first.pageUrl }
    }
    if (g.length > 1 && new Set(g.map(p => p.pageUrl)).size > 1) out.merged_across_sites++
    out.distinct_publications++
    if (doi) out.distinct_with_doi++
    out.distinct_by_type[first.typeSlug] = (out.distinct_by_type[first.typeSlug] || 0) + 1
    for (const s of sites) out.distinct_by_site[s] = (out.distinct_by_site[s] || 0) + 1
    for (const p of g) add({ title: p.title, type: 'paper', doi, url, repository: p.venue || undefined, year: p.year, sites },
      { source: 'czo-archive', source_url: p.pageUrl, title: p.title, resource_type: PUB_TYPES[p.typeSlug] || p.typeSlug, authors: p.authors, ...(p.fullText ? { full_text_url: p.fullText } : {}) })
  }
  return out
}

// ---- route 5: PAR exports (T6b) -----------------------------------------------------------------------------------------
// Reads every .csv and .xml file in --par-dir. The CSV layout was checked against one real export (award 2012893, 29 Oct 2026): columns TITLE,
// DOI, PUBLICATION_DATE, JOURNAL_NAME, AWARD_IDS, PRODUCT TYPE ('_' is read as a space). XML has not been seen. Columns are found by name from the
// lists below, and a file with no title column is reported, not guessed at. Types seen in a real file: Journal Article, Posted Content; the
// others in PAR_KIND come from the type filter on a saved PAR search page and have not been seen in data.
const PAR_COLS = {
  title: ['title', 'document title', 'article title', 'name'],
  doi: ['doi', 'doi number', 'digital object identifier', 'identifier doi'],
  url: ['par url', 'url', 'link', 'biblio url'],
  year: ['publication date', 'date', 'year', 'publication year', 'pub date'],
  kind: ['resource type', 'type', 'document type', 'product type', 'publication type'],
  venue: ['journal name', 'journal', 'publisher', 'repository', 'source'],
  awards: ['award number', 'award numbers', 'award id', 'award ids', 'nsf award', 'grant'],
}
const PAR_KIND = { 'journal article': 'paper', 'posted content': 'paper', 'conference proceeding': 'paper', 'data paper': 'paper', 'workshop report': 'paper', 'conference paper': 'paper', 'book chapter': 'paper', book: 'paper', dissertation: 'paper', thesis: 'paper', report: 'paper', article: 'paper',
  dataset: 'dataset', 'data set': 'dataset', software: 'software', model: 'model' }
function csvRows(text) {   // RFC 4180: quoted fields, doubled quotes, newlines inside quotes
  const rows = []; let row = [], f = '', q = false
  for (let i = 0; i < text.length; i++) {
    const c = text[i]
    if (q) { if (c === '"') { if (text[i + 1] === '"') { f += '"'; i++ } else q = false } else f += c }
    else if (c === '"') q = true
    else if (c === ',') { row.push(f); f = '' }
    else if (c === '\n' || c === '\r') { if (c === '\r' && text[i + 1] === '\n') i++; row.push(f); f = ''; if (row.some(x => x !== '')) rows.push(row); row = [] }
    else f += c
  }
  if (f !== '' || row.length) { row.push(f); if (row.some(x => x !== '')) rows.push(row) }
  return rows
}
function xmlRows(text) {   // one record per <record>, <row>, <document>, <item> or <entry> element; children become columns
  const rows = []
  for (const m of text.matchAll(/<(record|row|document|item|entry)\b[^>]*>([\s\S]*?)<\/\1>/gi)) {
    const o = {}
    for (const c of m[2].matchAll(/<(?:[\w.-]+:)?([A-Za-z_][\w.-]*)\b[^>]*>([\s\S]*?)<\/(?:[\w.-]+:)?\1>/g)) { const k = c[1].toLowerCase().replace(/_/g, ' '); if (!(k in o)) o[k] = clean(c[2].replace(/<!\[CDATA\[([\s\S]*?)\]\]>/g, (_, t) => t.replace(/[<>&]/g, ' '))) }   // first of a repeated element wins
    if (Object.keys(o).length) rows.push(o)
  }
  return rows
}
function routePar() {
  if (!PAR_DIR) throw new Error('--only par needs --par-dir <folder>')
  const out = { folder: PAR_DIR, files: 0, rows: 0, records: 0, skipped_no_title: 0, skipped_no_key: 0, unrecognised_kinds: {}, files_with_no_title_column: [] }
  for (const name of fs.readdirSync(PAR_DIR).sort()) {
    if (!/\.(csv|xml)$/i.test(name)) continue
    out.files++
    const text = fs.readFileSync(path.join(PAR_DIR, name), 'utf8')
    let rows
    if (/\.xml$/i.test(name)) rows = xmlRows(text)
    else { const [head = [], ...body] = csvRows(text); const h = head.map(x => x.trim().toLowerCase().replace(/_/g, ' '))   // PAR writes PUBLICATION_DATE, AWARD_IDS
      rows = body.map(r => Object.fromEntries(h.map((k, i) => [k, r[i] ?? '']))) }
    const col = (row, k) => { for (const n of PAR_COLS[k]) if (row[n] != null && String(row[n]).trim() !== '') return String(row[n]).trim() }
    if (!rows.length || !rows.some(r => col(r, 'title'))) { out.files_with_no_title_column.push(name); continue }
    const award = (name.match(/(?<!\d)(\d{7})(?!\d)/) || [])[1]   // assumption: one export per award, the file name carries its number; every row is attributed to it
    for (const row of rows) {
      out.rows++
      const title = clean(col(row, 'title') || '')
      if (!title) { out.skipped_no_title++; continue }
      const kindRaw = (col(row, 'kind') || '').toLowerCase()   // '' when the file has no type column: recorded as a paper, resource_type left out
      const type = !kindRaw ? 'paper' : PAR_KIND[kindRaw] || (out.unrecognised_kinds[kindRaw] = (out.unrecognised_kinds[kindRaw] || 0) + 1, 'paper')
      const doi = doiIn(col(row, 'doi'))
      const url = col(row, 'url')
      const nums = new Set([...(col(row, 'awards') || '').matchAll(/(?<!\d)(\d{7})(?!\d)/g)].map(m => m[1])); if (award) nums.add(award)
      const year = Number((col(row, 'year') || '').match(/(19|20)\d{2}/)?.[0]) || undefined
      if (!doi && !(url && /^https?:/i.test(url))) { out.skipped_no_key++; continue }
      out.records++
      add({ title, type, doi, url: !doi && url && /^https?:/i.test(url) ? url : undefined,   // with a DOI the product address is the DOI; the PAR page stays in source_url
         repository: col(row, 'venue'), year, awardNumbers: [...nums] },
        { source: 'par', source_url: url && /^https?:/i.test(url) ? url : `https://doi.org/${doi}`, title, ...(kindRaw ? { resource_type: kindRaw } : {}), par_file: name })
    }
  }
  return out
}

// ---- run -------------------------------------------------------------------------------------------------------------
const routes = {}
if (ONLY.has('archive')) routes.archive = await routeArchive()
if (ONLY.has('discover')) routes.discover = await routeDiscover()
if (ONLY.has('datacite')) routes.datacite = await routeDatacite()
if (ONLY.has('crossref')) routes.crossref = await routeCrossref()
if (ONLY.has('pubs')) routes.pubs = await routePubs()
if (ONLY.has('par')) routes.par = routePar()

// One record can sit under two keys (hs: and doi:); write each once.
const unique = [...new Set(records.values())]
const SOURCE_ORDER = ['czo-archive', 'discover', 'datacite', 'crossref', 'par']
const proposal = unique.map(r => {
  const sources = r.sources
  const primary = SOURCE_ORDER.find(s => sources.some(x => x.source === s))
  const sites = [...r.sites].sort()
  const awardIds = [], unmatched = []
  for (const n of [...r.awardNumbers].sort()) { const id = idByNumber.get(n); id ? awardIds.push(id) : unmatched.push(n) }
  for (const n of unmatched) unmatchedAwards.set(n, (unmatchedAwards.get(n) || 0) + 1)
  const czo = sites.some(s => CZO_SITES.has(s)), cznet = sites.some(s => !CZO_SITES.has(s))
  const out = { title: r.title, type: r.type }
  if (r.doi) out.doi = r.doi
  out.url = r.url || (r.hydroshare_id ? `https://www.hydroshare.org/resource/${r.hydroshare_id}/` : `https://doi.org/${r.doi}`)
  if (r.hydroshare_id) out.hydroshare_id = r.hydroshare_id
  if (r.repository) out.repository = r.repository
  if (awardIds.length) out.awards = awardIds
  if (sites.length) out.sites = sites
  if (czo !== cznet) out.era = czo ? 'czo' : 'cznet'
  if (r.year) out.year = r.year
  out.source = primary
  out.source_url = sources.find(x => x.source === primary).source_url
  out.date_added = today
  if (unmatched.length) out.award_numbers_not_in_registry = unmatched
  out.provenance = sources
  return out
}).sort((a, b) => a.title.localeCompare(b.title) || (a.doi || '').localeCompare(b.doi || ''))

const inHs = proposal.filter(p => p.hydroshare_id).length
const dsCount = proposal.filter(p => p.type === 'dataset').length
const dsHs = proposal.filter(p => p.type === 'dataset' && p.hydroshare_id).length
const srcSet = p => new Set(p.provenance.map(x => x.source))
const both = proposal.filter(p => p.hydroshare_id && srcSet(p).has('czo-archive') && srcSet(p).has('discover')).length
const bySource = {}
for (const p of proposal) for (const s of new Set(p.provenance.map(x => x.source))) bySource[s] = (bySource[s] || 0) + 1
const hsBy = s => proposal.filter(p => p.hydroshare_id && p.provenance.some(x => x.source === s)).length

const result = {
  generated: today,
  script: 'scripts/cz-harvest.mjs',
  note: 'A proposal for review. Not content: nothing here is in content/. Each record keeps one provenance entry per source that named it.',
  options: { only: [...ONLY], delay_ms: DELAY, archive_dirs: ARCHIVE_DIRS },
  requests: stats,
  routes,
  counts: {
    records: proposal.length,
    with_hydroshare_id: inHs,
    share_of_all_records_in_hydroshare: Number((inHs / proposal.length).toFixed(3)),
    datasets: dsCount,
    datasets_with_hydroshare_id: dsHs,
    share_of_datasets_in_hydroshare: Number((dsHs / dsCount).toFixed(3)),
    hydroshare_resources_in_archive_and_discover: both,
    records_by_type: Object.fromEntries(['dataset', 'paper', 'software', 'model'].map(t => [t, proposal.filter(p => p.type === t).length])),
    records_naming_each_source: bySource,
    hydroshare_resources_from_archive: hsBy('czo-archive'),
    hydroshare_resources_from_discover: hsBy('discover'),
    records_without_a_dedupe_key_skipped: keyless,
    award_numbers_cited_but_not_in_registry: Object.fromEntries([...unmatchedAwards].sort()),
  },
  records: proposal,
}
fs.mkdirSync(path.dirname(OUT), { recursive: true })
fs.writeFileSync(OUT, JSON.stringify(result, null, 1) + '\n')
console.log(JSON.stringify({ out: OUT, requests: stats, routes, counts: { ...result.counts, award_numbers_cited_but_not_in_registry: unmatchedAwards.size } }, null, 1))
