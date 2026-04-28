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
              loading="lazy"
              decoding="async"
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

const logoTrack = ref<HTMLElement | null>(null);

const logos = [
  { src: "/assets/images/chatgpt-icon.webp", alt: "ChatGPT", class: "h-12 sm:h-14" },
  { src: "/assets/images/9trrmnj2sj8-logo-logo.svg", alt: "ElevenLabs", class: "h-12 sm:h-14" },
  { src: "/assets/images/google-gemini-icon.svg", alt: "Google Gemini", class: "h-12 sm:h-14" },
  { src: "/assets/images/Zapier_logo.jpg", alt: "Zapier", class: "h-12 sm:h-14" },
  { src: "/assets/images/airtable-vector-logo-2022-small.png", alt: "Airtable", class: "h-12 sm:h-14" },
  { src: "/assets/images/t_claude-ai9117.logowik.com.webp", alt: "Claude", class: "h-12 sm:h-14" },
  { src: "/assets/images/images.jpeg", alt: "Make", class: "h-11 sm:h-12" },
  { src: "/assets/images/MAIN_Logo_-_Colored_-_Positive.jpg", alt: "Bardeen", class: "h-14 sm:h-16" },
];

let animation: gsap.core.Tween | null = null;

function startAnimation() {
  if (!logoTrack.value) {
    console.warn("[LogoSlider] logoTrack ref is null");
    return;
  }

  const track = logoTrack.value;
  const totalWidth = track.scrollWidth / 2;

  console.log("[LogoSlider] scrollWidth:", track.scrollWidth, "totalWidth:", totalWidth);

  if (totalWidth <= 0) {
    console.warn("[LogoSlider] totalWidth is 0, retrying in 500ms");
    setTimeout(startAnimation, 500);
    return;
  }

  // Set initial position to 0 (in case we retried)
  gsap.set(track, { x: 0 });

  animation = gsap.to(track, {
    x: -totalWidth,
    duration: 30,
    ease: "none",
    repeat: -1,
  });

  console.log("[LogoSlider] Animation started");
}

onMounted(() => {
  // Give the browser a tick to render images, then start
  requestAnimationFrame(() => {
    requestAnimationFrame(startAnimation);
  });
});

onUnmounted(() => {
  if (animation) {
    animation.kill();
    animation = null;
  }
});
</script>
