<script setup lang="ts">
const query = ref('')
const results = ref<any[]>([])
const isOpen = ref(false)
const loading = ref(false)
const searchEl = ref<HTMLInputElement | null>(null)
let pagefind: any = null

async function loadPagefind() {
  if (pagefind) return
  try {
    pagefind = await import('/pagefind/pagefind.js')
    await pagefind.init()
  } catch {
    pagefind = null
  }
}

async function search() {
  if (!query.value.trim()) { results.value = []; return }
  await loadPagefind()
  if (!pagefind) return
  loading.value = true
  try {
    const res = await pagefind.search(query.value)
    const data = await Promise.all(res.results.slice(0, 8).map((r: any) => r.data()))
    results.value = data
  } finally {
    loading.value = false
  }
}

function open() {
  isOpen.value = true
  nextTick(() => searchEl.value?.focus())
}

function close() {
  isOpen.value = false
  query.value = ''
  results.value = []
}

onMounted(() => {
  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') close()
    if ((e.metaKey || e.ctrlKey) && e.key === 'k') { e.preventDefault(); open() }
  })
})

const router = useRouter()
function navigate(url: string) {
  close()
  router.push(url)
}
</script>

<template>
  <div style="position:relative;">
    <button @click="open"
      style="display:flex;align-items:center;gap:6px;padding:4px 10px;border:0.5px solid #e5e7eb;border-radius:6px;background:white;cursor:pointer;color:#9ca3af;font-size:12px;">
      <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        <circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/>
      </svg>
      <span>Search</span>
      <span style="font-size:10px;color:#d1d5db;margin-left:2px;">⌘K</span>
    </button>

    <Teleport to="body">
      <div v-if="isOpen"
        style="position:fixed;inset:0;z-index:1000;display:flex;align-items:flex-start;justify-content:center;padding-top:80px;"
        @click.self="close">
        <div style="position:fixed;inset:0;background:rgba(0,0,0,0.3);" @click="close" />
        <div style="position:relative;width:100%;max-width:560px;background:white;border-radius:12px;box-shadow:0 20px 60px rgba(0,0,0,0.15);overflow:hidden;margin:0 16px;">
          <div style="display:flex;align-items:center;gap:10px;padding:14px 16px;border-bottom:0.5px solid #f3f4f6;">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#9ca3af" stroke-width="2" style="flex-shrink:0;">
              <circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/>
            </svg>
            <input
              ref="searchEl"
              v-model="query"
              @input="search"
              placeholder="Search highlights, news, team, events..."
              style="flex:1;border:none;outline:none;font-size:15px;color:#111827;background:transparent;" />
            <button @click="close"
              style="font-size:11px;color:#9ca3af;border:0.5px solid #e5e7eb;border-radius:4px;padding:2px 6px;background:white;cursor:pointer;">
              Esc
            </button>
          </div>

          <div v-if="results.length" style="max-height:400px;overflow-y:auto;">
            <button v-for="r in results" :key="r.url"
              @click="navigate(r.url)"
              style="width:100%;text-align:left;padding:12px 16px;border:none;border-bottom:0.5px solid #f9fafb;background:white;cursor:pointer;display:block;">
              <p style="font-size:13px;font-weight:500;color:#111827;margin-bottom:3px;line-height:1.3;">{{ r.meta?.title ?? r.url }}</p>
              <p v-if="r.excerpt" style="font-size:12px;color:#6b7280;line-height:1.5;" v-html="r.excerpt" />
            </button>
          </div>

          <div v-else-if="query.length > 1 && !loading" style="padding:24px 16px;text-align:center;">
            <p style="font-size:13px;color:#9ca3af;">No results for <strong style="color:#374151;">{{ query }}</strong></p>
          </div>

          <div v-else-if="!query" style="padding:16px;display:flex;flex-wrap:wrap;gap:6px;">
            <NuxtLink v-for="link in [
              {label:'Highlights', to:'/highlights'},
              {label:'News', to:'/community/news'},
              {label:'Events', to:'/community/events'},
              {label:'Newsletter', to:'/community/newsletter'},
              {label:'Team', to:'/about/team'},
              {label:'Jobs', to:'/community/jobs'},
            ]" :key="link.to" :to="link.to" @click="close"
              style="font-size:12px;padding:4px 10px;border-radius:99px;background:#f3f4f6;color:#6b7280;text-decoration:none;">
              {{ link.label }}
            </NuxtLink>
          </div>

          <div style="padding:8px 16px;border-top:0.5px solid #f3f4f6;display:flex;justify-content:flex-end;">
            <span style="font-size:11px;color:#d1d5db;">Powered by Pagefind</span>
          </div>
        </div>
      </div>
    </Teleport>
  </div>
</template>
