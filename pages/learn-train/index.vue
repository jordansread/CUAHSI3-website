<script setup lang="ts">
useHead({ title: 'Learn & train · CUAHSI' })
const { data: programs } = await useAsyncData('programs', () =>
  queryContent('programs').where({ published: true }).find()
)
const { data: events } = await useAsyncData('training-events', () =>
  queryContent('events').where({ published: true }).find()
)
</script>
<template>
  <div class="max-w-5xl mx-auto px-6 py-12">
    <p class="text-xs text-gray-400 mb-2">Home / Learn &amp; train</p>
    <h1 class="text-3xl font-medium mb-3">Build your water science skills</h1>
    <p class="text-sm text-gray-500 leading-relaxed max-w-lg mb-10">
      Workshops, online courses, recorded seminars, and funding opportunities —
      open to graduate students, early-career researchers, and faculty alike.
    </p>
    <h2 class="text-sm font-medium mb-4">Programs</h2>
    <div class="grid grid-cols-3 gap-4 mb-12">
      <div v-for="p in programs" :key="p.slug"
        class="border border-gray-100 rounded-xl p-4">
        <p class="text-sm font-medium mb-1">{{ p.title }}</p>
        <p class="text-xs text-gray-400 leading-relaxed">{{ p.description }}</p>
      </div>
    </div>
    <h2 class="text-sm font-medium mb-4">Upcoming events</h2>
    <div v-for="e in events" :key="e.slug" class="py-3 border-b border-gray-100">
      <p class="text-sm font-medium">{{ e.title }}</p>
      <p class="text-xs text-gray-400 mt-0.5">{{ e.type }} · {{ e.location?.mode }}</p>
    </div>
  </div>
</template>
