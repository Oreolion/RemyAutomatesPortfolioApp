<script setup lang="ts">
import Navbar from "~/components/Navbar.vue";
</script>

<template>
  <div>
    <Navbar />
    <main>
      <slot />
    </main>
    <footer class="bg-purple-600 rounded-2xl min-h-[15rem] p-8 mx-4 text-white">
      <div class="flex justify-between items-center">
        <div class="flex gap-4">
          <a href="#" class="opacity-60 hover:opacity-100">X</a>
          <a href="#" class="opacity-60 hover:opacity-100">LinkedIn</a>
          <a href="#" class="opacity-60 hover:opacity-100">Email</a>
        </div>
        <!-- <img src="/placeholder.svg?height=40&width=120" alt="Friday Logo" class="h-8" /> -->
      </div>
      <div class="mt-8 text-sm opacity-60">
        © Copyright 2024, All Rights Reserved
      </div>
    </footer>
  </div>
</template>
