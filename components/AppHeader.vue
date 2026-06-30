<script setup lang="ts">
const route = useRoute()
const navItems = [
  { label: 'About', to: '/about' },
  { label: 'Data & Tools', to: '/data-platforms' },
  { label: 'Learn & Train', to: '/learn-train' },
  { label: 'Community', to: '/community' },
  { label: 'Highlights', to: '/highlights' },
]
function isActive(to: string) {
  return route.path === to || (to !== '/' && route.path.startsWith(to))
}
</script>

<template>
  <header class="sticky top-0 z-50" style="background:rgba(251,250,247,.92);backdrop-filter:blur(12px);border-bottom:1px solid rgba(15,33,43,.10);">
    <!-- Utility bar -->
    <div class="bg-navy" style="color:#aecbe0;">
      <div class="mx-auto flex items-center justify-between" style="max-width:1240px;padding:0 40px;height:36px;">
        <span class="font-mono text-[12px] tracking-[.04em]">An NSF-supported consortium · advancing water science since 2001</span>
        <div class="flex gap-[22px]" style="font:500 12.5px 'Hanken Grotesk';">
          <a href="https://www.cuahsi.org/member-portal" target="_blank" class="hover:text-white transition-colors">Member Portal</a>
          <a href="https://www.cuahsi.org/donate" target="_blank" class="hover:text-white transition-colors">Support CUAHSI</a>
          <NuxtLink to="/about#contact" class="hover:text-white transition-colors">Contact</NuxtLink>
        </div>
      </div>
    </div>

    <!-- Main bar -->
    <div class="mx-auto flex items-center justify-between gap-6" style="max-width:1240px;padding:0 40px;height:74px;">

      <!-- Logo -->
      <NuxtLink to="/" class="flex items-center gap-3 flex-none">
        <span class="relative flex-none" style="width:36px;height:36px;border-radius:50%;overflow:hidden;box-shadow:inset 0 0 0 1px rgba(15,46,68,.18);">
          <span class="absolute inset-0 bottom-1/2" style="background:#2A86C9;"></span>
          <span class="absolute inset-0 top-1/2" style="background:#0F2E44;"></span>
          <span class="absolute left-0 right-0" style="top:50%;height:2px;background:#FBFAF7;transform:translateY(-1px);"></span>
        </span>
        <span class="flex flex-col items-start leading-none">
          <span style="font:800 21px 'Schibsted Grotesk';letter-spacing:.01em;color:#0F2E44;">CUAHSI</span>
          <span class="font-mono text-[9.5px] tracking-[.06em] text-muted mt-[3px]">HYDROLOGIC SCIENCE</span>
        </span>
      </NuxtLink>

      <!-- Nav -->
      <nav class="flex gap-[2px]">
        <NuxtLink v-for="item in navItems" :key="item.to" :to="item.to"
          class="transition-colors"
          :style="`border:none;font:600 14.5px 'Hanken Grotesk';padding:9px 14px;border-radius:8px;background:${isActive(item.to) ? 'rgba(31,111,178,.12)' : 'transparent'};color:${isActive(item.to) ? '#0F2E44' : '#3a4d57'};text-decoration:none;`">
          {{ item.label }}
        </NuxtLink>
      </nav>

      <!-- Actions -->
      <div class="flex gap-[10px] items-center flex-none">
        <ClientOnly><SiteSearch /></ClientOnly>
        <a href="https://www.cuahsi.org/member-portal" target="_blank"
          class="bg-navy text-white text-sm font-semibold rounded-btn flex-none"
          style="padding:11px 18px;font-family:'Hanken Grotesk';">
          Member Portal
        </a>
      </div>
    </div>
  </header>
</template>
