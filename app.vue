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
      content:
        "width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0",
    },
  ],
  link: [
    {
      rel: "icon",
      type: "image/png",
      href: "/assets/icon/favicon.ico",
    },
  ],
});
</script>
