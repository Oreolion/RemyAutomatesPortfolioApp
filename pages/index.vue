<template>
  <div class="min-h-screen bg-white font-sans">
    <!-- Navigation -->
    <nav
      class="fixed top-0 w-full bg-white/80 backdrop-blur-sm z-50 px-4 py-3 border-b border-gray-200"
    >
      <div class="max-w-7xl mx-auto flex items-center justify-between">
        <div class="flex items-center gap-2">
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
          <span class="font-bold text-xl">Remy</span>
        </div>

        <div class="hidden md:flex items-center gap-6">
          <a
            href="#"
            class="text-sm text-gray-600 hover:text-gray-900 transition-colors"
            >Solutions</a
          >
          <a
            href="#"
            class="text-sm text-gray-600 hover:text-gray-900 transition-colors"
            >Popular Automations</a
          >
          <a
            href="#"
            class="text-sm text-gray-600 hover:text-gray-900 transition-colors"
            >Contact</a
          >
        </div>

        <button
          class="hidden md:flex items-center gap-2 bg-black text-white px-4 py-2 rounded-full text-sm font-medium hover:bg-gray-800 transition-colors"
        >
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

        <button class="md:hidden bg-gray-100 p-2 rounded-full">
          <svg
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
        </button>
      </div>
    </nav>

    <!-- Hero Section -->
    <section
      ref="heroSection"
      class="pt-24 px-4 overflow-hidden bg-gradient-to-br from-[#E8F3F0] to-white"
    >
      <div class="max-w-7xl mx-auto relative py-16 md:py-24">
        <div
          class="absolute top-0 right-0 w-64 h-64 bg-purple-200 rounded-full blur-3xl opacity-20"
        ></div>
        <div
          class="absolute bottom-0 left-0 w-64 h-64 bg-green-200 rounded-full blur-3xl opacity-20"
        ></div>

        <div class="relative">
          <div class="absolute top-0 right-0 md:-top-8 md:-right-8">
            <span
              class="inline-flex items-center rounded-full bg-purple-500 px-4 py-1 text-sm text-white"
            >
              Every day should feel like Friday
            </span>
          </div>

          <h1
            ref="headline"
            class="text-4xl md:text-6xl font-bold max-w-2xl leading-tight"
          >
            Automate the boring stuff
            <br />
            Save 10+ hours every week.
          </h1>

          <p ref="subheadline" class="mt-6 text-gray-600 max-w-xl text-lg">
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
    <section class="py-16 px-4">
      <div class="max-w-7xl mx-auto">
        <div
          ref="logoGrid"
          class="grid grid-cols-2 md:grid-cols-4 gap-8 items-center justify-items-center"
        >
          <img
            src="/assets/images/chatgpt-icon.webp"
            alt="Claude"
            class="h-18"
          />
          <img
            src="/assets/images/9trrmnj2sj8-logo-logo.svg"
            alt="ElevenLabs"
            class="h-18"
          />
          <img
            src="/assets/images/google-gemini-icon.svg"
            alt="Zapier"
            class="h-18"
          />
          <img src="/assets/images/zapier_logo.jpg" alt="Zapier" class="h-18" />
        </div>
      </div>
    </section>

    <!-- Stats Section -->
    <section class="py-16 px-4 bg-[#F8FBF9]">
      <div class="max-w-7xl mx-auto">
        <span
          class="inline-flex items-center rounded-full bg-green-500 px-4 py-1 text-sm text-white mb-8"
        >
          Story time
        </span>

        <h2
          ref="statsHeadline"
          class="text-3xl md:text-4xl font-bold max-w-xl leading-tight"
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
    <section class="py-16 px-4">
      <div class="max-w-7xl mx-auto">
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
    <!-- <section class="py-16 px-4 bg-gray-50">
      <div class="max-w-7xl mx-auto">
        <span
          class="inline-flex items-center rounded-full bg-green-500 px-4 py-1 text-sm text-white mb-8"
        >
          Popular Automations
        </span>

        <h2
          ref="useCasesHeadline"
          class="text-3xl md:text-4xl font-bold text-center max-w-2xl mx-auto leading-tight"
        >
          Unsure where to start?
          <br />
          Here are some real world use cases.
        </h2>

        <div
          ref="useCasesGrid"
          class="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16"
        >
          <div
            v-for="(useCase, index) in useCases"
            :key="index"
            class="group bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-shadow"
          >
            <div
              class="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-4 group-hover:bg-green-200 transition-colors"
            >
              <component :is="useCase.icon" class="w-6 h-6 text-green-600" />
            </div>
            <h3
              class="text-xl font-semibold mb-2 group-hover:text-green-600 transition-colors"
            >
              {{ useCase.title }}
            </h3>
            <p class="text-gray-600">{{ useCase.description }}</p>
          </div>
        </div>
      </div>
    </section> -->
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
  FileText,
  Repeat,
  DollarSign,
} from "lucide-vue-next";
import LowerLandingpage from "~/components/LowerLandingpage.vue";

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

const useCases = [
  {
    title: "Generate Automatic Reports",
    description:
      "Stop wasting time pulling data from different sources. Get automated reports that you need with insights without the headache.",
    icon: FileText,
  },
  {
    title: "Sync Data Across Apps",
    description:
      "Keep your data consistent and updated across all your tools by automating data sync and never worry about manual updates.",
    icon: Repeat,
  },
  {
    title: "Sales Pipeline Management",
    description:
      "Keep your deals moving. Automate follow ups and task assignments to never let any task slip through the cracks.",
    icon: DollarSign,
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
