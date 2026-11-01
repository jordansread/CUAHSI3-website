<script setup lang="ts">
// The records marked `highlight: true` in content/critical-zone/products.json (epic CUAHSI/CUAHSI3-website#62, ticket T12; the choice is
// in agent/reports/261031_cz-highlights-selection.md). Papers are grouped by the observatory they are tagged to or, where a paper has no
// site tag (every CZNet paper), by the cluster its award names (czClusterOfAward, an inference from the award title). No usage figures are
// stored on the records, so nothing here is ranked: the order is the label order of CZ_SITE_NAMES, then title.
//
// The data comes from a bare JSON array that Nuxt Content wraps in `body` (footgun 7); `transform` keeps only the marked rows and the
// fields shown, so the page payload does not carry the whole file.
type Row = { title: string; type: string; doi?: string; url?: string; sites?: string[]; awards?: string[]; year?: number }
type Award = { id: string; text: string }

const { data: rows } = await useAsyncData('cz-highlights', () =>
  queryContent('critical-zone').where({ _extension: 'json' }).findOne().catch(() => null),
  {
    transform: (f: any) => {
      const all: any[] = f?._path === '/critical-zone/products' && Array.isArray(f?.body) ? f.body : []
      return all.filter(r => r.highlight === true)
        .map(r => ({ title: r.title, type: r.type, doi: r.doi, url: r.url, sites: r.sites, awards: r.awards, year: r.year })) as Row[]
    },
  }
)
const { data: awardFile } = await useAsyncData('cz-highlights-awards', () =>
  queryContent('awards').where({ _extension: 'json' }).findOne().catch(() => null),
  { transform: (f: any) => (f?._path === '/awards/awards' && Array.isArray(f?.body) ? f.body : []) as Award[] }
)

const order = Object.keys(CZ_SITE_NAMES)
const awardText = computed(() => new Map((awardFile.value ?? []).map(a => [a.id, a.text])))
const cmp = (a: string, b: string) => (a < b ? -1 : a > b ? 1 : 0)
const link = (r: Row) => (r.doi ? `https://doi.org/${r.doi}` : r.url ?? '')

// A paper naming awards of two clusters goes under the first of its awards that names one (the Big Data paper 10.1029/2022gb007351 names a Dynamic Water award too).
// The slug a row is shown under: its first site other than the cross-CZO "national" tag, else the cluster its award names, else its first site.
function slugOf(r: Row): string {
  const s = (r.sites ?? []).find(x => x !== 'national')
  if (s) return s
  for (const id of r.awards ?? []) {
    const c = czClusterOfAward(awardText.value.get(id))
    if (c) return c
  }
  return (r.sites ?? [])[0] ?? ''
}
function groups(type: string) {
  const by = new Map<string, Row[]>()
  for (const r of rows.value ?? []) if (r.type === type) by.set(slugOf(r), [...(by.get(slugOf(r)) ?? []), r])
  return [...by.entries()]
    .sort((a, b) => (order.indexOf(a[0]) + 1 || 99) - (order.indexOf(b[0]) + 1 || 99) || cmp(a[0], b[0]))
    .map(([slug, list]) => ({ slug, name: CZ_SITE_NAMES[slug] ?? 'Other', list: [...list].sort((x, y) => cmp(x.title, y.title)) }))
}
const papers = computed(() => groups('paper'))
const datasets = computed(() => groups('dataset'))
const count = (g: { list: Row[] }[]) => g.reduce((n, x) => n + x.list.length, 0)
</script>

<template>
  <div v-if="rows?.length" class="mx-auto site-container max-w-site pt-[48px]">
    <h2 class="font-['Schibsted_Grotesk'] font-bold text-[28px] leading-[1.1] text-navy tracking-[-.016em] m-[0_0_8px]">Highlights</h2>
    <p class="font-['Hanken_Grotesk'] font-normal text-[16px] leading-[1.6] text-[#3a4d57] max-w-[640px] m-[0_0_12px]">
      A short list from the full lists, chosen by how much each has been used. Papers: at each observatory, the two with the most citations
      per year; at each network cluster and the Hub, the one with the most. Datasets: the ten with the highest score, which is downloads per
      year plus 100 times citations per year, among datasets at least three years old (603 of the 796 could be scored). Downloads are
      HydroShare's, counted from 2019, when most were added there; citations are DataCite's. The figures were gathered on 30 and 31 October 2026.
    </p>
    <p class="font-['Hanken_Grotesk'] font-normal text-[14px] leading-[1.55] text-muted max-w-[640px] m-[0_0_28px]">
      The papers carry no network cluster tag, so a network paper is placed in a cluster by the NSF award it names (the cluster is in the
      award's title).
    </p>

    <h3 class="font-['Schibsted_Grotesk'] font-bold text-[20px] leading-[1.2] text-navy m-[0_0_14px]">Papers · {{ count(papers) }}</h3>
    <div class="grid grid-cols-[1fr] gap-[18px] sm:grid-cols-[repeat(2,1fr)] min-[900px]:grid-cols-[repeat(3,1fr)] mb-[40px]">
      <div v-for="g in papers" :key="g.slug || 'none'" class="border border-[rgba(15,33,43,.1)] rounded-[10px] p-[18px_20px] bg-white">
        <p class="font-mono font-bold tracking-[.1em] uppercase text-water text-[11px] m-[0_0_10px]">{{ g.name }}</p>
        <ul class="list-none p-0 m-0">
          <li v-for="r in g.list" :key="r.doi || r.url || r.title" class="mb-[10px] pb-[10px] border-b border-b-[rgba(15,33,43,.08)] last:mb-0 last:pb-0 last:border-b-0">
            <a :href="link(r)" target="_blank" rel="noopener" class="font-['Hanken_Grotesk'] text-[14.5px] leading-[1.4] text-navy font-medium rounded-[2px] hover:text-water hover:underline focus-visible:text-water focus-visible:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-water">{{ r.title }}<span aria-hidden="true" class="font-mono text-[11.5px] text-muted">&nbsp;&#8599;</span><span class="sr-only"> (opens in a new tab)</span></a>
            <span v-if="r.year" class="font-mono text-[11.5px] text-muted whitespace-nowrap"> · {{ r.year }}</span>
          </li>
        </ul>
      </div>
    </div>

    <h3 class="font-['Schibsted_Grotesk'] font-bold text-[20px] leading-[1.2] text-navy m-[0_0_14px]">Datasets · {{ count(datasets) }}</h3>
    <div class="grid grid-cols-[1fr] gap-[18px] sm:grid-cols-[repeat(2,1fr)] min-[900px]:grid-cols-[repeat(3,1fr)]">
      <div v-for="g in datasets" :key="g.slug || 'none'" class="border border-[rgba(15,33,43,.1)] rounded-[10px] p-[18px_20px] bg-white">
        <p class="font-mono font-bold tracking-[.1em] uppercase text-water text-[11px] m-[0_0_10px]">{{ g.name }}</p>
        <ul class="list-none p-0 m-0">
          <li v-for="r in g.list" :key="r.doi || r.url || r.title" class="mb-[10px] pb-[10px] border-b border-b-[rgba(15,33,43,.08)] last:mb-0 last:pb-0 last:border-b-0">
            <a :href="link(r)" target="_blank" rel="noopener" class="font-['Hanken_Grotesk'] text-[14.5px] leading-[1.4] text-navy font-medium rounded-[2px] hover:text-water hover:underline focus-visible:text-water focus-visible:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-water">{{ r.title }}<span aria-hidden="true" class="font-mono text-[11.5px] text-muted">&nbsp;&#8599;</span><span class="sr-only"> (opens in a new tab)</span></a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
