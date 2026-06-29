<script setup lang="ts">
const stats = [
  { n: '130+',   l: 'Member universities' },
  { n: '25K+',   l: 'HydroShare resources' },
  { n: '350+',   l: 'Cyberseminars archived' },
  { n: '4,000+', l: 'Community subscribers' },
]
</script>

<template>
  <section class="bg-navy text-white">
    <div class="mx-auto" style="max-width:1240px;padding:46px 40px;display:grid;grid-template-columns:repeat(4,1fr);gap:0;">
      <div v-for="(s, i) in stats" :key="s.l"
        :style="`padding:6px 28px;border-left:1px solid rgba(255,255,255,${i === 0 ? '0' : '.14'});`">
        <div style="font:700 clamp(34px,3.6vw,46px)/1 'Schibsted Grotesk';color:#7fc0ee;">{{ s.n }}</div>
        <div class="font-mono text-[13px] tracking-[.04em] mt-2" style="color:#bcd4e6;">{{ s.l }}</div>
      </div>
    </div>
  </section>
</template>
