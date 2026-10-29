#!/usr/bin/env node
// Polite inventory crawl of the legacy Critical Zone sites (Critical Zone epic, ticket T1; re-run in T16).
// Read-only: GETs HTML and records what it finds. It honours the sites' `Crawl-delay: 3`.
// It fetches every listing and section page, but for "detail" pages (a publication, person, story, event or
// news item) it fetches only a few per type as samples and records the rest as discovered-but-not-fetched,
// so counts of detail pages are counts of links found on listing pages, not of pages visited.
//
//   node scripts/legacy-crawl.mjs [--out .agent/crawl] [--delay 3000] [--samples 4] [--max 2500] [--all-types archive-dataset,...] [--seeds-file f] [--skip-fetched pages.csv]
// --all-types names detail types to fetch in full instead of sampling (T1 found dataset pages were unclassified and ate the cap).
//
// Output (in --out): pages.csv (one row per URL), external.csv (outbound link hosts), html/ (fetched pages).
import { mkdirSync, writeFileSync, readFileSync } from 'node:fs'
import { createHash } from 'node:crypto'
import { join } from 'node:path'

const arg = (k, d) => { const i = process.argv.indexOf(`--${k}`); return i > -1 ? process.argv[i + 1] : d }
const OUT = arg('out', '.agent/crawl')
const DELAY = Number(arg('delay', 3000))
const SAMPLES = Number(arg('samples', 4))
const MAX = Number(arg('max', 2500))
const ALL = new Set((arg('all-types', '') || '').split(',').filter(Boolean))
const SEEDS = ['https://czo-archive.criticalzone.org/', 'https://criticalzone.org/']
// --seeds-file: one URL per line, replaces the default seeds. --skip-fetched: a pages.csv from an earlier run; URLs it
// fetched are not fetched again (they are still not re-queued). Together they make a targeted second pass.
const SEEDS_FILE = arg('seeds-file', '')
const SKIP = new Set()
if (arg('skip-fetched', '')) for (const l of readFileSync(arg('skip-fetched'), 'utf8').split('\n').slice(1)) { const m = l.match(/^"([^"]*)",(?:"[^"]*",){4}"true"/); if (m) SKIP.add(m[1]) }
const HOSTS = new Set(SEEDS.map(s => new URL(s).host))
const UA = 'CUAHSI-legacy-inventory/1.0 (site migration inventory; contact help@cuahsi.org)'
const FILE_EXT = /\.(pdf|docx?|xlsx?|pptx?|zip|csv|png|jpe?g|gif|svg|ico|webp|mp4|mov|css|js|json|xml|txt|webmanifest)(\?|$)/i

mkdirSync(join(OUT, 'html'), { recursive: true })

function norm(u) {
  const x = new URL(u)
  x.hash = ''
  if (x.pathname.length > 1 && !FILE_EXT.test(x.pathname) && !x.pathname.endsWith('/') && x.host === 'czo-archive.criticalzone.org') x.pathname += '/'
  return x.href
}

// kind: 'detail' (sampled), 'file' (not fetched), 'list' (fetched)
function classify(u) {
  const x = new URL(u)
  const p = x.pathname
  if (FILE_EXT.test(p)) return { kind: 'file', type: 'file' }
  const seg = p.split('/').filter(Boolean)
  if (x.host === 'czo-archive.criticalzone.org') {
    const m = seg.indexOf('pub'); if (m > -1 && seg[m - 1] === 'publications') return { kind: 'detail', type: 'archive-publication' }
    if (seg.includes('person')) return { kind: 'detail', type: 'archive-person' }
    if (seg.includes('story')) return { kind: 'detail', type: 'archive-news-story' }
    if (seg.includes('event') && seg[seg.indexOf('event') - 1] === 'events') return { kind: 'detail', type: 'archive-event' }
    const d = seg.indexOf('dataset'); if (d > -1 && seg[d - 1] === 'data' && /^\d+$/.test(seg[d + 1] || '')) return { kind: 'detail', type: 'archive-dataset' }
    if (seg.includes('post')) return { kind: 'detail', type: 'archive-blog-post' }
    return { kind: 'list', type: 'archive-page' }
  }
  // criticalzone.org: /news-events/<slug> and /<cluster>/news-events/<slug> are detail pages unless they are listings
  const ne = seg.indexOf('news-events')
  if (ne > -1 && seg[ne + 1] && !/^(all-news|all-events)$/.test(seg[ne + 1]) && seg.length === ne + 2) return { kind: 'detail', type: 'cznet-news-or-event' }
  return { kind: 'list', type: 'cznet-page' }
}

function section(u) {
  const x = new URL(u); const seg = x.pathname.split('/').filter(Boolean)
  return `${x.host === 'czo-archive.criticalzone.org' ? 'archive' : 'cznet'}:${seg.slice(0, 2).join('/') || '(home)'}`
}

const sleep = ms => new Promise(r => setTimeout(r, ms))
const rows = new Map()  // url -> row
const queue = [...new Set((SEEDS_FILE ? readFileSync(SEEDS_FILE, 'utf8').split('\n').map(x => x.trim()).filter(Boolean) : SEEDS).map(norm))]
const sampled = {}
const ext = new Map()
let fetched = 0
const rowsFile = join(OUT, 'pages.csv')

for (const s of queue) rows.set(s, { url: s, from: '(seed)', ...classify(s), status: '', title: '', fetched: false, hasDoi: '', bytes: '' })

while (queue.length && fetched < MAX) {
  const u = queue.shift()
  const row = rows.get(u)
  if (row.kind === 'file' || SKIP.has(u)) continue
  if (row.kind === 'detail') {
    sampled[row.type] = (sampled[row.type] || 0) + 1
    if (sampled[row.type] > SAMPLES && !ALL.has(row.type)) continue
  }
  await sleep(DELAY)
  let html = '', status = 0
  try {
    const r = await fetch(u, { headers: { 'user-agent': UA }, redirect: 'follow' })
    status = r.status
    const ct = r.headers.get('content-type') || ''
    html = ct.includes('html') ? await r.text() : ''
  } catch (e) { status = 'ERR ' + (e.cause?.code || e.message) }
  fetched++
  row.status = status; row.fetched = true; row.bytes = html.length
  row.title = (html.match(/<title[^>]*>([^<]*)<\/title>/i)?.[1] || '').replace(/\s+/g, ' ').trim()
  row.hasDoi = /10\.\d{4,9}\/[^\s"'<>]+/.test(html) ? 'yes' : 'no'
  if (html) writeFileSync(join(OUT, 'html', createHash('sha1').update(u).digest('hex').slice(0, 12) + '.html'), `<!-- ${u} -->\n` + html)
  for (const m of html.matchAll(/href="([^"#]+)"/g)) {
    let t
    try { t = new URL(m[1].replace(/&amp;/g, '&'), u) } catch { continue }
    if (!/^https?:$/.test(t.protocol)) continue
    if (!HOSTS.has(t.host)) { ext.set(t.host, (ext.get(t.host) || 0) + 1); continue }
    const n = norm(t.href)
    if (!rows.has(n) && !SKIP.has(n)) { rows.set(n, { url: n, from: u, ...classify(n), status: '', title: '', fetched: false, hasDoi: '', bytes: '' }); queue.push(n) }
  }
  if (fetched % 25 === 0) console.error(`fetched ${fetched}, queued ${queue.length}, known ${rows.size}`)
}

const q = v => `"${String(v).replace(/"/g, '""')}"`
const head = 'url,site,section,kind,type,fetched,status,hasDoi,bytes,title,discovered_from'
writeFileSync(rowsFile, head + '\n' + [...rows.values()].map(r => [r.url, new URL(r.url).host, section(r.url), r.kind, r.type, r.fetched, r.status, r.hasDoi, r.bytes, q(r.title), r.from].map(v => typeof v === 'string' && v.startsWith('"') ? v : q(v)).join(',')).join('\n') + '\n')
writeFileSync(join(OUT, 'external.csv'), 'host,links\n' + [...ext.entries()].sort((a, b) => b[1] - a[1]).map(([h, n]) => `${h},${n}`).join('\n') + '\n')
console.error(`done: fetched ${fetched}, known ${rows.size}, unfetched queue ${queue.length}`)
