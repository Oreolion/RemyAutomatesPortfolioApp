<template>
  <div class="bg-void min-h-screen">
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<script setup>
useHead({
  htmlAttrs: {
    lang: "en",
    dir: "ltr",
  },
  titleTemplate: "%s — Remy Automates",
  meta: [
    { charset: "utf-8" },
    {
      name: "viewport",
      content: "width=device-width, initial-scale=1.0",
    },
    {
      name: "description",
      content:
        "Remy Automates offers innovative AI automation solutions, expert software development, and process optimization services. Transform your business with cutting-edge automation.",
    },
    {
      name: "keywords",
      content:
        "Remy Automates, AI automation, automation solutions, software development, process optimization, business automation, technology consulting, digital transformation, AI agents, Web3",
    },
    { name: "author", content: "Remy Automates" },
    { name: "robots", content: "index, follow, max-image-preview:large" },
    { name: "theme-color", content: "#050508" },
    {
      property: "og:site_name",
      content: "Remy Automates",
    },
    {
      property: "og:title",
      content: "Remy Automates — AI Automation Agency",
    },
    {
      property: "og:description",
      content:
        "Expert AI automation, software development, and process optimization services. Transform your business with cutting-edge solutions.",
    },
    {
      property: "og:type",
      content: "website",
    },
    {
      property: "og:url",
      content: "https://remyautomates.com",
    },
    {
      property: "og:image",
      content: "https://remyautomates.com/assets/icon/og-image.png",
    },
    {
      property: "og:image:width",
      content: "1200",
    },
    {
      property: "og:image:height",
      content: "630",
    },
    {
      property: "og:image:alt",
      content: "Remy Automates — AI Automation Agency",
    },
    {
      property: "og:locale",
      content: "en_US",
    },
    {
      name: "twitter:card",
      content: "summary_large_image",
    },
    {
      name: "twitter:site",
      content: "@remyautomates",
    },
    {
      name: "twitter:title",
      content: "Remy Automates — AI Automation Agency",
    },
    {
      name: "twitter:description",
      content:
        "Expert AI automation, software development, and process optimization services.",
    },
    {
      name: "twitter:image",
      content: "https://remyautomates.com/assets/icon/og-image.png",
    },
    {
      name: "twitter:image:alt",
      content: "Remy Automates — AI Automation Agency",
    },
  ],
  link: [
    { rel: "canonical", href: "https://remyautomates.com/" },
    { rel: "preconnect", href: "https://fonts.googleapis.com" },
    {
      rel: "preconnect",
      href: "https://fonts.gstatic.com",
      crossorigin: "",
    },
    {
      rel: "preload",
      as: "style",
      href: "https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700;800&family=JetBrains+Mono:wght@400;500;600&display=swap",
    },
    {
      rel: "stylesheet",
      href: "https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700;800&family=JetBrains+Mono:wght@400;500;600&display=swap",
    },
    {
      rel: "icon",
      type: "image/x-icon",
      href: "/assets/icon/favicon.ico",
    },
    {
      rel: "apple-touch-icon",
      sizes: "180x180",
      href: "/assets/icon/apple-touch-icon.png",
    },
    {
      rel: "icon",
      type: "image/png",
      sizes: "32x32",
      href: "/assets/icon/favicon-32x32.png",
    },
    {
      rel: "icon",
      type: "image/png",
      sizes: "16x16",
      href: "/assets/icon/favicon-16x16.png",
    },
    {
      rel: "manifest",
      href: "/assets/icon/site.webmanifest",
    },
    {
      rel: "sitemap",
      type: "application/xml",
      title: "Sitemap",
      href: "/sitemap.xml",
    },
  ],
});
</script>

<style>
body {
  font-family: "Outfit", system-ui, sans-serif;
  background-color: #050508;
  color: #e2e8f0;
}
</style>
