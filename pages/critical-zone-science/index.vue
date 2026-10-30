<script setup lang="ts">
useHead({
  title: 'Critical Zone Science',
  meta: [{ name: 'description', content: 'A guide to the NSF Critical Zone Observatories (2007 to 2020) and the Critical Zone Collaborative Network (2020 on): what they were, and where the data and papers live today.' }]
})

// The numbers in the band come from content/critical-zone/products.json (a bare array, so Nuxt Content wraps it in `body`; footgun 7).
// `transform` keeps only the counts in the page payload: the file itself is large and the page does not show its rows.
const { data: stats } = await useAsyncData('cz-front-stats', () =>
  queryContent('critical-zone').where({ _extension: 'json' }).findOne().catch(() => null),
  {
    transform: (file: any) => {
      const rows: any[] = file?._path === '/critical-zone/products' && Array.isArray(file?.body) ? file.body : []
      const added = rows.map(r => r.date_added).filter(Boolean).sort()
      return {
        products: rows.length,
        datasets: rows.filter(r => r.type === 'dataset').length,
        papers: rows.filter(r => r.type === 'paper').length,
        asOf: added.length ? added[added.length - 1] : null,
      }
    },
  }
)
const nf = (n: number) => n.toLocaleString('en-US')
const asOf = computed(() => stats.value?.asOf
  ? new Date(stats.value.asOf).toLocaleDateString('en-US', { day: 'numeric', month: 'long', year: 'numeric', timeZone: 'UTC' })
  : null)

const band = computed(() => [
  ...(stats.value?.products ? [{ n: nf(stats.value.products), l: 'datasets and papers listed' }] : []),
  { n: '10', l: 'Critical Zone Observatories' },
  { n: '9', l: 'CZNet thematic clusters, plus the Hub' },
])

const places = [
  {
    kicker: 'CZO ARCHIVE',
    title: 'The Critical Zone Observatories',
    text: 'The archive of the ten NSF observatories, 2007 to 2020: their data, publications, news and people. It is being retired by August 2027.',
    href: 'https://czo-archive.criticalzone.org',
  },
  {
    kicker: 'CZNET',
    title: 'The Critical Zone Collaborative Network',
    text: 'The network that followed the observatories from 2020: the Hub and nine thematic clusters. Its site is also being retired.',
    href: 'https://criticalzone.org',
  },
  {
    kicker: 'DISCOVER',
    title: 'Critical Zone data catalog',
    text: 'The search over Critical Zone data held in HydroShare and elsewhere. It retires with the other two sites.',
    href: 'https://discover.criticalzone.org',
  },
]
</script>

<template>
  <div>
    <PageHero container-class="mx-auto max-w-site p-[40px_40px_52px]"
      title-class="font-['Schibsted_Grotesk'] font-bold text-[clamp(32px,4vw,48px)] leading-[1.06] tracking-[-.022em] text-navy m-[16px_0_16px] max-w-[640px]"
      lead-class="font-['Hanken_Grotesk'] font-normal text-[17px] leading-[1.6] text-[#3a4d57] max-w-[600px]">
      <template #before>
        <p class="font-mono text-[12px] leading-[normal] text-muted m-[0_0_28px]">
          <NuxtLink to="/data-platforms" class="text-water">Data &amp; Computing</NuxtLink> / Critical Zone Science
        </p>
      </template>
      <template #kicker>Critical Zone Science</template>
      <template #title>Two decades of critical zone research, and where to find it.</template>
      <template #lead>A guide to the NSF Critical Zone Observatories (2007 to 2020) and the Critical Zone Collaborative Network (2020 on): what they were, who did the work, and where the data and papers live today.</template>
      <img src="/newsletter-images/2026-august/cznet-logo.png" alt="Critical Zone Collaborative Network (CZNet) logo" width="420" height="160"
        class="block mt-[28px] w-[210px] max-w-full h-auto bg-white border border-[rgba(15,33,43,.1)] rounded-[6px] p-[10px_14px]">
    </PageHero>

    <!-- Numbers -->
    <section class="bg-navy text-white" aria-label="The Critical Zone program in numbers">
      <div class="mx-auto site-container max-w-site py-[36px] grid grid-cols-[1fr] gap-[20px] sm:grid-cols-[repeat(3,1fr)]">
        <div v-for="s in band" :key="s.l" class="px-[6px]">
          <div class="font-['Schibsted_Grotesk'] font-bold text-[clamp(34px,3.6vw,46px)] leading-[1] text-water-soft">{{ s.n }}</div>
          <div class="font-mono text-[13px] tracking-[.04em] mt-2 text-[#bcd4e6]">{{ s.l }}</div>
        </div>
      </div>
      <p v-if="asOf" class="mx-auto site-container max-w-site pb-[28px] font-mono text-[12px] leading-[normal] text-[#9fbdd2]">
        The list ({{ nf(stats!.datasets) }} datasets, {{ nf(stats!.papers) }} papers) is added to in batches; last addition {{ asOf }}.
      </p>
    </section>

    <!-- Where the work lives now -->
    <div class="mx-auto site-container max-w-site py-[64px]">
      <h2 class="font-['Schibsted_Grotesk'] font-bold text-[28px] leading-[1.1] text-navy tracking-[-.016em] m-[0_0_8px]">Where the work lives today</h2>
      <p class="font-['Hanken_Grotesk'] font-normal text-[16px] leading-[1.6] text-[#3a4d57] max-w-[640px] m-[0_0_28px]">
        Until the pages on this site are complete, the original sites remain the place to look. They are being retired, so links to papers and datasets will move to permanent addresses (DOIs) wherever they exist.
      </p>
      <div class="grid grid-cols-[1fr] gap-[18px] sm:grid-cols-[repeat(2,1fr)] min-[900px]:grid-cols-[repeat(3,1fr)]">
        <a v-for="p in places" :key="p.href" :href="p.href" target="_blank" rel="noopener"
          class="arrow-row border border-[rgba(15,33,43,.1)] rounded-[10px] p-[20px_22px] no-underline block bg-white">
          <p class="font-mono font-bold tracking-[.12em] uppercase text-water text-[11px] m-[0_0_10px]">{{ p.kicker }}</p>
          <p class="font-['Schibsted_Grotesk'] font-bold text-[18px] leading-[1.2] text-navy m-[0_0_8px]">{{ p.title }} <span class="arr text-water">→</span></p>
          <p class="font-['Hanken_Grotesk'] font-normal text-[14px] leading-[1.55] text-muted m-0">{{ p.text }}</p>
        </a>
      </div>
    </div>

    <!-- Missing something -->
    <div class="mx-auto site-container max-w-site pb-[80px]">
      <div class="rounded-[16px] bg-sand p-[40px] flex items-center justify-between gap-[32px] flex-wrap">
        <div>
          <h2 class="font-['Schibsted_Grotesk'] font-bold text-[24px] leading-[normal] text-navy m-[0_0_10px]">Know of something missing?</h2>
          <p class="font-['Hanken_Grotesk'] font-normal text-[15px] leading-[1.55] text-muted max-w-[520px] m-0">Email the title, a DOI or link, and the award or observatory to <a href="mailto:help@cuahsi.org" class="text-water font-medium">help@cuahsi.org</a>, and it will be considered for the list.</p>
        </div>
      </div>
    </div>
  </div>
</template>
