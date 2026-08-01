<script setup lang="ts">
useHead({
  title: 'Hire CUAHSI · CUAHSI',
  meta: [{ name: 'description', content: 'Consulting, training, custom development, and data curation from CUAHSI science and engineering staff — for grantees, agencies, and partners.' }]
})

// Issue 9: institution lookup replaces the plain toggle.
// Placeholder member list — swap for the real member roster from About > Membership.
const memberInstitutions = [
  { name: 'University of Vermont', since: 2004 },
  { name: 'Utah State University', since: 2001 },
  { name: 'University of Virginia', since: 2005 },
  { name: 'Colorado State University', since: 2001 },
  { name: 'University of Alabama', since: 2008 },
  { name: 'Syracuse University', since: 2007 },
  { name: 'Princeton University', since: 2010 },
]

const institutionQuery = ref('')
const matchedInstitution = ref<{ name: string; since: number } | null>(null)
const showLookupResults = ref(false)
const useLegacyToggle = ref(false) // no-JS fallback path
const isMember = ref(false) // drives the legacy toggle only

const lookupMatches = computed(() => {
  if (!institutionQuery.value.trim()) return []
  const q = institutionQuery.value.toLowerCase()
  return memberInstitutions.filter(i => i.name.toLowerCase().includes(q)).slice(0, 6)
})

const isMemberConfirmed = computed(() => !!matchedInstitution.value || (useLegacyToggle.value && isMember.value))

function selectInstitution(inst: { name: string; since: number }) {
  matchedInstitution.value = inst
  institutionQuery.value = inst.name
  showLookupResults.value = false
}
function clearInstitution() {
  matchedInstitution.value = null
  institutionQuery.value = ''
}

const selectedService = ref('Consulting')

const serviceDefs = [
  {
    tag: 'CONSULTING',
    accent: 'oklch(0.55 0.13 245)',
    title: 'Technical & scientific consulting',
    desc: 'Guidance on hydrologic modeling, data-management plans, and cyberinfrastructure strategy for funded projects.',
    bullets: ['Data-management plan review', 'Model selection & validation', 'Cyberinfrastructure architecture advice'],
    rate: 185,
    range: '$2,500 – $15,000 per engagement',
    label: 'Consulting',
  },
  {
    tag: 'TRAINING',
    accent: 'oklch(0.55 0.12 150)',
    title: 'Custom workshops & training',
    qualifier: 'Beyond the standard campus-visit workshop.',
    desc: 'Tailored instruction on HydroShare, JupyterHub, and reproducible workflows for your lab, agency, or course.',
    bullets: ['Half- or full-day, virtual or on-site', 'Curriculum built around your data', 'Recordings & materials included'],
    rate: 150,
    range: '$1,200 – $6,000 per workshop',
    label: 'Training',
  },
  {
    tag: 'CUSTOM DEVELOPMENT',
    accent: 'oklch(0.52 0.13 290)',
    title: 'Custom software & integrations',
    desc: 'Extend CUAHSI platforms or connect your systems to our data services.',
    bullets: ['WaterOneFlow / WaterML integrations', 'HydroShare or JupyterHub extensions', 'Fixed-bid or hourly delivery'],
    rate: 165,
    range: '$5,000 – $40,000 per project',
    label: 'Custom development',
  },
  {
    tag: 'DATA CURATION',
    accent: 'oklch(0.56 0.12 200)',
    title: 'Dataset curation & publishing',
    desc: 'Hands-on help preparing, documenting, and publishing data to meet funder sharing requirements.',
    bullets: ['Metadata & FAIR-compliance review', 'DOI minting & version management', 'QC on large observational records'],
    rate: 140,
    range: '$800 – $8,000 per dataset',
    label: 'Data curation',
  },
]

function displayRate(rate: number) {
  return isMemberConfirmed.value ? Math.round(rate * 0.958) : rate
}

function selectService(label: string) {
  selectedService.value = label
}

const budgetOptions = ['Under $2,000', '$2,000 – $10,000', '$10,000 – $40,000', 'Over $40,000']

</script>

<template>
  <div>
    <!-- Hero -->
    <section style="background:linear-gradient(180deg,#FBFAF7,#F3EEE4);border-bottom:1px solid rgba(15,33,43,.08);">
      <div class="mx-auto site-container hero-section" style="max-width:1240px;padding-top:64px;padding-bottom:40px;">
        <span class="font-mono font-bold tracking-[.14em] uppercase" style="font-size:12px;color:#C0603C;">Hire CUAHSI</span>
        <h1 style="font:700 clamp(36px,4.4vw,54px)/1.04 'Schibsted Grotesk';letter-spacing:-.022em;color:#0F2E44;margin:16px 0 16px;max-width:760px;">
          Put our staff on your project.
        </h1>
        <p style="font:400 19px/1.55 'Hanken Grotesk';color:#3a4d57;max-width:620px;">
          Consulting, training, and development from our science and engineering staff — for grantees, agencies, and partners. Revenue sustains the free tools and data CUAHSI provides the whole community.
        </p>
      </div>
    </section>

    <!-- Intro + institution lookup -->
    <div class="mx-auto site-container" style="max-width:1240px;padding-top:56px;padding-bottom:24px;">
      <div class="rg-intro" style="background:#F3EEE4;border-radius:16px;padding:28px;margin-bottom:24px;">
        <p style="font:400 16px/1.6 'Hanken Grotesk';color:#3a4d57;margin:0;">
          Engagements are scoped individually and typically support grant-funded research, but we're open to work with agencies and partner organizations too.
        </p>
        <div class="bg-white" style="border:1px solid rgba(15,33,43,.12);border-radius:10px;padding:14px 16px;position:relative;">
          <p style="font:700 13.5px 'Hanken Grotesk';color:#0F2E44;margin:0 0 4px;">Member institution rates</p>

          <!-- Confirmed state -->
          <div v-if="matchedInstitution" class="flex items-center justify-between gap-2">
            <p style="font:400 12.5px 'Hanken Grotesk';color:#1f9d55;margin:0;">✓ {{ matchedInstitution.name }} — member since {{ matchedInstitution.since }}</p>
            <button @click="clearInstitution" style="font:500 11.5px 'Hanken Grotesk';color:#9ca3af;background:none;border:none;cursor:pointer;text-decoration:underline;">Change</button>
          </div>

          <!-- Lookup input -->
          <div v-else>
            <input v-model="institutionQuery" @focus="showLookupResults = true" @input="showLookupResults = true"
              @blur="setTimeout(() => showLookupResults = false, 150)"
              type="text" placeholder="Find your institution…"
              style="width:100%;border:1px solid rgba(15,33,43,.15);border-radius:6px;padding:8px 10px;font:400 13px 'Hanken Grotesk';outline:none;" />
            <div v-if="showLookupResults && lookupMatches.length" class="bg-white" style="position:absolute;left:16px;right:16px;top:100%;margin-top:4px;border:1px solid rgba(15,33,43,.15);border-radius:8px;box-shadow:0 8px 20px rgba(15,33,43,.12);z-index:10;overflow:hidden;">
              <button v-for="m in lookupMatches" :key="m.name" @click="selectInstitution(m)"
                class="block w-full text-left" style="padding:9px 12px;font:400 13px 'Hanken Grotesk';color:#15212B;background:white;border:none;border-bottom:1px solid rgba(15,33,43,.06);cursor:pointer;">
                {{ m.name }}
              </button>
            </div>
            <p v-if="institutionQuery && !lookupMatches.length" style="font:400 12px 'Hanken Grotesk';color:#5C6E78;margin:6px 0 0;">
              Not a member? <NuxtLink to="/about/membership" style="color:#1F6FB2;">Your institution can join →</NuxtLink>
            </p>
          </div>

          <!-- No-JS / plain toggle fallback -->
          <noscript>
            <div class="flex items-center gap-3 mt-2">
              <span style="font:400 12px 'Hanken Grotesk';color:#5C6E78;">Member university? Rates are automatically discounted 4.2% once confirmed by our team.</span>
            </div>
          </noscript>
        </div>
      </div>

      <!-- Issue 4: eligibility banner — free campus visits vs. paid work -->
      <div style="background:#F3EEE4;border-radius:12px;padding:16px 22px;margin-bottom:32px;display:flex;align-items:center;gap:10px;flex-wrap:wrap;">
        <span style="font:400 13.5px 'Hanken Grotesk';color:#3a4d57;">
          <strong style="color:#0F2E44;">Member university?</strong> Many training and consultation needs are covered free by a campus visit — check that first.
        </span>
        <NuxtLink to="/community/campus-visits" style="font:600 13.5px 'Hanken Grotesk';color:#1F6FB2;text-decoration:none;">Campus visits →</NuxtLink>
      </div>

      <!-- Service category cards -->
      <div class="rg-2">
        <div v-for="s in serviceDefs" :key="s.label"
          class="card-lift bg-white flex flex-col cursor-pointer"
          :style="`border:1px solid rgba(15,33,43,.1);border-top:3px solid ${s.accent};border-radius:14px;padding:26px 24px;`"
          @click="selectService(s.label)">
          <span class="font-mono font-bold tracking-[.06em] uppercase" :style="`font-size:11px;color:${s.accent};`">{{ s.tag }}</span>
          <h3 style="font:700 21px 'Schibsted Grotesk';color:#0F2E44;margin:12px 0 4px;">{{ s.title }}</h3>
          <p v-if="s.qualifier" style="font:500 12px 'Hanken Grotesk';color:#9ca3af;margin:0 0 10px;">{{ s.qualifier }}</p>
          <p style="font:400 14.5px/1.5 'Hanken Grotesk';color:#5C6E78;margin:0 0 16px;">{{ s.desc }}</p>
          <ul class="flex flex-col gap-2 mb-5" style="list-style:none;padding:0;margin:0;">
            <li v-for="b in s.bullets" :key="b" class="flex items-start gap-[10px]">
              <span class="rounded-full flex-none mt-[6px]" :style="`width:6px;height:6px;background:${s.accent};`"></span>
              <span style="font:400 13.5px/1.45 'Hanken Grotesk';color:#3a4d57;">{{ b }}</span>
            </li>
          </ul>
          <div class="flex items-center justify-between" style="margin-top:auto;padding-top:16px;border-top:1px solid rgba(15,33,43,.1);">
            <span style="font:700 19px 'Schibsted Grotesk';color:#0F2E44;">${{ displayRate(s.rate) }}/hr</span>
            <span class="font-mono text-[12px]" style="color:#5C6E78;">{{ s.range }}</span>
          </div>
        </div>
      </div>

      <!-- Other ways to work with us -->
      <div class="rounded-[14px]" style="background:#F3EEE4;padding:28px 32px;margin-top:32px;">
        <p style="font:700 16px 'Schibsted Grotesk';color:#0F2E44;margin:0 0 10px;">Already have funding for this work?</p>
        <p style="font:400 14px/1.65 'Hanken Grotesk';color:#3a4d57;margin:0 0 14px;max-width:720px;">
          If your project already covers what you need through a grant, there may be a lighter-weight path than a fee-for-service engagement:
        </p>
        <div class="rg-2">
          <div>
            <p style="font:600 13.5px 'Hanken Grotesk';color:#0F2E44;margin:0 0 4px;">Letters of Collaboration</p>
            <p style="font:400 13px/1.55 'Hanken Grotesk';color:#5C6E78;margin:0;">If what you're asking for is something CUAHSI already has funding to support, we can provide a letter of collaboration for your proposal at no cost.</p>
          </div>
          <div>
            <p style="font:600 13.5px 'Hanken Grotesk';color:#0F2E44;margin:0 0 4px;">Named collaborator on your grant</p>
            <p style="font:400 13px/1.55 'Hanken Grotesk';color:#5C6E78;margin:0;">For sustained involvement over the life of a project, CUAHSI staff can sometimes be named collaborators on your proposal rather than billed hourly.</p>
          </div>
        </div>
        <p style="font:400 12.5px/1.6 'Hanken Grotesk';color:#5C6E78;margin:14px 0 0;">
          Most requests for significant CUAHSI staff time turn out to be a contractual need rather than a grant-collaboration one — if that's where you land, the fee-for-service options above are the more direct path.
          Not sure which fits? <NuxtLink to="/contact" style="color:#1F6FB2;">Ask us</NuxtLink>.
        </p>
      </div>
    </div>

    <!-- Quote form -->
    <div class="mx-auto site-container" style="max-width:1240px;padding-top:24px;padding-bottom:80px;">
      <div class="quote-panel" style="background:#0F2E44;border-radius:16px;">
        <span class="font-mono font-bold tracking-[.14em] uppercase" style="font-size:12px;color:#e0a384;">Get a quote</span>
        <h2 style="font:700 28px/1.1 'Schibsted Grotesk';color:#fff;letter-spacing:-.018em;margin:14px 0 28px;">
          Tell us what you need — {{ selectedService }} and other work welcome.
        </h2>
        <form @submit.prevent>
          <div class="rg-2" style="margin-bottom:16px;">
            <input type="text" placeholder="Name" style="border:none;border-radius:8px;padding:13px 15px;font:400 14.5px 'Hanken Grotesk';outline:none;" />
            <input type="text" :value="matchedInstitution?.name" placeholder="Organization / institution" style="border:none;border-radius:8px;padding:13px 15px;font:400 14.5px 'Hanken Grotesk';outline:none;" />
            <input type="email" placeholder="Email" style="border:none;border-radius:8px;padding:13px 15px;font:400 14.5px 'Hanken Grotesk';outline:none;" />
            <select style="border:none;border-radius:8px;padding:13px 15px;font:400 14.5px 'Hanken Grotesk';outline:none;color:#5C6E78;">
              <option value="" disabled selected>Budget range</option>
              <option v-for="b in budgetOptions" :key="b" :value="b">{{ b }}</option>
            </select>
          </div>
          <textarea rows="3" placeholder="Briefly describe what you need"
            style="width:100%;border:none;border-radius:8px;padding:13px 15px;font:400 14.5px 'Hanken Grotesk';outline:none;margin-bottom:20px;resize:vertical;"></textarea>
          <button type="submit" style="background:#C0603C;color:white;font:600 15px 'Hanken Grotesk';border:none;border-radius:8px;padding:14px 26px;cursor:pointer;">
            Send request
          </button>
        </form>
      </div>
    </div>
  </div>
</template>

<style scoped>
.quote-panel { padding: 44px 48px; }
@media (max-width: 640px) {
  .quote-panel { padding: 28px 22px; }
}
</style>
