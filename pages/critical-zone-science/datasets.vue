<script setup lang="ts">
useHead({
  title: 'Datasets · Critical Zone Science',
  meta: [{ name: 'description', content: 'The full list of known Critical Zone datasets, with software and models, searchable and sortable, each linked to where it lives.' }]
})
</script>

<template>
  <div>
    <PageHero container-class="mx-auto max-w-site p-[40px_40px_44px]"
      title-class="font-['Schibsted_Grotesk'] font-bold text-[clamp(30px,3.6vw,44px)] leading-[1.06] tracking-[-.022em] text-navy m-[16px_0_16px] max-w-[720px]"
      lead-class="font-['Hanken_Grotesk'] font-normal text-[17px] leading-[1.6] text-[#3a4d57] max-w-[680px]">
      <template #before>
        <p class="font-mono text-[12px] leading-[normal] text-muted m-[0_0_28px]">
          <NuxtLink to="/critical-zone-science" class="text-water">Critical Zone Science</NuxtLink> / Datasets
        </p>
      </template>
      <template #kicker>Critical Zone Science</template>
      <template #title>Every known Critical Zone dataset</template>
      <template #lead>Datasets, and any software and models in the list, from the Critical Zone Observatories and the Critical Zone Collaborative Network. Search it, filter it by observatory or cluster, or click a column heading to sort. Each title links to where the dataset lives today, with a DOI where it has one.</template>
      <p class="font-['Hanken_Grotesk'] font-normal text-[14px] leading-[normal] text-muted m-[22px_0_0]">Also here:
        <NuxtLink to="/critical-zone-science/papers" class="text-water font-medium">Papers</NuxtLink>
      </p>
    </PageHero>

    <div class="mx-auto site-container max-w-site py-[48px]">
      <CzProductList :types="['dataset', 'software', 'model']" label="Critical Zone datasets, software and models" />
      <CzSuggest />
    </div>
  </div>
</template>
