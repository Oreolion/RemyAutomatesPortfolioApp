// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ["@nuxtjs/tailwindcss", "@nuxt/image"],

  css: ["@/public/assets/css/tailwind.css"],

  app: {
    head: {
      htmlAttrs: {
        lang: "en",
      },
    },
    pageTransition: { name: "page", mode: "out-in" },
  },

  // Image optimization
  image: {
    quality: 80,
    format: ["avif", "webp"],
    screens: {
      xs: 320,
      sm: 480,
      md: 768,
      lg: 1024,
      xl: 1280,
      xxl: 1536,
    },
    domains: [],
    alias: {
      assets: "/assets",
    },
  },

  // Nitro / server optimizations
  nitro: {
    compressPublicAssets: true,
    minify: true,
    routeRules: {
      "/": { prerender: true },
      "/form": { prerender: true },
      "/assets/**": {
        headers: {
          "Cache-Control": "public, max-age=31536000, immutable",
        },
      },
      "/_nuxt/**": {
        headers: {
          "Cache-Control": "public, max-age=31536000, immutable",
        },
      },
    },
  },

  // Experimental performance features
  experimental: {
    payloadExtraction: true,
    renderJsonPayloads: true,
  },

  // Build optimizations
  build: {
    analyze: false,
  },

  // Source maps disabled for production builds (enable for debugging)
  sourcemap: {
    server: false,
    client: false,
  },

  compatibilityDate: "2024-04-03",
  devtools: { enabled: false },

  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
});
