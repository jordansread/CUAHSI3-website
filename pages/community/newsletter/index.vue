<script setup lang="ts">
useHead({ title: 'Newsletter Archive · CUAHSI' })
const { data: issues } = await useAsyncData('newsletter', () =>
  queryContent('newsletter').where({ published: true }).sort({ date: -1 }).find()
)

const allTopics = computed(() => {
  const ts = new Set<string>()
  for (const i of issues.value ?? []) for (const t of i.topics ?? []) ts.add(t)
  return [...ts]
})
const selectedTopic = ref('all')
const filtered = computed(() => {
  if (selectedTopic.value === 'all') return issues.value ?? []
  return (issues.value ?? []).filter(i => i.topics?.includes(selectedTopic.value))
})

function fmtDate(d: string) { return new Date(d).toLocaleDateString('en-US', { month: 'long', year: 'numeric' }) }
function chipStyle(active: boolean) {
  return `font:600 13px 'Hanken Grotesk';padding:7px 15px;border-radius:22px;border:1px solid ${active ? '#0F2E44' : 'rgba(15,33,43,.18)'};background:${active ? '#0F2E44' : 'transparent'};color:${active ? '#fff' : '#3a4d57'};cursor:pointer;`
}
</script>

<template>
  <div>
    <CommunityHero title="Newsletter archive." lead="Every issue — funding deadlines, datasets, cyberseminars, and community news." />

    <div class="mx-auto" style="max-width:1240px;padding:36px 40px 80px;">

      <!-- Topic filters -->
      <div class="flex items-center justify-between gap-4 flex-wrap mb-6">
        <div class="flex gap-[6px] flex-wrap">
          <button :style="chipStyle(selectedTopic === 'all')" @click="selectedTopic = 'all'">All topics</button>
          <button v-for="t in allTopics" :key="t" :style="chipStyle(selectedTopic === t)" @click="selectedTopic = t">
            {{ t.replace(/-/g,' ') }}
          </button>
        </div>
        <span class="font-mono text-[11px] text-muted">{{ filtered.length }} ISSUES</span>
      </div>

      <!-- Issue list -->
      <div class="flex flex-col">
        <NuxtLink v-for="issue in filtered" :key="issue.slug" :to="`/community/newsletter/${issue.slug}`"
          class="arrow-row flex gap-8 items-start"
          style="padding:18px 0;border-top:1px solid rgba(15,33,43,.08);text-decoration:none;">
          <span class="font-mono text-[12px] text-muted flex-none" style="min-width:130px;padding-top:2px;">{{ fmtDate(issue.date) }}</span>
          <div class="flex-1 min-w-0">
            <h3 style="font:700 16px/1.3 'Schibsted Grotesk';color:#0F2E44;margin:0 0 5px;" class="hover:text-water transition-colors">{{ issue.title }}</h3>
            <p style="font:400 13.5px/1.5 'Hanken Grotesk';color:#5C6E78;margin:0 0 8px;" class="line-clamp-2">{{ issue.summary }}</p>
            <div class="flex gap-[5px] flex-wrap">
              <span v-for="t in issue.topics?.slice(0,4)" :key="t" class="font-mono text-[10px] rounded-[4px]" style="background:rgba(31,111,178,.09);color:#1F6FB2;padding:2px 7px;">{{ t }}</span>
            </div>
          </div>
          <span class="arr text-water flex-none mt-1" style="font-size:16px;">→</span>
        </NuxtLink>
      </div>

      <div v-if="issue?.mailchimp_url" v-for="issue in []" :key="'x'"></div>

      <!-- Subscribe -->
      <div class="rounded-[12px] bg-navy mt-12" style="padding:32px 40px;display:flex;align-items:center;justify-content:space-between;gap:32px;flex-wrap:wrap;">
        <div>
          <p style="font:700 18px 'Schibsted Grotesk';color:#fff;margin-bottom:4px;">Get the next issue in your inbox.</p>
          <p style="font:400 14px 'Hanken Grotesk';color:#7fa4bf;">Monthly — no spam, unsubscribe anytime.</p>
        </div>
        <div class="flex gap-3">
          <input type="email" placeholder="your@university.edu" class="rounded-btn bg-white text-ink" style="font:400 14px 'Hanken Grotesk';padding:11px 14px;border:none;outline:none;width:200px;" />
          <button class="rounded-btn text-white flex-none" style="font:600 14px 'Hanken Grotesk';background:#C0603C;padding:11px 20px;border:none;cursor:pointer;">Subscribe</button>
        </div>
      </div>
    </div>
  </div>
</template>
