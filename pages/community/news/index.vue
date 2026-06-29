<script setup lang="ts">
useHead({ title: 'News · CUAHSI' })
const { data: items } = await useAsyncData('news', () =>
  queryContent('news').where({ published: true }).sort({ date: -1 }).find()
)
function fmtDate(d: string) { return new Date(d).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }) }
</script>

<template>
  <div>
    <CommunityHero title="News & announcements." lead="Operational updates, service notices, and time-sensitive community items." />

    <div class="mx-auto" style="max-width:920px;padding:44px 40px 80px;">
      <div class="flex flex-col">
        <NuxtLink v-for="item in items" :key="item.slug" :to="`/community/news/${item.slug}`"
          class="arrow-row flex flex-col gap-2"
          style="padding:20px 0;border-top:1px solid rgba(15,33,43,.08);text-decoration:none;">
          <div class="flex items-center gap-3 flex-wrap">
            <span class="font-mono text-[11px] text-muted">{{ fmtDate(item.date) }}</span>
            <span v-for="tag in item.tags?.slice(0,2)" :key="tag" class="font-mono text-[10px] text-clay">· {{ tag }}</span>
          </div>
          <h3 style="font:700 18px/1.3 'Schibsted Grotesk';color:#0F2E44;margin:0;" class="hover:text-water transition-colors">{{ item.title }} <span class="arr text-water" style="font-size:14px;">→</span></h3>
          <p style="font:400 14.5px/1.55 'Hanken Grotesk';color:#5C6E78;margin:0;" class="line-clamp-2">{{ item.excerpt }}</p>
        </NuxtLink>
      </div>
    </div>
  </div>
</template>
