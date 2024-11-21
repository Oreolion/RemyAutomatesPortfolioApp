<template>
  <nav
    class="fixed top-0 w-full bg-white/80 backdrop-blur-sm z-50 px-4 py-3 border-b border-gray-200"
  >
    <div class="max-w-7xl mx-auto flex items-center justify-between">
      <NuxtLink to="/" class="flex items-center">
       <NuxtImg height="24" width="24" src="/assets/logos/raautologo.webp"></NuxtImg>
        <span class="font-bold whitespace-nowrap text-2xl font-mono">Remy Automates</span>
      </NuxtLink>

      <div class="hidden md:flex items-center gap-6">
        <NuxtLink
          to="#solutions"
          class="text-xl font-bold  text-gray-600 hover:text-gray-900 transition-colors"
          >Solutions</NuxtLink
        >
        <NuxtLink
          to="#popular-automations"
          class="text-xl font-bold  text-gray-600 hover:text-gray-900 transition-colors"
          >Popular Automations</NuxtLink
        >
        <NuxtLink
          to="#contact"
          class="text-xl font-bold text-gray-600 hover:text-gray-900 transition-colors"
          >Contact</NuxtLink
        >
      </div>

      <button
        @click="openBookingModal"
        class="hidden md:flex items-center gap-2 bg-black text-white px-4 py-2 rounded-full text-sm font-medium hover:bg-gray-800 transition-colors"
      > <span class="h-3 w-3 bg-green-500 rounded-full"></span>
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

      <button
        @click="toggleMobileMenu"
        class="md:hidden bg-gray-100 p-2 rounded-full"
      >
        <svg
          v-if="!isMobileMenuOpen"
          xmlns="http://www.w3.org/2000/svg"
          class="h-5 w-5"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fill-rule="evenodd"
            d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
            clip-rule="evenodd"
          />
        </svg>
        <svg
          v-else
          xmlns="http://www.w3.org/2000/svg"
          class="h-5 w-5"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fill-rule="evenodd"
            d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
            clip-rule="evenodd"
          />
        </svg>
      </button>
    </div>

    <!-- Mobile Menu -->
    <transition
      enter-active-class="transition ease-out duration-100 transform"
      enter-from-class="opacity-0 scale-95"
      enter-to-class="opacity-100 scale-100"
      leave-active-class="transition ease-in duration-75 transform"
      leave-from-class="opacity-100 scale-100"
      leave-to-class="opacity-0 scale-95"
    >
      <div
        v-if="isMobileMenuOpen"
        class="md:hidden absolute top-full left-0 right-0 bg-white shadow-lg rounded-b-lg"
      >
        <div class="px-2 pt-2 pb-3 space-y-1">
          <NuxtLink
            to="#solutions"
            class="block px-3 py-2 rounded-md text-xl font-bold  text-gray-700 hover:text-gray-900 hover:bg-gray-50"
            >Solutions</NuxtLink
          >
          <NuxtLink
            to="#popular-automations"
            class="block px-3 py-2 rounded-md text-xl font-bold  text-gray-700 hover:text-gray-900 hover:bg-gray-50"
            >Popular Automations</NuxtLink
          >
          <NuxtLink
            to="#contact"
            class="block px-3 py-2 rounded-md text-xl font-bold  text-gray-700 hover:text-gray-900 hover:bg-gray-50"
            >Contact</NuxtLink
          >
          <button
            @click="openBookingModal"
            class="w-full text-left block px-3 py-2 rounded-md text-xl font-bold  text-gray-700 hover:text-gray-900 hover:bg-gray-50"
          >
            Book Call
          </button>
        </div>
      </div>
    </transition>
  </nav>
</template>

<script setup lang="ts">
import { ref } from "vue";

const isMobileMenuOpen = ref(false);

const toggleMobileMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value;
};

const openBookingModal = () => {
  // Implement your booking modal logic here
  alert("Booking modal opened");
};
</script>
