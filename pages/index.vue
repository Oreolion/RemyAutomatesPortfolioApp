<template>
  <div class="min-h-screen bg-void font-sans overflow-x-hidden">
    <!-- Hero Section -->
    <section
      ref="heroSection"
      class="relative min-h-screen flex items-center justify-center px-4 overflow-hidden bg-grid-faint"
    >
      <!-- Ambient Orbs -->
      <div class="absolute top-1/4 -left-32 w-96 h-96 bg-cyan-glow/10 rounded-full blur-[128px] animate-pulse-glow" />
      <div class="absolute bottom-1/4 -right-32 w-96 h-96 bg-violet-glow/10 rounded-full blur-[128px] animate-pulse-glow animation-delay-1000" />
      <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-br from-cyan-glow/5 to-violet-glow/5 rounded-full blur-[100px]" />

      <!-- Decorative grid lines -->
      <div class="absolute inset-0 pointer-events-none">
        <div class="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-transparent via-cyan-glow/10 to-transparent" />
        <div class="absolute top-0 right-1/4 w-px h-full bg-gradient-to-b from-transparent via-violet-glow/10 to-transparent" />
      </div>

      <div class="max-w-6xl mx-auto text-center relative z-10 pt-20">
        <div class="mb-8 opacity-0" ref="badgeRef">
          <span class="badge">
            <span class="w-1.5 h-1.5 bg-cyan-glow rounded-full animate-pulse" />
            AI Automation Agency
          </span>
        </div>

        <h1
          ref="headline"
          class="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold leading-[1.05] sm:leading-[0.95] tracking-tight mb-6 sm:mb-8 opacity-0"
        >
          <span class="text-white">Automate the</span>
          <br />
          <span class="text-gradient">boring stuff.</span>
        </h1>

        <p
          ref="subheadline"
          class="max-w-2xl mx-auto text-base sm:text-lg md:text-xl text-slate-400 leading-relaxed mb-8 sm:mb-10 px-2 sm:px-0 opacity-0"
        >
          Save 10+ hours every week. We help teams automate
          <span class="text-slate-200 font-medium">80% of repetitive</span>
          sales, support, and admin tasks with AI-powered workflows.
        </p>

        <div
          ref="ctaGroup"
          class="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 w-full px-4 sm:px-0 opacity-0"
        >
          <NuxtLink to="/form" class="btn-primary text-sm sm:text-base px-6 sm:px-8 py-3.5 sm:py-4 w-full sm:w-auto justify-center">
            <span class="w-2 h-2 bg-void rounded-full" />
            Request a Brainstorm
            <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
              <path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd" />
            </svg>
          </NuxtLink>
          <NuxtLink to="#solutions" class="btn-secondary text-sm sm:text-base px-6 sm:px-8 py-3.5 sm:py-4 w-full sm:w-auto justify-center">
            Explore Solutions
          </NuxtLink>
        </div>

        <!-- Scroll indicator -->
        <div class="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-50">
          <span class="text-xs font-mono text-slate-500 uppercase tracking-widest">Scroll</span>
          <div class="w-5 h-8 rounded-full border border-slate-600 flex justify-center pt-1.5">
            <div class="w-1 h-2 bg-slate-400 rounded-full animate-bounce" />
          </div>
        </div>
      </div>
    </section>

    <!-- Logo Slider -->
    <LogoSlider />

    <!-- Stats Section -->
    <section ref="statsSection" class="section-padding relative overflow-hidden">
      <div class="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-cyan-glow/20 to-transparent" />
      
      <div class="container-tight text-center">
        <div class="mb-4 opacity-0" ref="statsBadge">
          <span class="badge">By the numbers</span>
        </div>

        <h2
          ref="statsHeadline"
          class="text-2xl sm:text-3xl md:text-5xl font-bold max-w-3xl mx-auto leading-tight mb-12 sm:mb-16 opacity-0"
        >
          Every day,
          <span class="text-gradient">billions of hours</span>
          are wasted on busy work.
        </h2>

        <div
          ref="statsGrid"
          class="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          <div
            v-for="(stat, i) in stats"
            :key="i"
            class="group relative p-6 sm:p-8 rounded-2xl glass text-left overflow-hidden hover:border-cyan-glow/20 transition-colors"
          >
            <div class="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-cyan-glow/5 to-transparent rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
            <div class="text-5xl md:text-6xl font-bold text-gradient mb-4">{{ stat.value }}</div>
            <p class="text-slate-400 text-sm leading-relaxed mb-4">{{ stat.text }}</p>
            <div class="text-xs font-mono text-slate-600 uppercase tracking-wider">{{ stat.source }}</div>
          </div>
        </div>
      </div>
    </section>

    <!-- Features Section -->
    <FeaturesSection />

    <!-- Problems / Solutions Section -->
    <section class="section-padding relative overflow-hidden">
      <div class="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-violet-glow/20 to-transparent" />
      
      <div class="container-tight text-center">
        <div class="mb-4 opacity-0" ref="probBadge">
          <span class="badge border-violet-glow/20 bg-violet-dim text-violet-glow">
            Don't let your business fall behind
          </span>
        </div>

        <h2
          ref="probHeadline"
          class="text-2xl sm:text-3xl md:text-5xl font-bold max-w-3xl mx-auto leading-tight mb-12 sm:mb-16 opacity-0"
        >
          It's 2025. Time to say goodbye to
          <span class="text-gradient">yesterday's headaches.</span>
        </h2>

        <div
          ref="probGrid"
          class="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          <div
            v-for="(item, i) in problems"
            :key="i"
            class="group relative p-6 sm:p-8 rounded-2xl glass text-left hover:border-cyan-glow/20 transition-colors"
          >
            <div class="w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-glow/10 to-violet-glow/10 border border-white/[0.06] flex items-center justify-center mb-6 group-hover:from-cyan-glow/20 group-hover:to-violet-glow/20 transition-all">
              <NuxtImg :src="item.icon" class="w-6 h-6 object-contain opacity-80" />
            </div>
            <h3 class="text-xl font-semibold text-white mb-3">{{ item.header }}</h3>
            <p class="text-slate-400 text-sm leading-relaxed">{{ item.text }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Use Cases Section -->
    <LowerLandingpage />
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import LowerLandingpage from "~/components/LowerLandingpage.vue";
import FeaturesSection from "~/components/FeaturesSection.vue";
import LogoSlider from "~/components/LogoSlider.vue";

gsap.registerPlugin(ScrollTrigger);

const heroSection = ref<HTMLElement>();
const badgeRef = ref<HTMLElement>();
const headline = ref<HTMLElement>();
const subheadline = ref<HTMLElement>();
const ctaGroup = ref<HTMLElement>();
const statsSection = ref<HTMLElement>();
const statsBadge = ref<HTMLElement>();
const statsHeadline = ref<HTMLElement>();
const statsGrid = ref<HTMLElement>();
const probBadge = ref<HTMLElement>();
const probHeadline = ref<HTMLElement>();
const probGrid = ref<HTMLElement>();

const stats = [
  {
    value: "60%",
    text: "of employee time is spent on repetitive automation tasks such as data processing, documentation, and routine tasks.",
    source: "McKinsey & Company",
  },
  {
    value: "98%",
    text: "of companies think that working with AI technologies can help overcome labor market challenges.",
    source: "IBM",
  },
  {
    value: "82%",
    text: "of leaders reported their employees are more satisfied and believe AI automation improves job satisfaction.",
    source: "Deloitte",
  },
];

const problems = [
  {
    header: "Bloated operations and workflow?",
    text: "Over time your processes grow clunky, inefficient, and error prone. We streamline them into smooth, automated pipelines.",
    icon: "/assets/images/slow.avif",
  },
  {
    header: "Wasting time on repetitive tasks?",
    text: "Every hour spent on tedious tasks is an hour better spent elsewhere. Let AI handle the grunt work while you focus on growth.",
    icon: "/assets/images/task.png",
  },
  {
    header: "Confusion around AI?",
    text: "There's lots of buzz around AI, but how do you sort through hype vs real value? We cut through the noise and deliver results.",
    icon: "/assets/logos/jUvOkmanrggNmiKSDsqKBn5R6s.avif",
  },
];

onMounted(() => {
  const tl = gsap.timeline({ defaults: { ease: "power4.out" } });

  tl.to(badgeRef.value, { opacity: 1, y: 0, duration: 0.8 })
    .to(headline.value, { opacity: 1, y: 0, duration: 1 }, "-=0.5")
    .to(subheadline.value, { opacity: 1, y: 0, duration: 0.8 }, "-=0.6")
    .to(ctaGroup.value, { opacity: 1, y: 0, duration: 0.8 }, "-=0.5");

  // Stats animations
  gsap.from(statsBadge.value, {
    opacity: 0, y: 30, duration: 0.8,
    scrollTrigger: { trigger: statsSection.value, start: "top 80%" },
  });
  gsap.from(statsHeadline.value, {
    opacity: 0, y: 40, duration: 1,
    scrollTrigger: { trigger: statsSection.value, start: "top 75%" },
  });
  gsap.from(statsGrid.value?.children, {
    opacity: 0, y: 60, duration: 0.8, stagger: 0.15,
    scrollTrigger: { trigger: statsGrid.value, start: "top 80%" },
  });

  // Problems animations
  gsap.from(probBadge.value, {
    opacity: 0, y: 30, duration: 0.8,
    scrollTrigger: { trigger: probBadge.value, start: "top 85%" },
  });
  gsap.from(probHeadline.value, {
    opacity: 0, y: 40, duration: 1,
    scrollTrigger: { trigger: probHeadline.value, start: "top 80%" },
  });
  gsap.from(probGrid.value?.children, {
    opacity: 0, y: 50, duration: 0.8, stagger: 0.12,
    scrollTrigger: { trigger: probGrid.value, start: "top 80%" },
  });
});
</script>
