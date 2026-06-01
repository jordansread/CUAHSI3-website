<script setup lang="ts">
const route = useRoute()
const slug = route.params.slug as string

// Load the team roster
const { data: teamData } = await useAsyncData('full-team-profile', () =>
  queryContent('team').where({ _extension: 'json' }).findOne()
)

const person = computed<any>(() => {
  const all: any[] = Array.isArray(teamData.value?.body) ? teamData.value.body : []
  return all.find(p => p.slug === slug) ?? null
})

if (!person.value) throw createError({ statusCode: 404, message: 'Team member not found' })

// Load extended .md profile if one exists for this staff member
const { data: extendedProfile } = await useAsyncData(`team-md-${slug}`, () =>
  queryContent('team').where({ slug, _extension: 'md' }).findOne().catch(() => null)
)

useHead({
  title: `${person.value?.name} · CUAHSI Team`,
  meta: [{ name: 'description', content: person.value?.bio?.slice(0, 160) }]
})

// Cross-referenced content — newsletter mentions
const { data: newsletters } = await useAsyncData(`profile-newsletters-${slug}`, () =>
  queryContent('newsletter')
    .where({ published: true, people_mentioned: { $contains: slug } })
    .sort({ date: -1 })
    .find()
)

// Research highlights
const { data: research } = await useAsyncData(`profile-research-${slug}`, () =>
  queryContent('research')
    .where({ published: true, people_mentioned: { $contains: slug } })
    .sort({ date: -1 })
    .find()
)

// Cyberseminar speakers (match by name slug in speakers array)
// We check if their name appears in the speakers list
const firstName = computed(() => person.value?.name?.split(' ')[0] ?? '')
const lastName = computed(() => person.value?.name?.split(' ').slice(-1)[0] ?? '')

const { data: seminars } = await useAsyncData(`profile-seminars-${slug}`, () =>
  queryContent('cyberseminars')
    .where({ published: true })
    .sort({ date: -1 })
    .find()
)

const relatedSeminars = computed(() =>
  (seminars.value ?? []).filter(s =>
    s.speakers?.some((sp: string) =>
      sp.includes(lastName.value) || sp.includes(firstName.value)
    )
  )
)

function fmtDate(d: string) {
  return new Date(d).toLocaleDateString('en-US', { month: 'long', year: 'numeric' })
}

const deptColors: Record<string, string> = {
  Leadership: '#EDE9FE', Research: '#DCFCE7', Engineering: '#EFF6FF',
  Programs: '#FFF7ED', Communications: '#FDF2F8', Operations: '#F3F4F6',
}
const deptText: Record<string, string> = {
  Leadership: '#5B21B6', Research: '#15803D', Engineering: '#1E40AF',
  Programs: '#C2410C', Communications: '#9D174D', Operations: '#374151',
}
</script>

<template>
  <div v-if="person">
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
      <div style="display:grid;grid-template-columns:220px minmax(0,1fr);gap:40px;padding:40px 0 48px;align-items:start;">

        <!-- Left: photo + links -->
        <div>
          <!-- Breadcrumb -->
          <p style="font-size:11px;color:#9ca3af;margin-bottom:16px;">
            <NuxtLink to="/about/team" style="text-decoration:none;color:#9ca3af;">← Our team</NuxtLink>
          </p>

          <!-- Photo -->
          <div style="width:220px;height:260px;border-radius:12px;overflow:hidden;background:#f3f4f6;margin-bottom:16px;">
            <img v-if="person.photo" :src="person.photo" :alt="`${person.name} headshot`"
              style="width:100%;height:100%;object-fit:cover;object-position:center top;" />
            <div v-else
              :style="`width:100%;height:100%;display:flex;align-items:center;justify-content:center;font-size:48px;font-weight:500;background:${deptColors[person.department]};color:${deptText[person.department]};`">
              {{ person.name.split(' ').map((n:string) => n[0]).join('').slice(0,2) }}
            </div>
          </div>

          <!-- Dept badge -->
          <span :style="`font-size:11px;padding:3px 10px;border-radius:99px;font-weight:500;background:${deptColors[person.department]};color:${deptText[person.department]};display:inline-block;margin-bottom:12px;`">
            {{ person.department }}
          </span>

          <!-- External profile links -->
          <div v-if="person.links && Object.keys(person.links).filter(k => person.links[k]).length"
            style="display:flex;flex-direction:column;gap:8px;margin-top:4px;">
            <p style="font-size:11px;font-weight:500;letter-spacing:.05em;text-transform:uppercase;color:#9ca3af;margin-bottom:2px;">Profiles</p>

            <a v-if="person.links.orcid" :href="person.links.orcid" target="_blank" rel="noopener"
              style="display:flex;align-items:center;gap:8px;text-decoration:none;color:inherit;">
              <span style="font-size:12px;color:#A6CE39;font-weight:700;border:1.5px solid #A6CE39;border-radius:3px;padding:0 4px;line-height:1.6;">iD</span>
              <span style="font-size:12px;color:#6b7280;">ORCID</span>
            </a>

            <a v-if="person.links.google_scholar" :href="person.links.google_scholar" target="_blank" rel="noopener"
              style="display:flex;align-items:center;gap:8px;text-decoration:none;color:inherit;">
              <span style="font-size:14px;">🎓</span>
              <span style="font-size:12px;color:#6b7280;">Google Scholar</span>
            </a>

            <a v-if="person.links.github" :href="person.links.github" target="_blank" rel="noopener"
              style="display:flex;align-items:center;gap:8px;text-decoration:none;color:inherit;">
              <span style="font-size:14px;">⌥</span>
              <span style="font-size:12px;color:#6b7280;">GitHub</span>
            </a>

            <a v-if="person.links.linkedin" :href="person.links.linkedin" target="_blank" rel="noopener"
              style="display:flex;align-items:center;gap:8px;text-decoration:none;color:inherit;">
              <span style="font-size:14px;">in</span>
              <span style="font-size:12px;color:#6b7280;">LinkedIn</span>
            </a>

            <a v-if="person.links.cv" :href="person.links.cv" target="_blank" rel="noopener"
              style="display:flex;align-items:center;gap:8px;text-decoration:none;color:inherit;">
              <span style="font-size:14px;">📄</span>
              <span style="font-size:12px;color:#6b7280;">CV / Resume</span>
            </a>
          </div>
        </div>

        <!-- Right: bio + cross-refs -->
        <div>
          <h1 style="font-size:26px;font-weight:500;margin-bottom:4px;line-height:1.2;">{{ person.name }}</h1>
          <p v-if="person.pronouns" style="font-size:12px;color:#9ca3af;margin-bottom:6px;">{{ person.pronouns }}</p>
          <p style="font-size:14px;color:#6b7280;font-weight:500;margin-bottom:20px;">{{ person.role }}</p>

          <!-- Bio -->
          <div style="padding-bottom:24px;margin-bottom:24px;border-bottom:0.5px solid #f3f4f6;">
            <p style="font-size:14px;color:#374151;line-height:1.75;">{{ person.bio }}</p>
            <p v-if="person.fun_fact" style="font-size:13px;color:#6b7280;line-height:1.65;margin-top:14px;">
              <span style="font-weight:500;color:#374151;">Fun fact:</span> {{ person.fun_fact }}
            </p>
          </div>

          <!-- Extended profile content from .md file (publications, recent work, etc.) -->
          <div v-if="extendedProfile?.body" style="padding-bottom:24px;margin-bottom:24px;border-bottom:0.5px solid #f3f4f6;">
            <ContentRenderer :value="extendedProfile" class="profile-prose" />
          </div>

          <!-- Research highlights -->
          <div v-if="research?.length" style="margin-bottom:28px;">
            <p style="font-size:12px;font-weight:500;letter-spacing:.05em;text-transform:uppercase;color:#9ca3af;margin-bottom:12px;">Research highlights</p>
            <div style="display:flex;flex-direction:column;gap:10px;">
              <NuxtLink v-for="item in research" :key="item._path"
                :to="`/highlights/${item.slug}`"
                style="display:flex;gap:12px;align-items:flex-start;text-decoration:none;color:inherit;padding:12px;border:0.5px solid #e5e7eb;border-radius:8px;">
                <span style="font-size:11px;color:#9ca3af;white-space:nowrap;margin-top:2px;">{{ item.year }}</span>
                <div>
                  <p style="font-size:13px;font-weight:500;margin-bottom:2px;line-height:1.35;">{{ item.title }}</p>
                  <p style="font-size:12px;color:#6b7280;line-height:1.5;">{{ item.excerpt }}</p>
                </div>
              </NuxtLink>
            </div>
          </div>

          <!-- Cyberseminar appearances -->
          <div v-if="relatedSeminars.length" style="margin-bottom:28px;">
            <p style="font-size:12px;font-weight:500;letter-spacing:.05em;text-transform:uppercase;color:#9ca3af;margin-bottom:12px;">Cyberseminars</p>
            <div style="display:flex;flex-direction:column;gap:8px;">
              <NuxtLink v-for="s in relatedSeminars" :key="s.slug"
                to="/learn-train/cyberseminars"
                style="display:flex;gap:12px;align-items:center;text-decoration:none;color:inherit;padding:10px 12px;border:0.5px solid #e5e7eb;border-radius:8px;">
                <div style="width:52px;height:30px;border-radius:4px;overflow:hidden;flex-shrink:0;background:#f3f4f6;">
                  <img :src="`https://img.youtube.com/vi/${s.youtube_id}/mqdefault.jpg`"
                    style="width:100%;height:100%;object-fit:cover;" />
                </div>
                <div>
                  <p style="font-size:13px;font-weight:500;line-height:1.3;margin-bottom:1px;">{{ s.title }}</p>
                  <p style="font-size:11px;color:#9ca3af;">{{ fmtDate(s.date) }}</p>
                </div>
              </NuxtLink>
            </div>
          </div>

          <!-- Newsletter mentions -->
          <div v-if="newsletters?.length" style="margin-bottom:28px;">
            <p style="font-size:12px;font-weight:500;letter-spacing:.05em;text-transform:uppercase;color:#9ca3af;margin-bottom:12px;">In the newsletter</p>
            <div style="display:flex;flex-direction:column;gap:6px;">
              <NuxtLink v-for="n in newsletters" :key="n._path"
                :to="`/community/newsletter/${n.slug}`"
                style="display:flex;align-items:center;gap:8px;text-decoration:none;color:inherit;">
                <span style="width:5px;height:5px;border-radius:50%;background:#1D9E75;flex-shrink:0;"></span>
                <p style="font-size:13px;color:#6b7280;">{{ n.title }}</p>
              </NuxtLink>
            </div>
          </div>

          <!-- No cross-refs message -->
          <div v-if="!research?.length && !newsletters?.length && !relatedSeminars.length"
            style="padding:16px;background:#f9fafb;border-radius:8px;">
            <p style="font-size:13px;color:#9ca3af;">No additional highlights linked yet.</p>
          </div>
        </div>

      </div>
    </div>

    <footer style="border-top:0.5px solid #f3f4f6;">
      <div style="max-width:1024px;margin:0 auto;padding:14px 24px;display:flex;justify-content:space-between;">
        <NuxtLink to="/about/team" style="font-size:12px;color:#9ca3af;text-decoration:none;">← Our team</NuxtLink>
        <p style="font-size:12px;color:#9ca3af;">© 2026 CUAHSI</p>
      </div>
    </footer>
  </div>
</template>

<style>
.profile-prose h2 {
  font-size: 13px;
  font-weight: 600;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  color: #9ca3af;
  margin-top: 28px;
  margin-bottom: 12px;
}
.profile-prose h3 {
  font-size: 13px;
  font-weight: 500;
  color: #374151;
  margin-top: 18px;
  margin-bottom: 8px;
}
.profile-prose ul {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 10px;
}
.profile-prose li {
  font-size: 13px;
  color: #374151;
  line-height: 1.65;
  padding-left: 12px;
  border-left: 2px solid #e5e7eb;
}
.profile-prose li strong {
  font-weight: 500;
  color: #111827;
}
.profile-prose a {
  color: #1D9E75;
  text-decoration: none;
}
.profile-prose a:hover {
  text-decoration: underline;
}
.profile-prose em {
  font-style: italic;
  color: #6b7280;
}
</style>

