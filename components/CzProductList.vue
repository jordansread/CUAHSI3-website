<script setup lang="ts">
// The Critical Zone products list (content/critical-zone/products.json) as long, anchored, script-free tables,
// grouped era, then award, then observatory or cluster (epic ticket T8, decision 4). Epic CUAHSI/CUAHSI3-website#62, ticket T9a.
//
// Grouping: a product is listed once, under its first award (`awards[0]`). Products with no award recorded are grouped by
// their primary site instead (see czPrimarySite), because most of the list names no award. Each group is its own <table>
// labelled by its heading, so a reader with a screen reader can move between groups and the page works with no client script.
//
// The data comes from a bare JSON array, which Nuxt Content wraps in `body` (footgun 7). `transform` keeps only the fields
// this component shows, so the page payload does not carry whole records.
const props = defineProps<{
  type?: 'dataset' | 'paper'   // only products of this type; all when left out
  site?: string                // only products tagged with this site slug; all when left out
}>()

type Row = {
  title: string; type: string; doi?: string; url?: string; repository?: string; awards?: string[]
  sites?: string[]; era?: string; year?: number; date_added?: string
}
type Award = { id: string; funder?: string; number: string; url?: string; text: string }

const { data: file } = await useAsyncData(`cz-products-${props.type ?? 'all'}-${props.site ?? 'all'}`, () =>
  queryContent('critical-zone').where({ _extension: 'json' }).findOne().catch(() => null),
  {
    transform: (f: any) => {
      const all: Row[] = f?._path === '/critical-zone/products' && Array.isArray(f?.body) ? f.body : []
      const rows = all
        .filter(r => (!props.type || r.type === props.type) && (!props.site || (r.sites ?? []).includes(props.site)))
        .map(r => ({ title: r.title, type: r.type, doi: r.doi, url: r.url, repository: r.repository, awards: r.awards, sites: r.sites, era: r.era, year: r.year }))
      const added = all.map(r => r.date_added).filter(Boolean).sort() as string[]
      return { rows, asOf: added.length ? added[added.length - 1] : null }
    },
  }
)
const { data: awardFile } = await useAsyncData('cz-award-registry', () =>
  queryContent('awards').where({ _extension: 'json' }).findOne().catch(() => null),
  { transform: (f: any) => (f?._path === '/awards/awards' && Array.isArray(f?.body) ? f.body : []) as Award[] }
)

const rows = computed<Row[]>(() => file.value?.rows ?? [])
const asOf = computed(() => file.value?.asOf
  ? new Date(file.value.asOf).toLocaleDateString('en-US', { day: 'numeric', month: 'long', year: 'numeric', timeZone: 'UTC' })
  : null)
const awardById = computed(() => new Map((awardFile.value ?? []).map(a => [a.id, a])))
const awardTitle = (a?: Award) => a?.text?.match(/"([^"]+)"/)?.[1] ?? ''

type Group = { id: string; label: string; sub?: string; href?: string; rows: Row[] }
type Era = { id: string; label: string; groups: Group[]; count: number }

const siteName = (slug: string) => CZ_SITE_NAMES[slug] ?? slug
// Plain comparisons, not localeCompare: the build (Node) and the visitor's browser may order accented titles differently, and a
// different order on the first browser render puts the wrong content in each row (see footgun 13 for the same kind of fault).
const cmp = (a: string, b: string) => (a < b ? -1 : a > b ? 1 : 0)
const byTitle = (a: Row, b: Row) => (b.year ?? 0) - (a.year ?? 0) || cmp(a.title, b.title)

const eras = computed<Era[]>(() => {
  const out: Era[] = []
  for (const eraKey of ['czo', 'cznet', 'none']) {
    const inEra = rows.value.filter(r => (r.era ?? 'none') === eraKey)
    if (!inEra.length) continue
    const groups = new Map<string, Group>()
    for (const r of inEra) {
      const first = r.awards?.[0]
      const award = first ? awardById.value.get(first) : undefined
      let g: Group
      if (first) {
        const id = `${eraKey}-${first}`
        g = groups.get(id) ?? { id, label: `${award?.funder ?? 'Award'} award ${award?.number ?? first}`, sub: awardTitle(award), href: award?.url, rows: [] }
        groups.set(id, g)
      } else {
        const site = czPrimarySite(r.sites)
        const id = `${eraKey}-site-${site}`
        g = groups.get(id) ?? { id, label: site === 'none' ? 'No award or site recorded' : `${siteName(site)}: no award recorded`, rows: [] }
        groups.set(id, g)
      }
      g.rows.push(r)
    }
    // Groups with an award first, then the rest by site name.
    const list = [...groups.values()].sort((a, b) => Number(!!b.href) - Number(!!a.href) || cmp(a.label, b.label))
    list.forEach(g => g.rows.sort(byTitle))
    out.push({ id: `era-${eraKey}`, label: CZ_ERA_NAMES[eraKey], groups: list, count: inEra.length })
  }
  return out
})

const nf = (n: number) => n.toLocaleString('en-US')
const link = (r: Row) => (r.doi ? `https://doi.org/${r.doi}` : r.url ?? '')
function where(r: Row) {
  if (r.doi) return 'DOI'
  if ((r.url ?? '').includes('hydroshare.org')) return 'HydroShare'
  if ((r.url ?? '').includes('czo-archive.criticalzone.org')) return 'CZO archive page (retiring)'
  return 'Link'
}
const siteList = (r: Row) => (r.sites ?? []).filter(s => s !== 'national' || (r.sites ?? []).length === 1).map(siteName).join(', ')
</script>

<template>
  <div>
    <p v-if="asOf" class="font-mono text-[12px] leading-[normal] text-muted m-[0_0_20px]">
      {{ nf(rows.length) }} listed. The list is added to in batches; last addition {{ asOf }}.
    </p>

    <p v-if="!rows.length" class="font-['Hanken_Grotesk'] text-[15px] leading-[1.6] text-[#3a4d57]">Nothing is listed here yet.</p>

    <!-- Jump links: one entry per era and group -->
    <nav v-if="rows.length" aria-label="Jump to a group" class="mb-[40px]">
      <div v-for="e in eras" :key="e.id" class="mb-[16px]">
        <p class="font-mono font-bold tracking-[.1em] uppercase text-[11px] text-water m-[0_0_8px]">
          <a :href="`#${e.id}`" class="text-water">{{ e.label }}</a> · {{ nf(e.count) }}
        </p>
        <ul class="list-none p-0 m-0 flex flex-wrap gap-[8px]">
          <li v-for="g in e.groups" :key="g.id">
            <a :href="`#${g.id}`" class="inline-block font-['Hanken_Grotesk'] text-[13px] leading-[normal] text-navy bg-[rgba(31,111,178,.09)] rounded-[999px] p-[5px_12px] no-underline">{{ g.label }} ({{ nf(g.rows.length) }})</a>
          </li>
        </ul>
      </div>
    </nav>

    <section v-for="e in eras" :id="e.id" :key="e.id" class="mb-[56px] scroll-mt-[96px]">
      <h2 class="font-['Schibsted_Grotesk'] font-bold text-[28px] leading-[1.1] text-navy tracking-[-.016em] m-[0_0_24px]">{{ e.label }}</h2>

      <div v-for="g in e.groups" :id="g.id" :key="g.id" class="mb-[36px] scroll-mt-[96px]">
        <h3 :id="`${g.id}-title`" class="font-['Schibsted_Grotesk'] font-bold text-[20px] leading-[1.2] text-navy m-[0_0_6px]">
          <a v-if="g.href" :href="g.href" target="_blank" rel="noopener" class="text-navy">{{ g.label }}</a>
          <template v-else>{{ g.label }}</template>
          <span class="font-mono font-normal text-[12px] text-muted"> · {{ nf(g.rows.length) }}</span>
        </h3>
        <p v-if="g.sub" class="font-['Hanken_Grotesk'] text-[14px] leading-[1.5] text-muted max-w-[760px] m-[0_0_12px]">{{ g.sub }}</p>

        <div class="overflow-x-auto">
          <table :aria-labelledby="`${g.id}-title`" class="w-full border-collapse text-left font-['Hanken_Grotesk'] text-[14.5px] leading-[1.45] text-[#3a4d57]">
            <thead>
              <tr class="font-mono text-[11.5px] tracking-[.05em] uppercase text-muted">
                <th scope="col" class="font-normal p-[8px_10px] border-b border-b-[rgba(15,33,43,.15)]">Title</th>
                <th v-if="!type" scope="col" class="font-normal p-[8px_10px] border-b border-b-[rgba(15,33,43,.15)] hidden sm:table-cell">Type</th>
                <th scope="col" class="font-normal p-[8px_10px] border-b border-b-[rgba(15,33,43,.15)] hidden sm:table-cell">Where</th>
                <th scope="col" class="font-normal p-[8px_10px] border-b border-b-[rgba(15,33,43,.15)] hidden sm:table-cell">Observatory or cluster</th>
                <th scope="col" class="font-normal p-[8px_10px] border-b border-b-[rgba(15,33,43,.15)] hidden sm:table-cell text-right">Year</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="r in g.rows" :key="r.doi || r.url || r.title" class="align-top">
                <td class="p-[8px_10px] border-b border-b-[rgba(15,33,43,.08)]">
                  <a :href="link(r)" target="_blank" rel="noopener" class="text-water font-medium">{{ r.title }}</a>
                  <span v-if="r.repository" class="block text-[12.5px] text-muted">{{ r.repository }}</span>
                  <!-- Phone width: the columns that follow are hidden and their values go here -->
                  <span class="block sm:hidden font-mono text-[11.5px] text-muted mt-[4px]">{{ [!type ? r.type : '', where(r), siteList(r), r.year].filter(Boolean).join(' · ') }}</span>
                </td>
                <td v-if="!type" class="p-[8px_10px] border-b border-b-[rgba(15,33,43,.08)] capitalize whitespace-nowrap hidden sm:table-cell">{{ r.type }}</td>
                <td class="p-[8px_10px] border-b border-b-[rgba(15,33,43,.08)] hidden sm:table-cell">{{ where(r) }}</td>
                <td class="p-[8px_10px] border-b border-b-[rgba(15,33,43,.08)] hidden sm:table-cell">{{ siteList(r) }}</td>
                <td class="p-[8px_10px] border-b border-b-[rgba(15,33,43,.08)] hidden sm:table-cell text-right [font-variant-numeric:tabular-nums]">{{ r.year ?? '' }}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  </div>
</template>
