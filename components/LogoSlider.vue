<template>
  <section class="py-16 relative overflow-hidden border-y border-white/[0.04]">
    <div class="absolute inset-0 bg-gradient-to-r from-void via-transparent to-void z-10 pointer-events-none" />
    
    <div class="max-w-7xl mx-auto mb-8 px-4">
      <p class="text-center text-xs font-mono text-slate-600 uppercase tracking-[0.2em]">
        Trusted by teams using the best tools
      </p>
    </div>

    <div ref="logoContainer" class="relative overflow-hidden">
      <div ref="logoTrack" class="flex items-center gap-20 w-max">
        <div
          v-for="(logo, index) in logos"
          :key="`a-${index}`"
          class="flex-shrink-0 group"
        >
          <div class="relative px-6 py-3 rounded-xl bg-white/[0.02] border border-white/[0.04] hover:border-cyan-glow/20 transition-all duration-500">
            <img
              :src="logo.src"
              :alt="logo.alt"
              :class="[logo.class, 'opacity-40 group-hover:opacity-80 transition-opacity duration-500 grayscale group-hover:grayscale-0']"
            />
          </div>
        </div>
        <!-- Duplicate for seamless loop -->
        <div
          v-for="(logo, index) in logos"
          :key="`b-${index}`"
          class="flex-shrink-0 group"
        >
          <div class="relative px-6 py-3 rounded-xl bg-white/[0.02] border border-white/[0.04] hover:border-cyan-glow/20 transition-all duration-500">
            <img
              :src="logo.src"
              :alt="logo.alt"
              :class="[logo.class, 'opacity-40 group-hover:opacity-80 transition-opacity duration-500 grayscale group-hover:grayscale-0']"
            />
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
  { src: "/assets/images/chatgpt-icon.webp", alt: "ChatGPT", class: "h-8" },
  { src: "/assets/images/9trrmnj2sj8-logo-logo.svg", alt: "ElevenLabs", class: "h-9" },
  { src: "/assets/images/google-gemini-icon.svg", alt: "Google Gemini", class: "h-8" },
  { src: "/assets/images/Zapier_logo.jpg", alt: "Zapier", class: "h-8" },
  { src: "/assets/images/airtable-vector-logo-2022-small.png", alt: "Airtable", class: "h-8" },
  { src: "/assets/images/t_claude-ai9117.logowik.com.webp", alt: "Claude", class: "h-8" },
  { src: "/assets/images/images.jpeg", alt: "Make", class: "h-7" },
  { src: "/assets/images/MAIN_Logo_-_Colored_-_Positive.jpg", alt: "Bardeen", class: "h-10" },
];

let animation: gsap.core.Tween | null = null;

onMounted(() => {
  if (logoTrack.value) {
    const totalWidth = logoTrack.value.scrollWidth / 2;
    animation = gsap.to(logoTrack.value, {
      x: -totalWidth,
      duration: 30,
      ease: "none",
      repeat: -1,
    });
  }
});

onUnmounted(() => {
  if (animation) animation.kill();
});
</script>
