<script setup lang="ts">
const historyItems = [
  { year: '1984', text: 'NSF Hydrology and Hydraulics Program discontinued, catalyzing community organizing' },
  { year: '1987', text: 'Committee on Hydrologic Sciences established by the National Research Council' },
  { year: '1991', text: 'Opportunities in Hydrologic Sciences (the blue book) published by the National Academies' },
  { year: '1992', text: 'NSF-GEO establishes a core program in hydrologic sciences with $2M initial funding' },
  { year: '2001', text: 'CUAHSI incorporated in Washington D.C. with 33 founding member universities' },
  { year: '2003', text: 'Cyberseminar program launched, now 150+ recordings on YouTube' },
  { year: '2026', text: '25th anniversary: 130+ members, 25,000+ HydroShare users' },
]

useHead({
  title: 'About CUAHSI',
  meta: [{ name: 'description', content: 'CUAHSI is a 501(c)3 research organization representing 130+ universities advancing water science through shared data infrastructure, training, and community convening.' }]
})
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
        <div style="margin-left:auto;">
          <ClientOnly><SiteSearch /></ClientOnly>
        </div>
      </div>
    </nav>

    <div style="max-width:1024px;margin:0 auto;padding:0 24px;">

      <!-- Hero -->
      <section style="padding:48px 0 40px;border-bottom:0.5px solid #f3f4f6;">
        <p style="font-size:11px;color:#9ca3af;font-weight:500;letter-spacing:.07em;text-transform:uppercase;margin-bottom:12px;">About CUAHSI</p>
        <h1 style="font-size:32px;font-weight:500;line-height:1.2;margin-bottom:16px;max-width:580px;">
          Advancing water science through shared infrastructure and community
        </h1>
        <p style="font-size:15px;color:#6b7280;line-height:1.7;max-width:580px;margin-bottom:20px;">
          The Consortium of Universities for the Advancement of Hydrologic Science, Inc. (CUAHSI) is a 501(c)3
          research organization representing more than 130 U.S. universities and international water science
          organizations. CUAHSI receives support from the National Science Foundation to develop infrastructure
          and services for the advancement of water science in the United States.
        </p>
        <div style="display:flex;gap:8px;flex-wrap:wrap;">
          <a href="https://www.cuahsi.org/uploads/pages/doc/2025-About-CUAHSI-Flyer-2.pdf" target="_blank" rel="noopener"
            style="font-size:13px;padding:9px 18px;border:0.5px solid #d1d5db;border-radius:8px;text-decoration:none;color:inherit;">Download brochure ↗</a>
          <a href="https://www.cuahsi.org/uploads/pages/img/2025-Annual-Report_Final_reduced.pdf" target="_blank" rel="noopener"
            style="font-size:13px;padding:9px 18px;border:0.5px solid #d1d5db;border-radius:8px;text-decoration:none;color:inherit;">2025 Annual Report ↗</a>
        </div>
      </section>

      <!-- About sub-nav -->
      <div style="display:flex;gap:0;border-bottom:0.5px solid #f3f4f6;margin-bottom:48px;overflow-x:auto;">
        <a href="#mission" style="font-size:12px;color:#6b7280;padding:14px 16px 14px 0;text-decoration:none;white-space:nowrap;">Mission &amp; values</a>
        <a href="#what-we-do" style="font-size:12px;color:#6b7280;padding:14px 16px;text-decoration:none;white-space:nowrap;">What we do</a>
        <a href="#history" style="font-size:12px;color:#6b7280;padding:14px 16px;text-decoration:none;white-space:nowrap;">History</a>
        <NuxtLink to="/about/team" style="font-size:12px;color:#6b7280;padding:14px 16px;text-decoration:none;white-space:nowrap;">Our team</NuxtLink>
        <NuxtLink to="/about/governance" style="font-size:12px;color:#6b7280;padding:14px 16px;text-decoration:none;white-space:nowrap;">Governance</NuxtLink>
        <NuxtLink to="/about/membership" style="font-size:12px;color:#6b7280;padding:14px 16px;text-decoration:none;white-space:nowrap;">Membership</NuxtLink>
        <a href="#contact" style="font-size:12px;color:#6b7280;padding:14px 16px;text-decoration:none;white-space:nowrap;">Contact</a>
      </div>

      <!-- Mission + Vision + Values (condensed) -->
      <section id="mission" style="margin-bottom:52px;">
        <div style="display:grid;grid-template-columns:1fr 1fr 1fr;gap:0;border:0.5px solid #e5e7eb;border-radius:12px;overflow:hidden;margin-bottom:20px;">
          <div style="padding:20px 22px;border-right:0.5px solid #e5e7eb;">
            <p style="font-size:10px;font-weight:500;letter-spacing:.07em;text-transform:uppercase;color:#9ca3af;margin-bottom:8px;">Mission</p>
            <p style="font-size:13px;color:#374151;line-height:1.6;">To empower the water community and advance science through collaboration, infrastructure, and education.</p>
          </div>
          <div style="padding:20px 22px;border-right:0.5px solid #e5e7eb;">
            <p style="font-size:10px;font-weight:500;letter-spacing:.07em;text-transform:uppercase;color:#9ca3af;margin-bottom:8px;">Vision</p>
            <p style="font-size:13px;color:#374151;line-height:1.6;">A thriving water community — enabled by shared resources — developing an integrated understanding of water, earth, ecosystems, and society.</p>
          </div>
          <div style="padding:20px 22px;">
            <p style="font-size:10px;font-weight:500;letter-spacing:.07em;text-transform:uppercase;color:#9ca3af;margin-bottom:8px;">Values</p>
            <div style="display:flex;flex-direction:column;gap:5px;">
              <div>
                <span style="font-size:12px;font-weight:500;color:#374151;">Strategic collaborators</span>
                <span style="font-size:12px;color:#6b7280;"> — connecting people and institutions across water science</span>
              </div>
              <div>
                <span style="font-size:12px;font-weight:500;color:#374151;">Innovative catalysts</span>
                <span style="font-size:12px;color:#6b7280;"> — making high-value tools and ideas accessible to all</span>
              </div>
              <div>
                <span style="font-size:12px;font-weight:500;color:#374151;">Impactful leaders</span>
                <span style="font-size:12px;color:#6b7280;"> — delivering lasting change for the greater good</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- What we do -->
      <section id="what-we-do" style="margin-bottom:52px;padding:32px;background:#f9fafb;border-radius:16px;">
        <p style="font-size:11px;font-weight:500;letter-spacing:.07em;text-transform:uppercase;color:#9ca3af;margin-bottom:8px;">What we do</p>
        <p style="font-size:15px;color:#374151;line-height:1.7;max-width:620px;margin-bottom:28px;">
          CUAHSI fosters a diverse and dynamic water science community enabled by shared scientific infrastructure.
          Our programs and resources are available to everyone — students, educators, community scientists, federal
          and state agencies, and more — across three core capabilities.
        </p>
        <div style="display:grid;grid-template-columns:repeat(3,1fr);gap:20px;">
          <div>
            <div style="width:36px;height:36px;background:#E1F5EE;border-radius:8px;display:flex;align-items:center;justify-content:center;margin-bottom:12px;font-size:18px;">🗄️</div>
            <p style="font-size:14px;font-weight:500;margin-bottom:8px;">Data infrastructure operations</p>
            <p style="font-size:13px;color:#6b7280;line-height:1.6;margin-bottom:10px;">We operate HydroShare — the water science the community platform for publishing, sharing, and collaborating on data, models, and code — and the Hydrologic Information System for data discovery. We build software that makes it easier to find, manage, analyze, archive, and publish data following FAIR principles.</p>
            <NuxtLink to="/data-platforms" style="font-size:12px;color:#1D9E75;text-decoration:none;">Explore tools &amp; platforms →</NuxtLink>
          </div>
          <div>
            <div style="width:36px;height:36px;background:#EDE9FE;border-radius:8px;display:flex;align-items:center;justify-content:center;margin-bottom:12px;font-size:18px;">🎓</div>
            <p style="font-size:14px;font-weight:500;margin-bottom:8px;">Training delivery &amp; community convening</p>
            <p style="font-size:13px;color:#6b7280;line-height:1.6;margin-bottom:10px;">We deliver field workshops, virtual university courses, cyberseminars, fellowships, and summer institutes that build skills and connect water scientists at every career stage. We facilitate meetings and events that provide venues for sharing ideas and catalyzing new projects.</p>
            <NuxtLink to="/learn-train" style="font-size:12px;color:#1D9E75;text-decoration:none;">Browse training →</NuxtLink>
          </div>
          <div>
            <div style="width:36px;height:36px;background:#EFF6FF;border-radius:8px;display:flex;align-items:center;justify-content:center;margin-bottom:12px;font-size:18px;">🔬</div>
            <p style="font-size:14px;font-weight:500;margin-bottom:8px;">Cyberinfrastructure &amp; data innovation</p>
            <p style="font-size:13px;color:#6b7280;line-height:1.6;margin-bottom:10px;">Our research team develops new software, standards, and frameworks that advance the way water data is collected, modeled, and shared — including cloud computing tools, model evaluation frameworks, and grants that seed new research and launch new ideas.</p>
            <NuxtLink to="/highlights" style="font-size:12px;color:#1D9E75;text-decoration:none;">Browse highlights →</NuxtLink>
          </div>
        </div>
        <div style="margin-top:24px;padding-top:20px;border-top:0.5px solid #e5e7eb;">
          <p style="font-size:12px;color:#9ca3af;margin-bottom:8px;">Current funding partnerships</p>
          <p style="font-size:13px;color:#6b7280;">National Science Foundation (NSF) · National Oceanic and Atmospheric Administration (NOAA) · Internet of Water Coalition · University of Alabama · Clemson University · University of Pittsburgh · University of Illinois · University of Cincinnati · National Academy of Sciences</p>
        </div>
      </section>

      <!-- History -->
      <section id="history" style="margin-bottom:52px;">
        <p style="font-size:11px;font-weight:500;letter-spacing:.07em;text-transform:uppercase;color:#9ca3af;margin-bottom:20px;">History</p>
        <div style="display:grid;grid-template-columns:minmax(0,1fr) 260px;gap:40px;">
          <div>
            <p style="font-size:14px;color:#374151;line-height:1.75;margin-bottom:14px;">
              CUAHSI was incorporated in June 2001 following recognition of the need for the water science community
              to organize and extend the national and international research portfolio — particularly to develop shared
              infrastructure for investigating the behavior and effect of water in large and complex environmental systems.
            </p>
            <p style="font-size:14px;color:#374151;line-height:1.75;margin-bottom:14px;">
              The path to CUAHSI began two decades earlier. Following a reorganization at NSF in 1984 that discontinued
              the Hydrology and Hydraulics Program, the community spent years building the case for renewed investment.
              In 1991, the National Academies published <em>Opportunities in Hydrologic Sciences</em> — widely known
              as the "blue book" — establishing the case for a coordinated national infrastructure investment in
              hydrologic science.
            </p>
            <p style="font-size:14px;color:#374151;line-height:1.75;margin-bottom:14px;">
              A decade of planning, workshops, and community organization followed. In 2000, a white paper presented
              to the AGU executive committee by Vijay Gupta, with input from K. Potter and U. Lall, made the case
              for establishing infrastructure for hydrology. The following year, NSF funded the planning effort,
              and CUAHSI was incorporated in Washington D.C. with 33 founding member universities.
            </p>
            <p style="font-size:14px;color:#374151;line-height:1.75;">
              2026 marks CUAHSI's 25th anniversary. From 33 founding members to more than 130 today, the organization
              has grown alongside the field — expanding access to data, training, and shared infrastructure for a
              community now spanning water science, climate research, and geohazards.
            </p>
          </div>
          <div style="display:flex;flex-direction:column;gap:0;">
            <div v-for="(item, i) in historyItems" :key="item.year"
              :style="`display:flex;gap:0;padding-bottom:${i < 6 ? '16px' : '0'};`">
              <div style="display:flex;flex-direction:column;align-items:center;margin-right:12px;flex-shrink:0;">
                <div :style="`width:8px;height:8px;border-radius:50%;flex-shrink:0;margin-top:4px;background:${item.year==='2026'?'#1D9E75':'#d1d5db'};`"></div>
                <div v-if="i < 6" style="width:1px;background:#e5e7eb;flex:1;margin-top:4px;"></div>
              </div>
              <div>
                <p style="font-size:11px;color:#9ca3af;margin-bottom:2px;">{{ item.year }}</p>
                <p style="font-size:12px;color:#374151;line-height:1.5;">{{ item.text }}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Quick links to sub-pages -->
      <section style="margin-bottom:52px;">
        <p style="font-size:11px;font-weight:500;letter-spacing:.07em;text-transform:uppercase;color:#9ca3af;margin-bottom:16px;">More about CUAHSI</p>
        <div style="display:grid;grid-template-columns:repeat(3,1fr);gap:12px;">
          <NuxtLink to="/about/team" style="border:0.5px solid #e5e7eb;border-radius:12px;padding:20px;text-decoration:none;color:inherit;display:flex;flex-direction:column;gap:6px;">
            <p style="font-size:14px;font-weight:500;">Our team</p>
            <p style="font-size:12px;color:#6b7280;line-height:1.5;">20+ staff and contractors across research, engineering, programs, operations, and communications.</p>
            <p style="font-size:12px;color:#1D9E75;margin-top:4px;">Meet the team →</p>
          </NuxtLink>
          <NuxtLink to="/about/governance" style="border:0.5px solid #e5e7eb;border-radius:12px;padding:20px;text-decoration:none;color:inherit;display:flex;flex-direction:column;gap:6px;">
            <p style="font-size:14px;font-weight:500;">Governance</p>
            <p style="font-size:12px;color:#6b7280;line-height:1.5;">Board of Directors elected by membership, advisory committees, and organizational bylaws.</p>
            <p style="font-size:12px;color:#1D9E75;margin-top:4px;">View governance →</p>
          </NuxtLink>
          <NuxtLink to="/about/membership" style="border:0.5px solid #e5e7eb;border-radius:12px;padding:20px;text-decoration:none;color:inherit;display:flex;flex-direction:column;gap:6px;">
            <p style="font-size:14px;font-weight:500;">Membership</p>
            <p style="font-size:12px;color:#6b7280;line-height:1.5;">Join a network of 130+ universities and organizations advancing water science together.</p>
            <p style="font-size:12px;color:#1D9E75;margin-top:4px;">Learn about membership →</p>
          </NuxtLink>
        </div>
      </section>

      <!-- Reports -->
      <section style="margin-bottom:52px;">
        <p style="font-size:11px;font-weight:500;letter-spacing:.07em;text-transform:uppercase;color:#9ca3af;margin-bottom:16px;">Reports &amp; documents</p>
        <div style="display:grid;grid-template-columns:repeat(3,1fr);gap:12px;">
          <a href="https://www.cuahsi.org/uploads/pages/img/2025-Annual-Report_Final_reduced.pdf" target="_blank" rel="noopener"
            style="border:0.5px solid #e5e7eb;border-radius:12px;padding:18px;text-decoration:none;color:inherit;">
            <p style="font-size:14px;font-weight:500;margin-bottom:4px;">2025 Annual Report</p>
            <p style="font-size:12px;color:#6b7280;line-height:1.5;margin-bottom:10px;">Progress across HydroShare, training programs, and research in 2025.</p>
            <p style="font-size:12px;color:#1D9E75;">Download PDF ↗</p>
          </a>
          <a href="https://www.cuahsi.org/uploads/pages/img/Strategic-Plan-2023-Final.1.pdf" target="_blank" rel="noopener"
            style="border:0.5px solid #e5e7eb;border-radius:12px;padding:18px;text-decoration:none;color:inherit;">
            <p style="font-size:14px;font-weight:500;margin-bottom:4px;">Strategic Plan 2023–2028</p>
            <p style="font-size:12px;color:#6b7280;line-height:1.5;margin-bottom:10px;">CUAHSI strategic direction for building a sustainable organization and widening the community served.</p>
            <p style="font-size:12px;color:#1D9E75;">Download PDF ↗</p>
          </a>
          <a href="https://www.cuahsi.org/uploads/library/doc/2024-07-24-Bylaws_Final.docx.pdf" target="_blank" rel="noopener"
            style="border:0.5px solid #e5e7eb;border-radius:12px;padding:18px;text-decoration:none;color:inherit;">
            <p style="font-size:14px;font-weight:500;margin-bottom:4px;">Bylaws</p>
            <p style="font-size:12px;color:#6b7280;line-height:1.5;margin-bottom:10px;">CUAHSI governing bylaws, last updated July 2024.</p>
            <p style="font-size:12px;color:#1D9E75;">Download PDF ↗</p>
          </a>
        </div>
      </section>

      <!-- Contact -->
      <section id="contact" style="margin-bottom:48px;">
        <p style="font-size:11px;font-weight:500;letter-spacing:.07em;text-transform:uppercase;color:#9ca3af;margin-bottom:16px;">Contact us</p>
        <div style="display:grid;grid-template-columns:repeat(3,1fr);gap:12px;">
          <div style="border:0.5px solid #e5e7eb;border-radius:12px;padding:18px;">
            <p style="font-size:13px;font-weight:500;margin-bottom:4px;">General inquiries</p>
            <a href="mailto:info@cuahsi.org" style="font-size:13px;color:#1D9E75;text-decoration:none;">info@cuahsi.org</a>
          </div>
          <div style="border:0.5px solid #e5e7eb;border-radius:12px;padding:18px;">
            <p style="font-size:13px;font-weight:500;margin-bottom:4px;">Membership</p>
            <a href="mailto:membership@cuahsi.org" style="font-size:13px;color:#1D9E75;text-decoration:none;">membership@cuahsi.org</a>
          </div>
          <div style="border:0.5px solid #e5e7eb;border-radius:12px;padding:18px;">
            <p style="font-size:13px;font-weight:500;margin-bottom:4px;">Community &amp; training</p>
            <a href="mailto:connect@cuahsi.org" style="font-size:13px;color:#1D9E75;text-decoration:none;">connect@cuahsi.org</a>
          </div>
          <div style="border:0.5px solid #e5e7eb;border-radius:12px;padding:18px;">
            <p style="font-size:13px;font-weight:500;margin-bottom:4px;">Communications</p>
            <a href="mailto:commgr@cuahsi.org" style="font-size:13px;color:#1D9E75;text-decoration:none;">commgr@cuahsi.org</a>
          </div>
          <div style="border:0.5px solid #e5e7eb;border-radius:12px;padding:18px;">
            <p style="font-size:13px;font-weight:500;margin-bottom:6px;">Follow CUAHSI</p>
            <div style="display:flex;gap:12px;flex-wrap:wrap;">
              <a href="https://bsky.app/profile/cuahsi.bsky.social" target="_blank" style="font-size:12px;color:#6b7280;text-decoration:none;">Bluesky</a>
              <a href="https://www.linkedin.com/company/consortium-of-universities-for-the-advancement-of-hydrologic-science-inc-cuahsi-/" target="_blank" style="font-size:12px;color:#6b7280;text-decoration:none;">LinkedIn</a>
              <a href="https://www.youtube.com/CUAHSI" target="_blank" style="font-size:12px;color:#6b7280;text-decoration:none;">YouTube</a>
              <a href="https://www.facebook.com/CUAHSI-Consortium-of-Universities-for-the-Advancement-of-Hydrologic-Science-Inc-179921902590/" target="_blank" style="font-size:12px;color:#6b7280;text-decoration:none;">Facebook</a>
            </div>
          </div>
          <div style="border:0.5px solid #e5e7eb;border-radius:12px;padding:18px;">
            <p style="font-size:13px;font-weight:500;margin-bottom:4px;">Newsletter</p>
            <a href="https://cuahsi.us3.list-manage.com/subscribe?u=aad7e9257f329c1a46ebbd412&id=e9b95979ca" target="_blank" style="font-size:12px;color:#1D9E75;text-decoration:none;">Subscribe to monthly updates ↗</a>
            <p style="font-size:11px;color:#9ca3af;margin-top:4px;">Or <NuxtLink to="/community/newsletter" style="color:#9ca3af;">browse the archive</NuxtLink></p>
          </div>
        </div>
      </section>

    </div>

    <footer style="border-top:0.5px solid #f3f4f6;">
      <div style="max-width:1024px;margin:0 auto;padding:14px 24px;display:flex;align-items:center;justify-content:space-between;">
        <div style="display:flex;gap:20px;">
          <a href="mailto:info@cuahsi.org" style="font-size:12px;color:#9ca3af;text-decoration:none;">Contact</a>
          <NuxtLink to="/about/membership" style="font-size:12px;color:#9ca3af;text-decoration:none;">Membership</NuxtLink>
          <a href="https://www.cuahsi.org/acknowledging-cuahsi" style="font-size:12px;color:#9ca3af;text-decoration:none;">Acknowledging CUAHSI</a>
          <a href="https://www.cuahsi.org/about/policies-and-conduct" style="font-size:12px;color:#9ca3af;text-decoration:none;">Policies</a>
          <a href="https://www.cuahsi.org/donate" style="font-size:12px;color:#9ca3af;text-decoration:none;">Donate</a>
        </div>
        <p style="font-size:12px;color:#9ca3af;">© 2026 CUAHSI</p>
      </div>
    </footer>
  </div>
</template>
