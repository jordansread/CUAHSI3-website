<script setup lang="ts">
useHead({
  title: 'Services · CUAHSI',
  meta: [{ name: 'description', content: 'Consulting, training, custom development, and data curation from CUAHSI science and engineering staff — for grantees, agencies, and partners.' }]
})

const isMember = ref(false)
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
  return isMember.value ? Math.round(rate * 0.958) : rate
}

function selectService(label: string) {
  selectedService.value = label
}

const budgetOptions = ['Under $2,000', '$2,000 – $10,000', '$10,000 – $40,000', 'Over $40,000']

function toggleKnobStyle() {
  return `position:absolute;top:3px;left:${isMember.value ? '21px' : '3px'};width:18px;height:18px;border-radius:50%;background:white;transition:left .15s ease;`
}
function toggleTrackStyle() {
  return `position:relative;width:42px;height:24px;border-radius:20px;background:${isMember.value ? '#1f9d55' : 'rgba(15,33,43,.2)'};cursor:pointer;transition:background .15s ease;flex-shrink:0;`
}
</script>

<template>
  <div>
    <!-- Hero -->
    <section style="background:linear-gradient(180deg,#FBFAF7,#F3EEE4);border-bottom:1px solid rgba(15,33,43,.08);">
      <div class="mx-auto" style="max-width:1240px;padding:64px 40px 40px;">
        <span class="font-mono font-bold tracking-[.14em] uppercase" style="font-size:12px;color:#C0603C;">Services</span>
        <h1 style="font:700 clamp(36px,4.4vw,54px)/1.04 'Schibsted Grotesk';letter-spacing:-.022em;color:#0F2E44;margin:16px 0 16px;max-width:760px;">
          Fee-for-service work with CUAHSI.
        </h1>
        <p style="font:400 19px/1.55 'Hanken Grotesk';color:#3a4d57;max-width:620px;">
          Consulting, training, and development from our science and engineering staff — for grantees, agencies, and partners. Revenue sustains the free tools and data CUAHSI provides the whole community.
        </p>
      </div>
    </section>

    <!-- Intro + member toggle -->
    <div class="mx-auto" style="max-width:1240px;padding:56px 40px 24px;">
      <div style="display:grid;grid-template-columns:1.3fr .7fr;gap:32px;background:#F3EEE4;border-radius:16px;padding:32px 36px;margin-bottom:48px;align-items:center;">
        <p style="font:400 16px/1.6 'Hanken Grotesk';color:#3a4d57;margin:0;">
          Engagements are scoped individually and typically support grant-funded research, but we're open to work with agencies and partner organizations too.
        </p>
        <div class="bg-white flex items-center gap-3" style="border:1px solid rgba(15,33,43,.12);border-radius:10px;padding:14px 16px;">
          <div :style="toggleTrackStyle()" @click="isMember = !isMember">
            <div :style="toggleKnobStyle()"></div>
          </div>
          <div>
            <p style="font:700 13.5px 'Hanken Grotesk';color:#0F2E44;margin:0;">Member institution rates</p>
            <p style="font:400 12px 'Hanken Grotesk';color:#5C6E78;margin:0;">Member universities save 4.2% on hourly rates</p>
          </div>
        </div>
      </div>

      <!-- Service category cards -->
      <div style="display:grid;grid-template-columns:1fr 1fr;gap:18px;margin-bottom:0;">
        <div v-for="s in serviceDefs" :key="s.label"
          class="card-lift bg-white flex flex-col cursor-pointer"
          :style="`border:1px solid rgba(15,33,43,.1);border-top:3px solid ${s.accent};border-radius:14px;padding:26px 24px;`"
          @click="selectService(s.label)">
          <span class="font-mono font-bold tracking-[.06em] uppercase" :style="`font-size:11px;color:${s.accent};`">{{ s.tag }}</span>
          <h3 style="font:700 21px 'Schibsted Grotesk';color:#0F2E44;margin:12px 0 10px;">{{ s.title }}</h3>
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
    </div>

    <!-- Quote form -->
    <div class="mx-auto" style="max-width:1240px;padding:24px 40px 80px;">
      <div style="background:#0F2E44;border-radius:16px;padding:44px 48px;">
        <span class="font-mono font-bold tracking-[.14em] uppercase" style="font-size:12px;color:#e0a384;">Get a quote</span>
        <h2 style="font:700 28px/1.1 'Schibsted Grotesk';color:#fff;letter-spacing:-.018em;margin:14px 0 28px;">
          Tell us what you need — {{ selectedService }} and other work welcome.
        </h2>
        <form @submit.prevent>
          <div style="display:grid;grid-template-columns:1fr 1fr;gap:16px;margin-bottom:16px;">
            <input type="text" placeholder="Name" style="border:none;border-radius:8px;padding:13px 15px;font:400 14.5px 'Hanken Grotesk';outline:none;" />
            <input type="text" placeholder="Organization / institution" style="border:none;border-radius:8px;padding:13px 15px;font:400 14.5px 'Hanken Grotesk';outline:none;" />
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
