<template>
  <div class="min-h-screen bg-white font-sans">
    <!-- Hero Section -->
    <section
      ref="heroSection"
      class="pt-20 px-4 overflow-hidden bg-gradient-to-br from-[#E8F3F0] to-white"
    >
      <div class="max-w-7xl mx-auto py-16 md:py-22">
        <div class="-mt-6 flex flex-col gap-12 items-center justify-center">
          <div class="">
            <span
              class="flex items-center rounded-full bg-purple-500 px-4 py-2 text-sm text-white"
            >
              Every day should feel like Friday
            </span>
          </div>
        </div>
        <div class="max-w-full text-center">
          <h1
            ref="headline"
            class="text-4xl md:text-6xl text-center font-bold max-w-full leading-tight"
          >
            Automate the boring stuff
            <br />
            Save 10+ hours every week.
          </h1>

          <p
            ref="subheadline"
            class="mt-6 max-w-[50rem] text-center mx-auto text-gray-600 text-lg"
          >
            Make more money & save your team time by automating 80% of your
            repetitive sales, support, and admin tasks.
          </p>

          <button
            ref="ctaButton"
            class="mt-8 bg-black text-white px-6 py-3 rounded-full text-lg font-medium hover:bg-gray-800 transition-colors inline-flex items-center gap-2"
          >
            Request a brainstorm
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5"
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
      </div>
    </section>

    <!-- Logo Section -->
     <LogoSlider />


    <!-- Stats Section -->
    <section class="py-16 px-4 bg-[#F8FBF9]">
      <div class="max-w-7xl text-center mx-auto">
        <span
          class="inline-flex items-center rounded-full bg-green-500 px-4 py-1 text-sm text-white mb-8"
        >
          Story time
        </span>

        <h2
          ref="statsHeadline"
          class="text-3xl md:text-4xl font-bold mx-auto max-w-3xl leading-tight"
        >
          Every day, we know billions of hours are wasted on busy work.
        </h2>

        <div
          ref="statsGrid"
          class="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12"
        >
          <div
            class="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
          >
            <div class="text-4xl font-bold text-purple-600">60%</div>
            <p class="mt-4 text-gray-600">
              of employee time is spent on repetitive automation tasks such as
              data processing, documentation, and routine tasks.
            </p>
            <div class="mt-4 text-sm text-gray-500">McKinsey&Company</div>
          </div>

          <div
            class="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
          >
            <div class="text-4xl font-bold text-green-600">98%</div>
            <p class="mt-4 text-gray-600">
              of companies think that working with AI technologies can help
              overcome labor market challenges.
            </p>
            <div class="mt-4 text-sm text-gray-500">IBM</div>
          </div>

          <div
            class="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
          >
            <div class="text-4xl font-bold text-blue-600">82%</div>
            <p class="mt-4 text-gray-600">
              of leaders reported their employees are more satisfied and believe
              AI automation improves job satisfaction.
            </p>
            <div class="mt-4 text-sm text-gray-500">Deloitte</div>
          </div>
        </div>
      </div>
    </section>

    <!-- Features Section -->
    <FeaturesSection />

    <section class="py-16 px-4">
      <div class="max-w-7xl text-center mx-auto">
        <span
          class="inline-flex items-center rounded-full bg-purple-500 px-4 py-1 text-sm text-white mb-8"
        >
          Don't let your business fall behind
        </span>

        <h2
          ref="featuresHeadline"
          class="text-3xl md:text-4xl font-bold text-center max-w-2xl mx-auto leading-tight"
        >
          It's 2024, time to say goodbye to yesterday's headaches.
        </h2>

        <div
          ref="featuresGrid"
          class="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16"
        >
          <div
            v-for="(feature, index) in features"
            :key="index"
            class="p-6 rounded-xl border border-gray-200 hover:border-purple-500 transition-colors"
          >
            <div
              class="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mb-4"
            >
              <component :is="feature.icon" class="w-6 h-6 text-purple-600" />
            </div>
            <h3 class="text-xl font-semibold mb-2">{{ feature.title }}</h3>
            <p class="text-gray-600">{{ feature.description }}</p>
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
import {
  ClipboardList,
  RefreshCw,
  Zap,
  BookOpen,
  Users,
  Code,
} from "lucide-vue-next";
import LowerLandingpage from "~/components/LowerLandingpage.vue";
import FeaturesSection from "~/components/FeaturesSection.vue";
import LogoSlider from "~/components/LogoSlider.vue";

gsap.registerPlugin(ScrollTrigger);

const heroSection = ref<HTMLElement>();
const headline = ref<HTMLElement>();
const subheadline = ref<HTMLElement>();
const ctaButton = ref<HTMLElement>();
const logoGrid = ref<HTMLElement>();
const statsHeadline = ref<HTMLElement>();
const statsGrid = ref<HTMLElement>();
const featuresHeadline = ref<HTMLElement>();
const featuresGrid = ref<HTMLElement>();
const useCasesHeadline = ref<HTMLElement>();
const useCasesGrid = ref<HTMLElement>();

const features = [
  {
    title: "Remove manual processes",
    description:
      "Cut down on busy work, allowing your team to focus on the tasks that fuel growth.",
    icon: ClipboardList,
  },
  {
    title: "Integrate your apps",
    description:
      "Connect and keep in sync, eliminate entry errors, and keep everything in sync automatically.",
    icon: RefreshCw,
  },
  {
    title: "Agnostic AI",
    description:
      "We integrate the latest automated systems that can perform tasks no real one wants while you sleep.",
    icon: Zap,
  },
  {
    title: "Workshops & Training",
    description:
      "Upskill your employees with our AI-powered training programs and workshops.",
    icon: BookOpen,
  },
  {
    title: "Consulting Automation & AI",
    description:
      "Get expert advice on how to implement AI and automation in your specific business context.",
    icon: Users,
  },
  {
    title: "No-code to custom code",
    description:
      "Whether you need simple automations or complex custom solutions, we&apos;ve got you covered.&apos;",
    icon: Code,
  },
];

onMounted(() => {
  // Hero animations
  gsap.from(headline.value, {
    opacity: 0,
    y: 50,
    duration: 1,
    ease: "power4.out",
    scrollTrigger: {
      trigger: heroSection.value,
      start: "top center",
    },
  });

  gsap.from(subheadline.value, {
    opacity: 0,
    y: 50,
    duration: 1,
    delay: 0.2,
    ease: "power4.out",
    scrollTrigger: {
      trigger: heroSection.value,
      start: "top center",
    },
  });

  gsap.from(ctaButton.value, {
    opacity: 0,
    y: 50,
    duration: 1,
    delay: 0.4,
    ease: "power4.out",
    scrollTrigger: {
      trigger: heroSection.value,
      start: "top center",
    },
  });

  // Logo grid animation
  gsap.from(logoGrid.value, {
    opacity: 0,
    y: 50,
    duration: 1,
    ease: "power4.out",
    scrollTrigger: {
      trigger: logoGrid.value,
      start: "top bottom",
    },
  });

  // Stats animations
  gsap.from(statsHeadline.value, {
    opacity: 0,
    y: 50,
    duration: 1,
    ease: "power4.out",
    scrollTrigger: {
      trigger: statsHeadline.value,
      start: "top bottom",
    },
  });

  gsap.from(statsGrid.value?.children, {
    opacity: 0,
    y: 50,
    duration: 1,
    stagger: 0.2,
    ease: "power4.out",
    scrollTrigger: {
      trigger: statsGrid.value,
      start: "top bottom",
    },
  });

  // Features animations
  gsap.from(featuresHeadline.value, {
    opacity: 0,
    y: 50,
    duration: 1,
    ease: "power4.out",
    scrollTrigger: {
      trigger: featuresHeadline.value,
      start: "top bottom",
    },
  });

  gsap.from(featuresGrid.value?.children, {
    opacity: 0,
    y: 50,
    duration: 1,
    stagger: 0.1,
    ease: "power4.out",
    scrollTrigger: {
      trigger: featuresGrid.value,
      start: "top bottom",
    },
  });

  // Use cases animations
  gsap.from(useCasesHeadline.value, {
    opacity: 0,
    y: 50,
    duration: 1,
    ease: "power4.out",
    scrollTrigger: {
      trigger: useCasesHeadline.value,
      start: "top bottom",
    },
  });

  gsap.from(useCasesGrid.value?.children, {
    opacity: 0,
    y: 50,
    duration: 1,
    stagger: 0.1,
    ease: "power4.out",
    scrollTrigger: {
      trigger: useCasesGrid.value,
      start: "top bottom",
    },
  });
});
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap");

body {
  font-family: "Inter", sans-serif;
}
</style>
