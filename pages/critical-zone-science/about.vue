<script setup lang="ts">
// About the section: CUAHSI's role in Critical Zone work, where the lists come from, and the awards the listed products name
// (epic CUAHSI/CUAHSI3-website#62, ticket T9; page structure option C, approved on #147). The role text states only the claims
// Jordan confirmed in T4 (agent/reports/261028_cz-cuahsi-role-claims.md): claims 1 to 3 as corrected on PR 141, and on 31 October 2026
// claims 4 to 9, 11 to 15 and 18 (claims 10 and 16 struck, 17 left empty). Claims 7 and 8 are his word, as CUAHSI's own. Do not add
// another claim without his confirmation.
useHead({
  title: 'About this section · Critical Zone Science',
  meta: [{ name: 'description', content: 'CUAHSI\'s role in the Critical Zone Collaborative Network, how the lists of Critical Zone datasets and papers were gathered, and the NSF awards they name.' }]
})

// Both files are bare arrays, so Nuxt Content wraps them in `body` (footgun 7). Each is queried by its exact path (a prefix match
// could return another file; footgun 1). The transforms keep only what the page shows: products.json is large and only its counts
// are used here.
const { data: productStats } = await useAsyncData('cz-about-products', () =>
  queryContent('critical-zone').where({ _path: '/critical-zone/products' }).findOne().catch(() => null),
  {
    transform: (file: any) => {
      const rows: any[] = Array.isArray(file?.body) ? file.body : []
      const byAward: Record<string, number> = {}
      const bySource: Record<string, number> = {}
      for (const r of rows) {
        for (const id of new Set<string>(r.awards ?? [])) byAward[id] = (byAward[id] ?? 0) + 1
        if (r.source) bySource[r.source] = (bySource[r.source] ?? 0) + 1
      }
      return { total: rows.length, byAward, bySource, datasets: rows.filter(r => r.type === 'dataset').length, hydroshare: rows.filter(r => r.type === 'dataset' && r.hydroshare_id).length }
    },
  }
)
const { data: registry } = await useAsyncData('cz-about-awards', () =>
  queryContent('awards').where({ _path: '/awards/awards' }).findOne().catch(() => null),
  { transform: (file: any) => (Array.isArray(file?.body) ? file.body : []) as any[] }
)

const nf = (n: number) => n.toLocaleString('en-US')

// Each NSF registry sentence holds the award's title in double quotes, its dates as "Month YYYY to Month YYYY" and its awardee
// after "awarded to". A part that does not parse is left blank rather than guessed.
function parseAward(a: any) {
  const text: string = a.text ?? ''
  const title = text.match(/"([^"]+)"/)?.[1]?.replace(/\.$/, '') ?? ''
  const dates = text.match(/([A-Z][a-z]+ (\d{4})) to ([A-Z][a-z]+ \d{4})/)
  const awardee = text.match(/awarded to ([^;)]+?)(?:[;)]|\.$)/)?.[1] ?? ''
  return { id: a.id, number: a.number, url: a.url, title, awardee, dates: dates ? `${dates[1]} to ${dates[3]}` : '', start: dates ? +dates[2] : null }
}

// The Hub award, read from the registry so its title and dates are written once (C15)
const hub = computed(() => {
  const a = (registry.value ?? []).find(x => x.id === 'nsf-2012893')
  return a ? parseAward(a) : null
})

// The NSF awards at least one listed product names, split by the year each began: the observatories (from 2006) and the network
// (from 2020). The split is by date only; the registry has no era field.
const awards = computed(() => {
  const counts = productStats.value?.byAward ?? {}
  return (registry.value ?? [])
    .filter(a => a.funder === 'NSF' && counts[a.id])
    .map(a => ({ ...parseAward(a), products: counts[a.id] }))
    .sort((x, y) => (x.start ?? 0) - (y.start ?? 0) || String(x.number).localeCompare(String(y.number)))
})
const groups = computed(() => [
  { id: 'awards-czo', title: 'Awards that began before 2020', note: '', rows: awards.value.filter(a => a.start !== null && a.start < 2020) },
  { id: 'awards-cznet', title: 'Awards that began in 2020 or later', note: '', rows: awards.value.filter(a => a.start !== null && a.start >= 2020) },
  { id: 'awards-other', title: 'Awards with no dates in the registry', note: '', rows: awards.value.filter(a => a.start === null) },
].filter(g => g.rows.length))

// Where the listed products were found: the `source` field of each product (the values the schema allows). A product found in
// several places is counted once, under the first in the harvest's order.
const sourceNames: Record<string, string> = {
  'czo-archive': 'the data and publication pages of the Critical Zone Observatory archive',
  discover: 'the Discover data catalog',
  datacite: 'DataCite, searched by award number',
  crossref: 'Crossref, searched by award number',
  openalex: 'OpenAlex',
  par: 'the NSF Public Access Repository',
  suggested: 'suggestions sent to CUAHSI',
  manual: 'added by hand',
}
const sources = computed(() => Object.entries(productStats.value?.bySource ?? {})
  .sort((a, b) => b[1] - a[1])
  .map(([key, n]) => ({ key, n, name: sourceNames[key] ?? key })))
</script>

<template>
  <div>
    <PageHero container-class="mx-auto max-w-site p-[40px_40px_44px]"
      title-class="font-['Schibsted_Grotesk'] font-bold text-[clamp(30px,3.6vw,44px)] leading-[1.06] tracking-[-.022em] text-navy m-[16px_0_16px] max-w-[720px]"
      lead-class="font-['Hanken_Grotesk'] font-normal text-[17px] leading-[1.6] text-[#3a4d57] max-w-[680px]">
      <template #before>
        <p class="font-mono text-[12px] leading-[normal] text-muted m-[0_0_28px]">
          <NuxtLink to="/critical-zone-science" class="text-water">Critical Zone Science</NuxtLink> / About
        </p>
      </template>
      <template #kicker>Critical Zone Science</template>
      <template #title>About this section</template>
      <template #lead>CUAHSI's part in the Critical Zone Collaborative Network, how the lists of datasets and papers were gathered, and the NSF awards they name.</template>
    </PageHero>

    <div class="mx-auto site-container max-w-site py-[48px]">
      <section class="mb-[56px] max-w-[720px]">
        <h2 class="font-['Schibsted_Grotesk'] font-bold text-[28px] leading-[1.1] text-navy tracking-[-.016em] m-[0_0_16px]">CUAHSI's role</h2>
        <p class="font-['Hanken_Grotesk'] font-normal text-[16px] leading-[1.6] text-[#3a4d57] m-[0_0_16px]">
          CUAHSI is the Coordinating Hub for the Critical Zone Collaborative Network (CZNet), the next phase of NSF Critical Zone
          research. The Hub is led by a team from CUAHSI, EarthChem, the John Wesley Powell Center for Analysis and Synthesis,
          Utah State University, Penn State University and RENCI.
        </p>
        <p v-if="hub" class="font-['Hanken_Grotesk'] font-normal text-[16px] leading-[1.6] text-[#3a4d57] m-0">
          NSF award
          <a :href="hub.url" target="_blank" rel="noopener" class="text-water font-medium">{{ hub.number }} ↗</a>,
          "{{ hub.title }}" ({{ hub.dates }}), awarded to CUAHSI, supports the Hub. Utah State University and Lamont are on the
          Hub team under awards of their own.
        </p>

        <h3 class="font-['Schibsted_Grotesk'] font-bold text-[20px] leading-[1.2] text-navy m-[28px_0_12px]">On the Hub, 2020 on</h3>
        <ul class="list-disc font-['Hanken_Grotesk'] font-normal text-[16px] leading-[1.6] text-[#3a4d57] m-0 pl-[22px]">
          <li>The Hub is housed at CUAHSI, and several CUAHSI staff are on the Hub team.</li>
          <li>
            The Hub funds synthesis projects, which bring teams of scientists together at the John Wesley Powell Center for Analysis and
            Synthesis to take on Critical Zone questions that cross disciplines and sites.
          </li>
          <li>
            One of the Hub's four objectives is cyberinfrastructure for FAIR data from the thematic clusters, "by integrating existing
            data services operated by CUAHSI and EarthChem".
          </li>
          <li>
            CUAHSI operates the CZNet website, criticalzone.org, and hosts the archive site of the Critical Zone Observatories,
            czo-archive.criticalzone.org.
          </li>
        </ul>

        <h3 class="font-['Schibsted_Grotesk'] font-bold text-[20px] leading-[1.2] text-navy m-[28px_0_12px]">In the Observatory years, 2007 to 2020</h3>
        <ul class="list-disc font-['Hanken_Grotesk'] font-normal text-[16px] leading-[1.6] text-[#3a4d57] m-0 pl-[22px]">
          <li>CUAHSI was listed as a partner organization on the Critical Zone Observatory network's own site.</li>
          <li>
            In 2011 and 2012 CUAHSI's cyberseminar series featured the Observatories, with talks on the Shale Hills observatory and on the
            western observatories.
          </li>
          <li>
            Students and teachers in the Observatories' research-experience programs presented their work at the CUAHSI Biennial
            Colloquium in July 2016, and a joint USGS and CUAHSI workshop on optical water quality sensor networks appears among the
            Christina River Basin observatory's publications for 2011.
          </li>
          <li>
            Some of the national datasets in the Observatories' own listing, such as climate, flux-tower and streamflow series from 1968
            to 2015, are listed as available through CUAHSI Water Data Center web services.
          </li>
          <li>
            The Observatories' data pages announced a partnership with CUAHSI to move their data catalog from criticalzone.org to CUAHSI's
            HydroShare repository in 2019.
          </li>
          <li v-if="productStats?.hydroshare">
            HydroShare is a CUAHSI service. {{ nf(productStats.hydroshare) }} of the {{ nf(productStats.datasets) }} datasets listed on this
            site have a HydroShare page.
          </li>
          <li>
            A data-footprint analysis done for CUAHSI in October 2026 found about 133 million time-series values from 7 observatories
            (1,602 series, 1968 to 2015) in CUAHSI's Hydrologic Information System.
          </li>
        </ul>
      </section>

      <section class="mb-[56px] max-w-[720px]">
        <h2 class="font-['Schibsted_Grotesk'] font-bold text-[28px] leading-[1.1] text-navy tracking-[-.016em] m-[0_0_16px]">Where the lists come from</h2>
        <p class="font-['Hanken_Grotesk'] font-normal text-[16px] leading-[1.6] text-[#3a4d57] m-[0_0_16px]">
          The <NuxtLink to="/critical-zone-science/datasets" class="text-water font-medium">datasets</NuxtLink> and
          <NuxtLink to="/critical-zone-science/papers" class="text-water font-medium">papers</NuxtLink> lists were gathered from
          the places below.
          <template v-if="productStats?.total">Of the {{ nf(productStats.total) }} products listed, each is counted once, under the first of the places that held it, in this order: the observatory archive, Discover, DataCite, Crossref and the NSF Public Access Repository.</template>
        </p>
        <ul v-if="sources.length" class="list-disc font-['Hanken_Grotesk'] font-normal text-[16px] leading-[1.6] text-[#3a4d57] m-0 pl-[22px]">
          <li v-for="s in sources" :key="s.key">{{ nf(s.n) }} from {{ s.name }}</li>
        </ul>
      </section>

      <section class="mb-[16px]">
        <h2 class="font-['Schibsted_Grotesk'] font-bold text-[28px] leading-[1.1] text-navy tracking-[-.016em] m-[0_0_8px]">The awards</h2>
        <p class="font-['Hanken_Grotesk'] font-normal text-[16px] leading-[1.6] text-[#3a4d57] max-w-[720px] m-[0_0_28px]">
          The National Science Foundation awards recorded on at least one listed product, with the number of products that record
          each. Each award number opens its page in the NSF award search.
        </p>
        <div v-for="g in groups" :key="g.id" class="mb-[40px]">
          <h3 :id="g.id" class="font-['Schibsted_Grotesk'] font-bold text-[20px] leading-[1.2] text-navy m-[0_0_4px]">{{ g.title }}</h3>
          <p class="font-['Hanken_Grotesk'] text-[14px] leading-[normal] text-muted m-[0_0_14px]">{{ g.note }} {{ g.rows.length }} awards. On a narrow screen the table scrolls sideways.</p>
          <div role="region" :aria-labelledby="g.id" tabindex="0" class="focus-visible:outline focus-visible:outline-2 focus-visible:outline-water overflow-x-auto border border-[rgba(15,33,43,.1)] rounded-[10px] bg-white">
            <table class="w-full border-collapse font-['Hanken_Grotesk'] text-[14px] leading-[1.45] text-ink">
              <thead>
                <tr class="text-left font-mono text-[11px] tracking-[.08em] uppercase text-muted">
                  <th scope="col" class="p-[10px_14px] font-bold border-b border-[rgba(15,33,43,.1)]">Award</th>
                  <th scope="col" class="p-[10px_14px] font-bold border-b border-[rgba(15,33,43,.1)] min-w-[280px]">Title</th>
                  <th scope="col" class="p-[10px_14px] font-bold border-b border-[rgba(15,33,43,.1)] min-w-[160px]">Awarded to</th>
                  <th scope="col" class="p-[10px_14px] font-bold border-b border-[rgba(15,33,43,.1)] min-w-[150px]">Dates</th>
                  <th scope="col" class="p-[10px_14px] font-bold border-b border-[rgba(15,33,43,.1)] text-right">Products</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="a in g.rows" :key="a.id" class="align-top">
                  <th scope="row" class="p-[10px_14px] border-b border-[rgba(15,33,43,.06)] whitespace-nowrap text-left font-normal">
                    <a :href="a.url" target="_blank" rel="noopener" class="text-water font-medium">{{ a.number }} ↗</a>
                  </th>
                  <td class="p-[10px_14px] border-b border-[rgba(15,33,43,.06)]">{{ a.title }}</td>
                  <td class="p-[10px_14px] border-b border-[rgba(15,33,43,.06)]">{{ a.awardee }}</td>
                  <td class="p-[10px_14px] border-b border-[rgba(15,33,43,.06)]">{{ a.dates }}</td>
                  <td class="p-[10px_14px] border-b border-[rgba(15,33,43,.06)] text-right tabular-nums">{{ nf(a.products) }}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <CzSuggest />
    </div>
  </div>
</template>
