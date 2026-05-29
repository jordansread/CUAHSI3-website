<script setup lang="ts">
useHead({ title: 'Newsletter archive · CUAHSI' })
const { data: issues } = await useAsyncData('newsletter-archive', () =>
  queryContent('newsletter').where({ published: true }).sort({ date: -1 }).find()
)
</script>
<template>
  <div class="max-w-3xl mx-auto px-6 py-12">
    <p class="text-xs text-gray-400 mb-2">Community / Newsletter</p>
    <h1 class="text-3xl font-medium mb-3">CUAHSI e-Newsletter archive</h1>
    <p class="text-sm text-gray-500 leading-relaxed max-w-lg mb-10">
      Monthly updates on water science research, CUAHSI programs, community spotlights, and events.
      Every issue is fully searchable and indexed.
    </p>
    <div v-for="issue in issues" :key="issue.slug"
      class="flex gap-4 items-baseline py-4 border-b border-gray-100 last:border-0">
      <span class="text-xs text-gray-400 w-20 flex-shrink-0">
        {{ new Date(issue.date).toLocaleDateString('en-US', { month: 'short', year: 'numeric' }) }}
      </span>
      <div class="flex-1">
        <NuxtLink :to="`/community/newsletter/${issue.slug}`"
          class="text-sm font-medium hover:text-gray-500 block mb-1">
          {{ issue.title }}
        </NuxtLink>
        <p class="text-xs text-gray-400">{{ issue.summary }}</p>
        <div class="flex flex-wrap gap-1 mt-2">
          <span v-for="t in issue.topics" :key="t"
            class="text-xs px-2 py-0.5 rounded-full bg-teal-50 text-teal-700 border border-teal-100">{{ t }}</span>
        </div>
      </div>
    </div>
  </div>
</template>
