<script setup lang="ts">
const route = useRoute()
const slug = route.params.slug as string
const { data: item } = await useAsyncData(`news-${slug}`, () =>
  queryContent('news').where({ slug, published: true }).findOne().catch(() => null)
)
const notFound = computed(() =>
  !item.value || !item.value._path?.startsWith('/news/')
)
useHead({ title: computed(() => item.value?.title ?? 'Not found') })
function fmtDate(d: string) { return new Date(d).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' }) }
</script>
<template>
  <div>
    <div v-if="notFound" style="max-width:720px;margin:80px auto;padding:0 40px;text-align:center;">
      <p class="font-mono text-muted mb-4" style="font-size:13px;">That news item doesn't exist.</p>
      <NuxtLink to="/community/news" style="font:600 14px 'Hanken Grotesk';color:#1F6FB2;">← Back to news</NuxtLink>
    </div>
    <div v-else-if="item">
      <section style="background:linear-gradient(180deg,#FBFAF7,#F3EEE4);border-bottom:1px solid rgba(15,33,43,.08);">
        <div class="mx-auto" style="max-width:920px;padding:52px 40px 48px;">
          <p class="font-mono text-[11px] text-muted mb-3"><NuxtLink to="/community/news" style="color:#5C6E78;">← News</NuxtLink></p>
          <div class="flex items-center gap-3 mb-4 flex-wrap">
            <span class="font-mono text-[11px] text-muted">{{ fmtDate(item.date) }}</span>
            <span v-for="tag in item.tags" :key="tag" class="font-mono text-[10px] text-clay">· {{ tag }}</span>
          </div>
          <h1 style="font:700 clamp(26px,3.2vw,40px)/1.1 'Schibsted Grotesk';letter-spacing:-.016em;color:#0F2E44;margin:0;">{{ item.title }}</h1>
        </div>
      </section>
      <div class="mx-auto" style="max-width:720px;padding:48px 40px 80px;">
        <div v-if="item.body?.children?.length">
          <ContentRenderer :value="item" class="news-prose" />
        </div>
        <p v-else style="font:400 15px/1.75 'Hanken Grotesk';color:#3a4d57;">{{ item.excerpt }}</p>
        <a v-if="item.source_url" :href="item.source_url" target="_blank" rel="noopener"
          class="arrow-row inline-flex items-center gap-2 mt-8 rounded-btn" style="font:600 14px 'Hanken Grotesk';color:#0F2E44;padding:11px 18px;border:1.5px solid rgba(15,46,68,.22);">
          Read full article ↗
        </a>
        <div class="mt-10 pt-6" style="border-top:1px solid rgba(15,33,43,.08);">
          <NuxtLink to="/community/news" class="arrow-row inline-flex items-center gap-2" style="font:600 14px 'Hanken Grotesk';color:#1F6FB2;"><span style="transform:scaleX(-1);display:inline-block;">→</span> All news</NuxtLink>
        </div>
      </div>
    </div>
  </div>
</template>
