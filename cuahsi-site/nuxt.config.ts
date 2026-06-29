export default defineNuxtConfig({
  modules: [
    '@nuxt/content',
    '@nuxtjs/tailwindcss',
    '@nuxtjs/sitemap',
    '@nuxtjs/robots',
  ],

  app: {
    head: {
      htmlAttrs: { lang: 'en' },
      titleTemplate: '%s · CUAHSI',
      meta: [
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      ],
      link: [
        { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' },
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Schibsted+Grotesk:wght@500;600;700;800&family=Hanken+Grotesk:wght@400;500;600;700&family=Space+Mono:wght@400;700&display=swap' },
      ],
    },
  },

  css: ['~/assets/css/global.css'],

  content: {
    highlight: { theme: 'github-light' },
  },

  sitemap: {
    strictNuxtContentPaths: true,
  },

  nitro: {
    prerender: {
      crawlLinks: true,
      routes: ['/sitemap.xml'],
      failOnError: false,
    },
  },

  vite: {
    server: {
      hmr: { overlay: false },
    },
  },
})
