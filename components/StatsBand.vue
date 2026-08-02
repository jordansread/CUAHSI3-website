<script setup lang="ts">
const stats = [
  { n: '101',    l: 'Member universities' },
  { n: '25K+',   l: 'HydroShare resources' },
  { n: '350+',   l: 'Cyberseminars archived' },
  { n: '4,000+', l: 'Community subscribers' },
]
</script>

<template>
  <section class="bg-navy text-white">
    <div class="mx-auto stats-grid site-container rgrid rgrid-multi" style="max-width:1240px;padding-top:36px;padding-bottom:36px;display:grid;gap:20px;--cols:repeat(4,1fr);">
      <div v-for="(s, i) in stats" :key="s.l"
        class="stats-item"
        :style="`padding:6px 28px;border-left:1px solid rgba(255,255,255,${i === 0 ? '0' : '.14'});`">
        <div style="font:700 clamp(34px,3.6vw,46px)/1 'Schibsted Grotesk';color:#7fc0ee;">{{ s.n }}</div>
        <div class="font-mono text-[13px] tracking-[.04em] mt-2" style="color:#bcd4e6;">{{ s.l }}</div>
      </div>
    </div>
  </section>
</template>

<style scoped>
@media (max-width: 900px) {
  .stats-grid { grid-template-columns: 1fr 1fr !important; }
}
@media (max-width: 480px) {
  .stats-grid { grid-template-columns: 1fr !important; }
  .stats-item { border-left: none !important; padding-left: 0 !important; }
}
</style>
