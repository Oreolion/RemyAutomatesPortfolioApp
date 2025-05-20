<template>
  <div>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<script setup>
useHead({
  title: "Remy Automates",
  meta: [
    {
      name: "viewport",
    content: "width=device-width, initial-scale=1.0",
    },
    {
    name: "description",
    content: "Remy Automates offers innovative automation solutions, expert software development, and process optimization services. Hire Remy Automates for your next project and boost your business efficiency.",
    },
    {
    name: "keywords",
    content: "Remy Automates, automation solutions, software development, process optimization, business automation, technology consulting, digital transformation",
    },
    {
    name: "author",
    content: "Remy Automates",
    },
    {
    property: "og:title",
    content: "Remy Automates - Innovative Automation Solutions & Software Development",
    },
    {
    property: "og:description",
    content: "Expert automation, software development, and process optimization services by Remy Automates. Transform your business with cutting-edge solutions.",
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
    content: "Remy Automates - Innovative Automation Solutions & Software Development",
    },
    {
    name: "twitter:description",
    content: "Expert automation, software development, and process optimization services by Remy Automates.",
    },
    {
    name: "twitter:image",
    content: "https://yourdomain.com/assets/icon/og-image.png",
     
    },
  ],
  link: [
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
