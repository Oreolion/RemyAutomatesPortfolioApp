// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({ 
    modules: [
    '@nuxtjs/tailwindcss',
  ],
  css: [
    '@/assets/css/tailwind.css',
  ],
  
  // Optional: Customize Tailwind CSS configuration
//   tailwindcss: {
    // options
    // e.g., exposeConfig: true,
//   },
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
})


