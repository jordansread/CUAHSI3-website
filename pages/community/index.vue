<script setup lang="ts">
useHead({ title: 'Community · CUAHSI' })

const { data: allEvents } = await useAsyncData('comm-events', () =>
  queryContent('events').where({ published: true }).sort({ start: 1 }).find()
)
const upcomingEvents = computed(() =>
  (allEvents.value ?? []).filter(e => new Date(e.start) >= new Date()).slice(0, 4)
)
const { data: latestNews } = await useAsyncData('comm-news', () =>
  queryContent('news').where({ published: true }).sort({ date: -1 }).limit(4).find()
)

function fmtDay(d: string) { return new Date(d).toLocaleDateString('en-US', { day: '2-digit' }) }
function fmtMon(d: string) { return new Date(d).toLocaleDateString('en-US', { month: 'short' }).toUpperCase() }
function fmtDate(d: string) { return new Date(d).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }) }

const cards = [
  { tag: 'WORKSHOPS & COLLOQUIA', title: 'Events', desc: 'Workshops, field schools, colloquia, and virtual events across the water science calendar.', cta: 'Browse events', to: '/community/events' },
  { tag: 'POSITIONS & FELLOWSHIPS', title: 'Job board', desc: 'Faculty positions, postdocs, grad assistantships, and fellowships from member institutions.', cta: 'View openings', to: '/community/jobs' },
  { tag: 'MONTHLY UPDATES', title: 'Newsletter', desc: 'Funding deadlines, new datasets, cyberseminars, and community news — every month.', cta: 'Browse archive', to: '/community/newsletter' },
  { tag: 'ANNOUNCEMENTS', title: 'News', desc: 'Operational updates, platform changes, and time-sensitive community items.', cta: 'Read news', to: '/community/news' },
  { tag: 'BRING CUAHSI TO YOU', title: 'Campus visits', desc: 'CUAHSI staff visit member universities for workshops and student engagement at no cost.', cta: 'Learn more', to: '/community/campus-visits' },
  { tag: 'CONSORTIUM MEMBERSHIP', title: 'Join CUAHSI', desc: 'Connect your institution to shared infrastructure, training, and governance.', cta: 'Learn about membership', to: '/about/membership' },
]
</script>

<template>
  <div>
    <CommunityHero
      title="Get involved."
      lead="Events, jobs, the newsletter, and ways to bring CUAHSI to your campus — the connective tissue of the consortium." />

    <div class="mx-auto" style="max-width:1240px;padding:52px 40px 0;">

      <!-- Ways to get involved -->
      <div style="display:grid;grid-template-columns:repeat(3,1fr);gap:16px;margin-bottom:56px;">
        <NuxtLink v-for="c in cards" :key="c.to" :to="c.to"
          class="card-lift arrow-row bg-white rounded-card flex flex-col"
          style="border:1px solid rgba(15,33,43,.1);padding:22px;text-decoration:none;">
          <span class="font-mono font-bold tracking-[.06em] uppercase text-clay mb-3" style="font-size:11px;">{{ c.tag }}</span>
          <span style="font:700 20px 'Schibsted Grotesk';color:#0F2E44;display:block;margin-bottom:8px;">{{ c.title }}</span>
          <span style="font:400 14px/1.55 'Hanken Grotesk';color:#5C6E78;flex:1;display:block;margin-bottom:16px;">{{ c.desc }}</span>
          <span class="inline-flex items-center gap-2" style="font:600 13.5px 'Hanken Grotesk';color:#1F6FB2;">{{ c.cta }} <span class="arr">→</span></span>
        </NuxtLink>
      </div>

      <!-- Events + News split -->
      <div style="display:grid;grid-template-columns:1fr 1fr;gap:48px;margin-bottom:56px;">
        <!-- Upcoming events -->
        <div>
          <div class="flex items-baseline justify-between mb-4">
            <span class="font-mono font-bold tracking-[.1em] uppercase text-muted" style="font-size:11px;">Upcoming events</span>
            <NuxtLink to="/community/events" class="arrow-row inline-flex items-center gap-1" style="font:600 13px 'Hanken Grotesk';color:#1F6FB2;">All events <span class="arr">→</span></NuxtLink>
          </div>
          <div class="flex flex-col gap-[1px]" style="background:rgba(15,33,43,.08);border-radius:10px;overflow:hidden;">
            <div v-for="e in upcomingEvents" :key="e.slug" class="bg-paper flex gap-4 items-start" style="padding:14px 16px;">
              <div class="text-center flex-none rounded-[6px] bg-navy text-white" style="width:42px;padding:6px 4px;">
                <div class="font-mono font-bold" style="font-size:9.5px;color:#7fc0ee;letter-spacing:.06em;">{{ fmtMon(e.start) }}</div>
                <div style="font:700 20px 'Schibsted Grotesk';line-height:1;">{{ fmtDay(e.start) }}</div>
              </div>
              <div class="flex-1 min-w-0">
                <NuxtLink :to="`/community/events/${e.slug}`" style="font:600 14px 'Hanken Grotesk';color:#0F2E44;text-decoration:none;" class="hover:text-water transition-colors line-clamp-2">{{ e.title }}</NuxtLink>
                <div class="flex items-center gap-2 mt-1">
                  <span class="font-mono text-[10px] text-muted">{{ e.location?.city || (e.location?.mode === 'virtual' ? 'Virtual' : '') }}</span>
                  <span class="font-mono text-[10px] rounded-[4px]" style="background:rgba(31,111,178,.09);color:#1F6FB2;padding:2px 6px;">{{ e.location?.mode }}</span>
                </div>
              </div>
            </div>
            <div v-if="!upcomingEvents.length" class="bg-paper text-center" style="padding:24px;font:400 14px 'Hanken Grotesk';color:#5C6E78;">No upcoming events.</div>
          </div>
        </div>

        <!-- Latest news -->
        <div>
          <div class="flex items-baseline justify-between mb-4">
            <span class="font-mono font-bold tracking-[.1em] uppercase text-muted" style="font-size:11px;">Latest news</span>
            <NuxtLink to="/community/news" class="arrow-row inline-flex items-center gap-1" style="font:600 13px 'Hanken Grotesk';color:#1F6FB2;">All news <span class="arr">→</span></NuxtLink>
          </div>
          <div class="flex flex-col">
            <NuxtLink v-for="n in latestNews" :key="n.slug" :to="`/community/news/${n.slug}`"
              class="flex flex-col gap-1 arrow-row"
              style="padding:14px 0;border-bottom:1px solid rgba(15,33,43,.08);text-decoration:none;">
              <div class="flex items-center gap-2">
                <span class="font-mono text-[11px] text-muted">{{ fmtDate(n.date) }}</span>
                <span v-for="tag in n.tags?.slice(0,1)" :key="tag" class="font-mono text-[10px] text-clay">· {{ tag }}</span>
              </div>
              <span style="font:600 14px/1.35 'Hanken Grotesk';color:#0F2E44;" class="hover:text-water transition-colors">{{ n.title }}</span>
              <span style="font:400 13px/1.5 'Hanken Grotesk';color:#5C6E78;" class="line-clamp-2">{{ n.excerpt }}</span>
            </NuxtLink>
          </div>
        </div>
      </div>

      <!-- Newsletter CTA -->
      <div class="rounded-[14px] bg-navy mb-16" style="padding:40px 48px;display:grid;grid-template-columns:1fr auto;gap:32px;align-items:center;">
        <div>
          <span class="font-mono font-bold tracking-[.14em] uppercase" style="font-size:12px;color:#e0a384;">Stay connected</span>
          <h2 style="font:700 24px 'Schibsted Grotesk';color:#fff;margin:10px 0 6px;">Monthly water science updates.</h2>
          <p style="font:400 14px/1.55 'Hanken Grotesk';color:#7fa4bf;margin:0 0 14px;">Programs, funding, datasets, and community news — no spam.</p>
          <NuxtLink to="/community/newsletter" class="arrow-row inline-flex items-center gap-2" style="font:600 13px 'Hanken Grotesk';color:#7fc0ee;">Browse the archive <span class="arr">→</span></NuxtLink>
        </div>
        <div class="flex gap-3 flex-none">
          <input type="email" placeholder="your@university.edu"
            class="rounded-btn text-ink bg-white"
            style="font:400 14px 'Hanken Grotesk';padding:12px 14px;border:none;outline:none;width:200px;" />
          <button class="rounded-btn font-semibold text-white flex-none" style="font:600 14px 'Hanken Grotesk';background:#C0603C;padding:12px 20px;border:none;cursor:pointer;">Subscribe</button>
        </div>
      </div>
    </div>
  </div>
</template>
