<template>
  <section class="py-10 px-4 overflow-hidden">
    <div class="max-w-7xl mx-auto">
      <div ref="logoContainer" class="relative">
        <div ref="logoTrack" class="flex items-center space-x-16">
          <div
            v-for="(logo, index) in logos"
            :key="index"
            class="flex-shrink-0"
          >
            <img :src="logo.src" :alt="logo.alt" :class="logo.class" />
          </div>
        </div>
      </div>
    </div>
  </section>

</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from "vue";
import { gsap } from "gsap";

const logoContainer = ref<HTMLElement | null>(null);
const logoTrack = ref<HTMLElement | null>(null);

const logos = [
  {
    src: "/assets/images/chatgpt-icon.webp",
    alt: "ChatGPT",
    class: "h-[9rem]",
  },
  {
    src: "/assets/images/9trrmnj2sj8-logo-logo.svg",
    alt: "ElevenLabs",
    class: "h-[9rem]",
  },
  {
    src: "/assets/images/google-gemini-icon.svg",
    alt: "Google Gemini",
    class: "h-[9rem]",
  },
  { src: "/assets/images/zapier_logo.jpg", alt: "Zapier", class: "h-16" },
  {
    src: "/assets/images/airtable-vector-logo-2022-small.png",
    alt: "Airtable",
    class: "h-22",
  },
  {
    src: "/assets/images/t_claude-ai9117.logowik.com.webp",
    alt: "Claude",
    class: "h-21",
  },
  { src: "/assets/images/images.jpeg", alt: "Make", class: "h-16" },
];

let animation: gsap.core.Tween | null = null;

onMounted(() => {
  if (logoTrack.value) {
    // Clone the logo track to create a seamless loop
    const clone = logoTrack.value.cloneNode(true);
    // logoContainer.value?.appendChild(clone);

    // Set the initial position of the clone
    gsap.set(clone, { left: "100%" });

    // Create the sliding animation
    animation = gsap.to([logoTrack.value, clone], {
      x: "-100%",
      repeat: -1,
      duration: 20,
      ease: "linear",
      paused: true,
    });

    // Start the animation
    animation.play();
  }
});

onUnmounted(() => {
  // Clean up the animation when the component is unmounted
  if (animation) {
    animation.kill();
  }
});
</script>

<style scoped>
.logo-track {
  will-change: transform;
}
</style>
