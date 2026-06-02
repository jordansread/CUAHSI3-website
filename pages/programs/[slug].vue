<script setup lang="ts">
const route = useRoute()
const slug = route.params.slug as string

const { data: program } = await useAsyncData(`program-${slug}`, () =>
  queryContent('programs').where({ slug, published: true }).findOne().catch(() => null)
)

const notFound = computed(() => !program.value || !program.value._path?.startsWith('/programs/'))

useHead({
  title: computed(() => notFound.value ? 'Not found · CUAHSI' : `${program.value?.title} · Programs · CUAHSI`),
  meta: [{ name: 'description', content: computed(() => program.value?.excerpt ?? '') }]
})

function fmtAudience(a: string) { return a.replace(/-/g, ' ') }
</script>

<template>
  <div>
    <nav style="border-bottom:0.5px solid #e5e7eb;">
      <div style="max-width:1024px;margin:0 auto;padding:0 24px;display:flex;align-items:center;height:48px;">
        <NuxtLink to="/" style="font-size:14px;font-weight:500;margin-right:28px;text-decoration:none;color:inherit;">CUAHSI <span style="color:#9ca3af;font-weight:400;">water science</span></NuxtLink>
        <NuxtLink to="/about" style="font-size:12px;color:#6b7280;padding:0 12px;text-decoration:none;">About</NuxtLink>
        <NuxtLink to="/data-platforms" style="font-size:12px;color:#6b7280;padding:0 12px;text-decoration:none;">Tools &amp; platforms</NuxtLink>
        <NuxtLink to="/learn-train" style="font-size:12px;color:#6b7280;padding:0 12px;text-decoration:none;">Learn &amp; train</NuxtLink>
        <NuxtLink to="/programs" style="font-size:12px;color:#111827;padding:0 12px;text-decoration:none;border-bottom:2px solid #111827;line-height:48px;">Programs</NuxtLink>
        <NuxtLink to="/community" style="font-size:12px;color:#6b7280;padding:0 12px;text-decoration:none;">Get involved</NuxtLink>
        <div style="margin-left:auto;"><SiteSearch /></div>
      </div>
    </nav>

    <div v-if="notFound" style="max-width:720px;margin:80px auto;padding:0 24px;text-align:center;">
      <p style="font-size:14px;color:#9ca3af;margin-bottom:12px;">404</p>
      <h1 style="font-size:22px;font-weight:500;margin-bottom:12px;">Program not found</h1>
      <NuxtLink to="/programs" style="font-size:13px;color:#1D9E75;text-decoration:none;">← All programs</NuxtLink>
    </div>

    <div v-else-if="program" style="max-width:1024px;margin:0 auto;padding:0 24px;">

      <!-- Header -->
      <div style="padding:36px 0 28px;border-bottom:0.5px solid #f3f4f6;margin-bottom:36px;">
        <p style="font-size:11px;color:#9ca3af;margin-bottom:8px;">
          <NuxtLink to="/programs" style="text-decoration:none;color:#9ca3af;">Programs</NuxtLink> /
        </p>
        <div style="display:flex;align-items:baseline;gap:12px;flex-wrap:wrap;margin-bottom:10px;">
          <h1 style="font-size:28px;font-weight:500;line-height:1.2;">{{ program.title }}</h1>
          <span v-if="program.abbreviation" style="font-size:16px;color:#9ca3af;">{{ program.abbreviation }}</span>
        </div>
        <p style="font-size:14px;color:#6b7280;line-height:1.65;max-width:600px;margin-bottom:16px;">{{ program.excerpt }}</p>
        <div style="display:flex;flex-wrap:wrap;gap:8px;align-items:center;">
          <span v-if="program.season" style="font-size:12px;padding:3px 10px;border-radius:99px;background:#f3f4f6;color:#6b7280;">{{ program.season }}</span>
          <span v-if="program.frequency" style="font-size:12px;padding:3px 10px;border-radius:99px;background:#f3f4f6;color:#6b7280;">{{ program.frequency }}</span>
          <span v-for="a in program.audience" :key="a"
            style="font-size:12px;padding:3px 10px;border-radius:99px;background:#EDE9FE;color:#5B21B6;">
            {{ fmtAudience(a) }}
          </span>
        </div>
      </div>

      <!-- Two-column layout: body + sidebar -->
      <div style="display:grid;grid-template-columns:minmax(0,1fr) 240px;gap:48px;margin-bottom:48px;">

        <!-- Body -->
        <div>
          <ContentRenderer :value="program" class="program-prose" />
        </div>

        <!-- Sidebar -->
        <div>
          <div style="border:0.5px solid #e5e7eb;border-radius:12px;padding:18px;margin-bottom:16px;">
            <p style="font-size:11px;font-weight:500;letter-spacing:.06em;text-transform:uppercase;color:#9ca3af;margin-bottom:12px;">Program details</p>
            <div style="display:flex;flex-direction:column;gap:10px;">
              <div v-if="program.season">
                <p style="font-size:11px;color:#9ca3af;margin-bottom:2px;">When</p>
                <p style="font-size:13px;color:#374151;">{{ program.season }}</p>
              </div>
              <div v-if="program.audience?.length">
                <p style="font-size:11px;color:#9ca3af;margin-bottom-2px;">Who</p>
                <p style="font-size:13px;color:#374151;">{{ program.audience.map(fmtAudience).join(', ') }}</p>
              </div>
              <div v-if="program.partners?.length">
                <p style="font-size:11px;color:#9ca3af;margin-bottom:2px;">Partners</p>
                <p style="font-size:13px;color:#374151;line-height:1.5;">{{ program.partners.join(' · ') }}</p>
              </div>
              <div v-if="program.funding">
                <p style="font-size:11px;color:#9ca3af;margin-bottom:2px;">Funding</p>
                <p style="font-size:13px;color:#374151;line-height:1.5;">{{ program.funding }}</p>
              </div>
              <div v-if="program.contact">
                <p style="font-size:11px;color:#9ca3af;margin-bottom:2px;">Contact</p>
                <a :href="`mailto:${program.contact}`" style="font-size:13px;color:#1D9E75;text-decoration:none;">{{ program.contact }}</a>
              </div>
            </div>
          </div>

          <!-- Related highlights -->
          <div style="border:0.5px solid #e5e7eb;border-radius:12px;padding:18px;">
            <p style="font-size:11px;font-weight:500;letter-spacing:.06em;text-transform:uppercase;color:#9ca3af;margin-bottom:10px;">See also</p>
            <NuxtLink to="/highlights" style="display:block;font-size:13px;color:#1D9E75;text-decoration:none;margin-bottom:6px;">Program highlights →</NuxtLink>
            <NuxtLink to="/community/events" style="display:block;font-size:13px;color:#1D9E75;text-decoration:none;margin-bottom:6px;">Upcoming events →</NuxtLink>
            <NuxtLink to="/community/newsletter" style="display:block;font-size:13px;color:#1D9E75;text-decoration:none;">Newsletter archive →</NuxtLink>
          </div>
        </div>
      </div>
    </div>

    <footer style="border-top:0.5px solid #f3f4f6;">
      <div style="max-width:1024px;margin:0 auto;padding:14px 24px;display:flex;justify-content:space-between;">
        <NuxtLink to="/programs" style="font-size:12px;color:#9ca3af;text-decoration:none;">← All programs</NuxtLink>
        <p style="font-size:12px;color:#9ca3af;">© 2026 CUAHSI</p>
      </div>
    </footer>
  </div>
</template>

<style>
.program-prose h2 { font-size:16px;font-weight:500;color:var(--color-text-primary,#111827);margin-top:28px;margin-bottom:10px; }
.program-prose h3 { font-size:14px;font-weight:500;color:var(--color-text-primary,#374151);margin-top:18px;margin-bottom:6px; }
.program-prose p { font-size:14px;color:#374151;line-height:1.75;margin-bottom:14px; }
.program-prose ul { padding-left:18px;margin-bottom:14px; }
.program-prose li { font-size:14px;color:#374151;line-height:1.65;margin-bottom:5px;list-style:disc; }
.program-prose strong { font-weight:500;color:#111827; }
.program-prose a { color:#1D9E75;text-decoration:none; }
.program-prose a:hover { text-decoration:underline; }
.program-prose hr { border:none;border-top:0.5px solid #f3f4f6;margin:24px 0; }
</style>
