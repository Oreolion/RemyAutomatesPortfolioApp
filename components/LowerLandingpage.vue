<template>
  <div class="relative">
    <!-- Popular Automations -->
    <section id="popular-automations" class="section-padding relative overflow-hidden">
      <div class="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-cyan-glow/20 to-transparent" />
      <div class="absolute top-1/4 -left-48 w-96 h-96 bg-cyan-glow/5 rounded-full blur-[120px] pointer-events-none" />

      <div class="container-tight relative z-10">
        <div class="text-center mb-16">
          <span class="badge mb-6 inline-block">
            <span class="w-1.5 h-1.5 bg-cyan-glow rounded-full animate-pulse" />
            Popular Automations
          </span>
          <h2 class="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-4">
            Unsure where to <span class="text-gradient">start?</span>
          </h2>
          <p class="text-base sm:text-lg text-slate-400">Here are some real world use cases we deliver.</p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-16 sm:mb-24">
          <div
            v-for="(item, index) in automations"
            :key="index"
            class="group relative p-5 sm:p-6 rounded-2xl bg-[#13131f] border border-white/[0.12] hover:border-cyan-glow/40 transition-all duration-500 shadow-lg shadow-black/20"
            :ref="(el) => { if (el) automationRefs[index] = el; }"
          >
            <div class="absolute inset-0 bg-gradient-to-br from-cyan-glow/[0.05] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl pointer-events-none" />
            <div class="relative z-10">
              <div class="w-10 h-10 rounded-lg bg-gradient-to-br from-cyan-glow/15 to-violet-glow/15 border border-white/[0.1] flex items-center justify-center mb-4">
                <NuxtImg :src="item.icon" class="w-5 h-5 object-contain" />
              </div>
              <h3 class="font-semibold text-white mb-2">{{ item.title }}</h3>
              <p class="text-slate-400 text-sm leading-relaxed">{{ item.description }}</p>
            </div>
          </div>
        </div>

        <!-- Integration Section -->
        <div class="relative mb-24">
          <div class="text-center mb-12">
            <h2 class="text-2xl sm:text-3xl md:text-5xl font-bold tracking-tight mb-4">
              Imagine your favorite tools
              <br class="hidden sm:block" />
              <span class="text-gradient">now talk to each other.</span>
            </h2>
            <p class="text-slate-400 max-w-lg mx-auto text-sm sm:text-base px-2 sm:px-0">
              <span class="text-white font-medium">Yes, we can do that.</span> Connect the tools you use for next level productivity.
            </p>
          </div>

          <!-- Floating Tools Network -->
          <div class="relative mx-auto" style="max-width: 700px;">
            <div ref="toolsContainer" class="floating-tools relative h-[360px] sm:h-[420px] md:h-[480px] mb-10">
              <!-- SVG Connection Lines -->
              <svg class="absolute inset-0 w-full h-full pointer-events-none z-0" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <linearGradient id="lineGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stop-color="rgba(0,240,255,0.3)" />
                    <stop offset="100%" stop-color="rgba(167,139,250,0.3)" />
                  </linearGradient>
                </defs>
                <!-- Lines from center to each logo position -->
                <line
                  v-for="(pos, i) in logoPositions"
                  :key="`line-${i}`"
                  :x1="centerX"
                  :y1="centerY"
                  :x2="pos.x"
                  :y2="pos.y"
                  stroke="url(#lineGrad)"
                  stroke-width="1"
                  stroke-dasharray="4 4"
                  opacity="0.4"
                />
              </svg>

              <!-- Center Hub -->
              <div
                class="absolute z-20 w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-gradient-to-br from-cyan-glow/30 to-violet-glow/30 border border-cyan-glow/40 flex items-center justify-center"
                :style="{ top: `calc(50% - 32px)`, left: `calc(50% - 32px)` }"
              >
                <div class="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gradient-to-br from-cyan-glow to-violet-glow flex items-center justify-center shadow-glow-cyan animate-pulse-glow">
                  <svg class="w-5 h-5 sm:w-6 sm:h-6 text-void" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.5">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
              </div>

              <!-- Floating Logos -->
              <div
                v-for="(logo, index) in allLogos"
                :key="index"
                class="logo-float absolute z-10 flex items-center justify-center rounded-xl bg-[#13131f] border border-white/[0.15] shadow-lg shadow-black/40 p-2"
                :style="getLogoSize(logo.size)"
                :ref="(el) => { if (el) logoRefs[index] = el; }"
              >
                <img :src="logo.src" :alt="logo.name" class="w-full h-full object-contain" />
              </div>
            </div>
          </div>

          <div class="text-center">
            <NuxtLink to="/form" class="btn-secondary inline-flex">
              Connect your apps
              <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd" />
              </svg>
            </NuxtLink>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section
      id="contact"
      class="section-padding relative overflow-hidden"
    >
      <div class="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-violet-glow/30 to-transparent" />
      <div class="absolute inset-0 bg-gradient-to-b from-violet-glow/5 via-transparent to-transparent pointer-events-none" />

      <div class="container-tight relative z-10">
        <div class="relative rounded-3xl overflow-hidden">
          <!-- Background gradient -->
          <div class="absolute inset-0 bg-gradient-to-br from-surface via-surface to-void-light" />
          <div class="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-to-br from-cyan-glow/10 to-violet-glow/10 rounded-full blur-[100px] pointer-events-none" />
          <div class="absolute bottom-0 left-0 w-[300px] h-[300px] bg-violet-glow/5 rounded-full blur-[80px] pointer-events-none" />

          <div class="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-8 p-6 sm:p-8 md:p-16">
            <div class="flex items-center justify-center order-1 md:order-1">
              <div class="relative w-full max-w-[200px] sm:max-w-xs aspect-square">
                <div class="absolute inset-0 bg-gradient-to-br from-cyan-glow/20 to-violet-glow/20 rounded-3xl blur-2xl" />
                <img
                  src="/assets/images/pixeltrue-contact.png"
                  alt="Let's connect"
                  class="relative z-10 w-full h-full object-contain drop-shadow-2xl"
                />
              </div>
            </div>

            <div class="flex flex-col justify-center order-2 md:order-2">
              <span class="badge mb-4 sm:mb-6 self-start">
                <span class="w-1.5 h-1.5 bg-cyan-glow rounded-full animate-pulse" />
                Get Started
              </span>
              <h2 class="text-2xl sm:text-3xl md:text-5xl font-bold tracking-tight mb-4 sm:mb-6">
                See if Remy is right for you.
                <span class="text-gradient">(He surely is.)</span>
              </h2>
              <p class="text-slate-400 text-base sm:text-lg mb-6 sm:mb-8 leading-relaxed">
                Book a demo call with our team and find out how you & your team can save
                <span class="text-white font-medium">40 hours of time</span>, forever.
              </p>
              <div class="flex flex-col sm:flex-row gap-3 sm:gap-4">
                <NuxtLink to="/form" class="btn-primary text-sm sm:text-base px-6 sm:px-8 py-3.5 sm:py-4 w-full sm:w-auto justify-center">
                  <span class="w-2 h-2 bg-void rounded-full" />
                  Request a Brainstorm
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd" />
                  </svg>
                </NuxtLink>
              </div>
              <p class="mt-4 sm:mt-6 text-xs sm:text-sm text-slate-500 font-mono">
                Or say hi first: <a href="mailto:ra@remyautomates.com" class="text-cyan-glow hover:underline">ra@remyautomates.com</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, computed } from "vue";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const toolsContainer = ref<HTMLElement | null>(null);
const logoRefs = ref<HTMLElement[]>([]);
const automationRefs = ref<HTMLElement[]>([]);

const centerX = 350; // half of max-width 700
const centerY = 180; // approximate half of height (will be responsive)

const allLogos = [
  // AI & Automation tools
  { name: "ChatGPT", src: "/assets/images/chatgpt-icon.webp", size: "md" },
  { name: "Claude", src: "/assets/images/t_claude-ai9117.logowik.com.webp", size: "md" },
  { name: "Gemini", src: "/assets/images/google-gemini-icon.svg", size: "md" },
  { name: "Zapier", src: "/assets/images/Zapier_logo.jpg", size: "md" },
  { name: "ElevenLabs", src: "/assets/images/9trrmnj2sj8-logo-logo.svg", size: "md" },
  { name: "Airtable", src: "/assets/images/airtable-vector-logo-2022-small.png", size: "md" },
  // Social & Communication
  { name: "Slack", src: "/assets/logos/slack-icon.svg", size: "sm" },
  { name: "Gmail", src: "/assets/logos/gmail-icon.svg", size: "sm" },
  { name: "LinkedIn", src: "/assets/logos/linkedin-app-icon.svg", size: "sm" },
  { name: "YouTube", src: "/assets/logos/youtube-logo-icon(1).svg", size: "sm" },
  { name: "Teams", src: "/assets/logos/microsoft-teams-icon.svg", size: "sm" },
  { name: "TikTok", src: "/assets/logos/tiktok-color-icon.svg", size: "sm" },
  { name: "X", src: "/assets/logos/x-share-button-icon(1).svg", size: "sm" },
  { name: "Facebook", src: "/assets/logos/facebook-square-icon.svg", size: "sm" },
];

const getLogoSize = (size: string) => {
  if (size === "md") {
    return { width: "52px", height: "52px" };
  }
  return { width: "44px", height: "44px" };
};

// Calculate initial circular positions for logos
const logoPositions = computed(() => {
  const positions = [];
  const count = allLogos.length;
  const baseRadius = 110;
  for (let i = 0; i < count; i++) {
    const angle = (i / count) * Math.PI * 2;
    // Add some randomness to radius so it's not a perfect circle
    const radius = baseRadius + (Math.random() * 40 - 20);
    positions.push({
      x: centerX + Math.cos(angle) * radius,
      y: centerY + Math.sin(angle) * radius,
    });
  }
  return positions;
});

onMounted(() => {
  // Animate automation cards
  gsap.from(automationRefs.value, {
    y: 50,
    opacity: 0,
    duration: 0.8,
    stagger: 0.1,
    ease: "power2.out",
    scrollTrigger: {
      trigger: automationRefs.value[0]?.parentElement,
      start: "top 85%",
    },
  });

  // Position logos initially in a circle, then animate them floating/colliding
  logoRefs.value.forEach((logo, index) => {
    if (!logo) return;
    const pos = logoPositions.value[index];
    // Set initial position
    gsap.set(logo, {
      left: pos.x,
      top: pos.y,
      xPercent: -50,
      yPercent: -50,
    });

    // Floating animation — tighter range for more collision/communication feel
    gsap.to(logo, {
      x: `random(-60, 60)`,
      y: `random(-50, 50)`,
      rotation: `random(-12, 12)`,
      scale: `random(0.92, 1.08)`,
      duration: `random(2, 3.5)`,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
      delay: index * 0.12,
    });
  });

  // Animate connection lines opacity
  const lines = toolsContainer.value?.querySelectorAll("line");
  if (lines) {
    gsap.from(lines, {
      opacity: 0,
      duration: 1,
      stagger: 0.05,
      ease: "power2.out",
      scrollTrigger: {
        trigger: toolsContainer.value,
        start: "top 80%",
      },
    });
  }
});

const automations = [
  {
    title: "Onchain Automation",
    description: "Automate smart contract execution, token rewards, and decentralized workflows. Reduce gas costs and improve trust with onchain logic.",
    icon: "/assets/logos/aiautomation.png",
  },
  {
    title: "Blockchain Integration",
    description: "Seamlessly connect your apps to Ethereum, Base, Solana, or other chains. Automate wallet access, data sync, and onchain actions securely.",
    icon: "/assets/logos/download.png",
  },
  {
    title: "Generate Automatic Reports",
    description: "Stop wasting time pulling data from different sources. Let automated reports give you real-time insights without the hassle.",
    icon: "/assets/images/report.avif",
  },
  {
    title: "Build Full-Stack Apps & dApps",
    description: "Automate scaffolding, smart contract setup, backend logic, and frontend deployment to rapidly launch modern apps.",
    icon: "/assets/logos/blockchainapp.webp",
  },
  {
    title: "Sync Data Across Apps",
    description: "Keep your data consistent and updated across all your tools by automating data sync. Eliminate outdated information.",
    icon: "/assets/images/sync.avif",
  },
  {
    title: "Sales Pipeline Management",
    description: "Keep your deals moving. Automate follow ups and task assignments to make sure no lead slips through the cracks.",
    icon: "/assets/logos/pipeline.avif",
  },
  {
    title: "Support Tickets",
    description: "Automatically tag, organize, prioritize, and route support tickets to the right team members, reducing response times.",
    icon: "/assets/logos/ticket.avif",
  },
  {
    title: "Invoice & Payments",
    description: "No more chasing payments. Automate your invoices and reminders to keep cash flowing in without the time and fuss.",
    icon: "/assets/logos/invoice.avif",
  },
  {
    title: "Content Scheduling",
    description: "Streamline your content with automated posts & engagement. Ensure your brand message is consistently delivered.",
    icon: "/assets/logos/schedule.avif",
  },
  {
    title: "Recurring Task Automation",
    description: "Save time on day to day or weekly recurring tasks. Automate the boring admin stuff that steals updates.",
    icon: "/assets/logos/recur.avif",
  },
  {
    title: "Lead Management",
    description: "Capture and track leads from all your marketing channels. Never miss out on potential customers without lifting a finger.",
    icon: "/assets/logos/lead.avif",
  },
  {
    title: "Client/Employee Onboarding",
    description: "Make a great first impression. Automate welcome emails, form filling, and document sharing to get people up and running.",
    icon: "/assets/logos/client.avif",
  },
];
</script>

<style scoped>
.floating-tools {
  margin: 2rem auto;
}

@media (max-width: 640px) {
  .floating-tools {
    height: 320px !important;
  }
}

@media (max-width: 380px) {
  .floating-tools {
    height: 280px !important;
  }
}
</style>
