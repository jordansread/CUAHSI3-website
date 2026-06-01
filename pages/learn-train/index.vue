<script setup lang="ts">
useHead({
  title: 'Learn & train · CUAHSI',
  meta: [{ name: 'description', content: 'CUAHSI workshops, Virtual University, cyberseminars, fellowships, and training programs for water scientists at every career stage.' }]
})

const { data: allTrainingEvents } = await useAsyncData('training-events', () =>
  queryContent('events')
    .where({ published: true, type: { $in: ['workshop','webinar','course'] } })
    .sort({ start: 1 })
    .find()
)
const upcomingEvents = computed(() =>
  (allTrainingEvents.value ?? []).filter(e => new Date(e.start) >= new Date()).slice(0, 5)
)

const typeColors: Record<string, {bg: string; text: string}> = {
  workshop: { bg: '#EDE9FE', text: '#5B21B6' },
  webinar:  { bg: '#DCFCE7', text: '#15803D' },
  course:   { bg: '#EFF6FF', text: '#1E40AF' },
  deadline: { bg: '#FEF9C3', text: '#854D0E' },
  default:  { bg: '#F3F4F6', text: '#6B7280' },
}
function typeStyle(type: string) {
  const c = typeColors[type] ?? typeColors.default
  return `font-size:10px;padding:2px 8px;border-radius:99px;background:${c.bg};color:${c.text};white-space:nowrap;`
}

const programs = [
  {
    label: 'Workshop',
    color: '#EDE9FE',
    text: '#5B21B6',
    title: 'Field & intensive workshops',
    desc: 'Hands-on training in field methods, instrumentation, data science, and modeling. Past workshops include the Snow Measurement Field School, WaterSoftHack, and the Stakeholder-Informed Spatial Modeling workshop. Three or more workshops offered per year.',
    cta: 'See upcoming workshops',
    href: '/community/events',
  },
  {
    label: 'Online course',
    color: '#EFF6FF',
    text: '#1E40AF',
    title: 'CUAHSI Virtual University',
    desc: 'Interuniversity graduate program where students take 4-week online modules taught by faculty at leading institutions — and earn credit at their home university. 430+ students from 25 institutions since 2017. Nine modules offered in 2025.',
    cta: 'Learn about the CVU',
    href: 'https://www.cuahsi.org/virtual-university',
    external: true,
  },
  {
    label: 'Seminar archive',
    color: '#DCFCE7',
    text: '#15803D',
    title: 'Cyberseminars',
    desc: 'Virtual presentations, panels, and events on timely water science topics. Archive of 200+ lectures available free on YouTube. Past series include Post-Field Season Data Management, Navigating Academic Waters, and USGS Water Data APIs.',
    cta: 'Browse the archive',
    href: 'https://www.youtube.com/CUAHSI',
    external: true,
  },
  {
    label: 'Platform',
    color: '#FFF7ED',
    text: '#C2410C',
    title: 'HydroLearn',
    desc: 'Open-access learning modules for hydrology and water resources, developed by and for faculty and students. 50+ modules viewed 40,000 times. CUAHSI now hosts and supports HydroLearn, with new modules developed in partnership with CIROH.',
    cta: 'Explore HydroLearn',
    href: 'https://www.hydrolearn.org',
    external: true,
  },
  {
    label: 'Funding',
    color: '#FEF9C3',
    text: '#854D0E',
    title: 'Fellowships & grants',
    desc: 'The HydroInformatics Innovation Fellowship supports projects producing broadly shareable hydroinformatics products. Pathfinder Fellowships fund graduate student field research. Instrumentation Discovery Travel Grants support hands-on instrument training.',
    cta: 'See funding opportunities',
    href: 'https://www.cuahsi.org/opportunities',
    external: true,
  },
  {
    label: 'Summer institute',
    color: '#ECFDF5',
    text: '#065F46',
    title: 'Water Prediction Innovators Summer Institute',
    desc: 'Seven-week experiential program (CUAHSI + University of Alabama + NOAA) for graduate students in water prediction and flood forecasting. 250+ fellows from 100 universities since 2015. Celebrating its 10th anniversary in 2025.',
    cta: 'Learn about the Summer Institute',
    href: '/community/events/water-prediction-innovators-2026',
    external: false,
  },
]
</script>

<template>
  <div>
    <nav style="border-bottom:0.5px solid #e5e7eb;">
      <div style="max-width:1024px;margin:0 auto;padding:0 24px;display:flex;align-items:center;height:48px;">
        <NuxtLink to="/" style="font-size:14px;font-weight:500;margin-right:28px;text-decoration:none;color:inherit;">CUAHSI <span style="color:#9ca3af;font-weight:400;">water science</span></NuxtLink>
        <NuxtLink to="/about" style="font-size:12px;color:#6b7280;padding:0 12px;text-decoration:none;">About</NuxtLink>
        <NuxtLink to="/data-platforms" style="font-size:12px;color:#6b7280;padding:0 12px;text-decoration:none;">Tools &amp; platforms</NuxtLink>
        <NuxtLink to="/learn-train" style="font-size:12px;color:#111827;padding:0 12px;text-decoration:none;border-bottom:2px solid #111827;line-height:48px;">Learn &amp; train</NuxtLink>
        <NuxtLink to="/community" style="font-size:12px;color:#6b7280;padding:0 12px;text-decoration:none;">Get involved</NuxtLink>
        <div style="margin-left:auto;">
          <ClientOnly><SiteSearch /></ClientOnly>
        </div>
      </div>
    </nav>

    <div style="max-width:1024px;margin:0 auto;padding:0 24px;">

      <!-- Hero -->
      <section style="padding:48px 0 36px;border-bottom:0.5px solid #f3f4f6;">
        <p style="font-size:11px;color:#9ca3af;font-weight:500;letter-spacing:.07em;text-transform:uppercase;margin-bottom:12px;">Learn &amp; train</p>
        <h1 style="font-size:32px;font-weight:500;line-height:1.2;margin-bottom:16px;max-width:560px;">
          Build your water science skills
        </h1>
        <p style="font-size:15px;color:#6b7280;line-height:1.7;max-width:560px;">
          Workshops, online courses, recorded seminars, fellowships, and summer institutes —
          open to graduate students, early-career researchers, and faculty alike. All programs
          are free or low-cost; most do not require CUAHSI membership.
        </p>
        <div style="display:grid;grid-template-columns:repeat(4,1fr);gap:1px;background:#f3f4f6;border:0.5px solid #f3f4f6;border-radius:12px;overflow:hidden;max-width:560px;margin-top:28px;">
          <div style="background:#f9fafb;padding:14px 16px;">
            <p style="font-size:20px;font-weight:500;margin-bottom:2px;">430+</p>
            <p style="font-size:11px;color:#9ca3af;line-height:1.4;">CVU graduate students</p>
          </div>
          <div style="background:#f9fafb;padding:14px 16px;">
            <p style="font-size:20px;font-weight:500;margin-bottom:2px;">200+</p>
            <p style="font-size:11px;color:#9ca3af;line-height:1.4;">Cyberseminar recordings</p>
          </div>
          <div style="background:#f9fafb;padding:14px 16px;">
            <p style="font-size:20px;font-weight:500;margin-bottom:2px;">250+</p>
            <p style="font-size:11px;color:#9ca3af;line-height:1.4;">Summer Institute fellows</p>
          </div>
          <div style="background:#f9fafb;padding:14px 16px;">
            <p style="font-size:20px;font-weight:500;margin-bottom:2px;">50+</p>
            <p style="font-size:11px;color:#9ca3af;line-height:1.4;">HydroLearn modules</p>
          </div>
        </div>
      </section>

      <!-- Programs grid -->
      <section style="padding:40px 0;border-bottom:0.5px solid #f3f4f6;">
        <p style="font-size:11px;font-weight:500;letter-spacing:.07em;text-transform:uppercase;color:#9ca3af;margin-bottom:20px;">Programs</p>
        <div style="display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:12px;">
          <div v-for="p in programs" :key="p.title"
            style="border:0.5px solid #e5e7eb;border-radius:12px;padding:20px;display:flex;flex-direction:column;gap:8px;">
            <span :style="`font-size:11px;padding:2px 8px;border-radius:99px;font-weight:500;width:fit-content;background:${p.color};color:${p.text};`">
              {{ p.label }}
            </span>
            <p style="font-size:14px;font-weight:500;line-height:1.35;">{{ p.title }}</p>
            <p style="font-size:12px;color:#6b7280;line-height:1.6;flex:1;">{{ p.desc }}</p>
            <a v-if="p.external" :href="p.href" target="_blank" rel="noopener"
              style="font-size:12px;color:#1D9E75;text-decoration:none;margin-top:4px;">
              {{ p.cta }} ↗
            </a>
            <NuxtLink v-else :to="p.href"
              style="font-size:12px;color:#1D9E75;text-decoration:none;margin-top:4px;">
              {{ p.cta }} →
            </NuxtLink>
          </div>
        </div>
      </section>

      <!-- Featured recent recording -->
      <section style="padding:40px 0;border-bottom:0.5px solid #f3f4f6;">
        <div style="display:flex;align-items:baseline;justify-content:space-between;margin-bottom:16px;">
          <p style="font-size:13px;font-weight:500;">Recent recording</p>
          <NuxtLink to="/learn-train/cyberseminars" style="font-size:12px;color:#9ca3af;text-decoration:none;">Browse archive →</NuxtLink>
        </div>
        <div style="display:grid;grid-template-columns:minmax(0,1fr) 300px;gap:24px;align-items:start;">
          <div style="position:relative;padding-bottom:56.25%;height:0;overflow:hidden;border-radius:10px;background:#000;">
            <iframe
              src="https://www.youtube-nocookie.com/embed/unrdDmNL4mQ?rel=0"
              style="position:absolute;top:0;left:0;width:100%;height:100%;border:0;"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen>
            </iframe>
          </div>
          <div style="padding-top:4px;">
            <span style="font-size:11px;padding:2px 8px;border-radius:99px;background:#DCFCE7;color:#15803D;font-weight:500;">Cyberseminar</span>
            <p style="font-size:15px;font-weight:500;line-height:1.35;margin-top:8px;margin-bottom:6px;">Post-Field Season Data Practices for Research Success</p>
            <p style="font-size:12px;color:#9ca3af;margin-bottom:8px;">November 12, 2025 · Lindsay Platt &amp; Abner Bogan, CUAHSI</p>
            <p style="font-size:13px;color:#6b7280;line-height:1.6;margin-bottom:14px;">Even the most carefully planned field season can throw you curveballs. This webinar covers organizing and cleaning field data, exploratory data analysis, and preparing datasets for HydroShare publication.</p>
            <div style="display:flex;gap:5px;flex-wrap:wrap;margin-bottom:14px;">
              <span style="font-size:11px;padding:2px 8px;border-radius:99px;background:#f3f4f6;color:#6b7280;">data management</span>
              <span style="font-size:11px;padding:2px 8px;border-radius:99px;background:#f3f4f6;color:#6b7280;">field data</span>
              <span style="font-size:11px;padding:2px 8px;border-radius:99px;background:#f3f4f6;color:#6b7280;">reproducibility</span>
            </div>
            <NuxtLink to="/learn-train/cyberseminars" style="font-size:13px;color:#1D9E75;text-decoration:none;">More recordings →</NuxtLink>
          </div>
        </div>
      </section>

      <!-- Upcoming training events -->
      <section style="padding:40px 0;border-bottom:0.5px solid #f3f4f6;">
        <div style="display:flex;align-items:baseline;justify-content:space-between;margin-bottom:16px;">
          <p style="font-size:13px;font-weight:500;">Upcoming training events</p>
          <NuxtLink to="/community/events" style="font-size:12px;color:#9ca3af;text-decoration:none;">All events →</NuxtLink>
        </div>
        <div v-if="upcomingEvents?.length">
          <NuxtLink v-for="event in upcomingEvents" :key="event._path"
            :to="`/community/events/${event.slug}`"
            style="display:flex;gap:16px;align-items:flex-start;padding:14px 0;border-bottom:0.5px solid #f3f4f6;text-decoration:none;color:inherit;">
            <div style="flex-shrink:0;width:44px;background:#f9fafb;border-radius:8px;text-align:center;padding:7px 4px;">
              <p style="font-size:9px;color:#9ca3af;text-transform:uppercase;letter-spacing:.05em;margin-bottom:1px;">
                {{ new Date(event.start).toLocaleDateString('en-US',{month:'short'}) }}
              </p>
              <p style="font-size:18px;font-weight:500;line-height:1;">{{ new Date(event.start).getDate() }}</p>
            </div>
            <div style="flex:1;">
              <p style="font-size:14px;font-weight:500;margin-bottom:4px;line-height:1.35;">{{ event.title }}</p>
              <div style="display:flex;gap:8px;align-items:center;flex-wrap:wrap;">
                <span :style="typeStyle(event.type)">{{ event.type }}</span>
                <span v-if="event.location?.city" style="font-size:11px;color:#9ca3af;">{{ event.location.city }}</span>
                <span v-else-if="event.location?.mode==='virtual'" style="font-size:11px;color:#9ca3af;">Virtual</span>
                <span v-if="event.registration?.cost==='free'" style="font-size:11px;color:#15803D;">Free</span>
              </div>
            </div>
            <span style="font-size:12px;color:#d1d5db;padding-top:2px;flex-shrink:0;">→</span>
          </NuxtLink>
        </div>
        <p v-else style="font-size:13px;color:#9ca3af;">Check back soon for upcoming training events.</p>
      </section>

      <!-- Code of conduct note -->
      <section style="padding:32px 0 48px;">
        <div style="background:#f9fafb;border-radius:12px;padding:20px 24px;display:flex;gap:16px;align-items:flex-start;">
          <div style="flex:1;">
            <p style="font-size:14px;font-weight:500;margin-bottom:6px;">Code of conduct</p>
            <p style="font-size:13px;color:#6b7280;line-height:1.65;">
              CUAHSI's Code of Conduct is fully implemented for all events, programs, and services.
              All participants are expected to adhere to the code, which sets clear behavior expectations,
              reporting pathways, and follow-up procedures, ensuring every gathering is safe and welcoming to all.
            </p>
          </div>
          <a href="https://www.cuahsi.org/about/policies-and-conduct" target="_blank" rel="noopener"
            style="flex-shrink:0;font-size:12px;padding:7px 14px;border:0.5px solid #d1d5db;border-radius:8px;text-decoration:none;color:inherit;white-space:nowrap;">
            Read the code ↗
          </a>
        </div>
      </section>

    </div>

    <footer style="border-top:0.5px solid #f3f4f6;">
      <div style="max-width:1024px;margin:0 auto;padding:14px 24px;display:flex;align-items:center;justify-content:space-between;">
        <div style="display:flex;gap:20px;">
          <a href="mailto:info@cuahsi.org" style="font-size:12px;color:#9ca3af;text-decoration:none;">Contact</a>
          <NuxtLink to="/about/membership" style="font-size:12px;color:#9ca3af;text-decoration:none;">Membership</NuxtLink>
          <NuxtLink to="/community" style="font-size:12px;color:#9ca3af;text-decoration:none;">Get involved</NuxtLink>
        </div>
        <p style="font-size:12px;color:#9ca3af;">© 2026 CUAHSI</p>
      </div>
    </footer>
  </div>
</template>
