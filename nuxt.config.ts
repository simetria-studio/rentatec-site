// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  compatibilityDate: '2025-03-19',
  modules: ['@nuxtjs/tailwindcss', '@vueuse/motion/nuxt'],
  css: ['~/assets/css/main.css'],
  components: {
    dirs: ['~/components', '~/components/integration'],
  },
  app: {
    head: {
      title: 'Integrações - Sua Empresa',
      script: [
        {
          innerHTML: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-W4KPND7');`,
          tagPosition: 'head',
          tagPriority: -14,
        },
      ],
      noscript: [
        {
          innerHTML:
            '<iframe src="https://www.googletagmanager.com/ns.html?id=GTM-W4KPND7" height="0" width="0" style="display:none;visibility:hidden"></iframe>',
          tagPosition: 'bodyOpen',
        },
      ],
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        {
          hid: 'description',
          name: 'description',
          content: 'Soluções de integrações personalizadas para seu negócio',
        },
      ],
      link: [
        {
          rel: 'icon',
          type: 'image/x-icon',
          href: '/favicon.ico',
        },
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap',
        },
      ],
    },
  },
  build: {
    transpile: ['@heroicons/vue'],
  },
  nitro: {
    prerender: {
      crawlLinks: true,
      failOnError: false,
      ignore: ['/200.html', '/404.html'],
    },
  },
})
