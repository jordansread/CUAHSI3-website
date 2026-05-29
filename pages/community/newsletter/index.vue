<script setup lang="ts">
useHead({
  title: 'Newsletter archive · CUAHSI',
  meta: [{ name: 'description', content: 'Monthly CUAHSI e-newsletters covering water science research, program updates, community spotlights, and events. Every issue is fully searchable and indexed on cuahsi.org.' }]
})

const { data: issues } = await useAsyncData('newsletter-archive', () =>
  queryContent('newsletter').where({ published: true }).sort({ date: -1 }).find()
)

const allTopics = computed(() =>
  [...new Set(issues.value?.flatMap(i => i.topics ?? []))].sort()
)

const activeFilter = ref('all')
const filtered = computed(() =>
  activeFilter.value === 'all'
    ? issues.value
    : issues.value?.filter(i => i.topics?.includes(activeFilter.value))
)

function fmtDate(d: string) {
  return new Date(d).toLocaleDateString('en-US', { month: 'long', year: 'numeric' })
}
</script>

<template>
  <div>
    <!-- Nav -->
    <nav style="border-bottom:0.5px solid #e5e7eb;">
      <div style="max-width:1024px;margin:0 auto;padding:0 24px;display:flex;align-items:center;height:48px;">
        <NuxtLink to="/" style="font-size:14px;font-weight:500;margin-right:28px;text-decoration:none;color:inherit;">CUAHSI <span style="color:#9ca3af;font-weight:400;">water science</span></NuxtLink>
        <NuxtLink to="/about" style="font-size:12px;color:#6b7280;padding:0 12px;text-decoration:none;">About</NuxtLink>
        <NuxtLink to="/data-platforms" style="font-size:12px;color:#6b7280;padding:0 12px;text-decoration:none;">Tools &amp; platforms</NuxtLink>
        <NuxtLink to="/learn-train" style="font-size:12px;color:#6b7280;padding:0 12px;text-decoration:none;">Learn &amp; train</NuxtLink>
        <NuxtLink to="/community" style="font-size:12px;color:#6b7280;padding:0 12px;text-decoration:none;">Get involved</NuxtLink>
      </div>
    </nav>

    <div style="max-width:1024px;margin:0 auto;padding:0 24px;">
      <div style="padding:36px 0 24px;">
        <p style="font-size:11px;color:#9ca3af;margin-bottom:8px;">Community / Newsletter</p>
        <h1 style="font-size:28px;font-weight:500;margin-bottom:10px;">CUAHSI e-Newsletter archive</h1>
        <p style="font-size:14px;color:#6b7280;line-height:1.6;max-width:520px;margin-bottom:20px;">
          Monthly updates on water science research, CUAHSI programs, community spotlights, and events.
          Every issue is fully indexed on cuahsi.org.
        </p>
        <!-- Filter pills -->
        <div style="display:flex;gap:6px;flex-wrap:wrap;">
          <button @click="activeFilter='all'"
            :style="`font-size:12px;padding:5px 12px;border-radius:99px;border:0.5px solid ${activeFilter==='all'?'#111827':'#d1d5db'};background:${activeFilter==='all'?'#111827':'transparent'};color:${activeFilter==='all'?'white':'#6b7280'};cursor:pointer;`">
            All issues
          </button>
          <button v-for="t in allTopics" :key="t" @click="activeFilter=t"
            :style="`font-size:12px;padding:5px 12px;border-radius:99px;border:0.5px solid ${activeFilter===t?'#111827':'#d1d5db'};background:${activeFilter===t?'#111827':'transparent'};color:${activeFilter===t?'white':'#6b7280'};cursor:pointer;`">
            {{ t.replace(/-/g,' ') }}
          </button>
        </div>
      </div>

      <div style="border-top:0.5px solid #f3f4f6;">
        <div v-for="issue in filtered" :key="issue._path"
          style="display:flex;gap:16px;align-items:flex-start;padding:18px 0;border-bottom:0.5px solid #f3f4f6;">
          <span style="font-size:11px;color:#9ca3af;min-width:80px;flex-shrink:0;padding-top:3px;">{{ fmtDate(issue.date) }}</span>
          <div style="flex:1;">
            <NuxtLink :to="`/community/newsletter/${issue.slug}`"
              style="font-size:14px;font-weight:500;text-decoration:none;color:inherit;display:block;margin-bottom:5px;line-height:1.4;">
              {{ issue.title }}
            </NuxtLink>
            <p style="font-size:12px;color:#6b7280;line-height:1.5;margin-bottom:8px;">{{ issue.summary }}</p>
            <div style="display:flex;gap:5px;flex-wrap:wrap;">
              <span v-for="t in issue.topics" :key="t"
                style="font-size:11px;padding:2px 8px;border-radius:99px;background:#f0fdf4;color:#166534;border:0.5px solid #bbf7d0;">
                {{ t.replace(/-/g,' ') }}
              </span>
            </div>
          </div>
          <NuxtLink :to="`/community/newsletter/${issue.slug}`"
            style="font-size:12px;color:#9ca3af;text-decoration:none;flex-shrink:0;padding-top:3px;">Read →</NuxtLink>
        </div>
      </div>
    </div>

    <footer style="border-top:0.5px solid #f3f4f6;margin-top:40px;">
      <div style="max-width:1024px;margin:0 auto;padding:14px 24px;display:flex;justify-content:space-between;">
        <div style="display:flex;gap:20px;">
          <NuxtLink to="/about" style="font-size:12px;color:#9ca3af;text-decoration:none;">Contact</NuxtLink>
          <NuxtLink to="/about" style="font-size:12px;color:#9ca3af;text-decoration:none;">Membership</NuxtLink>
        </div>
        <p style="font-size:12px;color:#9ca3af;">© 2026 CUAHSI</p>
      </div>
    </footer>
  </div>
</template>
