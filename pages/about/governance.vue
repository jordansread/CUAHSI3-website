<script setup lang="ts">
useHead({
  title: 'Governance · About CUAHSI',
  meta: [{ name: 'description', content: 'CUAHSI is governed by a Board of Directors elected by and from its membership, with advisory committees on informatics, education and outreach, and instrumentation.' }]
})

const boardMembers = [
  { name: 'JP Gannon', institution: 'Virginia Tech', role: 'Chair' },
  { name: 'Jordan Read', institution: 'CUAHSI', role: 'President (Officer)' },
  { name: 'Salli Dymond', institution: 'Northern Arizona University', role: 'Secretary (Officer)' },
  { name: 'Steve Architzel', institution: 'UC San Francisco', role: 'Treasurer (Officer)' },
  { name: 'Hoori Ajami', institution: 'UC Riverside', role: '' },
  { name: 'Amy Burgin', institution: 'Iowa State University', role: '' },
  { name: 'Jon Duncan', institution: 'Penn State University', role: '' },
  { name: 'Darren Ficklin', institution: 'Indiana University', role: '' },
  { name: 'Drew Guswa', institution: 'Smith College', role: '' },
  { name: 'Paul C. Hanson', institution: 'University of Wisconsin', role: '' },
  { name: 'Melissa A. Kenney', institution: 'University of Minnesota', role: '' },
  { name: 'Safeeq Khan', institution: 'UC Merced', role: '' },
  { name: 'Sarah Ledford', institution: 'Georgia State University', role: '' },
  { name: 'Marco Maneta', institution: 'University of Montana', role: '' },
  { name: 'Ashley Matheny', institution: 'UT Austin', role: '' },
  { name: 'Jennifer Merrill', institution: 'Stroud Water Research Center', role: '' },
  { name: 'Diego Riveros-Iregui', institution: 'UNC Chapel Hill', role: '' },
  { name: 'Tao Wen', institution: 'Syracuse University', role: '' },
]

const officers = boardMembers.filter(m => m.role.includes('Officer') || m.role === 'Chair' || m.role === 'President (Officer)' || m.role === 'Secretary (Officer)' || m.role === 'Treasurer (Officer)' || m.role === 'Chair')
const members = boardMembers.filter(m => !m.role)

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
          <NuxtLink to="/about" style="text-decoration:none;color:#9ca3af;">About</NuxtLink> / Governance
        </p>
        <h1 style="font-size:28px;font-weight:500;margin-bottom:10px;">Governance</h1>
        <p style="font-size:14px;color:#6b7280;line-height:1.65;max-width:560px;margin-bottom:14px;">
          CUAHSI is governed by a Board of Directors elected by and from the membership. The Board receives
          guidance from several advisory committees composed of members from the broader hydrologic sciences community.
          Governance is guided by a set of
          <a href="https://www.cuahsi.org/uploads/library/doc/2024-07-24-Bylaws_Final.docx.pdf" target="_blank" style="color:#1D9E75;text-decoration:none;">bylaws ↗</a>.
        </p>
      </div>

      <!-- Board of Directors -->
      <section style="margin-bottom:52px;">
        <p style="font-size:11px;font-weight:500;letter-spacing:.07em;text-transform:uppercase;color:#9ca3af;margin-bottom:20px;">Board of Directors</p>

        <!-- Officers -->
        <p style="font-size:12px;font-weight:500;color:#374151;margin-bottom:12px;">Officers &amp; chair</p>
        <div style="display:grid;grid-template-columns:repeat(4,1fr);gap:10px;margin-bottom:28px;">
          <div v-for="m in boardMembers.filter(b => b.role)" :key="m.name"
            style="border:0.5px solid #e5e7eb;border-radius:10px;padding:14px;display:flex;gap:10px;align-items:flex-start;">
            <div style="width:36px;height:36px;border-radius:50%;background:#EDE9FE;display:flex;align-items:center;justify-content:center;font-size:12px;font-weight:500;color:#5B21B6;flex-shrink:0;">
              {{ initials(m.name) }}
            </div>
            <div>
              <p style="font-size:13px;font-weight:500;line-height:1.3;margin-bottom:2px;">{{ m.name }}</p>
              <p style="font-size:11px;color:#9ca3af;margin-bottom:2px;">{{ m.institution }}</p>
              <span style="font-size:10px;padding:1px 7px;border-radius:99px;background:#EDE9FE;color:#5B21B6;">{{ m.role }}</span>
            </div>
          </div>
        </div>

        <!-- Board members -->
        <p style="font-size:12px;font-weight:500;color:#374151;margin-bottom:12px;">Board members</p>
        <div style="display:grid;grid-template-columns:repeat(3,1fr);gap:10px;">
          <div v-for="m in boardMembers.filter(b => !b.role)" :key="m.name"
            style="border:0.5px solid #e5e7eb;border-radius:10px;padding:14px;display:flex;gap:10px;align-items:center;">
            <div style="width:32px;height:32px;border-radius:50%;background:#f3f4f6;display:flex;align-items:center;justify-content:center;font-size:11px;font-weight:500;color:#374151;flex-shrink:0;">
              {{ initials(m.name) }}
            </div>
            <div>
              <p style="font-size:13px;font-weight:500;line-height:1.3;margin-bottom:1px;">{{ m.name }}</p>
              <p style="font-size:11px;color:#9ca3af;">{{ m.institution }}</p>
            </div>
          </div>
        </div>
      </section>

      <!-- Advisory Committees -->
      <section style="margin-bottom:52px;">
        <p style="font-size:11px;font-weight:500;letter-spacing:.07em;text-transform:uppercase;color:#9ca3af;margin-bottom:8px;">Advisory committees</p>
        <p style="font-size:14px;color:#6b7280;line-height:1.65;max-width:580px;margin-bottom:24px;">
          Advisory committees are composed of members from the broad community of hydrologic sciences and
          provide advice and direction on CUAHSI programs and initiatives. They report to the Board of Directors
          and support initiatives set by the Board. Participation is open to any interested individual regardless
          of CUAHSI membership status.
        </p>
        <p style="font-size:12px;color:#6b7280;margin-bottom:28px;">Advisory committees help to generate and evaluate ideas for new CUAHSI activities, review and suggest improvements in current activities, prioritize near- and long-term activities, and support CUAHSI grant programs through promotion and proposal review. Contact <a href="mailto:info@cuahsi.org" style="color:#1D9E75;text-decoration:none;">info@cuahsi.org</a> to express interest in participating.</p>

        <div style="display:grid;grid-template-columns:repeat(3,1fr);gap:16px;">

          <div style="border:0.5px solid #e5e7eb;border-radius:12px;overflow:hidden;">
            <div style="padding:18px 18px 14px;border-bottom:0.5px solid #f3f4f6;">
              <p style="font-size:14px;font-weight:500;margin-bottom:6px;">Informatics</p>
              <p style="font-size:12px;color:#6b7280;line-height:1.5;">Initiates and monitors CUAHSI's activities related to data and modeling services.</p>
            </div>
            <div style="padding:14px 18px;display:flex;flex-direction:column;gap:8px;">
              <div v-for="m in [
                { name: 'Vidya Samadi', inst: 'Clemson University', role: 'Chair' },
                { name: 'Aubrey Dugger', inst: 'NCAR', role: '' },
                { name: 'Scott Peckham', inst: 'CU Boulder', role: '' },
                { name: 'Ibrahim Demir', inst: 'University of Iowa', role: '' },
                { name: 'Jeff Weber', inst: 'NCAR', role: '' },
                { name: 'Femeena Pandara Valappi', inst: 'Penn State', role: '' },
                { name: 'Elnaz Pezeshki', inst: 'East Carolina University', role: '' },
              ]" :key="m.name" style="display:flex;align-items:baseline;justify-content:space-between;gap:8px;">
                <div>
                  <p style="font-size:12px;font-weight:500;">{{ m.name }}</p>
                  <p style="font-size:11px;color:#9ca3af;">{{ m.inst }}</p>
                </div>
                <span v-if="m.role" style="font-size:10px;padding:1px 7px;border-radius:99px;background:#E1F5EE;color:#0F6E56;white-space:nowrap;">{{ m.role }}</span>
              </div>
            </div>
          </div>

          <div style="border:0.5px solid #e5e7eb;border-radius:12px;overflow:hidden;">
            <div style="padding:18px 18px 14px;border-bottom:0.5px solid #f3f4f6;">
              <p style="font-size:14px;font-weight:500;margin-bottom:6px;">Education &amp; outreach</p>
              <p style="font-size:12px;color:#6b7280;line-height:1.5;">Initiates and monitors CUAHSI's activities related to membership, pedagogical topics, and career development opportunities.</p>
            </div>
            <div style="padding:14px 18px;display:flex;flex-direction:column;gap:8px;">
              <div v-for="m in [
                { name: 'Tao Wen', inst: 'Syracuse University', role: 'Chair' },
                { name: 'JP Gannon', inst: 'Virginia Tech', role: 'Board Liaison' },
                { name: 'Lauren Lowman', inst: 'Wake Forest University', role: '' },
              ]" :key="m.name" style="display:flex;align-items:baseline;justify-content:space-between;gap:8px;">
                <div>
                  <p style="font-size:12px;font-weight:500;">{{ m.name }}</p>
                  <p style="font-size:11px;color:#9ca3af;">{{ m.inst }}</p>
                </div>
                <span v-if="m.role" style="font-size:10px;padding:1px 7px;border-radius:99px;background:#E1F5EE;color:#0F6E56;white-space:nowrap;">{{ m.role }}</span>
              </div>
            </div>
          </div>

          <div style="border:0.5px solid #e5e7eb;border-radius:12px;overflow:hidden;">
            <div style="padding:18px 18px 14px;border-bottom:0.5px solid #f3f4f6;">
              <p style="font-size:14px;font-weight:500;margin-bottom:6px;">Instrumentation &amp; data acquisition</p>
              <p style="font-size:12px;color:#6b7280;line-height:1.5;">Initiates and monitors CUAHSI's activities related to hydrologic instrumentation.</p>
            </div>
            <div style="padding:14px 18px;display:flex;flex-direction:column;gap:8px;">
              <div v-for="m in [
                { name: 'Robert Payn', inst: 'Montana State University', role: 'Chair' },
                { name: 'Lyndsay Ball', inst: 'USGS', role: '' },
                { name: 'Rachel Gabor', inst: 'Ohio State University', role: '' },
                { name: 'Diana Karwan', inst: 'University of Minnesota', role: '' },
                { name: 'Ted Langhorst', inst: 'UMass Amherst', role: '' },
                { name: 'YinPhan Tsang', inst: 'University of Hawaii', role: '' },
              ]" :key="m.name" style="display:flex;align-items:baseline;justify-content:space-between;gap:8px;">
                <div>
                  <p style="font-size:12px;font-weight:500;">{{ m.name }}</p>
                  <p style="font-size:11px;color:#9ca3af;">{{ m.inst }}</p>
                </div>
                <span v-if="m.role" style="font-size:10px;padding:1px 7px;border-radius:99px;background:#E1F5EE;color:#0F6E56;white-space:nowrap;">{{ m.role }}</span>
              </div>
            </div>
          </div>

        </div>
      </section>

      <!-- Bylaws + docs -->
      <section style="margin-bottom:48px;">
        <p style="font-size:11px;font-weight:500;letter-spacing:.07em;text-transform:uppercase;color:#9ca3af;margin-bottom:14px;">Governing documents</p>
        <div style="display:flex;gap:10px;flex-wrap:wrap;">
          <a href="https://www.cuahsi.org/uploads/library/doc/2024-07-24-Bylaws_Final.docx.pdf" target="_blank" rel="noopener"
            style="font-size:13px;padding:9px 16px;border:0.5px solid #d1d5db;border-radius:8px;text-decoration:none;color:inherit;">
            Bylaws (PDF) ↗
          </a>
          <a href="https://www.cuahsi.org/uploads/pages/img/Strategic-Plan-2023-Final.1.pdf" target="_blank" rel="noopener"
            style="font-size:13px;padding:9px 16px;border:0.5px solid #d1d5db;border-radius:8px;text-decoration:none;color:inherit;">
            Strategic Plan 2023–2028 (PDF) ↗
          </a>
          <a href="https://www.cuahsi.org/about/policies-and-conduct" target="_blank" rel="noopener"
            style="font-size:13px;padding:9px 16px;border:0.5px solid #d1d5db;border-radius:8px;text-decoration:none;color:inherit;">
            Policies &amp; conduct ↗
          </a>
        </div>
      </section>

    </div>

    <footer style="border-top:0.5px solid #f3f4f6;">
      <div style="max-width:1024px;margin:0 auto;padding:14px 24px;display:flex;align-items:center;justify-content:space-between;">
        <div style="display:flex;gap:20px;">
          <NuxtLink to="/about" style="font-size:12px;color:#9ca3af;text-decoration:none;">About CUAHSI</NuxtLink>
          <NuxtLink to="/about/membership" style="font-size:12px;color:#9ca3af;text-decoration:none;">Membership</NuxtLink>
          <NuxtLink to="/about/team" style="font-size:12px;color:#9ca3af;text-decoration:none;">Our team</NuxtLink>
        </div>
        <p style="font-size:12px;color:#9ca3af;">© 2026 CUAHSI</p>
      </div>
    </footer>
  </div>
</template>
