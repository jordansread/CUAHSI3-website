<script setup lang="ts">
useHead({
  title: 'Research highlights · CUAHSI',
  meta: [{ name: 'description', content: 'CUAHSI advances cyberinfrastructure and data innovation through collaborative research projects. Highlights from our research team and community partnerships.' }]
})

const { data: highlights } = await useAsyncData('research-highlights', () =>
  queryContent('research')
    .where({ published: true })
    .sort({ date: -1 })
    .find()
)

const allTags = computed(() =>
  [...new Set(highlights.value?.flatMap(h => h.tags ?? []))].sort()
)

const activeFilter = ref('all')
const activeYear = ref('all')

const years = computed(() =>
  [...new Set(highlights.value?.map(h => String(h.year)))].sort((a, b) => Number(b) - Number(a))
)

const filtered = computed(() => {
  let items = highlights.value ?? []
  if (activeYear.value !== 'all') items = items.filter(h => String(h.year) === activeYear.value)
  if (activeFilter.value !== 'all') items = items.filter(h => h.tags?.includes(activeFilter.value))
  return items
})

function fmtDate(d: string) {
  return new Date(d).toLocaleDateString('en-US', { month: 'long', year: 'numeric' })
}
</script>

<template>
  <div>
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

      <div style="padding:36px 0 28px;border-bottom:0.5px solid #f3f4f6;margin-bottom:32px;">
        <p style="font-size:11px;color:#9ca3af;margin-bottom:8px;">
          <NuxtLink to="/about" style="text-decoration:none;color:#9ca3af;">About</NuxtLink> / Research highlights
        </p>
        <h1 style="font-size:28px;font-weight:500;margin-bottom:10px;">Research highlights</h1>
        <p style="font-size:14px;color:#6b7280;line-height:1.65;max-width:560px;">
          CUAHSI advances cyberinfrastructure and data innovation through collaborative research projects
          — building tools and knowledge that benefit the entire water science community. Highlights span
          HydroShare development, community synthesis efforts, open science practices, and applied water prediction.
        </p>
      </div>

      <!-- Filters -->
      <div style="display:flex;gap:16px;align-items:flex-start;margin-bottom:32px;flex-wrap:wrap;">
        <div>
          <p style="font-size:11px;color:#9ca3af;margin-bottom:6px;font-weight:500;letter-spacing:.05em;text-transform:uppercase;">Year</p>
          <div style="display:flex;gap:5px;">
            <button @click="activeYear='all'"
              :style="`font-size:12px;padding:4px 10px;border-radius:99px;cursor:pointer;border:0.5px solid ${activeYear==='all'?'#111827':'#d1d5db'};background:${activeYear==='all'?'#111827':'transparent'};color:${activeYear==='all'?'white':'#6b7280'};`">
              All
            </button>
            <button v-for="y in years" :key="y" @click="activeYear=y"
              :style="`font-size:12px;padding:4px 10px;border-radius:99px;cursor:pointer;border:0.5px solid ${activeYear===y?'#111827':'#d1d5db'};background:${activeYear===y?'#111827':'transparent'};color:${activeYear===y?'white':'#6b7280'};`">
              {{ y }}
            </button>
          </div>
        </div>
        <div style="flex:1;">
          <p style="font-size:11px;color:#9ca3af;margin-bottom:6px;font-weight:500;letter-spacing:.05em;text-transform:uppercase;">Topic</p>
          <div style="display:flex;gap:5px;flex-wrap:wrap;">
            <button @click="activeFilter='all'"
              :style="`font-size:12px;padding:4px 10px;border-radius:99px;cursor:pointer;border:0.5px solid ${activeFilter==='all'?'#111827':'#d1d5db'};background:${activeFilter==='all'?'#111827':'transparent'};color:${activeFilter==='all'?'white':'#6b7280'};`">
              All topics
            </button>
            <button v-for="t in allTags" :key="t" @click="activeFilter=t"
              :style="`font-size:12px;padding:4px 10px;border-radius:99px;cursor:pointer;border:0.5px solid ${activeFilter===t?'#111827':'#d1d5db'};background:${activeFilter===t?'#111827':'transparent'};color:${activeFilter===t?'white':'#6b7280'};`">
              {{ t.replace(/-/g,' ') }}
            </button>
          </div>
        </div>
      </div>

      <!-- Results -->
      <div style="display:flex;flex-direction:column;gap:0;margin-bottom:48px;">
        <NuxtLink v-for="item in filtered" :key="item._path"
          :to="`/research/${item.slug}`"
          style="display:grid;grid-template-columns:120px minmax(0,1fr);gap:20px;padding:20px 0;border-bottom:0.5px solid #f3f4f6;text-decoration:none;color:inherit;align-items:start;">
          <div>
            <p style="font-size:11px;color:#9ca3af;margin-bottom:4px;">{{ fmtDate(item.date) }}</p>
            <span style="font-size:10px;padding:2px 7px;border-radius:99px;background:#EFF6FF;color:#1E40AF;border:0.5px solid #BFDBFE;">{{ item.year }}</span>
          </div>
          <div>
            <p style="font-size:14px;font-weight:500;line-height:1.35;margin-bottom:6px;">{{ item.title }}</p>
            <p style="font-size:13px;color:#6b7280;line-height:1.6;margin-bottom:10px;">{{ item.excerpt }}</p>
            <div style="display:flex;flex-wrap:wrap;gap:5px;">
              <span v-for="t in item.tags?.slice(0,4)" :key="t"
                style="font-size:11px;padding:2px 8px;border-radius:99px;background:#f3f4f6;color:#6b7280;">
                {{ t.replace(/-/g,' ') }}
              </span>
              <span v-if="item.partners?.length"
                style="font-size:11px;padding:2px 8px;border-radius:99px;background:#f0fdf4;color:#166534;border:0.5px solid #bbf7d0;">
                {{ item.partners[0] }}{{ item.partners.length > 1 ? ` +${item.partners.length - 1}` : '' }}
              </span>
            </div>
          </div>
        </NuxtLink>
        <p v-if="!filtered?.length" style="font-size:13px;color:#9ca3af;padding:20px 0;">No highlights match this filter.</p>
      </div>

      <!-- Annual reports CTA -->
      <div style="background:#f9fafb;border-radius:12px;padding:22px 24px;margin-bottom:48px;display:flex;align-items:center;justify-content:space-between;gap:20px;">
        <div>
          <p style="font-size:14px;font-weight:500;margin-bottom:4px;">Annual reports</p>
          <p style="font-size:13px;color:#6b7280;">Full year-in-review across HydroShare, training programs, and research. Available as PDF.</p>
        </div>
        <div style="display:flex;gap:8px;flex-shrink:0;">
          <a href="https://www.cuahsi.org/uploads/pages/img/2025-Annual-Report_Final_reduced.pdf" target="_blank" rel="noopener"
            style="font-size:12px;padding:7px 14px;border:0.5px solid #d1d5db;border-radius:8px;text-decoration:none;color:inherit;">
            2025 Report ↗
          </a>
          <a href="https://www.cuahsi.org/uploads/pages/img/Annual-Report-2024.pdf" target="_blank" rel="noopener"
            style="font-size:12px;padding:7px 14px;border:0.5px solid #d1d5db;border-radius:8px;text-decoration:none;color:inherit;">
            2024 Report ↗
          </a>
        </div>
      </div>

    </div>

    <footer style="border-top:0.5px solid #f3f4f6;">
      <div style="max-width:1024px;margin:0 auto;padding:14px 24px;display:flex;align-items:center;justify-content:space-between;">
        <div style="display:flex;gap:20px;">
          <NuxtLink to="/about" style="font-size:12px;color:#9ca3af;text-decoration:none;">About CUAHSI</NuxtLink>
          <NuxtLink to="/data-platforms" style="font-size:12px;color:#9ca3af;text-decoration:none;">Tools &amp; platforms</NuxtLink>
          <a href="mailto:connect@cuahsi.org" style="font-size:12px;color:#9ca3af;text-decoration:none;">Work with us</a>
        </div>
        <p style="font-size:12px;color:#9ca3af;">© 2026 CUAHSI</p>
      </div>
    </footer>
  </div>
</template>
