<script setup lang="ts">
useHead({ title: 'Cyberseminars · CUAHSI' })
const { data: seminars } = await useAsyncData('cyberseminars', () =>
  queryContent('cyberseminars').where({ published: true }).sort({ date: -1 }).find()
)
const series = computed(() => [...new Set((seminars.value ?? []).map(s => s.series).filter(Boolean))])
const tags   = computed(() => [...new Set((seminars.value ?? []).flatMap(s => s.tags ?? []))])

const selectedSeries = ref('all')
const selectedTag    = ref('all')
const expanded       = ref<string|null>(null)

const filtered = computed(() => {
  let items = seminars.value ?? []
  if (selectedSeries.value !== 'all') items = items.filter(s => s.series === selectedSeries.value)
  if (selectedTag.value   !== 'all') items = items.filter(s => s.tags?.includes(selectedTag.value))
  return items
})

function ytThumb(id: string) { return `https://img.youtube.com/vi/${id}/mqdefault.jpg` }
function toggle(slug: string) { expanded.value = expanded.value === slug ? null : slug }
</script>
<template>
  <div>
    <section style="background:linear-gradient(180deg,#FBFAF7,#F3EEE4);border-bottom:1px solid rgba(15,33,43,.08);">
      <div class="mx-auto" style="max-width:1240px;padding:64px 40px 48px;">
        <span class="font-mono font-bold tracking-[.14em] uppercase text-clay" style="font-size:12px;">Learn &amp; Train · Cyberseminars</span>
        <h1 style="font:700 clamp(32px,4vw,48px)/1.05 'Schibsted Grotesk';letter-spacing:-.02em;color:#0F2E44;margin:14px 0 14px;">350+ free recordings on water science.</h1>
        <p style="font:400 16px/1.6 'Hanken Grotesk';color:#3a4d57;max-width:560px;">Virtual presentations, panels, and demos from leading water scientists — all free, all archived, many with full transcripts.</p>
      </div>
    </section>

    <!-- Filters -->
    <div class="mx-auto" style="max-width:1240px;padding:28px 40px 0;">
      <div class="flex gap-6 flex-wrap">
        <div>
          <p class="font-mono font-bold tracking-[.08em] uppercase text-muted mb-2" style="font-size:10px;">Series</p>
          <div class="flex gap-[6px] flex-wrap">
            <button @click="selectedSeries='all'" :style="`font:600 12.5px 'Hanken Grotesk';padding:6px 13px;border-radius:22px;border:1px solid ${selectedSeries==='all'?'#0F2E44':'rgba(15,33,43,.18)'};background:${selectedSeries==='all'?'#0F2E44':'transparent'};color:${selectedSeries==='all'?'#fff':'#3a4d57'};cursor:pointer;`">All</button>
            <button v-for="s in series" :key="s" @click="selectedSeries=s" :style="`font:600 12.5px 'Hanken Grotesk';padding:6px 13px;border-radius:22px;border:1px solid ${selectedSeries===s?'#0F2E44':'rgba(15,33,43,.18)'};background:${selectedSeries===s?'#0F2E44':'transparent'};color:${selectedSeries===s?'#fff':'#3a4d57'};cursor:pointer;`">{{ s }}</button>
          </div>
        </div>
      </div>
    </div>

    <!-- Grid -->
    <div class="mx-auto rgrid rgrid-multi" style="max-width:1240px;padding:24px 40px 80px;display:grid;gap:18px;--cols:repeat(3,1fr);">
      <div v-for="s in filtered" :key="s.slug" class="card-lift bg-white rounded-card overflow-hidden flex flex-col" style="border:1px solid rgba(15,33,43,.1);">
        <!-- Thumbnail or placeholder -->
        <div class="relative cursor-pointer" style="height:160px;" @click="toggle(s.slug)">
          <img v-if="s.youtube_id" :src="ytThumb(s.youtube_id)" :alt="s.title" style="width:100%;height:100%;object-fit:cover;" />
          <div v-else class="w-full h-full flex items-center justify-center" style="background:linear-gradient(150deg,#10324c,#1F6FB2);">
            <span class="font-mono font-bold tracking-[.1em]" style="font-size:11px;color:rgba(255,255,255,.7);">NO VIDEO YET</span>
          </div>
          <!-- Play overlay -->
          <div v-if="s.youtube_id && expanded !== s.slug" class="absolute inset-0 flex items-center justify-center" style="background:rgba(0,0,0,.25);">
            <div class="rounded-full bg-white flex items-center justify-center" style="width:44px;height:44px;opacity:.9;">
              <svg width="16" height="16" viewBox="0 0 20 20"><polygon points="6,4 16,10 6,16" fill="#0F2E44"/></svg>
            </div>
          </div>
          <span v-if="s.has_transcript" class="absolute font-mono font-bold text-white rounded-[4px]" style="right:10px;top:10px;font-size:9.5px;background:rgba(31,159,85,.9);padding:3px 7px;">TRANSCRIPT ✓</span>
        </div>
        <!-- Embed when expanded -->
        <div v-if="expanded === s.slug && s.youtube_id" style="aspect-ratio:16/9;">
          <iframe :src="`https://www.youtube-nocookie.com/embed/${s.youtube_id}?autoplay=1&rel=0`" style="width:100%;height:100%;border:none;" allowfullscreen></iframe>
        </div>
        <div class="flex flex-col flex-1" style="padding:16px;">
          <div class="flex items-center gap-2 mb-2 flex-wrap">
            <span class="font-mono text-[10px] text-muted">{{ s.date }}</span>
            <span v-if="s.series" class="font-mono text-[10px] rounded-[4px]" style="background:rgba(31,111,178,.09);color:#1F6FB2;padding:2px 7px;">{{ s.series }}</span>
          </div>
          <h3 style="font:700 15px/1.3 'Schibsted Grotesk';color:#0F2E44;margin:0 0 8px;flex:1;">{{ s.title }}</h3>
          <p v-if="s.speakers?.length" class="font-mono text-[10px] text-muted">{{ s.speakers.join(' · ') }}</p>
        </div>
      </div>
    </div>
  </div>
</template>
