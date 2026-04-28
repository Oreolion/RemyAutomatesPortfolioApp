<template>
  <section id="solutions" class="section-padding relative overflow-hidden">
    <div class="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-cyan-glow/20 to-transparent" />

    <div class="container-tight relative z-10">
      <!-- Header -->
      <div class="text-center mb-20">
        <div ref="badge">
          <span class="badge">
            <span class="w-1.5 h-1.5 bg-cyan-glow rounded-full animate-pulse" />
            We're Remy Automates
          </span>
        </div>

        <h2 ref="heading" class="text-3xl sm:text-4xl md:text-6xl font-bold tracking-tight mb-6">
          We bring your company
          <br class="hidden sm:block" />
          <span class="text-gradient">into the AI age.</span>
        </h2>

        <p ref="subheading" class="text-base sm:text-lg md:text-xl text-slate-400 max-w-2xl mx-auto px-2 sm:px-0">
          We're in the business of boosting human productivity,
          <span class="text-white font-medium">not</span> replacing it.
        </p>
      </div>

      <!-- Main Features Grid -->
      <div ref="mainGrid" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-5">
        <div
          v-for="(feature, i) in mainFeatures"
          :key="i"
          class="group relative p-5 sm:p-7 rounded-2xl bg-[#13131f] border border-white/[0.12] hover:border-cyan-glow/40 transition-all duration-500 shadow-lg shadow-black/20"
        >
          <div class="absolute inset-0 bg-gradient-to-br from-cyan-glow/[0.05] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl pointer-events-none" />

          <div class="relative z-10">
            <div class="w-24 h-24 sm:w-28 sm:h-28 rounded-2xl bg-gradient-to-br from-cyan-glow/15 to-violet-glow/15 border border-white/[0.1] flex items-center justify-center mb-5">
              <NuxtImg :src="feature.icon" class="w-16 h-16 sm:w-20 sm:h-20 object-contain" loading="lazy" decoding="async" />
            </div>
            <h3 class="text-lg font-semibold text-white mb-2">{{ feature.title }}</h3>
            <p class="text-slate-400 text-sm leading-relaxed">{{ feature.description }}</p>
          </div>
        </div>
      </div>

      <!-- Web3 Section -->
      <div class="mt-24">
        <div class="text-center mb-16">
          <span class="badge border-violet-glow/20 bg-violet-dim text-violet-glow mb-6 inline-block">
            Web3 & AI Innovations
          </span>
          <h3 class="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight mb-4">
            Explore the <span class="text-gradient">frontier</span> of
            <br class="hidden sm:block" />
            decentralized, intelligent software.
          </h3>
          <p class="text-slate-400 max-w-xl mx-auto">
            From AI-powered experiences to blockchain-native deployments.
          </p>
        </div>

        <div ref="web3Grid" class="grid grid-cols-1 md:grid-cols-3 gap-5">
          <div
            v-for="(feature, i) in web3Features"
            :key="i"
            class="group relative p-5 sm:p-7 rounded-2xl bg-[#13131f] border border-white/[0.12] hover:border-cyan-glow/40 transition-all duration-500 shadow-lg shadow-black/20"
          >
            <div class="absolute inset-0 bg-gradient-to-br from-violet-glow/[0.05] to-cyan-glow/[0.05] opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl pointer-events-none" />

            <div class="relative z-10">
              <div class="w-full h-32 rounded-xl bg-white/[0.05] border border-white/[0.08] mb-5 overflow-hidden flex items-center justify-center">
                <NuxtImg :src="feature.image" class="w-full h-full object-cover opacity-70 group-hover:opacity-90 group-hover:scale-105 transition-all duration-700" loading="lazy" decoding="async" />
              </div>
              <h3 class="text-lg font-semibold text-white mb-2">{{ feature.title }}</h3>
              <p class="text-slate-400 text-sm leading-relaxed">{{ feature.description }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const badge = ref<HTMLElement | null>(null);
const heading = ref<HTMLElement | null>(null);
const subheading = ref<HTMLElement | null>(null);
const mainGrid = ref<HTMLElement | null>(null);
const web3Grid = ref<HTMLElement | null>(null);

const mainFeatures = [
  {
    title: "Remove Manual Processes",
    description: "Cut down on busy work, allowing your team to focus on the tasks that fuel growth. We eliminate repetitive clicks and data entry.",
    icon: "/assets/images/nomanual.avif",
  },
  {
    title: "Integrate Your Apps",
    description: "Connect your tools to avoid double entry, reduce errors, and keep everything in sync automatically across your stack.",
    icon: "/assets/images/integrate.avif",
  },
  {
    title: "Agentic AI",
    description: "AI agents are smart, automated systems that can perform tasks on their own, even while you sleep. True set-and-forget automation.",
    icon: "/assets/images/agentic.avif",
  },
  {
    title: "Workshops & Training",
    description: "Upgrade and empower your team to work smarter with practical training and workshops tailored to your workflow.",
    icon: "/assets/images/train.avif",
  },
  {
    title: "Consulting (Automation & AI)",
    description: "Get expert advice on how to best use automation & AI to streamline your specific business needs and maximize ROI.",
    icon: "/assets/images/consult.avif",
  },
  {
    title: "No-code to Custom Code",
    description: "Whether you need simple tools or custom solutions, we tailor our approach to fit your specific needs and technical constraints.",
    icon: "/assets/images/nocode.avif",
  },
];

const web3Features = [
  {
    title: "Onchain AI Agents & Token Deployments",
    description: "Launch autonomous AI agents and deploy tokens on any blockchain — securely, efficiently, and at scale.",
    image: "/assets/images/istockphoto-1488104305-612x612.webp",
  },
  {
    title: "AI-Powered Full-Stack Apps",
    description: "Build intelligent full-stack apps that combine modern frontends, powerful backends, and AI-driven experiences.",
    image: "/assets/images/istockphoto-505327540-612x612.webp",
  },
  {
    title: "Decentralized Applications (dApps)",
    description: "Create trustless, blockchain-native applications where users control their own data, identities, and value.",
    image: "/assets/images/istockphoto-2158395414-612x612.webp",
  },
];

function animateIn(target: any, vars: gsap.TweenVars, scrollTriggerVars?: ScrollTrigger.Vars) {
  if (!target) return;
  const config: gsap.TweenVars = {
    opacity: 1,
    y: 0,
    ease: "power2.out",
    clearProps: "opacity,transform",
    ...vars,
  };
  if (scrollTriggerVars) {
    config.scrollTrigger = { toggleActions: "play none none none", ...scrollTriggerVars };
  }
  gsap.fromTo(target, { opacity: 0, y: vars.y ?? 30 }, config);
}

onMounted(() => {
  animateIn(badge.value, { y: -20, duration: 0.6 });
  animateIn(heading.value, { y: 30, duration: 0.8, delay: 0.2 });
  animateIn(subheading.value, { y: 30, duration: 0.8, delay: 0.4 });

  if (mainGrid.value) {
    animateIn(
      mainGrid.value.children,
      { y: 50, duration: 0.8, stagger: 0.1 },
      { trigger: mainGrid.value, start: "top bottom-=100" },
    );
  }

  if (web3Grid.value) {
    animateIn(
      web3Grid.value.children,
      { y: 50, duration: 0.8, stagger: 0.12 },
      { trigger: web3Grid.value, start: "top bottom-=50" },
    );
  }
});
</script>

