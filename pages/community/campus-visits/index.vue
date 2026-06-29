<script setup lang="ts">
useHead({ title: 'Campus Visits · CUAHSI' })

const offerings = [
  { tag: 'DATA SKILLS', title: 'HydroShare workshop', desc: 'Hands-on training in data management, DOI minting, and collaborative HydroShare workflows — tailored to your department\'s research.' },
  { tag: 'COMPUTING', title: 'JupyterHub & cloud computing', desc: 'Introduction to CUAHSI\'s cloud computing environment for hydrologic analysis in Python and R, with no local setup required.' },
  { tag: 'CURRICULUM', title: 'Integrating CUAHSI resources into your course', desc: 'Work with CUAHSI staff to embed HydroLearn modules, the CVU, or Water Content Portal resources into existing or new courses.' },
  { tag: 'STUDENT ENGAGEMENT', title: 'Research data management seminar', desc: 'A focused seminar for graduate students on FAIR data practices, reproducible workflows, and preparing data for publication.' },
  { tag: 'RESEARCH SUPPORT', title: 'NSF data management planning', desc: 'Guidance on satisfying NSF data management plan requirements using CUAHSI infrastructure and FAIR principles.' },
  { tag: 'COMMUNITY', title: 'Open Q&A with CUAHSI staff', desc: 'An informal session for students and faculty to ask questions about CUAHSI programs, tools, and how to get involved.' },
]
</script>

<template>
  <div>
    <CommunityHero title="Campus visits." lead="CUAHSI staff come to member universities for workshops and student engagement — at no cost." />

    <div class="mx-auto" style="max-width:1240px;padding:52px 40px 80px;">

      <!-- Intro + CTAs -->
      <div style="display:grid;grid-template-columns:1fr 1fr;gap:56px;align-items:center;margin-bottom:64px;">
        <div>
          <p style="font:400 16px/1.7 'Hanken Grotesk';color:#3a4d57;margin-bottom:16px;">CUAHSI staff visit member universities to support faculty in integrating CUAHSI tools and programs into their teaching and research. Campus visits are available to all member institutions at no cost — travel and accommodations are covered by CUAHSI.</p>
          <p style="font:400 16px/1.7 'Hanken Grotesk';color:#3a4d57;margin-bottom:28px;">Each visit is tailored to your department's needs — from a single guest lecture to a full-day workshop series.</p>
          <div class="flex gap-3 flex-wrap">
            <a href="mailto:connect@cuahsi.org" class="arrow-row inline-flex items-center gap-2 bg-navy text-white rounded-btn font-semibold" style="font:600 15px 'Hanken Grotesk';padding:13px 22px;">Request a visit <span class="arr">→</span></a>
            <a href="/cuahsi-campus-visit-flyer.pdf" target="_blank" class="arrow-row inline-flex items-center gap-2 rounded-btn font-semibold" style="font:600 15px 'Hanken Grotesk';color:#0F2E44;padding:13px 22px;border:1.5px solid rgba(15,46,68,.22);">Download flyer ↓</a>
          </div>
        </div>
        <div class="relative rounded-[14px] overflow-hidden" style="height:320px;background:linear-gradient(155deg,#10324c,#236193 70%);">
          <span class="absolute font-mono font-bold tracking-[.1em]" style="left:18px;top:16px;font-size:11px;color:rgba(255,255,255,.8);background:rgba(0,0,0,.22);padding:7px 11px;border-radius:6px;">PHOTO — CAMPUS WORKSHOP</span>
        </div>
      </div>

      <!-- What we offer -->
      <div>
        <span class="font-mono font-bold tracking-[.1em] uppercase text-muted mb-6 block" style="font-size:11px;">What we offer</span>
        <div style="display:grid;grid-template-columns:repeat(3,1fr);gap:18px;">
          <div v-for="o in offerings" :key="o.title" class="rounded-card" style="border:1px solid rgba(15,33,43,.1);padding:22px;">
            <span class="font-mono font-bold tracking-[.06em] uppercase text-clay mb-3 block" style="font-size:11px;">{{ o.tag }}</span>
            <h3 style="font:700 17px 'Schibsted Grotesk';color:#0F2E44;margin:0 0 10px;">{{ o.title }}</h3>
            <p style="font:400 14px/1.6 'Hanken Grotesk';color:#5C6E78;margin:0;">{{ o.desc }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
