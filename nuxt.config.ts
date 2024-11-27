// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({ 
    modules: ['@nuxtjs/tailwindcss', '@nuxt/image'],
  css: [
    '@/public/assets/css/tailwind.css',
  ],
  app: {
    head: {
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/icon/favicon.ico' }
      ]
    }
  },
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
})