<script setup lang="ts">
useHead({
  title: 'Our team · About CUAHSI',
  meta: [{ name: 'description', content: 'Meet the CUAHSI team — staff and independent contractors working across research, engineering, programs, operations, and communications.' }]
})

const { data: teamData } = await useAsyncData('full-team', () =>
  queryContent('team').where({ _extension: 'json' }).findOne()
)

const people = computed<any[]>(() =>
  Array.isArray(teamData.value?.body) ? teamData.value.body : []
)

const deptOrder = ['Leadership', 'Research', 'Engineering', 'Programs', 'Communications', 'Operations']
const contractors = computed(() => people.value.filter(p => p.role?.includes('contractor')))
const staff = computed(() => people.value.filter(p => !p.role?.includes('contractor')))

const byDept = computed(() => {
  return deptOrder.reduce((acc: Record<string, any[]>, dept) => {
    const members = staff.value.filter(p => p.department === dept)
    if (members.length) acc[dept] = members
    return acc
  }, {})
})

const deptColors: Record<string, string> = {
  Leadership: '#EDE9FE', Research: '#DCFCE7', Engineering: '#EFF6FF',
  Programs: '#FFF7ED', Communications: '#FDF2F8', Operations: '#F3F4F6',
}
const deptText: Record<string, string> = {
  Leadership: '#5B21B6', Research: '#15803D', Engineering: '#1E40AF',
  Programs: '#C2410C', Communications: '#9D174D', Operations: '#374151',
}

function initials(name: string) {
  return name.split(' ').map((n: string) => n[0]).join('').slice(0, 2).toUpperCase()
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
      <div style="padding:36px 0 28px;border-bottom:0.5px solid #f3f4f6;margin-bottom:40px;">
        <p style="font-size:11px;color:#9ca3af;margin-bottom:8px;">
          <NuxtLink to="/about" style="text-decoration:none;color:#9ca3af;">About</NuxtLink> / Our team
        </p>
        <h1 style="font-size:28px;font-weight:500;margin-bottom:10px;">Our team</h1>
        <p style="font-size:14px;color:#6b7280;line-height:1.65;max-width:520px;">
          CUAHSI is a distributed team of researchers, engineers, educators, and operations staff
          working to advance water science infrastructure and community.
        </p>
      </div>

      <!-- Staff by department -->
      <div v-for="dept in deptOrder" :key="dept">
        <div v-if="byDept[dept]?.length" style="margin-bottom:48px;">
          <div style="display:flex;align-items:center;gap:10px;margin-bottom:18px;">
            <span :style="`font-size:11px;padding:3px 10px;border-radius:99px;font-weight:500;background:${deptColors[dept]};color:${deptText[dept]};`">
              {{ dept }}
            </span>
            <span style="font-size:11px;color:#9ca3af;">{{ byDept[dept].length }} {{ byDept[dept].length === 1 ? 'person' : 'people' }}</span>
          </div>

          <div style="display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:14px;">
            <component
              v-for="person in byDept[dept]"
              :key="person.slug"
              :is="person.has_profile ? 'NuxtLink' : 'div'"
              :to="person.has_profile ? `/about/team/${person.slug}` : undefined"
              style="border:0.5px solid #e5e7eb;border-radius:12px;overflow:hidden;text-decoration:none;color:inherit;display:flex;flex-direction:column;"
              :style="person.has_profile ? 'cursor:pointer;' : ''">

              <!-- Photo -->
              <div style="height:180px;background:#f3f4f6;overflow:hidden;position:relative;flex-shrink:0;">
                <img v-if="person.photo"
                  :src="person.photo"
                  :alt="`${person.name} headshot`"
                  style="width:100%;height:100%;object-fit:cover;object-position:center top;"
                  @error="($event.target as HTMLImageElement).style.display='none'" />
                <div v-if="!person.photo"
                  :style="`width:100%;height:100%;display:flex;align-items:center;justify-content:center;font-size:32px;font-weight:500;background:${deptColors[dept]};color:${deptText[dept]};`">
                  {{ initials(person.name) }}
                </div>
                <!-- Profile badge -->
                <div v-if="person.has_profile"
                  style="position:absolute;top:8px;right:8px;background:rgba(255,255,255,0.9);border-radius:99px;padding:2px 8px;font-size:10px;color:#374151;font-weight:500;">
                  profile →
                </div>
              </div>

              <!-- Info -->
              <div style="padding:14px;flex:1;display:flex;flex-direction:column;gap:4px;">
                <div style="display:flex;align-items:baseline;gap:6px;flex-wrap:wrap;">
                  <p style="font-size:14px;font-weight:500;line-height:1.3;">{{ person.name }}</p>
                  <span v-if="person.pronouns" style="font-size:11px;color:#9ca3af;">{{ person.pronouns }}</span>
                </div>
                <p style="font-size:12px;color:#6b7280;line-height:1.4;">{{ person.role }}</p>

                <!-- Links row -->
                <div v-if="person.links && Object.keys(person.links).length" style="display:flex;gap:8px;margin-top:6px;flex-wrap:wrap;">
                  <a v-if="person.links.orcid" :href="person.links.orcid" target="_blank" rel="noopener"
                    @click.stop
                    style="font-size:10px;color:#A6CE39;font-weight:600;text-decoration:none;padding:1px 6px;border:0.5px solid #A6CE39;border-radius:3px;">
                    iD
                  </a>
                  <a v-if="person.links.google_scholar" :href="person.links.google_scholar" target="_blank" rel="noopener"
                    @click.stop
                    style="font-size:10px;color:#4285F4;font-weight:500;text-decoration:none;">
                    Scholar
                  </a>
                  <a v-if="person.links.github" :href="person.links.github" target="_blank" rel="noopener"
                    @click.stop
                    style="font-size:10px;color:#6b7280;text-decoration:none;">
                    GitHub
                  </a>
                  <a v-if="person.links.linkedin" :href="person.links.linkedin" target="_blank" rel="noopener"
                    @click.stop
                    style="font-size:10px;color:#0A66C2;text-decoration:none;">
                    LinkedIn
                  </a>
                </div>
              </div>
            </component>
          </div>
        </div>
      </div>

      <!-- Independent contractors -->
      <div v-if="contractors.length" style="margin-bottom:48px;">
        <div style="display:flex;align-items:center;gap:10px;margin-bottom:18px;">
          <span style="font-size:11px;padding:3px 10px;border-radius:99px;font-weight:500;background:#F3F4F6;color:#374151;">
            Independent contractors
          </span>
        </div>
        <div style="display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:14px;">
          <div v-for="person in contractors" :key="person.slug"
            style="border:0.5px solid #e5e7eb;border-radius:12px;overflow:hidden;">
            <div style="height:140px;background:#f3f4f6;overflow:hidden;">
              <img v-if="person.photo" :src="person.photo" :alt="`${person.name} headshot`"
                style="width:100%;height:100%;object-fit:cover;object-position:center top;"
                @error="($event.target as HTMLImageElement).style.display='none'" />
              <div v-else style="width:100%;height:100%;display:flex;align-items:center;justify-content:center;font-size:28px;font-weight:500;color:#6b7280;">
                {{ initials(person.name) }}
              </div>
            </div>
            <div style="padding:12px;">
              <p style="font-size:13px;font-weight:500;margin-bottom:3px;">{{ person.name }}</p>
              <p style="font-size:11px;color:#6b7280;line-height:1.4;">{{ person.role.replace(' (contractor)', '') }}</p>
              <div v-if="person.links?.github" style="margin-top:6px;">
                <a :href="person.links.github" target="_blank" rel="noopener"
                  style="font-size:10px;color:#6b7280;text-decoration:none;">GitHub</a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Join the team CTA -->
      <div style="margin-bottom:48px;padding:20px 24px;background:#f9fafb;border-radius:12px;">
        <p style="font-size:13px;color:#374151;font-weight:500;margin-bottom:4px;">Join the team</p>
        <p style="font-size:13px;color:#6b7280;">CUAHSI occasionally has openings for staff, fellows, and contractors. Check the <NuxtLink to="/community/jobs" style="color:#1D9E75;text-decoration:none;">job board</NuxtLink> or follow us on <a href="https://www.linkedin.com/company/consortium-of-universities-for-the-advancement-of-hydrologic-science-inc-cuahsi-/" target="_blank" style="color:#1D9E75;text-decoration:none;">LinkedIn</a> for announcements.</p>
      </div>
    </div>

    <footer style="border-top:0.5px solid #f3f4f6;">
      <div style="max-width:1024px;margin:0 auto;padding:14px 24px;display:flex;justify-content:space-between;">
        <div style="display:flex;gap:20px;">
          <NuxtLink to="/about" style="font-size:12px;color:#9ca3af;text-decoration:none;">About</NuxtLink>
          <NuxtLink to="/about/governance" style="font-size:12px;color:#9ca3af;text-decoration:none;">Governance</NuxtLink>
        </div>
        <p style="font-size:12px;color:#9ca3af;">© 2026 CUAHSI</p>
      </div>
    </footer>
  </div>
</template>
