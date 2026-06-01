export default defineNuxtConfig({
  vite: {
    server: {
      hmr: {
        overlay: false,
      },
    },
  },
  modules: [
    '@nuxt/content',
    '@nuxtjs/tailwindcss',
    '@nuxtjs/sitemap',
    '@nuxtjs/robots',
  ],

  content: {
    highlight: { theme: 'github-light' },
  },

  sitemap: {
    strictNuxtContentPaths: true,
  },

  app: {
    head: {
      htmlAttrs: { lang: 'en' },
      titleTemplate: '%s · CUAHSI',
      meta: [
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: 'CUAHSI supports water scientists through shared data platforms, hands-on training, and a network of 130+ universities.' },
      ],
      link: [
        { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' },
      ],
    },
  },

  nitro: {
    prerender: {
      crawlLinks: true,
      routes: ['/sitemap.xml'],
      failOnError: false,
    },
  },


})