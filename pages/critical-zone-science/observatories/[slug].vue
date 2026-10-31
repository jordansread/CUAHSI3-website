<script setup lang="ts">
// One page per Critical Zone Observatory (epic CUAHSI/CUAHSI3-website#62; page structure approved on #147, option C).
// The page lists every product tagged with the observatory (CzProductList, `site`) and links to the observatory's pages on the CZO archive.
// A short narrative for the observatory, when one exists, is read from content/critical-zone/<slug>.md (ticket T9) and shown above the list;
// until then the page makes no statement about the observatory beyond what the list and the archive link show.
const OBSERVATORIES = ['boulder', 'calhoun', 'catalina-jemez', 'christina', 'eel', 'iml', 'luquillo', 'reynolds', 'shale-hills', 'sierra']

const route = useRoute()
const slug = String(route.params.slug ?? '')
const known = OBSERVATORIES.includes(slug)
const name = known ? CZ_SITE_NAMES[slug] : ''

// Not found is a flag the template renders, not a thrown error (footgun 6).
const { data: narrative } = known
  ? await useAsyncData(`cz-narrative-${slug}`, () => queryContent('critical-zone').where({ _extension: 'md', slug, published: true }).findOne().catch(() => null))
  : { data: ref(null) }

useHead({
  title: known ? `${name} Critical Zone Observatory · Critical Zone Science` : 'Not found · Critical Zone Science',
  meta: [{ name: 'description', content: known ? `Datasets, papers and reports listed for the ${name} Critical Zone Observatory, each linked to where it lives.` : 'This page was not found.' }]
})
</script>

<template>
  <div>
    <PageHero v-if="known" container-class="mx-auto max-w-site p-[40px_40px_44px]"
      title-class="font-['Schibsted_Grotesk'] font-bold text-[clamp(30px,3.6vw,44px)] leading-[1.06] tracking-[-.022em] text-navy m-[16px_0_16px] max-w-[720px]"
      lead-class="font-['Hanken_Grotesk'] font-normal text-[17px] leading-[1.6] text-[#3a4d57] max-w-[680px]">
      <template #before>
        <p class="font-mono text-[12px] leading-[normal] text-muted m-[0_0_28px]">
          <NuxtLink to="/critical-zone-science" class="text-water">Critical Zone Science</NuxtLink> / {{ name }}
        </p>
      </template>
      <template #kicker>Critical Zone Observatory</template>
      <template #title>{{ name }}</template>
      <template #lead>{{ narrative?.summary ?? 'Datasets, papers and reports listed for this observatory, each linking to where it lives today.' }}</template>
      <p class="font-['Hanken_Grotesk'] font-normal text-[14px] leading-[normal] text-muted m-[22px_0_0]">
        Also: <a :href="`https://czo-archive.criticalzone.org/${slug}/`" target="_blank" rel="noopener" class="text-water font-medium">this observatory's pages on the CZO archive ↗</a> (the archive is being retired, August 2027 at the latest)
        &nbsp;·&nbsp; <NuxtLink to="/critical-zone-science/datasets" class="text-water font-medium">All datasets</NuxtLink>
        &nbsp;·&nbsp; <NuxtLink to="/critical-zone-science/papers" class="text-water font-medium">All papers</NuxtLink>
      </p>
    </PageHero>

    <div v-if="known" class="mx-auto site-container max-w-site py-[48px]">
      <article v-if="narrative" class="program-prose max-w-[720px] mb-[48px]">
        <ContentRenderer :value="narrative" />
      </article>
      <CzProductList :site="slug" />
    </div>

    <div v-else class="mx-auto site-container max-w-site py-[80px]">
      <h1 class="font-['Schibsted_Grotesk'] font-bold text-[32px] leading-[1.1] text-navy m-[0_0_12px]">This page was not found.</h1>
      <p class="font-['Hanken_Grotesk'] text-[16px] leading-[1.6] text-[#3a4d57]">
        <NuxtLink to="/critical-zone-science" class="text-water font-medium">Critical Zone Science</NuxtLink> lists the observatories.
      </p>
    </div>
  </div>
</template>
