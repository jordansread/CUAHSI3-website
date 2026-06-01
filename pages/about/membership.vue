<script setup lang="ts">
useHead({
  title: 'Membership · About CUAHSI',
  meta: [{ name: 'description', content: 'Join CUAHSI\'s network of 130+ universities, colleges, and organizations advancing water science. Learn about membership types, benefits, and current member institutions.' }]
})

const giMembers = ["Arizona State University","Auburn University","Boise State University","Brigham Young University","Carnegie Mellon University","Clemson University","Colorado School of Mines","Colorado State University","Dartmouth College","Drexel University","Duke University","Florida International University","Georgia Institute of Technology","Georgia State University","Indiana University","Iowa State University","Johns Hopkins University","Kansas State University","Kent State University","Louisiana State University","Marquette University","Michigan State University","Michigan Technological University","Mississippi State University","Montana State University","New Mexico State University","Northeastern University","Northern Arizona University","Northwestern University","Oregon State University","Pennsylvania State University","Portland State University","Princeton University","Purdue University","Rensselaer Polytechnic Institute","Rutgers University","Southern Illinois University","Southern Methodist University","Stanford University","SUNY Buffalo","SUNY ESF","Stevens Institute of Technology","Syracuse University","Temple University","University of Alabama","University of Arizona","University of Arkansas","UC Davis","UC Irvine","UC Merced","UC Riverside","UC Santa Cruz","University of Central Florida","CU Boulder","University of Delaware","University of Florida","University of Georgia","University of Hawaii","University of Houston","University of Idaho","University of Illinois","University of Iowa","University of Kansas","University of Kentucky","UL Lafayette","University of Memphis","University of Michigan","University of Minnesota","University of Missouri","University of Nebraska","University of Nevada–Reno","University of New Hampshire","University of North Carolina System","University of Notre Dame","University of Pittsburgh","University of Rhode Island","University of South Florida","UT Knoxville","UT Arlington","UT Austin","University of Vermont","University of Virginia","University of Washington","UW–Madison","University of Wyoming","Utah State University","Villanova University","Virginia Tech","Washington State University","West Virginia University","Yale University"]

const puiMembers = ["Eastern Illinois University","Prairie View A&M University","Santa Clara University","Smith College","University of North Georgia","Utah Valley University"]

const npMembers = ["American Institute of Hydrology","EarthScope","Interstate Council on Water Policy","RTI International","Stroud Water Research Center"]

const intlMembers = ["Suez Canal University","University of Ljubljana","University of Sidi Mohamed ben Abdellah","University of Zurich"]
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
          <SiteSearch />
        </div>
      </div>
    </nav>

    <div style="max-width:1024px;margin:0 auto;padding:0 24px;">

      <div style="padding:36px 0 32px;border-bottom:0.5px solid #f3f4f6;margin-bottom:40px;">
        <p style="font-size:11px;color:#9ca3af;margin-bottom:8px;">
          <NuxtLink to="/about" style="text-decoration:none;color:#9ca3af;">About</NuxtLink> / Membership
        </p>
        <h1 style="font-size:28px;font-weight:500;margin-bottom:10px;">Membership</h1>
        <p style="font-size:14px;color:#6b7280;line-height:1.6;max-width:560px;margin-bottom:20px;">
          CUAHSI's membership includes more than 130 U.S. universities, colleges, non-profit organizations,
          and international affiliates who recognize the need for interdisciplinary collaboration and innovative
          thinking to advance water science. Member representatives guide CUAHSI's direction by electing the
          Board of Directors and voting on important business items.
        </p>
        <a href="https://cuahsi.jotform.com/250016287051852" target="_blank" rel="noopener"
          style="display:inline-block;font-size:13px;font-weight:500;padding:9px 20px;background:#111827;color:white;border-radius:8px;text-decoration:none;">
          Apply for membership →
        </a>
      </div>

      <!-- Why join -->
      <section style="margin-bottom:48px;">
        <h2 style="font-size:13px;font-weight:500;letter-spacing:.05em;text-transform:uppercase;color:#9ca3af;margin-bottom:16px;">Why become a member</h2>
        <div style="display:grid;grid-template-columns:repeat(2,1fr);gap:12px;margin-bottom:24px;">
          <div v-for="benefit in [
            'Be part of the growing national and international water science community',
            'Contribute to innovations in hydrologic modeling, data science, and water education',
            'Represent your organization in various CUAHSI leadership roles',
            'Participate in the annual CUAHSI Membership Meeting each December',
            'Receive registration discounts on CUAHSI events and workshops',
            'Access engagement reports showing how your institution interacts with CUAHSI programs'
          ]" :key="benefit"
            style="display:flex;gap:10px;align-items:flex-start;padding:14px;border:0.5px solid #e5e7eb;border-radius:10px;">
            <span style="width:6px;height:6px;border-radius:50%;background:#1D9E75;flex-shrink:0;margin-top:5px;"></span>
            <p style="font-size:13px;color:#374151;line-height:1.5;">{{ benefit }}</p>
          </div>
        </div>
        <blockquote style="border-left:3px solid #e5e7eb;padding-left:20px;max-width:580px;">
          <p style="font-size:14px;color:#6b7280;line-height:1.7;font-style:italic;margin-bottom:8px;">
            "The CUAHSI membership has benefited our University of Minnesota community in many ways.
            Our students have attended numerous workshops and trainings, such as the Snow School and Catchment
            Science school, allowing them to learn more deeply on these topics in an immersive field setting."
          </p>
          <p style="font-size:12px;color:#9ca3af;">Diana Karwan, Ph.D., Associate Professor, University of Minnesota</p>
        </blockquote>
      </section>

      <!-- Membership types -->
      <section style="margin-bottom:48px;">
        <h2 style="font-size:13px;font-weight:500;letter-spacing:.05em;text-transform:uppercase;color:#9ca3af;margin-bottom:16px;">Membership types</h2>
        <div style="display:grid;grid-template-columns:repeat(2,1fr);gap:12px;">

          <div style="border:0.5px solid #e5e7eb;border-radius:12px;padding:20px;">
            <div style="display:flex;justify-content:space-between;align-items:flex-start;margin-bottom:10px;">
              <p style="font-size:14px;font-weight:500;">Graduate institution (GI)</p>
              <span style="font-size:11px;padding:2px 8px;border-radius:99px;background:#EFF6FF;color:#1E40AF;">$350/yr</span>
            </div>
            <p style="font-size:12px;color:#6b7280;line-height:1.55;margin-bottom:10px;">U.S. universities with graduate degree programs in water science and a major commitment to research. Up to 3 faculty representatives. One-time $2,000 initiation fee.</p>
            <p style="font-size:11px;color:#9ca3af;">Representatives eligible for Board of Directors</p>
          </div>

          <div style="border:0.5px solid #e5e7eb;border-radius:12px;padding:20px;">
            <div style="display:flex;justify-content:space-between;align-items:flex-start;margin-bottom:10px;">
              <p style="font-size:14px;font-weight:500;">Primarily undergraduate institution (PUI)</p>
              <span style="font-size:11px;padding:2px 8px;border-radius:99px;background:#EFF6FF;color:#1E40AF;">$100/yr</span>
            </div>
            <p style="font-size:12px;color:#6b7280;line-height:1.55;margin-bottom:10px;">U.S. institutions serving predominantly undergraduate populations with faculty or degrees aligned with CUAHSI's mission. One faculty representative. One-time $700 initiation fee.</p>
            <p style="font-size:11px;color:#9ca3af;">Representatives eligible for Board of Directors</p>
          </div>

          <div style="border:0.5px solid #e5e7eb;border-radius:12px;padding:20px;">
            <div style="display:flex;justify-content:space-between;align-items:flex-start;margin-bottom:10px;">
              <p style="font-size:14px;font-weight:500;">Non-profit affiliate</p>
              <span style="font-size:11px;padding:2px 8px;border-radius:99px;background:#EFF6FF;color:#1E40AF;">$100/yr</span>
            </div>
            <p style="font-size:12px;color:#6b7280;line-height:1.55;margin-bottom:10px;">Colleges, research institutions, and other not-for-profit organizations engaged in water science that don't qualify for institutional membership. One representative. One-time $500 initiation fee.</p>
          </div>

          <div style="border:0.5px solid #e5e7eb;border-radius:12px;padding:20px;">
            <div style="display:flex;justify-content:space-between;align-items:flex-start;margin-bottom:10px;">
              <p style="font-size:14px;font-weight:500;">International affiliate</p>
              <span style="font-size:11px;padding:2px 8px;border-radius:99px;background:#EFF6FF;color:#1E40AF;">$100/yr</span>
            </div>
            <p style="font-size:12px;color:#6b7280;line-height:1.55;margin-bottom:10px;">Universities, research institutions, and non-profits outside the United States engaged in water science. One representative. One-time $500 initiation fee.</p>
          </div>

        </div>
        <p style="font-size:12px;color:#9ca3af;margin-top:12px;">Corporate affiliate membership also available. Contact <a href="mailto:membership@cuahsi.org" style="color:#1D9E75;text-decoration:none;">membership@cuahsi.org</a> for details.</p>
      </section>

      <!-- Member list -->
      <section style="margin-bottom:48px;">
        <h2 style="font-size:13px;font-weight:500;letter-spacing:.05em;text-transform:uppercase;color:#9ca3af;margin-bottom:20px;">Current member institutions <span style="font-weight:400;text-transform:none;letter-spacing:0;font-size:12px;color:#9ca3af;">— as of January 2026</span></h2>

        <div style="margin-bottom:28px;">
          <p style="font-size:12px;font-weight:500;color:#374151;margin-bottom:10px;">Graduate institution members <span style="font-weight:400;color:#9ca3af;">({{ giMembers.length }})</span></p>
          <div style="display:grid;grid-template-columns:repeat(3,1fr);gap:4px 16px;">
            <p v-for="m in giMembers" :key="m" style="font-size:12px;color:#6b7280;padding:3px 0;border-bottom:0.5px solid #f9fafb;">{{ m }}</p>
          </div>
        </div>

        <div style="margin-bottom:28px;">
          <p style="font-size:12px;font-weight:500;color:#374151;margin-bottom:10px;">Primarily undergraduate institution members <span style="font-weight:400;color:#9ca3af;">({{ puiMembers.length }})</span></p>
          <div style="display:grid;grid-template-columns:repeat(3,1fr);gap:4px 16px;">
            <p v-for="m in puiMembers" :key="m" style="font-size:12px;color:#6b7280;padding:3px 0;border-bottom:0.5px solid #f9fafb;">{{ m }}</p>
          </div>
        </div>

        <div style="display:grid;grid-template-columns:1fr 1fr;gap:24px;">
          <div>
            <p style="font-size:12px;font-weight:500;color:#374151;margin-bottom:10px;">Non-profit affiliate members</p>
            <div style="display:flex;flex-direction:column;gap:3px;">
              <p v-for="m in npMembers" :key="m" style="font-size:12px;color:#6b7280;">{{ m }}</p>
            </div>
          </div>
          <div>
            <p style="font-size:12px;font-weight:500;color:#374151;margin-bottom:10px;">International affiliate members</p>
            <div style="display:flex;flex-direction:column;gap:3px;">
              <p v-for="m in intlMembers" :key="m" style="font-size:12px;color:#6b7280;">{{ m }}</p>
            </div>
          </div>
        </div>
      </section>

    </div>

    <footer style="border-top:0.5px solid #f3f4f6;">
      <div style="max-width:1024px;margin:0 auto;padding:14px 24px;display:flex;justify-content:space-between;">
        <div style="display:flex;gap:20px;">
          <a href="mailto:membership@cuahsi.org" style="font-size:12px;color:#9ca3af;text-decoration:none;">membership@cuahsi.org</a>
          <NuxtLink to="/about" style="font-size:12px;color:#9ca3af;text-decoration:none;">About CUAHSI</NuxtLink>
        </div>
        <p style="font-size:12px;color:#9ca3af;">© 2026 CUAHSI</p>
      </div>
    </footer>
  </div>
</template>
