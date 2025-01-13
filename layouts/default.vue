<script setup lang="ts">
import Navbar from "~/components/Navbar.vue";
</script>

<template>
  <div>
    <Navbar />
    <main>
      <slot />
    </main>
    <footer
      class="bg-purple-600 rounded-2xl min-h-[18rem] p-8 mx-4 -mt-8 text-white"
    >
      <div class="flex flex-col justify-between mb-6 md:flex-row">
        <h1 class="text-3xl font-bold mb-4">
          Every day should feel like Friday.
        </h1>
        <NuxtLink
          to="/form"
          class="hidden md:flex items-center gap-2 bg-black text-white px-4 py-2 rounded-full text-sm font-medium hover:bg-gray-800 transition-colors"
        >
          <span class="h-3 w-3 bg-green-500 rounded-full"></span>
          Book Call
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-4 w-4"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fill-rule="evenodd"
              d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
              clip-rule="evenodd"
            />
          </svg>
        </NuxtLink>
      </div>
      <div class="flex-col gap-4 justify-between max-md:flex-row">
        <div class="flex gap-4 items-center mb-4">
          <NuxtLink to="/" class="opacity-60 hover:opacity-100"
            ><NuxtImg
              height="25"
              width="25"
              src="/assets/logos/gmail-icon.svg"
            ></NuxtImg
          ></NuxtLink>
          <NuxtLink to="/" class="opacity-60 hover:opacity-100"
            ><NuxtImg
              height="25"
              width="25"
              src="/assets/logos/linkedin-app-icon.svg"
            ></NuxtImg
          ></NuxtLink>
          <NuxtLink to="/" class="opacity-60 hover:opacity-100"
            ><NuxtImg
              height="50"
              width="50"
              src="/assets/logos/follow-us-on-x-icon.svg"
            ></NuxtImg
          ></NuxtLink>
        </div>
        <NuxtLink to="/" class="flex items-center">
          <NuxtImg
            height="23"
            width="23"
            src="/assets/logos/raautologo.webp"
          ></NuxtImg>
          <span
            class="font-bold text-2xl text-gray-800 font-mono whitespace-nowrap"
            >Remy Automates</span
          >
        </NuxtLink>
      </div>
      <div class="mt-20 text-sm opacity-60 border-t-2 pt-4">
        © Copyright 2025, All Rights Reserved
      </div>
    </footer>
  </div>
</template>
