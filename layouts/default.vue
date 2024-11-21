<script setup lang="ts">
import Navbar from "~/components/Navbar.vue";

const openBookingModal = () => {
  // Implement your booking modal logic here
  alert("Booking modal opened");
};
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
      <div class="flex justify-between mb-6">
        <h1 class="text-3xl font-bold mb-4">
          Every day should feel like Friday.
        </h1>
        <button
          @click="openBookingModal"
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
        </button>
      </div>
      <div class="flex justify-between items-center">
        <div class="flex gap-4 items-center">
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
        <NuxtLink to="/" class="flex items-center gap-2">
          <svg
            class="h-8 w-8"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
              fill="#000000"
            />
            <path
              d="M15.5 9L11.5 13L8.5 10"
              stroke="white"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
          <span class="font-bold text-2xl font-mono">Remy Automates</span>
        </NuxtLink>
      </div>
      <div class="mt-20 text-sm opacity-60 border-t-2 pt-4">
        © Copyright 2024, All Rights Reserved
      </div>
    </footer>
  </div>
</template>
