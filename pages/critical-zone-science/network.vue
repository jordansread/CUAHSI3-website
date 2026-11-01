<script setup lang="ts">
// The Critical Zone Collaborative Network (CZNet): the Hub and the nine thematic clusters on one page, as sections with anchors
// (epic CUAHSI/CUAHSI3-website#62; page structure option C, approved on #147). Each section lists the products tagged with the cluster
// (CzProductList, `site`) and links to the cluster's pages on criticalzone.org. A narrative (ticket T9) is not written yet; this page
// states nothing about the network beyond what its lists and links show.
useHead({
  title: 'The Critical Zone Collaborative Network · Critical Zone Science',
  meta: [{ name: 'description', content: 'Datasets, papers and software listed for the Critical Zone Collaborative Network Hub and its nine thematic clusters, each linked to where it lives.' }]
})

// slug in products.json -> address segment on criticalzone.org (the legacy site writes dynamic_water with an underscore)
const clusters = [
  { slug: 'hub', path: 'hub' },
  { slug: 'bedrock', path: 'bedrock' },
  { slug: 'bigdata', path: 'bigdata' },
  { slug: 'cinet', path: 'cinet' },
  { slug: 'coastal', path: 'coastal' },
  { slug: 'drylands', path: 'drylands' },
  { slug: 'dust2', path: 'dust2' },
  { slug: 'dynamic-water', path: 'dynamic_water' },
  { slug: 'geomicrobiology', path: 'geomicrobiology' },
  { slug: 'urban', path: 'urban' },
].map(c => ({ ...c, name: CZ_SITE_NAMES[c.slug], id: `cluster-${c.slug}` }))
</script>

<template>
  <div>
    <PageHero container-class="mx-auto max-w-site p-[40px_40px_44px]"
      title-class="font-['Schibsted_Grotesk'] font-bold text-[clamp(30px,3.6vw,44px)] leading-[1.06] tracking-[-.022em] text-navy m-[16px_0_16px] max-w-[720px]"
      lead-class="font-['Hanken_Grotesk'] font-normal text-[17px] leading-[1.6] text-[#3a4d57] max-w-[680px]">
      <template #before>
        <p class="font-mono text-[12px] leading-[normal] text-muted m-[0_0_28px]">
          <NuxtLink to="/critical-zone-science" class="text-water">Critical Zone Science</NuxtLink> / The network
        </p>
      </template>
      <template #kicker>Critical Zone Science</template>
      <template #title>The Critical Zone Collaborative Network</template>
      <template #lead>Datasets, papers and software listed for the network's Hub and its nine thematic clusters, each linking to where it lives today.</template>
      <p class="font-['Hanken_Grotesk'] font-normal text-[14px] leading-[normal] text-muted m-[22px_0_0]">
        Also: <a href="https://criticalzone.org" target="_blank" rel="noopener" class="text-water font-medium">criticalzone.org ↗</a> (the network's site, being retired, August 2027 at the latest)
        &nbsp;·&nbsp; <NuxtLink to="/critical-zone-science/datasets" class="text-water font-medium">All datasets</NuxtLink>
        &nbsp;·&nbsp; <NuxtLink to="/critical-zone-science/papers" class="text-water font-medium">All papers</NuxtLink>
      </p>
    </PageHero>

    <div class="mx-auto site-container max-w-site py-[48px]">
      <nav aria-label="Jump to a cluster" class="mb-[40px]">
        <ul class="list-none p-0 m-0 flex flex-wrap gap-[8px]">
          <li v-for="c in clusters" :key="c.slug">
            <a :href="`#${c.id}`" class="inline-block font-['Hanken_Grotesk'] text-[13px] leading-[normal] text-navy bg-[rgba(31,111,178,.09)] rounded-[999px] p-[5px_12px] no-underline">{{ c.name }}</a>
          </li>
        </ul>
      </nav>

      <section v-for="c in clusters" :id="c.id" :key="c.slug" class="mb-[64px] scroll-mt-[96px]">
        <h2 class="font-['Schibsted_Grotesk'] font-bold text-[30px] leading-[1.1] text-navy tracking-[-.016em] m-[0_0_8px]">{{ c.name }}</h2>
        <p class="font-['Hanken_Grotesk'] text-[14px] leading-[normal] text-muted m-[0_0_24px]">
          <a :href="`https://criticalzone.org/${c.path}/`" target="_blank" rel="noopener" class="text-water font-medium">This cluster's pages on criticalzone.org ↗</a>
        </p>
        <CzProductList :site="c.slug" :id-prefix="c.slug" :label="c.name" compact />
      </section>

      <CzSuggest />
    </div>
  </div>
</template>
