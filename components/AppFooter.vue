<template>
  <footer style="background:#0A2032;color:#bcd4e6;">
    <div class="mx-auto site-container" style="max-width:1240px;padding-top:60px;">
      <div class="footer-grid" style="display:grid;grid-template-columns:1.4fr 1fr 1fr 1fr;gap:40px;padding-bottom:48px;">

        <div>
          <div class="flex items-center gap-3 mb-5">
            <span class="relative flex-none" style="width:32px;height:32px;border-radius:50%;overflow:hidden;">
              <span class="absolute inset-0 bottom-1/2" style="background:#2A86C9;"></span>
              <span class="absolute inset-0 top-1/2" style="background:#0F2E44;"></span>
              <span class="absolute left-0 right-0" style="top:50%;height:2px;background:#0A2032;transform:translateY(-1px);"></span>
            </span>
            <span style="font:800 18px 'Schibsted Grotesk';color:#fff;">CUAHSI</span>
          </div>
          <p style="font:400 13.5px/1.6 'Hanken Grotesk';color:#7fa4bf;max-width:280px;margin-bottom:20px;">
            A consortium of 130+ universities advancing water science through shared infrastructure and community.
          </p>
          <div class="flex gap-4">
            <a href="https://bsky.app/profile/cuahsi.bsky.social" target="_blank" class="font-mono text-[11px] tracking-[.06em] hover:text-white transition-colors" style="color:#5f829c;">BLUESKY</a>
            <a href="https://www.youtube.com/CUAHSI" target="_blank" class="font-mono text-[11px] tracking-[.06em] hover:text-white transition-colors" style="color:#5f829c;">YOUTUBE</a>
            <a href="https://www.linkedin.com/company/cuahsi" target="_blank" class="font-mono text-[11px] tracking-[.06em] hover:text-white transition-colors" style="color:#5f829c;">LINKEDIN</a>
          </div>
        </div>

        <div>
          <p class="font-mono text-[11px] tracking-[.1em] uppercase mb-5" style="color:#5f829c;">Explore</p>
          <div class="flex flex-col gap-3">
            <NuxtLink v-for="l in [{t:'About CUAHSI',h:'/about'},{t:'Learn & Programs',h:'/learn-train'},{t:'Services',h:'/services'},{t:'Highlights',h:'/highlights'},{t:'Governance',h:'/about/governance'},{t:'Membership',h:'/about/membership'}]"
              :key="l.h" :to="l.h" style="font:400 13.5px 'Hanken Grotesk';color:#7fa4bf;text-decoration:none;" class="hover:text-white transition-colors">
              {{ l.t }}
            </NuxtLink>
          </div>
        </div>

        <div>
          <p class="font-mono text-[11px] tracking-[.1em] uppercase mb-5" style="color:#5f829c;">Tools</p>
          <div class="flex flex-col gap-3">
            <a v-for="l in [{t:'HydroShare',h:'https://www.hydroshare.org'},{t:'JupyterHub',h:'https://jupyter.cuahsi.org'},{t:'HIS',h:'https://his.cuahsi.org'},{t:'Water Data Services',h:'https://www.cuahsi.org/data-services'},{t:'MATLAB Online',h:'https://www.cuahsi.org/matlab'}]"
              :key="l.h" :href="l.h" target="_blank" style="font:400 13.5px 'Hanken Grotesk';color:#7fa4bf;text-decoration:none;" class="hover:text-white transition-colors">
              {{ l.t }}
            </a>
          </div>
        </div>

        <div>
          <p class="font-mono text-[11px] tracking-[.1em] uppercase mb-5" style="color:#5f829c;">Connect</p>
          <div class="flex flex-col gap-3">
            <NuxtLink v-for="l in [{t:'Newsletter',h:'/community/newsletter'},{t:'Events',h:'/community/events'},{t:'Job board',h:'/community/jobs'},{t:'News',h:'/community/news'},{t:'Campus visits',h:'/community/campus-visits'}]"
              :key="l.h" :to="l.h" style="font:400 13.5px 'Hanken Grotesk';color:#7fa4bf;text-decoration:none;" class="hover:text-white transition-colors">
              {{ l.t }}
            </NuxtLink>
          </div>
        </div>
      </div>
    </div>

    <div style="border-top:1px solid rgba(255,255,255,.08);">
      <div class="mx-auto flex flex-col sm:flex-row items-center justify-between gap-2 site-container" style="max-width:1240px;padding-top:16px;padding-bottom:16px;">
        <span class="font-mono text-[11px] tracking-[.04em] text-center" style="color:#5f829c;">© 2026 CUAHSI · A 501(c)(3) nonprofit</span>
        <span class="font-mono text-[11px] tracking-[.04em] text-center" style="color:#5f829c;">Supported by the National Science Foundation</span>
      </div>
    </div>
  </footer>
</template>

<style scoped>
@media (max-width: 768px) {
  .footer-grid { grid-template-columns: 1fr 1fr !important; }
}
@media (max-width: 480px) {
  .footer-grid { grid-template-columns: 1fr !important; }
}
</style>
