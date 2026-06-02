<script setup lang="ts">
const route = useRoute()
const { data: item } = await useAsyncData(`research-${route.params.slug}`, () =>
  queryContent('research').where({ slug: route.params.slug, published: true }).findOne()
)
if (!item.value) throw createError({ statusCode: 404, message: 'Not found' })
useHead({ title: `${item.value.title} · CUAHSI Research` })

const { data: others } = await useAsyncData('research-others', () =>
  queryContent('research').where({ published: true }).sort({ date: -1 }).find()
)
const idx = computed(() => others.value?.findIndex(h => h.slug === route.params.slug) ?? -1)
const prev = computed(() => others.value?.[idx.value + 1] ?? null)
const next = computed(() => others.value?.[idx.value - 1] ?? null)

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
        <NuxtLink to="/programs" style="font-size:12px;color:#6b7280;padding:0 12px;text-decoration:none;">Programs</NuxtLink>
        <NuxtLink to="/community" style="font-size:12px;color:#6b7280;padding:0 12px;text-decoration:none;">Get involved</NuxtLink>
        <div style="margin-left:auto;">
          <SiteSearch />
        </div>
      </div>
    </nav>

    <div style="max-width:1024px;margin:0 auto;padding:0 24px;">
      <div style="display:grid;grid-template-columns:minmax(0,1fr) 220px;gap:48px;padding:36px 0 48px;">

        <article>
          <NuxtLink to="/highlights" style="font-size:12px;color:#9ca3af;text-decoration:none;display:block;margin-bottom:16px;">← Highlights</NuxtLink>
          <div style="display:flex;align-items:center;gap:8px;margin-bottom:10px;">
            <span style="font-size:11px;padding:2px 8px;border-radius:99px;background:#EFF6FF;color:#1E40AF;border:0.5px solid #BFDBFE;">{{ item.year }}</span>
            <span style="font-size:11px;color:#9ca3af;">{{ fmtDate(item.date) }}</span>
          </div>
          <h1 style="font-size:24px;font-weight:500;margin-bottom:12px;line-height:1.3;">{{ item.title }}</h1>
          <p style="font-size:14px;color:#6b7280;line-height:1.65;margin-bottom:24px;font-style:italic;">{{ item.excerpt }}</p>
          <div style="border-top:0.5px solid #f3f4f6;padding-top:24px;">
            <div style="font-size:14px;line-height:1.8;color:#374151;">
              <ContentRenderer :value="item" />
            </div>
          </div>

          <!-- Prev/next -->
          <div style="display:flex;justify-content:space-between;margin-top:40px;padding-top:20px;border-top:0.5px solid #f3f4f6;">
            <NuxtLink v-if="prev" :to="`/highlights/${prev.slug}`"
              style="font-size:12px;color:#6b7280;text-decoration:none;max-width:220px;">
              ← {{ prev.title }}
            </NuxtLink>
            <span v-else></span>
            <NuxtLink v-if="next" :to="`/highlights/${next.slug}`"
              style="font-size:12px;color:#6b7280;text-decoration:none;max-width:220px;text-align:right;">
              {{ next.title }} →
            </NuxtLink>
          </div>
        </article>

        <aside style="padding-top:68px;">
          <div style="background:#f9fafb;border-radius:12px;padding:16px;margin-bottom:18px;">
            <p style="font-size:11px;font-weight:500;letter-spacing:.06em;text-transform:uppercase;color:#9ca3af;margin-bottom:10px;">Details</p>
            <div style="display:flex;flex-direction:column;gap:10px;">
              <div v-if="item.funding">
                <p style="font-size:11px;color:#9ca3af;margin-bottom:2px;">Funding</p>
                <p style="font-size:12px;color:#374151;line-height:1.5;">{{ item.funding }}</p>
              </div>
              <div v-if="item.partners?.length">
                <p style="font-size:11px;color:#9ca3af;margin-bottom:4px;">Partners</p>
                <div style="display:flex;flex-direction:column;gap:3px;">
                  <p v-for="p in item.partners" :key="p" style="font-size:12px;color:#374151;">{{ p }}</p>
                </div>
              </div>
            </div>
          </div>

          <div v-if="item.tags?.length" style="margin-bottom:18px;">
            <p style="font-size:11px;font-weight:500;letter-spacing:.06em;text-transform:uppercase;color:#9ca3af;margin-bottom:8px;">Topics</p>
            <div style="display:flex;flex-wrap:wrap;gap:4px;">
              <span v-for="t in item.tags" :key="t"
                style="font-size:11px;padding:2px 8px;border-radius:99px;background:#f3f4f6;color:#6b7280;">
                {{ t.replace(/-/g,' ') }}
              </span>
            </div>
          </div>

          <div>
            <p style="font-size:11px;font-weight:500;letter-spacing:.06em;text-transform:uppercase;color:#9ca3af;margin-bottom:8px;">Other highlights</p>
            <div style="display:flex;flex-direction:column;gap:8px;">
              <NuxtLink v-for="o in others?.filter(h => h.slug !== item.slug).slice(0,3)" :key="o.slug"
                :to="`/highlights/${o.slug}`" style="text-decoration:none;">
                <p style="font-size:12px;color:#6b7280;line-height:1.4;">{{ o.title }}</p>
                <p style="font-size:11px;color:#9ca3af;">{{ fmtDate(o.date) }}</p>
              </NuxtLink>
            </div>
          </div>
        </aside>

      </div>
    </div>

    <footer style="border-top:0.5px solid #f3f4f6;">
      <div style="max-width:1024px;margin:0 auto;padding:14px 24px;display:flex;justify-content:space-between;">
        <NuxtLink to="/highlights" style="font-size:12px;color:#9ca3af;text-decoration:none;">← All research highlights</NuxtLink>
        <p style="font-size:12px;color:#9ca3af;">© 2026 CUAHSI</p>
      </div>
    </footer>
  </div>
</template>

<style>
.nuxt-content h2 { font-size: 15px; font-weight: 500; margin: 24px 0 8px; }
.nuxt-content h3 { font-size: 13px; font-weight: 500; margin: 18px 0 6px; }
.nuxt-content p { margin-bottom: 14px; }
.nuxt-content ul { padding-left: 18px; margin-bottom: 14px; }
.nuxt-content li { margin-bottom: 4px; }
.nuxt-content strong { font-weight: 500; }
</style>
