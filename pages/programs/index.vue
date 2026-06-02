<script setup lang="ts">
useHead({
  title: 'Programs · CUAHSI',
  meta: [{ name: 'description', content: 'Recurring CUAHSI programs — graduate training, field schools, summer institutes, and fellowships that build skills and community across water science.' }]
})

const { data: programs } = await useAsyncData('programs', () =>
  queryContent('programs').where({ published: true }).sort({ title: 1 }).find()
)

const audienceColors: Record<string, string> = {
  'graduate-students': '#EDE9FE',
  'faculty': '#EFF6FF',
  'postdocs': '#FFF7ED',
  'early-career': '#F0FDF4',
  'professionals': '#F3F4F6',
}
const audienceText: Record<string, string> = {
  'graduate-students': '#5B21B6',
  'faculty': '#1E40AF',
  'postdocs': '#C2410C',
  'early-career': '#15803D',
  'professionals': '#374151',
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
        <NuxtLink to="/programs" style="font-size:12px;color:#111827;padding:0 12px;text-decoration:none;border-bottom:2px solid #111827;line-height:48px;">Programs</NuxtLink>
        <NuxtLink to="/community" style="font-size:12px;color:#6b7280;padding:0 12px;text-decoration:none;">Get involved</NuxtLink>
        <div style="margin-left:auto;"><SiteSearch /></div>
      </div>
    </nav>

    <div style="max-width:1024px;margin:0 auto;padding:0 24px;">
      <div style="padding:36px 0 28px;border-bottom:0.5px solid #f3f4f6;margin-bottom:32px;">
        <h1 style="font-size:28px;font-weight:500;margin-bottom:10px;">Programs</h1>
        <p style="font-size:14px;color:#6b7280;line-height:1.65;max-width:560px;">
          Recurring CUAHSI programs that build skills, advance careers, and grow the water science community.
          Each runs on an annual cycle with its own application process.
        </p>
      </div>

      <div style="display:grid;grid-template-columns:repeat(3,1fr);gap:16px;margin-bottom:48px;">
        <NuxtLink v-for="program in programs" :key="program._path"
          :to="`/programs/${program.slug}`"
          style="border:0.5px solid #e5e7eb;border-radius:12px;padding:20px;text-decoration:none;color:inherit;display:flex;flex-direction:column;gap:8px;">
          <div style="display:flex;align-items:baseline;justify-content:space-between;gap:8px;">
            <p style="font-size:14px;font-weight:500;line-height:1.3;">{{ program.title }}</p>
            <span v-if="program.abbreviation" style="font-size:11px;color:#9ca3af;flex-shrink:0;">{{ program.abbreviation }}</span>
          </div>
          <p style="font-size:12px;color:#6b7280;line-height:1.55;flex:1;">{{ program.excerpt }}</p>
          <div style="display:flex;flex-wrap:wrap;gap:4px;margin-top:4px;">
            <span v-for="a in program.audience" :key="a"
              :style="`font-size:11px;padding:1px 7px;border-radius:99px;background:${audienceColors[a] ?? '#F3F4F6'};color:${audienceText[a] ?? '#374151'};`">
              {{ a.replace(/-/g,' ') }}
            </span>
          </div>
          <div style="display:flex;align-items:center;justify-content:space-between;margin-top:4px;">
            <span style="font-size:11px;color:#9ca3af;">{{ program.season }}</span>
            <span style="font-size:12px;color:#1D9E75;">Learn more →</span>
          </div>
        </NuxtLink>
      </div>

      <!-- Related -->
      <div style="border-top:0.5px solid #f3f4f6;padding-top:32px;margin-bottom:48px;">
        <p style="font-size:11px;font-weight:500;letter-spacing:.06em;text-transform:uppercase;color:#9ca3af;margin-bottom:14px;">Also from CUAHSI</p>
        <div style="display:grid;grid-template-columns:repeat(3,1fr);gap:12px;">
          <NuxtLink to="/learn-train/cyberseminars" style="border:0.5px solid #e5e7eb;border-radius:10px;padding:16px;text-decoration:none;color:inherit;">
            <p style="font-size:13px;font-weight:500;margin-bottom:3px;">Cyberseminar archive</p>
            <p style="font-size:12px;color:#6b7280;margin-bottom:6px;">150+ free recordings on water science topics.</p>
            <p style="font-size:12px;color:#1D9E75;">Browse recordings →</p>
          </NuxtLink>
          <NuxtLink to="/community/jobs" style="border:0.5px solid #e5e7eb;border-radius:10px;padding:16px;text-decoration:none;color:inherit;">
            <p style="font-size:13px;font-weight:500;margin-bottom:3px;">Fellowship opportunities</p>
            <p style="font-size:12px;color:#6b7280;margin-bottom:6px;">HIF, Pathfinder, and community fellowships.</p>
            <p style="font-size:12px;color:#1D9E75;">View opportunities →</p>
          </NuxtLink>
          <NuxtLink to="/community/campus-visits" style="border:0.5px solid #e5e7eb;border-radius:10px;padding:16px;text-decoration:none;color:inherit;">
            <p style="font-size:13px;font-weight:500;margin-bottom:3px;">Campus visits</p>
            <p style="font-size:12px;color:#6b7280;margin-bottom:6px;">Bring CUAHSI tools and expertise to your institution.</p>
            <p style="font-size:12px;color:#1D9E75;">Learn more →</p>
          </NuxtLink>
        </div>
      </div>
    </div>

    <footer style="border-top:0.5px solid #f3f4f6;">
      <div style="max-width:1024px;margin:0 auto;padding:14px 24px;display:flex;justify-content:space-between;">
        <div style="display:flex;gap:20px;">
          <NuxtLink to="/learn-train" style="font-size:12px;color:#9ca3af;text-decoration:none;">Learn &amp; train</NuxtLink>
          <NuxtLink to="/community/events" style="font-size:12px;color:#9ca3af;text-decoration:none;">Events</NuxtLink>
        </div>
        <p style="font-size:12px;color:#9ca3af;">© 2026 CUAHSI</p>
      </div>
    </footer>
  </div>
</template>
