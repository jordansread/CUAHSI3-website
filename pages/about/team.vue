<script setup lang="ts">
useHead({
  title: 'Our team · About CUAHSI',
  meta: [{ name: 'description', content: 'Meet the CUAHSI team — staff and independent contractors working across research, software engineering, programs, operations, and communications.' }]
})

// Load the full team roster from JSON
const { data: teamData } = await useAsyncData('full-team', () =>
  queryContent('team').where({ _extension: 'json' }).findOne()
)

// Department order for display
const deptOrder = ['Leadership', 'Research', 'Engineering', 'Programs', 'Communications', 'Operations']

const byDept = computed(() => {
  if (!teamData.value) return {}
  // full-team.json is the body of the content file
  const people = teamData.value.body as any[]
  if (!Array.isArray(people)) return {}
  return deptOrder.reduce((acc: Record<string, any[]>, dept) => {
    const members = people.filter(p => p.department === dept)
    if (members.length) acc[dept] = members
    return acc
  }, {})
})

function initials(name: string) {
  return name.split(' ').map((n: string) => n[0]).join('').slice(0, 2).toUpperCase()
}

const deptColors: Record<string, string> = {
  Leadership:     '#EDE9FE',
  Research:       '#DCFCE7',
  Engineering:    '#EFF6FF',
  Programs:       '#FFF7ED',
  Communications: '#FDF2F8',
  Operations:     '#F3F4F6',
}
const deptText: Record<string, string> = {
  Leadership:     '#5B21B6',
  Research:       '#15803D',
  Engineering:    '#1E40AF',
  Programs:       '#C2410C',
  Communications: '#9D174D',
  Operations:     '#374151',
}
</script>

<template>
  <div>
    <nav style="border-bottom:0.5px solid #e5e7eb;">
      <div style="max-width:1024px;margin:0 auto;padding:0 24px;display:flex;align-items:center;height:48px;">
        <NuxtLink to="/" style="font-size:14px;font-weight:500;margin-right:28px;text-decoration:none;color:inherit;">CUAHSI <span style="color:#9ca3af;font-weight:400;">water science</span></NuxtLink>
        <NuxtLink to="/about" style="font-size:12px;color:#111827;padding:0 12px;text-decoration:none;border-bottom:2px solid #111827;line-height:48px;">About</NuxtLink>
        <NuxtLink to="/data-platforms" style="font-size:12px;color:#6b7280;padding:0 12px;text-decoration:none;">Tools &amp; platforms</NuxtLink>
        <NuxtLink to="/learn-train" style="font-size:12px;color:#6b7280;padding:0 12px;text-decoration:none;">Learn &amp; train</NuxtLink>
        <NuxtLink to="/community" style="font-size:12px;color:#6b7280;padding:0 12px;text-decoration:none;">Get involved</NuxtLink>
      </div>
    </nav>

    <div style="max-width:1024px;margin:0 auto;padding:0 24px;">

      <div style="padding:36px 0 32px;border-bottom:0.5px solid #f3f4f6;margin-bottom:40px;">
        <p style="font-size:11px;color:#9ca3af;margin-bottom:8px;">
          <NuxtLink to="/about" style="text-decoration:none;color:#9ca3af;">About</NuxtLink> / Our team
        </p>
        <h1 style="font-size:28px;font-weight:500;margin-bottom:10px;">Our team</h1>
        <p style="font-size:14px;color:#6b7280;line-height:1.6;max-width:520px;">
          CUAHSI is a distributed team of researchers, engineers, educators, and operations staff working to
          advance water science infrastructure and community.
        </p>
      </div>

      <div v-for="dept in deptOrder" :key="dept">
        <div v-if="byDept[dept]?.length" style="margin-bottom:40px;">
          <div style="display:flex;align-items:center;gap:10px;margin-bottom:16px;">
            <span :style="`font-size:11px;padding:3px 10px;border-radius:99px;font-weight:500;background:${deptColors[dept]};color:${deptText[dept]};`">{{ dept }}</span>
            <span style="font-size:11px;color:#9ca3af;">{{ byDept[dept].length }} {{ byDept[dept].length === 1 ? 'person' : 'people' }}</span>
          </div>
          <div style="display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:12px;">
            <div v-for="person in byDept[dept]" :key="person.slug"
              style="border:0.5px solid #e5e7eb;border-radius:12px;padding:16px;">
              <div style="display:flex;align-items:center;gap:12px;margin-bottom:10px;">
                <div :style="`width:40px;height:40px;border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:13px;font-weight:500;flex-shrink:0;background:${deptColors[dept]};color:${deptText[dept]};`">
                  {{ initials(person.name) }}
                </div>
                <div>
                  <p style="font-size:13px;font-weight:500;line-height:1.3;">{{ person.name }}</p>
                  <p v-if="person.pronouns" style="font-size:11px;color:#9ca3af;">{{ person.pronouns }}</p>
                </div>
              </div>
              <p style="font-size:12px;color:#374151;font-weight:500;margin-bottom:6px;">{{ person.role }}</p>
              <p style="font-size:12px;color:#6b7280;line-height:1.55;">{{ person.bio }}</p>
            </div>
          </div>
        </div>
      </div>

      <div style="margin-bottom:48px;padding:20px;background:#f9fafb;border-radius:12px;">
        <p style="font-size:13px;color:#374151;margin-bottom:4px;font-weight:500;">Join the team</p>
        <p style="font-size:13px;color:#6b7280;">CUAHSI occasionally has openings for staff, fellows, and contractors. Check the <NuxtLink to="/community/jobs" style="color:#1D9E75;text-decoration:none;">job board</NuxtLink> or follow us on LinkedIn for announcements.</p>
      </div>
    </div>

    <footer style="border-top:0.5px solid #f3f4f6;">
      <div style="max-width:1024px;margin:0 auto;padding:14px 24px;display:flex;justify-content:space-between;">
        <div style="display:flex;gap:20px;">
          <NuxtLink to="/about" style="font-size:12px;color:#9ca3af;text-decoration:none;">About</NuxtLink>
          <NuxtLink to="/about/membership" style="font-size:12px;color:#9ca3af;text-decoration:none;">Membership</NuxtLink>
        </div>
        <p style="font-size:12px;color:#9ca3af;">© 2026 CUAHSI</p>
      </div>
    </footer>
  </div>
</template>
