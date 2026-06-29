<script setup lang="ts">
useHead({ title: 'Job Board · CUAHSI' })
const { data: allJobs } = await useAsyncData('jobs', () =>
  queryContent('jobs').where({ published: true }).sort({ posted: -1 }).find()
)
const showExpired = ref(false)
const selectedType = ref('all')

const typeColors: Record<string,string> = {
  faculty:                  'oklch(0.55 0.13 245)',
  'post-doc':               'oklch(0.56 0.12 200)',
  'graduate-assistantship': 'oklch(0.52 0.13 290)',
  fellowship:               'oklch(0.55 0.12 150)',
  permanent:                'oklch(0.61 0.13 55)',
  internship:               'oklch(0.58 0.11 20)',
}
function tColor(t: string) { return typeColors[t] ?? '#5C6E78' }

const types = computed(() => ['all', ...new Set((allJobs.value ?? []).map(j => j.type).filter(Boolean))])

const filtered = computed(() => {
  const now = new Date()
  let items = allJobs.value ?? []
  if (!showExpired.value) items = items.filter(j => !j.deadline || new Date(j.deadline) >= now)
  if (selectedType.value !== 'all') items = items.filter(j => j.type === selectedType.value)
  return items
})

function fmtDate(d: string) { return new Date(d).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }) }
function chipStyle(active: boolean, color: string) {
  return `font:600 13px 'Hanken Grotesk';padding:7px 15px;border-radius:22px;border:1px solid ${active ? color : 'rgba(15,33,43,.18)'};background:${active ? color : 'transparent'};color:${active ? '#fff' : '#3a4d57'};cursor:pointer;`
}
</script>

<template>
  <div>
    <CommunityHero title="Job board." lead="Positions in hydrologic science from CUAHSI member institutions and partners." />

    <div class="mx-auto" style="max-width:1240px;padding:36px 40px 80px;">

      <!-- Filter row -->
      <div class="flex items-center justify-between gap-4 flex-wrap mb-6">
        <div class="flex gap-[6px] flex-wrap">
          <button v-for="t in types" :key="t"
            :style="chipStyle(selectedType === t, t === 'all' ? '#15212B' : tColor(t))"
            @click="selectedType = t">
            {{ t === 'all' ? 'All types' : t.replace(/-/g,' ') }}
          </button>
        </div>
        <div class="flex items-center gap-4">
          <span class="font-mono text-[11px] text-muted">{{ filtered.length }} OPEN ROLES</span>
          <label class="flex items-center gap-2 cursor-pointer" style="font:400 13px 'Hanken Grotesk';color:#5C6E78;">
            <input type="checkbox" v-model="showExpired" class="cursor-pointer" />
            Show past deadline
          </label>
        </div>
      </div>

      <!-- Job list -->
      <div class="flex flex-col">
        <a v-for="j in filtered" :key="j.slug" :href="j.url" target="_blank" rel="noopener"
          class="arrow-row flex items-start gap-4"
          style="padding:16px 0;border-bottom:1px solid rgba(15,33,43,.08);text-decoration:none;">
          <span class="font-mono font-bold text-white rounded-[4px] flex-none mt-[2px]" :style="`font-size:10px;background:${tColor(j.type)};padding:4px 9px;`">{{ j.type?.replace(/-/g,' ').toUpperCase() }}</span>
          <div class="flex-1 min-w-0">
            <div class="font-mono text-[11px] text-muted mb-1">{{ j.organization }}</div>
            <h3 style="font:700 16px/1.3 'Schibsted Grotesk';color:#0F2E44;margin:0 0 4px;">{{ j.title }}</h3>
            <div class="flex gap-3 flex-wrap">
              <span v-if="j.location" class="font-mono text-[11px] text-muted">{{ j.location }}</span>
              <span v-if="j.deadline" class="font-mono text-[11px] text-muted">Apply by {{ fmtDate(j.deadline) }}</span>
            </div>
          </div>
          <span class="arrow-row inline-flex items-center gap-1 flex-none mt-1" style="font:600 13px 'Hanken Grotesk';color:#1F6FB2;">View posting <span class="arr">→</span></span>
        </a>
      </div>
      <p v-if="!filtered.length" style="font:400 14px 'Hanken Grotesk';color:#5C6E78;padding:24px 0;">No open positions matching this filter.</p>

      <p class="font-mono text-[11px] text-muted mt-8">Aggregated from CUAHSI and <a href="https://joshswaterjobs.com" target="_blank" style="color:#1F6FB2;">Josh's Water Jobs</a>. Listings are updated regularly; verify deadlines directly with the posting organization.</p>
    </div>
  </div>
</template>
