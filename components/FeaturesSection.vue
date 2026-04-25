<template>
  <section id="solutions" class="section-padding relative overflow-hidden">
    <div class="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-cyan-glow/20 to-transparent" />
    
    <!-- Ambient glow -->
    <div class="absolute top-1/3 -right-64 w-[500px] h-[500px] bg-violet-glow/5 rounded-full blur-[120px] pointer-events-none" />
    <div class="absolute bottom-1/4 -left-64 w-[400px] h-[400px] bg-cyan-glow/5 rounded-full blur-[120px] pointer-events-none" />

    <div class="container-tight relative z-10">
      <!-- Header -->
      <div class="text-center mb-20">
        <div ref="badge" class="mb-6 opacity-0">
          <span class="badge">
            <span class="w-1.5 h-1.5 bg-cyan-glow rounded-full animate-pulse" />
            We're Remy Automates
          </span>
        </div>

        <h2 ref="heading" class="text-3xl sm:text-4xl md:text-6xl font-bold tracking-tight mb-6 opacity-0">
          We bring your company
          <br class="hidden sm:block" />
          <span class="text-gradient">into the AI age.</span>
        </h2>

        <p ref="subheading" class="text-base sm:text-lg md:text-xl text-slate-400 max-w-2xl mx-auto px-2 sm:px-0 opacity-0">
          We're in the business of boosting human productivity,
          <span class="text-white font-medium">not</span> replacing it.
        </p>
      </div>

      <!-- Main Features Bento Grid -->
      <div ref="mainGrid" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-5">
        <div
          v-for="(feature, i) in mainFeatures"
          :key="i"
          :class="[
            'group relative p-7 rounded-2xl glass glow-border overflow-hidden transition-all duration-500',
            feature.span || '',
          ]"
        >
          <div class="absolute inset-0 bg-gradient-to-br from-cyan-glow/[0.02] to-violet-glow/[0.02] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          
          <div class="relative z-10">
            <div class="w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-glow/10 to-violet-glow/10 border border-white/[0.06] flex items-center justify-center mb-5 group-hover:from-cyan-glow/20 group-hover:to-violet-glow/20 transition-all">
              <NuxtImg :src="feature.icon" class="w-6 h-6 object-contain opacity-80" />
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
            class="group relative p-5 sm:p-7 rounded-2xl glass glow-border overflow-hidden transition-all duration-500"
          >
            <div class="absolute inset-0 bg-gradient-to-br from-violet-glow/[0.03] to-cyan-glow/[0.03] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            
            <div class="relative z-10">
              <div class="w-full h-32 rounded-xl bg-white/[0.03] border border-white/[0.06] mb-5 overflow-hidden flex items-center justify-center">
                <NuxtImg :src="feature.image" class="w-full h-full object-cover opacity-60 group-hover:opacity-80 group-hover:scale-105 transition-all duration-700" />
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

onMounted(() => {
  gsap.from(badge.value, { opacity: 0, y: -20, duration: 0.6, ease: "power2.out" });
  gsap.from(heading.value, { opacity: 0, y: 30, duration: 0.8, delay: 0.2, ease: "power2.out" });
  gsap.from(subheading.value, { opacity: 0, y: 30, duration: 0.8, delay: 0.4, ease: "power2.out" });

  if (mainGrid.value) {
    gsap.from(mainGrid.value.children, {
      opacity: 0, y: 50, duration: 0.8, stagger: 0.1, ease: "power2.out",
      scrollTrigger: { trigger: mainGrid.value, start: "top bottom-=100", toggleActions: "play none none reverse" },
    });
  }

  if (web3Grid.value) {
    gsap.from(web3Grid.value.children, {
      opacity: 0, y: 50, duration: 0.8, stagger: 0.12, ease: "power2.out",
      scrollTrigger: { trigger: web3Grid.value, start: "top bottom-=50", toggleActions: "play none none reverse" },
    });
  }
});
</script>
