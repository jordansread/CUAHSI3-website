<script setup lang="ts">
const route = useRoute()
const { data: issue } = await useAsyncData(`newsletter-${route.params.slug}`, () =>
  queryContent('newsletter').where({ slug: route.params.slug, published: true }).findOne()
)
if (!issue.value) throw createError({ statusCode: 404, message: 'Issue not found' })
useHead({ title: `${issue.value.title} · CUAHSI` })
</script>
<template>
  <div class="max-w-3xl mx-auto px-6 py-12">
    <NuxtLink to="/community/newsletter" class="text-xs text-gray-400 mb-6 block">← Newsletter archive</NuxtLink>
    <p class="text-xs text-gray-400 mb-2">
      {{ new Date(issue.date).toLocaleDateString('en-US', { month: 'long', year: 'numeric' }) }}
    </p>
    <h1 class="text-3xl font-medium mb-3">{{ issue.title }}</h1>
    <p class="text-sm text-gray-500 mb-4">{{ issue.summary }}</p>
    <div class="flex flex-wrap gap-1 mb-8">
      <span v-for="t in issue.topics" :key="t"
        class="text-xs px-2 py-0.5 rounded-full bg-teal-50 text-teal-700 border border-teal-100">{{ t }}</span>
    </div>
    <div class="prose prose-sm max-w-none">
      <ContentRenderer :value="issue" />
    </div>
    <div v-if="issue.mailchimp_url" class="mt-10 pt-6 border-t border-gray-100">
      <p class="text-xs text-gray-400">Original version: <a :href="issue.mailchimp_url" class="underline" target="_blank">Mailchimp archive ↗</a></p>
    </div>
  </div>
</template>
