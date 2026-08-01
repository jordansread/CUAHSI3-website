<script setup lang="ts">
useHead({ title: 'Programs · CUAHSI' })
const { data: programs } = await useAsyncData('programs', () =>
  queryContent('programs').where({ published: true }).sort({ title: 1 }).find()
)
</script>
<template>
  <div>
    <section style="background:linear-gradient(180deg,#FBFAF7,#F3EEE4);border-bottom:1px solid rgba(15,33,43,.08);">
      <div class="mx-auto" style="max-width:1240px;padding:64px 40px 52px;">
        <span class="font-mono font-bold tracking-[.14em] uppercase text-clay" style="font-size:12px;">Programs</span>
        <h1 style="font:700 clamp(36px,4.4vw,54px)/1.04 'Schibsted Grotesk';letter-spacing:-.022em;color:#0F2E44;margin:16px 0 16px;">Structured opportunities to learn and contribute.</h1>
        <p style="font:400 17px/1.6 'Hanken Grotesk';color:#3a4d57;max-width:560px;">Recurring CUAHSI programs that build skills, advance careers, and grow the water science community — each running on an annual cycle with its own application process.</p>
      </div>
    </section>
    <StatsBand />
    <div class="mx-auto rgrid rgrid-multi" style="max-width:1240px;padding:52px 40px 80px;display:grid;gap:20px;--cols:repeat(3,1fr);">
      <NuxtLink v-for="p in programs" :key="p.slug" :to="`/programs/${p.slug}`"
        class="card-lift arrow-row bg-white rounded-card flex flex-col"
        style="border:1px solid rgba(15,33,43,.1);padding:24px;text-decoration:none;">
        <span class="font-mono font-bold tracking-[.06em] uppercase text-clay mb-3" style="font-size:11px;">{{ p.abbreviation }}</span>
        <h2 style="font:700 20px 'Schibsted Grotesk';color:#0F2E44;margin:0 0 10px;flex:1;line-height:1.25;">{{ p.title }}</h2>
        <p style="font:400 14px/1.55 'Hanken Grotesk';color:#5C6E78;margin-bottom:16px;">{{ p.excerpt }}</p>
        <div class="flex gap-2 flex-wrap mb-4">
          <span v-for="a in p.audience" :key="a" class="font-mono text-[10px]" style="background:rgba(31,111,178,.09);color:#1F6FB2;padding:3px 8px;border-radius:4px;">{{ a.replace(/-/g,' ') }}</span>
        </div>
        <div class="flex items-center justify-between">
          <span class="font-mono text-[11px] text-muted">{{ p.season }}</span>
          <span class="arrow-row inline-flex items-center gap-1" style="font:600 13px 'Hanken Grotesk';color:#1F6FB2;">Learn more <span class="arr">→</span></span>
        </div>
      </NuxtLink>
    </div>
  </div>
</template>
