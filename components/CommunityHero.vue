<script setup lang="ts">
defineProps<{
  eyebrow?: string
  title: string
  lead: string
}>()

const route = useRoute()

const subNav = [
  { label: 'Overview',      to: '/community' },
  { label: 'Events',        to: '/community/events' },
  { label: 'Jobs',          to: '/community/jobs' },
  { label: 'Newsletter',    to: '/community/newsletter' },
  { label: 'News',          to: '/community/news' },
  { label: 'Campus visits', to: '/community/campus-visits' },
]

function isActive(to: string) {
  if (to === '/community') return route.path === '/community'
  return route.path.startsWith(to)
}
</script>

<template>
  <section style="background:linear-gradient(180deg,#FBFAF7,#F3EEE4);border-bottom:1px solid rgba(15,33,43,.08);">
    <div class="mx-auto" style="max-width:1240px;padding:52px 40px 0;">
      <span class="font-mono font-bold tracking-[.14em] uppercase text-clay" style="font-size:12px;">{{ eyebrow ?? 'Community' }}</span>
      <h1 style="font:700 clamp(32px,4vw,48px)/1.05 'Schibsted Grotesk';letter-spacing:-.02em;color:#0F2E44;margin:12px 0 12px;">{{ title }}</h1>
      <p style="font:400 16px/1.6 'Hanken Grotesk';color:#3a4d57;max-width:560px;margin-bottom:28px;">{{ lead }}</p>
    </div>
    <!-- Sub-nav -->
    <div class="mx-auto" style="max-width:1240px;padding:0 40px;">
      <div class="flex gap-[6px] flex-wrap" style="padding-bottom:0;border-top:1px solid rgba(15,33,43,.08);padding-top:16px;padding-bottom:16px;">
        <NuxtLink v-for="item in subNav" :key="item.to" :to="item.to"
          :style="`font:600 13px 'Hanken Grotesk';padding:7px 14px;border-radius:22px;text-decoration:none;transition:all .15s ease;background:${isActive(item.to) ? '#0F2E44' : 'transparent'};color:${isActive(item.to) ? '#fff' : '#3a4d57'};border:1px solid ${isActive(item.to) ? '#0F2E44' : 'rgba(15,33,43,.18)'};`">
          {{ item.label }}
        </NuxtLink>
      </div>
    </div>
  </section>
</template>
