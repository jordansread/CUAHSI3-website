<script setup lang="ts">
useHead({
  title: 'Home · CUAHSI',
  meta: [{ name: 'description', content: 'CUAHSI supports water scientists through shared data platforms, hands-on training, and a network of 130+ universities.' }]
})

const { data: allEvents } = await useAsyncData('upcoming-events', () =>
  queryContent('events').where({ published: true }).sort({ start: 1 }).find()
)
const upcomingEvents = computed(() =>
  (allEvents.value ?? []).filter(e => new Date(e.start) >= new Date()).slice(0, 3)
)

// Scope to content/news only — exclude newsletter and other types
const { data: latestNews } = await useAsyncData('latest-news', () =>
  queryContent('news').where({ published: true }).sort({ date: -1 }).limit(3).find()
)

const { data: latestNewsletter } = await useAsyncData('latest-newsletter', () =>
  queryContent('newsletter').where({ published: true }).sort({ date: -1 }).limit(1).findOne()
)

const { data: recentNewsletters } = await useAsyncData('recent-newsletters', () =>
  queryContent('newsletter').where({ published: true }).sort({ date: -1 }).skip(1).limit(3).find()
)
</script>

<template>
  <div>

    <!-- Nav -->
    <nav style="border-bottom: 0.5px solid #e5e7eb;">
      <div style="max-width:1024px; margin:0 auto; padding:0 24px; display:flex; align-items:center; height:48px;">
        <NuxtLink to="/" style="font-size:14px; font-weight:500; margin-right:28px; text-decoration:none; color:inherit;">
          CUAHSI <span style="color:#9ca3af; font-weight:400;">water science</span>
        </NuxtLink>
        <NuxtLink to="/about" style="font-size:12px; color:#6b7280; padding:0 12px; text-decoration:none;">About</NuxtLink>
        <NuxtLink to="/data-platforms" style="font-size:12px; color:#6b7280; padding:0 12px; text-decoration:none;">Tools &amp; platforms</NuxtLink>
        <NuxtLink to="/learn-train" style="font-size:12px; color:#6b7280; padding:0 12px; text-decoration:none;">Learn &amp; train</NuxtLink>
        <NuxtLink to="/community" style="font-size:12px; color:#6b7280; padding:0 12px; text-decoration:none;">Get involved</NuxtLink>
        <div style="margin-left:auto;">
          <SiteSearch />
        </div>
      </div>
    </nav>

    <div style="max-width:1024px; margin:0 auto; padding:0 24px;">

      <!-- Hero -->
      <section style="padding:48px 0 40px;">
        <p style="font-size:11px; font-weight:500; letter-spacing:.07em; text-transform:uppercase; color:#9ca3af; margin-bottom:12px;">
          Consortium of Universities for the Advancement of Hydrologic Science
        </p>
        <h1 style="font-size:36px; font-weight:500; line-height:1.2; margin-bottom:14px; max-width:560px;">
          Infrastructure and community for
          <span style="color:#9ca3af;">water scientists</span>
        </h1>
        <p style="font-size:15px; color:#6b7280; line-height:1.65; max-width:480px; margin-bottom:28px;">
          CUAHSI supports the water science community through shared data platforms,
          hands-on training, and a network of 130+ universities backed by NSF.
        </p>
        <div style="display:flex; gap:10px; margin-bottom:32px; flex-wrap:wrap;">
          <NuxtLink to="/data-platforms" style="padding:9px 20px; background:#111827; color:white; font-size:13px; font-weight:500; border-radius:8px; text-decoration:none;">Explore our tools</NuxtLink>
          <NuxtLink to="/learn-train" style="padding:9px 20px; border:0.5px solid #d1d5db; font-size:13px; border-radius:8px; text-decoration:none; color:inherit;">Browse training</NuxtLink>
          <NuxtLink to="/about" style="padding:9px 20px; border:0.5px solid #d1d5db; font-size:13px; border-radius:8px; text-decoration:none; color:inherit;">About CUAHSI</NuxtLink>
        </div>
        <!-- Stats -->
        <div style="display:grid; grid-template-columns:repeat(3,1fr); gap:1px; background:#f3f4f6; border:0.5px solid #f3f4f6; border-radius:12px; overflow:hidden; max-width:400px;">
          <div style="background:#f9fafb; padding:14px 18px;">
            <p style="font-size:22px; font-weight:500; margin-bottom:3px;">130+</p>
            <p style="font-size:11px; color:#9ca3af;">Member universities</p>
          </div>
          <div style="background:#f9fafb; padding:14px 18px;">
            <p style="font-size:22px; font-weight:500; margin-bottom:3px;">20K+</p>
            <p style="font-size:11px; color:#9ca3af;">Resources on HydroShare</p>
          </div>
          <div style="background:#f9fafb; padding:14px 18px;">
            <p style="font-size:22px; font-weight:500; margin-bottom:3px;">150+</p>
            <p style="font-size:11px; color:#9ca3af;">Cyberseminar recordings</p>
          </div>
        </div>
      </section>

      <!-- Wayfinding -->
      <section style="padding:24px 0; border-top:0.5px solid #f3f4f6;">
        <p style="font-size:11px; font-weight:500; letter-spacing:.07em; text-transform:uppercase; color:#9ca3af; margin-bottom:12px;">New to CUAHSI? Start here</p>
        <div style="display:grid; grid-template-columns:repeat(3,1fr); gap:12px;">
          <div style="border:0.5px solid #e5e7eb; border-radius:10px; padding:14px 16px;">
            <p style="font-size:12px; font-weight:500; color:#374151; margin-bottom:10px;">🎓 Students &amp; early-career</p>
            <div style="display:flex; flex-direction:column; gap:6px;">
              <NuxtLink to="/community/events" style="font-size:12px; color:#1D9E75; text-decoration:none;">Upcoming workshops &amp; events →</NuxtLink>
              <NuxtLink to="/learn-train/cyberseminars" style="font-size:12px; color:#1D9E75; text-decoration:none;">Free cyberseminar recordings →</NuxtLink>
              <NuxtLink to="/community/jobs" style="font-size:12px; color:#1D9E75; text-decoration:none;">Fellowship &amp; job opportunities →</NuxtLink>
            </div>
          </div>
          <div style="border:0.5px solid #e5e7eb; border-radius:10px; padding:14px 16px;">
            <p style="font-size:12px; font-weight:500; color:#374151; margin-bottom:10px;">🔬 Faculty &amp; PIs</p>
            <div style="display:flex; flex-direction:column; gap:6px;">
              <a href="https://www.hydroshare.org" target="_blank" rel="noopener" style="font-size:12px; color:#1D9E75; text-decoration:none;">Publish data in HydroShare →</a>
              <NuxtLink to="/community/campus-visits" style="font-size:12px; color:#1D9E75; text-decoration:none;">Bring CUAHSI to your campus →</NuxtLink>
              <a href="https://www.hydrolearn.org" target="_blank" rel="noopener" style="font-size:12px; color:#1D9E75; text-decoration:none;">Use HydroLearn in your course →</a>
            </div>
          </div>
          <div style="border:0.5px solid #e5e7eb; border-radius:10px; padding:14px 16px;">
            <p style="font-size:12px; font-weight:500; color:#374151; margin-bottom:10px;">🏛️ Agencies &amp; organizations</p>
            <div style="display:flex; flex-direction:column; gap:6px;">
              <NuxtLink to="/about/membership" style="font-size:12px; color:#1D9E75; text-decoration:none;">Membership &amp; joining →</NuxtLink>
              <a href="https://www.hydroshare.org/search/" target="_blank" rel="noopener" style="font-size:12px; color:#1D9E75; text-decoration:none;">Search water data in HydroShare →</a>
              <a href="mailto:connect@cuahsi.org" style="font-size:12px; color:#1D9E75; text-decoration:none;">Contact us →</a>
            </div>
          </div>
        </div>
      </section>

      <!-- News + Events + Newsletter -->
      <section style="display:grid; grid-template-columns:repeat(3,1fr); gap:32px; padding:32px 0; border-top:0.5px solid #f3f4f6;">

        <!-- News -->
        <div>
          <div style="display:flex; align-items:baseline; justify-content:space-between; margin-bottom:16px;">
            <h2 style="font-size:13px; font-weight:500;">Latest news</h2>
            <NuxtLink to="/community/news" style="font-size:12px; color:#9ca3af; text-decoration:none;">All news →</NuxtLink>
          </div>
          <div v-if="latestNews?.length">
            <div v-for="post in latestNews" :key="post._path" style="padding:12px 0; border-bottom:0.5px solid #f3f4f6;">
              <p style="font-size:11px; color:#9ca3af; margin-bottom:3px;">
                {{ new Date(post.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }) }}
              </p>
              <p style="font-size:13px; font-weight:500; line-height:1.4; margin-bottom:3px;">{{ post.title }}</p>
              <p v-if="post.excerpt" style="font-size:12px; color:#6b7280; line-height:1.5;">{{ post.excerpt }}</p>
            </div>
          </div>
          <p v-else style="font-size:13px; color:#9ca3af;">No news yet.</p>
        </div>

        <!-- Events -->
        <div>
          <div style="display:flex; align-items:baseline; justify-content:space-between; margin-bottom:16px;">
            <h2 style="font-size:13px; font-weight:500;">Upcoming events</h2>
            <NuxtLink to="/community/events" style="font-size:12px; color:#9ca3af; text-decoration:none;">All events →</NuxtLink>
          </div>
          <div v-if="upcomingEvents?.length">
            <div v-for="event in upcomingEvents" :key="event._path" style="display:flex; gap:12px; padding:10px 0; border-bottom:0.5px solid #f3f4f6;">
              <div style="flex-shrink:0; width:40px; background:#f9fafb; border-radius:8px; text-align:center; padding:6px 4px;">
                <p style="font-size:9px; color:#9ca3af; text-transform:uppercase; letter-spacing:.05em; margin-bottom:2px;">
                  {{ new Date(event.start).toLocaleDateString('en-US', { month: 'short' }) }}
                </p>
                <p style="font-size:18px; font-weight:500; line-height:1;">{{ new Date(event.start).getDate() }}</p>
              </div>
              <div>
                <p style="font-size:13px; font-weight:500; line-height:1.35; margin-bottom:3px;">{{ event.title }}</p>
                <p style="font-size:11px; color:#9ca3af;">{{ event.type }}</p>
              </div>
            </div>
          </div>
          <p v-else style="font-size:13px; color:#9ca3af;">No upcoming events.</p>
        </div>

        <!-- Newsletter -->
        <div>
          <div style="display:flex; align-items:baseline; justify-content:space-between; margin-bottom:16px;">
            <h2 style="font-size:13px; font-weight:500;">Newsletter</h2>
            <NuxtLink to="/community/newsletter" style="font-size:12px; color:#9ca3af; text-decoration:none;">Full archive →</NuxtLink>
          </div>
          <div v-if="latestNewsletter" style="border:0.5px solid #e5e7eb; border-radius:12px; padding:16px; margin-bottom:12px;">
            <div style="display:flex; align-items:center; gap:6px; margin-bottom:8px;">
              <span style="width:6px; height:6px; border-radius:50%; background:#1D9E75; flex-shrink:0;"></span>
              <span style="font-size:11px; color:#9ca3af; text-transform:uppercase; letter-spacing:.05em; font-weight:500;">Latest issue</span>
            </div>
            <NuxtLink :to="`/community/newsletter/${latestNewsletter.slug}`"
              style="font-size:13px; font-weight:500; line-height:1.4; display:block; margin-bottom:6px; text-decoration:none; color:inherit;">
              {{ latestNewsletter.title }}
            </NuxtLink>
            <p style="font-size:12px; color:#6b7280; line-height:1.5; margin-bottom:10px;">{{ latestNewsletter.summary }}</p>
            <div style="display:flex; flex-wrap:wrap; gap:4px;">
              <span v-for="t in latestNewsletter.topics?.slice(0,3)" :key="t"
                style="font-size:11px; padding:2px 8px; border-radius:99px; background:#f0fdf4; color:#166534; border:0.5px solid #bbf7d0;">
                {{ t }}
              </span>
            </div>
          </div>
          <div v-if="recentNewsletters?.length">
            <div v-for="issue in recentNewsletters" :key="issue._path"
              style="display:flex; align-items:baseline; gap:8px; padding:8px 0; border-bottom:0.5px solid #f3f4f6;">
              <span style="font-size:11px; color:#9ca3af; min-width:64px; flex-shrink:0;">
                {{ new Date(issue.date).toLocaleDateString('en-US', { month: 'short', year: 'numeric' }) }}
              </span>
              <NuxtLink :to="`/community/newsletter/${issue.slug}`"
                style="font-size:12px; color:#6b7280; text-decoration:none; flex:1; line-height:1.4;">
                {{ issue.title }}
              </NuxtLink>
            </div>
          </div>
        </div>

      </section>

      <!-- Mailing list -->
      <section style="background:#f9fafb; border-radius:16px; padding:22px 24px; display:flex; align-items:center; justify-content:space-between; gap:24px; margin-bottom:32px;">
        <div>
          <p style="font-size:14px; font-weight:500; margin-bottom:4px;">Stay connected with CUAHSI</p>
          <p style="font-size:12px; color:#9ca3af;">News, events, and funding opportunities — monthly, no spam.</p>
        </div>
        <div style="display:flex; gap:8px; flex-shrink:0;">
          <input type="email" placeholder="your@university.edu"
            style="font-size:13px; padding:8px 12px; border:0.5px solid #d1d5db; border-radius:8px; width:200px;" />
          <button style="font-size:13px; font-weight:500; padding:8px 18px; background:#111827; color:white; border:none; border-radius:8px; cursor:pointer;">Subscribe</button>
        </div>
      </section>

    </div>

    <!-- Footer -->
    <footer style="border-top:0.5px solid #f3f4f6; margin-top:8px;">
      <div style="max-width:1024px; margin:0 auto; padding:14px 24px; display:flex; align-items:center; justify-content:space-between;">
        <div style="display:flex; gap:20px;">
          <NuxtLink to="/about" style="font-size:12px; color:#9ca3af; text-decoration:none;">Contact</NuxtLink>
          <NuxtLink to="/about" style="font-size:12px; color:#9ca3af; text-decoration:none;">Membership</NuxtLink>
          <NuxtLink to="/about" style="font-size:12px; color:#9ca3af; text-decoration:none;">Acknowledging CUAHSI</NuxtLink>
          <NuxtLink to="/about" style="font-size:12px; color:#9ca3af; text-decoration:none;">Policies</NuxtLink>
          <NuxtLink to="/about" style="font-size:12px; color:#9ca3af; text-decoration:none;">Donate</NuxtLink>
        </div>
        <p style="font-size:12px; color:#9ca3af;">© 2026 CUAHSI</p>
      </div>
    </footer>

  </div>
</template>