<template>
  <div class="bg-void min-h-screen">
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<script setup>
useHead({
  title: "Remy Automates — AI Automation Agency",
  meta: [
    {
      name: "viewport",
      content: "width=device-width, initial-scale=1.0",
    },
    {
      name: "description",
      content: "Remy Automates offers innovative AI automation solutions, expert software development, and process optimization services. Transform your business with cutting-edge automation.",
    },
    {
      name: "keywords",
      content: "Remy Automates, AI automation, automation solutions, software development, process optimization, business automation, technology consulting, digital transformation, AI agents, Web3",
    },
    {
      name: "author",
      content: "Remy Automates",
    },
    {
      property: "og:title",
      content: "Remy Automates — AI Automation Agency",
    },
    {
      property: "og:description",
      content: "Expert AI automation, software development, and process optimization services. Transform your business with cutting-edge solutions.",
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
      name: "twitter:card",
      content: "summary_large_image",
    },
    {
      name: "twitter:title",
      content: "Remy Automates — AI Automation Agency",
    },
    {
      name: "twitter:description",
      content: "Expert AI automation, software development, and process optimization services.",
    },
    {
      name: "twitter:image",
      content: "https://remyautomates.com/assets/icon/og-image.png",
    },
  ],
  link: [
    { rel: "preconnect", href: "https://fonts.googleapis.com" },
    { rel: "preconnect", href: "https://fonts.gstatic.com", crossorigin: "" },
    { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700;800&family=JetBrains+Mono:wght@400;500;600&display=swap" },
    {
      rel: "icon",
      type: "image/png",
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
  ],
});
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700;800&family=JetBrains+Mono:wght@400;500;600&display=swap");

body {
  font-family: 'Outfit', system-ui, sans-serif;
  background-color: #050508;
  color: #e2e8f0;
}
</style>
