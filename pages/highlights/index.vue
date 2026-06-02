<script setup lang="ts">
useHead({
  title: 'Highlights · CUAHSI',
  meta: [{ name: 'description', content: 'Selected highlights from CUAHSI programs — research outcomes, infrastructure advances, training impacts, and community work.' }]
})

const { data: highlights } = await useAsyncData('research', () =>
  queryContent('research').where({ published: true }).sort({ date: -1 }).find()
)

const categoryLabels: Record<string, string> = {
  'research':           'Research',
  'cyberinfrastructure':'Cyberinfrastructure',
  'data-infrastructure':'Data infrastructure',
  'training':           'Training & programs',
  'community':          'Community',
}

const categoryColors: Record<string, { bg: string, text: string }> = {
  'research':            { bg: '#DCFCE7', text: '#15803D' },
  'cyberinfrastructure': { bg: '#EDE9FE', text: '#5B21B6' },
  'data-infrastructure': { bg: '#EFF6FF', text: '#1E40AF' },
  'training':            { bg: '#FFF7ED', text: '#C2410C' },
  'community':           { bg: '#FDF2F8', text: '#9D174D' },
}

const categories = computed(() =>
  [...new Set(highlights.value?.map(h => h.category).filter(Boolean))].sort()
)
const years = computed(() =>
  [...new Set(highlights.value?.map(h => String(h.year)))].sort((a,b) => Number(b)-Number(a))
)

const activeCategory = ref('all')
const activeYear = ref('all')

const filtered = computed(() => {
  let items = highlights.value ?? []
  if (activeCategory.value !== 'all') items = items.filter(h => h.category === activeCategory.value)
  if (activeYear.value !== 'all') items = items.filter(h => String(h.year) === activeYear.value)
  return items
})

function fmtDate(d: string) {
  return new Date(d).toLocaleDateString('en-US', { month: 'long', year: 'numeric' })
}
function catLabel(c: string) { return categoryLabels[c] ?? c }
function catBg(c: string) { return categoryColors[c]?.bg ?? '#F3F4F6' }
function catText(c: string) { return categoryColors[c]?.text ?? '#374151' }
</script>

<template>
  <div>
    <nav style="border-bottom:0.5px solid #e5e7eb;">
      <div style="max-width:1024px;margin:0 auto;padding:0 24px;display:flex;align-items:center;height:48px;">
        <NuxtLink to="/" style="font-size:14px;font-weight:500;margin-right:28px;text-decoration:none;color:inherit;">CUAHSI <span style="color:#9ca3af;font-weight:400;">water science</span></NuxtLink>
        <NuxtLink to="/about" style="font-size:12px;color:#6b7280;padding:0 12px;text-decoration:none;">About</NuxtLink>
        <NuxtLink to="/data-platforms" style="font-size:12px;color:#6b7280;padding:0 12px;text-decoration:none;">Tools &amp; platforms</NuxtLink>
        <NuxtLink to="/learn-train" style="font-size:12px;color:#6b7280;padding:0 12px;text-decoration:none;">Learn &amp; train</NuxtLink>
        <NuxtLink to="/programs" style="font-size:12px;color:#6b7280;padding:0 12px;text-decoration:none;">Programs</NuxtLink>
        <NuxtLink to="/community" style="font-size:12px;color:#6b7280;padding:0 12px;text-decoration:none;">Get involved</NuxtLink>
        <div style="margin-left:auto;">
          <SiteSearch />
        </div>
      </div>
    </nav>

    <div style="max-width:1024px;margin:0 auto;padding:0 24px;">
      <div style="padding:36px 0 28px;border-bottom:0.5px solid #f3f4f6;margin-bottom:28px;">
        <h1 style="font-size:28px;font-weight:500;margin-bottom:10px;">Highlights</h1>
        <p style="font-size:14px;color:#6b7280;line-height:1.65;max-width:560px;">
          Selected outcomes from CUAHSI programs — spanning research advances, infrastructure development,
          training impact, and community engagement.
        </p>
      </div>

      <!-- Filters -->
      <div style="display:flex;gap:20px;flex-wrap:wrap;margin-bottom:28px;align-items:flex-start;">
        <div>
          <p style="font-size:11px;color:#9ca3af;margin-bottom:6px;font-weight:500;letter-spacing:.05em;text-transform:uppercase;">Category</p>
          <div style="display:flex;gap:5px;flex-wrap:wrap;">
            <button @click="activeCategory='all'"
              :style="`font-size:12px;padding:4px 10px;border-radius:99px;cursor:pointer;border:0.5px solid ${activeCategory==='all'?'#111827':'#d1d5db'};background:${activeCategory==='all'?'#111827':'transparent'};color:${activeCategory==='all'?'white':'#6b7280'};`">
              All
            </button>
            <button v-for="cat in categories" :key="cat" @click="activeCategory=cat"
              :style="`font-size:12px;padding:4px 10px;border-radius:99px;cursor:pointer;border:0.5px solid ${activeCategory===cat?'#111827':'#d1d5db'};background:${activeCategory===cat?'#111827':'transparent'};color:${activeCategory===cat?'white':'#6b7280'};`">
              {{ catLabel(cat) }}
            </button>
          </div>
        </div>
        <div>
          <p style="font-size:11px;color:#9ca3af;margin-bottom:6px;font-weight:500;letter-spacing:.05em;text-transform:uppercase;">Year</p>
          <div style="display:flex;gap:5px;">
            <button @click="activeYear='all'"
              :style="`font-size:12px;padding:4px 10px;border-radius:99px;cursor:pointer;border:0.5px solid ${activeYear==='all'?'#111827':'#d1d5db'};background:${activeYear==='all'?'#111827':'transparent'};color:${activeYear==='all'?'white':'#6b7280'};`">
              All years
            </button>
            <button v-for="y in years" :key="y" @click="activeYear=y"
              :style="`font-size:12px;padding:4px 10px;border-radius:99px;cursor:pointer;border:0.5px solid ${activeYear===y?'#111827':'#d1d5db'};background:${activeYear===y?'#111827':'transparent'};color:${activeYear===y?'white':'#6b7280'};`">
              {{ y }}
            </button>
          </div>
        </div>
      </div>

      <!-- Highlights list -->
      <div style="margin-bottom:48px;">
        <NuxtLink v-for="item in filtered" :key="item._path"
          :to="`/highlights/${item.slug}`"
          style="display:grid;grid-template-columns:auto minmax(0,1fr) 120px;gap:16px;padding:18px 0;border-bottom:0.5px solid #f3f4f6;text-decoration:none;color:inherit;align-items:start;">
          <div style="width:3px;border-radius:2px;align-self:stretch;margin-top:2px;"
            :style="`background:${catBg(item.category)};border:0.5px solid ${catText(item.category)}22;`">
          </div>
          <div>
            <div style="display:flex;gap:6px;align-items:center;margin-bottom:5px;flex-wrap:wrap;">
              <span :style="`font-size:11px;padding:1px 8px;border-radius:99px;font-weight:500;background:${catBg(item.category)};color:${catText(item.category)};`">
                {{ catLabel(item.category) }}
              </span>
              <span style="font-size:11px;color:#9ca3af;">{{ item.year }}</span>
            </div>
            <p style="font-size:14px;font-weight:500;line-height:1.35;margin-bottom:5px;">{{ item.title }}</p>
            <p style="font-size:13px;color:#6b7280;line-height:1.55;">{{ item.excerpt }}</p>
            <div v-if="item.people_mentioned?.length" style="display:flex;gap:5px;flex-wrap:wrap;margin-top:7px;">
              <span v-for="p in item.people_mentioned" :key="p"
                style="font-size:11px;color:#9ca3af;padding:1px 7px;border-radius:99px;background:#f9fafb;">
                {{ p.replace(/-/g,' ') }}
              </span>
            </div>
          </div>
          <div style="text-align:right;padding-top:2px;">
            <p style="font-size:11px;color:#9ca3af;">{{ fmtDate(item.date) }}</p>
          </div>
        </NuxtLink>
        <p v-if="!filtered?.length" style="font-size:13px;color:#9ca3af;padding:20px 0;">No highlights match this filter.</p>
      </div>

      <!-- Annual reports -->
      <div style="background:#f9fafb;border-radius:12px;padding:20px 24px;margin-bottom:48px;">
        <p style="font-size:12px;font-weight:500;color:#374151;margin-bottom:4px;">Annual reports</p>
        <p style="font-size:13px;color:#6b7280;line-height:1.6;margin-bottom:12px;">Full year-in-review across HydroShare, training programs, and research.</p>
        <div style="display:flex;gap:10px;flex-wrap:wrap;">
          <a href="https://www.cuahsi.org/uploads/pages/img/2025-Annual-Report_Final_reduced.pdf" target="_blank" rel="noopener"
            style="font-size:12px;padding:6px 14px;border:0.5px solid #d1d5db;border-radius:8px;text-decoration:none;color:inherit;">2025 Annual Report ↗</a>
          <a href="https://www.cuahsi.org/uploads/pages/img/Annual-Report-2024.pdf" target="_blank" rel="noopener"
            style="font-size:12px;padding:6px 14px;border:0.5px solid #d1d5db;border-radius:8px;text-decoration:none;color:inherit;">2024 Annual Report ↗</a>
        </div>
      </div>
    </div>

    <footer style="border-top:0.5px solid #f3f4f6;">
      <div style="max-width:1024px;margin:0 auto;padding:14px 24px;display:flex;justify-content:space-between;">
        <div style="display:flex;gap:20px;">
          <NuxtLink to="/community/news" style="font-size:12px;color:#9ca3af;text-decoration:none;">News</NuxtLink>
          <NuxtLink to="/community/newsletter" style="font-size:12px;color:#9ca3af;text-decoration:none;">Newsletter</NuxtLink>
        </div>
        <p style="font-size:12px;color:#9ca3af;">© 2026 CUAHSI</p>
      </div>
    </footer>
  </div>
</template>
