<script setup lang="ts">
const route = useRoute()
const slug = route.params.slug as string

const { data: issue } = await useAsyncData(`nl-${slug}`, () =>
  queryContent('newsletter').where({ slug, published: true }).findOne().catch(() => null)
)
const notFound = computed(() => !issue.value)
useHead({ title: computed(() => issue.value?.title ?? 'Not found') })

// People from full-team.json
const { data: fullTeamData } = await useAsyncData('full-team-nl', () =>
  queryContent('team').where({ _extension: 'json' }).findOne()
)
const people = computed(() => {
  const slugs: string[] = issue.value?.people_mentioned ?? []
  if (!slugs.length) return []
  const all: any[] = Array.isArray(fullTeamData.value?.body) ? fullTeamData.value.body : []
  return slugs.map(s => all.find(p => p.slug === s)).filter(Boolean)
})

// Related events
const { data: allEvents } = await useAsyncData('nl-events', () =>
  queryContent('events').where({ published: true }).find()
)
const relatedEvents = computed(() => {
  const sources: string[] = issue.value?.slug ? [issue.value.slug] : []
  return (allEvents.value ?? []).filter(e => sources.some(s => e.newsletter_source?.includes(s)))
})

function fmtDate(d: string) { return new Date(d).toLocaleDateString('en-US', { month: 'long', year: 'numeric' }) }
</script>

<template>
  <div>
    <div v-if="notFound" class="mx-auto text-center" style="max-width:720px;padding:80px 40px;">
      <NuxtLink to="/community/newsletter" style="font:600 14px 'Hanken Grotesk';color:#1F6FB2;">← Newsletter archive</NuxtLink>
    </div>
    <div v-else-if="issue">
      <section style="background:linear-gradient(180deg,#FBFAF7,#F3EEE4);border-bottom:1px solid rgba(15,33,43,.08);">
        <div class="mx-auto" style="max-width:1240px;padding:52px 40px 48px;">
          <p class="font-mono text-[11px] text-muted mb-3"><NuxtLink to="/community/newsletter" style="color:#5C6E78;">← Newsletter archive</NuxtLink></p>
          <span class="font-mono font-bold tracking-[.14em] uppercase text-clay" style="font-size:12px;">{{ fmtDate(issue.date) }}</span>
          <h1 style="font:700 clamp(28px,3.5vw,44px)/1.1 'Schibsted Grotesk';letter-spacing:-.018em;color:#0F2E44;margin:12px 0 14px;">{{ issue.title }}</h1>
          <p style="font:400 16px/1.6 'Hanken Grotesk';color:#3a4d57;max-width:600px;margin-bottom:16px;">{{ issue.summary }}</p>
          <div class="flex gap-[5px] flex-wrap">
            <span v-for="t in issue.topics" :key="t" class="font-mono text-[10px] rounded-[4px]" style="background:rgba(31,111,178,.09);color:#1F6FB2;padding:3px 8px;">{{ t }}</span>
          </div>
        </div>
      </section>

      <div class="mx-auto" style="max-width:1240px;padding:48px 40px 80px;display:grid;grid-template-columns:minmax(0,1fr) 260px;gap:48px;">
        <!-- Body -->
        <div>
          <ContentRenderer :value="issue" class="program-prose" />
          <a v-if="issue.mailchimp_url" :href="issue.mailchimp_url" target="_blank" rel="noopener"
            class="arrow-row inline-flex items-center gap-2 mt-8 rounded-btn" style="font:600 14px 'Hanken Grotesk';color:#0F2E44;padding:11px 18px;border:1.5px solid rgba(15,46,68,.22);">
            View in Mailchimp <span class="arr">→</span>
          </a>
        </div>

        <!-- Sidebar -->
        <div class="flex flex-col gap-4">
          <!-- People -->
          <div v-if="people.length" class="rounded-[12px]" style="border:1px solid rgba(15,33,43,.1);padding:18px;">
            <p class="font-mono font-bold tracking-[.08em] uppercase text-muted mb-3" style="font-size:10px;">People in this issue</p>
            <template v-for="person in people" :key="person.slug">
              <NuxtLink v-if="person.has_profile" :to="`/about/team/${person.slug}`"
                class="flex items-center gap-3 arrow-row"
                style="padding:8px 0;border-bottom:1px solid rgba(15,33,43,.06);text-decoration:none;">
                <div class="rounded-full flex-none flex items-center justify-center bg-sand" style="width:30px;height:30px;font:700 11px 'Schibsted Grotesk';color:#5C6E78;">
                  {{ person.name.split(' ').map((n:string)=>n[0]).join('').slice(0,2) }}
                </div>
                <div class="flex-1 min-w-0">
                  <p style="font:600 12.5px 'Hanken Grotesk';color:#0F2E44;margin:0 0 1px;">{{ person.name }} <span style="color:#1F6FB2;font-size:11px;">→</span></p>
                  <p class="font-mono text-[10px] text-muted truncate">{{ person.role }}</p>
                </div>
              </NuxtLink>
              <div v-else class="flex items-center gap-3" style="padding:8px 0;border-bottom:1px solid rgba(15,33,43,.06);">
                <div class="rounded-full flex-none flex items-center justify-center bg-sand" style="width:30px;height:30px;font:700 11px 'Schibsted Grotesk';color:#5C6E78;">
                  {{ person.name.split(' ').map((n:string)=>n[0]).join('').slice(0,2) }}
                </div>
                <div class="flex-1 min-w-0">
                  <p style="font:600 12.5px 'Hanken Grotesk';color:#0F2E44;margin:0 0 1px;">{{ person.name }}</p>
                  <p class="font-mono text-[10px] text-muted truncate">{{ person.role }}</p>
                </div>
              </div>
            </template>
          </div>

          <!-- Events -->
          <div v-if="relatedEvents.length" class="rounded-[12px]" style="border:1px solid rgba(15,33,43,.1);padding:18px;">
            <p class="font-mono font-bold tracking-[.08em] uppercase text-muted mb-3" style="font-size:10px;">Events in this issue</p>
            <NuxtLink v-for="e in relatedEvents" :key="e.slug" :to="`/community/events/${e.slug}`"
              class="block arrow-row" style="padding:8px 0;border-bottom:1px solid rgba(15,33,43,.06);text-decoration:none;">
              <p style="font:600 12.5px/1.3 'Hanken Grotesk';color:#0F2E44;margin-bottom:2px;">{{ e.title }} <span style="color:#1F6FB2;">→</span></p>
              <p class="font-mono text-[10px] text-muted">{{ e.start }}</p>
            </NuxtLink>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
