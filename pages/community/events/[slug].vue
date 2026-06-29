<script setup lang="ts">
const route = useRoute()
const slug = route.params.slug as string
const { data: event } = await useAsyncData(`event-${slug}`, () =>
  queryContent('events').where({ slug, published: true }).findOne().catch(() => null)
)
const notFound = computed(() => !event.value)
useHead({ title: computed(() => event.value?.title ?? 'Not found') })
function fmtDate(d: string) { return new Date(d).toLocaleDateString('en-US', { weekday:'long', month:'long', day:'numeric', year:'numeric' }) }
</script>
<template>
  <div>
    <div v-if="notFound" class="mx-auto text-center" style="max-width:720px;padding:80px 40px;">
      <NuxtLink to="/community/events" style="font:600 14px 'Hanken Grotesk';color:#1F6FB2;">← Events</NuxtLink>
    </div>
    <div v-else-if="event">
      <section style="background:linear-gradient(180deg,#FBFAF7,#F3EEE4);border-bottom:1px solid rgba(15,33,43,.08);">
        <div class="mx-auto" style="max-width:1240px;padding:52px 40px 48px;">
          <p class="font-mono text-[11px] text-muted mb-3"><NuxtLink to="/community/events" style="color:#5C6E78;">← Events</NuxtLink></p>
          <div class="flex items-center gap-3 mb-4 flex-wrap">
            <span v-if="event.type" class="font-mono font-bold text-white rounded-[4px]" style="font-size:10px;background:#0F2E44;padding:5px 10px;">{{ event.type.toUpperCase() }}</span>
            <span class="font-mono text-[12px] text-clay font-bold">{{ fmtDate(event.start) }}</span>
          </div>
          <h1 style="font:700 clamp(28px,3.5vw,44px)/1.1 'Schibsted Grotesk';letter-spacing:-.018em;color:#0F2E44;max-width:720px;margin:0 0 16px;">{{ event.title }}</h1>
          <div class="flex gap-4 flex-wrap">
            <span v-if="event.location?.city" class="font-mono text-[12px] text-muted">📍 {{ event.location.city }}</span>
            <span v-else-if="event.location?.mode === 'virtual'" class="font-mono text-[12px] text-muted">📍 Virtual</span>
            <span v-if="event.location?.mode" class="font-mono text-[11px] rounded-[4px]" style="background:rgba(31,111,178,.09);color:#1F6FB2;padding:3px 9px;">{{ event.location.mode }}</span>
          </div>
        </div>
      </section>
      <div class="mx-auto" style="max-width:760px;padding:48px 40px 80px;">
        <div v-if="event.registration?.url" class="rounded-[12px] bg-navy mb-8" style="padding:24px 28px;display:flex;align-items:center;justify-content:space-between;gap:20px;flex-wrap:wrap;">
          <div>
            <p style="font:700 16px 'Schibsted Grotesk';color:#fff;margin-bottom:4px;">{{ event.registration.required ? 'Registration required' : 'Registration open' }}</p>
            <p v-if="event.registration.cost" style="font:400 13px 'Hanken Grotesk';color:#7fa4bf;">{{ event.registration.cost }}</p>
          </div>
          <a :href="event.registration.url" target="_blank" class="arrow-row inline-flex items-center gap-2 rounded-btn text-white font-semibold flex-none" style="font:600 15px 'Hanken Grotesk';background:#C0603C;padding:12px 22px;">Register <span class="arr">→</span></a>
        </div>
        <div v-if="event.description" style="font:400 15px/1.75 'Hanken Grotesk';color:#3a4d57;margin-bottom:32px;">{{ event.description }}</div>
        <NuxtLink to="/community/events" class="arrow-row inline-flex items-center gap-2" style="font:600 14px 'Hanken Grotesk';color:#1F6FB2;"><span style="transform:scaleX(-1);display:inline-block;">→</span> All events</NuxtLink>
      </div>
    </div>
  </div>
</template>
