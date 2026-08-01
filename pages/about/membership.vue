<script setup lang="ts">
useHead({ title: 'Membership · CUAHSI' })

// Canonical member institution list. This is the single source of truth —
// the Hire CUAHSI institution lookup (Services page) reads from this same list.
// TODO: replace with a real data source (content/members/*.json or a CMS query)
// once available; currently placeholder data pending the real 101-institution roster.
const memberInstitutions = [
  { name: 'University of Vermont', since: 2004 },
  { name: 'Utah State University', since: 2001 },
  { name: 'University of Virginia', since: 2005 },
  { name: 'Colorado State University', since: 2001 },
  { name: 'University of Alabama', since: 2008 },
  { name: 'Syracuse University', since: 2007 },
  { name: 'Princeton University', since: 2010 },
]

const query = ref('')
const filtered = computed(() => {
  if (!query.value.trim()) return memberInstitutions
  const q = query.value.toLowerCase()
  return memberInstitutions.filter(i => i.name.toLowerCase().includes(q))
})
</script>
<template>
  <div>
    <section style="background:linear-gradient(180deg,#FBFAF7,#F3EEE4);border-bottom:1px solid rgba(15,33,43,.08);">
      <div class="mx-auto" style="max-width:1240px;padding:64px 40px 52px;">
        <p class="font-mono text-[11px] text-muted mb-3"><NuxtLink to="/about" style="color:#5C6E78;">About</NuxtLink> / Membership</p>
        <span class="font-mono font-bold tracking-[.14em] uppercase text-clay" style="font-size:12px;">About · Membership</span>
        <h1 style="font:700 clamp(32px,4vw,48px)/1.05 'Schibsted Grotesk';letter-spacing:-.02em;color:#0F2E44;margin:14px 0 14px;">Join the water science consortium.</h1>
        <p style="font:400 16px/1.6 'Hanken Grotesk';color:#3a4d57;max-width:560px;margin-bottom:24px;">CUAHSI membership connects your institution to shared infrastructure, training programs, governance, and a network of 101 member institutions advancing water science together.</p>
        <a href="mailto:membership@cuahsi.org" class="arrow-row inline-flex items-center gap-2 bg-navy text-white rounded-btn" style="font:600 15px 'Hanken Grotesk';padding:13px 22px;">Get in touch <span class="arr">→</span></a>
      </div>
    </section>

    <div class="mx-auto site-container" style="max-width:1240px;padding-top:52px;padding-bottom:24px;">
      <p style="font:400 15px/1.65 'Hanken Grotesk';color:#3a4d57;max-width:620px;margin-bottom:16px;">Member institutions gain access to HydroShare, JupyterHub, MATLAB Online, discounts on training and consulting through <NuxtLink to="/hire-cuahsi" style="color:#1F6FB2;">Hire CUAHSI</NuxtLink>, representation in CUAHSI governance, and priority access to new programs and pilots.</p>
      <p style="font:400 15px/1.65 'Hanken Grotesk';color:#3a4d57;max-width:620px;margin-bottom:40px;">Member universities can also start with a free <NuxtLink to="/community/campus-visits" style="color:#1F6FB2;">campus visit</NuxtLink> before considering fee-for-service work.</p>
    </div>

    <!-- Member institution list -->
    <div class="mx-auto site-container" style="max-width:1240px;padding-bottom:80px;">
      <div class="flex items-center justify-between gap-4 flex-wrap mb-5">
        <p class="font-mono font-bold tracking-[.1em] uppercase text-muted" style="font-size:11px;">Member institutions</p>
        <input v-model="query" type="text" placeholder="Search institutions…"
          style="border:1px solid rgba(15,33,43,.15);border-radius:8px;padding:9px 12px;font:400 13px 'Hanken Grotesk';outline:none;width:240px;" />
      </div>
      <div class="rg-3" style="gap:1px;background:rgba(15,33,43,.08);border-radius:10px;overflow:hidden;">
        <div v-for="m in filtered" :key="m.name" class="bg-paper" style="padding:14px 16px;">
          <p style="font:500 13.5px 'Hanken Grotesk';color:#15212B;margin:0 0 2px;">{{ m.name }}</p>
          <p class="font-mono text-[10.5px]" style="color:#9ca3af;">Member since {{ m.since }}</p>
        </div>
      </div>
      <p v-if="!filtered.length" style="font:400 13.5px 'Hanken Grotesk';color:#5C6E78;padding:20px 0;">No institutions match "{{ query }}".</p>
    </div>
  </div>
</template>
