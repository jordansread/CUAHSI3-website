<script setup lang="ts">
useHead({ title: 'Events · CUAHSI' })
const { data: allEvents } = await useAsyncData('events-all', () =>
  queryContent('events').where({ published: true }).sort({ start: 1 }).find()
)
const now = ref(new Date())
const upcoming = computed(() => (allEvents.value ?? []).filter(e => new Date(e.start) >= now.value))
const past     = computed(() => (allEvents.value ?? []).filter(e => new Date(e.start) <  now.value).reverse())
onMounted(() => { now.value = new Date() })

function fmtFull(d: string) { return new Date(d).toLocaleDateString('en-US', { weekday:'short', month:'long', day:'numeric', year:'numeric' }) }
function fmtShort(d: string) { return new Date(d).toLocaleDateString('en-US', { month:'short', day:'numeric', year:'numeric' }) }
function fmtDay(d: string) { return new Date(d).toLocaleDateString('en-US', { day: '2-digit' }) }
function fmtMon(d: string) { return new Date(d).toLocaleDateString('en-US', { month: 'short' }).toUpperCase() }

const typeColors: Record<string,string> = {
  conference: 'oklch(0.55 0.13 245)',
  workshop:   'oklch(0.56 0.12 200)',
  webinar:    'oklch(0.55 0.12 150)',
  'webinar-series': 'oklch(0.55 0.12 150)',
  deadline:   'oklch(0.61 0.13 55)',
  field:      'oklch(0.52 0.13 290)',
}
function typeColor(t: string) { return typeColors[t] ?? '#5C6E78' }
</script>

<template>
  <div>
    <CommunityHero title="Events." lead="Workshops, colloquia, cyberseminars, and open houses across the water science calendar." />

    <div class="mx-auto" style="max-width:1240px;padding:44px 40px 80px;">

      <!-- Upcoming -->
      <div class="mb-12">
        <span class="font-mono font-bold tracking-[.1em] uppercase text-muted mb-6 block" style="font-size:11px;">Upcoming</span>
        <div style="display:grid;grid-template-columns:repeat(3,1fr);gap:18px;">
          <NuxtLink v-for="e in upcoming" :key="e.slug" :to="`/community/events/${e.slug}`"
            class="card-lift bg-white rounded-card overflow-hidden flex flex-col"
            style="border:1px solid rgba(15,33,43,.1);text-decoration:none;">
            <!-- Header band -->
            <div class="relative flex items-end" :style="`height:80px;background:linear-gradient(155deg,#10324c,#236193 70%);padding:12px 14px;`">
              <span class="font-mono font-bold text-white rounded-[4px]" :style="`font-size:10px;background:${typeColor(e.type)};padding:4px 8px;`">{{ e.type?.toUpperCase() }}</span>
              <span class="ml-auto font-mono text-[10px] rounded-[4px]" style="background:rgba(255,255,255,.18);color:#fff;padding:4px 8px;">{{ e.location?.mode }}</span>
            </div>
            <div style="padding:16px;">
              <div class="font-mono font-bold text-clay mb-2" style="font-size:12px;">{{ fmtFull(e.start) }}</div>
              <h3 style="font:700 17px/1.3 'Schibsted Grotesk';color:#0F2E44;margin:0 0 6px;">{{ e.title }}</h3>
              <p v-if="e.location?.city" class="font-mono text-[11px] text-muted mb-3">{{ e.location.city }}</p>
              <span class="arrow-row inline-flex items-center gap-2" style="font:600 13px 'Hanken Grotesk';color:#1F6FB2;">{{ e.registration?.url ? 'Register' : 'Learn more' }} <span class="arr">→</span></span>
            </div>
          </NuxtLink>
        </div>
        <p v-if="!upcoming.length" style="font:400 14px 'Hanken Grotesk';color:#5C6E78;padding:24px 0;">No upcoming events right now — check back soon.</p>
      </div>

      <!-- Past -->
      <div v-if="past.length">
        <span class="font-mono font-bold tracking-[.1em] uppercase text-muted mb-4 block" style="font-size:11px;">Past events</span>
        <div class="flex flex-col">
          <NuxtLink v-for="e in past.slice(0,20)" :key="e.slug" :to="`/community/events/${e.slug}`"
            class="arrow-row flex gap-6 items-baseline"
            style="padding:12px 0;border-bottom:1px solid rgba(15,33,43,.08);text-decoration:none;">
            <span class="font-mono text-[11px] text-muted flex-none" style="min-width:96px;">{{ fmtShort(e.start) }}</span>
            <span style="font:600 14.5px 'Hanken Grotesk';color:#0F2E44;flex:1;line-height:1.3;" class="hover:text-water transition-colors">{{ e.title }}</span>
            <span v-if="e.location?.city" class="font-mono text-[11px] text-muted flex-none">{{ e.location.city }}</span>
            <span class="arr text-muted" style="font-size:13px;flex-none;">→</span>
          </NuxtLink>
        </div>
      </div>
    </div>
  </div>
</template>
