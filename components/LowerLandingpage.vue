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

        <div ref="automationsGrid" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-16 sm:mb-24">
          <div
            v-for="(item, index) in automations"
            :key="index"
            class="automation-card group relative p-5 sm:p-6 rounded-2xl bg-[#13131f] border border-white/[0.12] hover:border-cyan-glow/40 transition-all duration-500 shadow-lg shadow-black/20"
          >
            <div class="absolute inset-0 bg-gradient-to-br from-cyan-glow/[0.05] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl pointer-events-none" />
            <div class="relative z-10">
              <div class="w-10 h-10 rounded-lg bg-gradient-to-br from-cyan-glow/15 to-violet-glow/15 border border-white/[0.1] flex items-center justify-center mb-4">
                <NuxtImg :src="item.icon" class="w-5 h-5 object-contain" loading="lazy" decoding="async" />
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
          <div ref="toolsContainer" class="relative mx-auto h-[320px] sm:h-[380px] md:h-[440px] max-w-[640px] overflow-visible">
            <!-- SVG Connection Lines (uses % so it scales with the container) -->
            <svg class="absolute inset-0 w-full h-full pointer-events-none z-0 overflow-visible" preserveAspectRatio="none">
              <defs>
                <linearGradient id="lineGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stop-color="#00f0ff" stop-opacity="0.3" />
                  <stop offset="100%" stop-color="#a78bfa" stop-opacity="0.3" />
                </linearGradient>
              </defs>
              <line
                v-for="(pos, i) in logoPositions"
                :key="`line-${i}`"
                x1="50%"
                y1="50%"
                :x2="`${pos.xPct}%`"
                :y2="`${pos.yPct}%`"
                stroke="url(#lineGrad)"
                stroke-width="1"
                stroke-dasharray="4 4"
                opacity="0.4"
              />
            </svg>

            <!-- Center Hub -->
            <div
              class="absolute top-1/2 left-1/2 z-20 w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 rounded-full bg-gradient-to-br from-cyan-glow/30 to-violet-glow/30 border border-cyan-glow/40 flex items-center justify-center -translate-x-1/2 -translate-y-1/2"
            >
              <div class="w-9 h-9 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-full bg-gradient-to-br from-cyan-glow to-violet-glow flex items-center justify-center shadow-glow-cyan animate-pulse-glow">
                <svg class="w-5 h-5 sm:w-5 sm:h-5 md:w-6 md:h-6 text-void" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.5">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
            </div>

            <!-- Floating Logos — % positioning so they stay inside the container at every breakpoint.
                 Centering offset (-50%,-50%) handled by GSAP xPercent/yPercent so it composes with float animation. -->
            <div
              v-for="(logo, index) in allLogos"
              :key="index"
              class="logo-float absolute z-10 flex items-center justify-center rounded-xl bg-[#13131f] border border-white/[0.15] shadow-lg shadow-black/40"
              :class="logo.size === 'md' ? 'w-12 h-12 sm:w-14 sm:h-14 p-2' : 'w-10 h-10 sm:w-12 sm:h-12 p-1.5'"
              :style="{
                left: logoPositions[index].xPct + '%',
                top: logoPositions[index].yPct + '%',
                transform: 'translate(-50%, -50%)',
              }"
            >
              <img :src="logo.src" :alt="logo.name" class="w-full h-full object-contain" loading="lazy" decoding="async" />
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
    <section id="contact" class="section-padding relative overflow-hidden">
      <div class="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-violet-glow/30 to-transparent" />
      <div class="absolute inset-0 bg-gradient-to-b from-violet-glow/5 via-transparent to-transparent pointer-events-none" />

      <div class="container-tight relative z-10">
        <div class="relative rounded-3xl overflow-hidden">
          <div class="absolute inset-0 bg-gradient-to-br from-surface via-surface to-void-light" />
          <div class="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-to-br from-cyan-glow/10 to-violet-glow/10 rounded-full blur-[100px] pointer-events-none" />
          <div class="absolute bottom-0 left-0 w-[300px] h-[300px] bg-violet-glow/5 rounded-full blur-[80px] pointer-events-none" />

          <div class="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-8 p-6 sm:p-8 md:p-16">
            <div class="flex items-center justify-center order-1 md:order-1">
              <div class="relative w-full max-w-[200px] sm:max-w-xs aspect-square">
                <div class="absolute inset-0 bg-gradient-to-br from-cyan-glow/20 to-violet-glow/20 rounded-3xl blur-2xl" />
                <img src="/assets/images/pixeltrue-contact.png" alt="Let's connect" class="relative z-10 w-full h-full object-contain drop-shadow-2xl" loading="lazy" decoding="async" />
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
import { ref, onMounted } from "vue";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const toolsContainer = ref<HTMLElement | null>(null);
const automationsGrid = ref<HTMLElement | null>(null);

const allLogos = [
  { name: "ChatGPT", src: "/assets/images/chatgpt-icon.webp", size: "md" },
  { name: "Claude", src: "/assets/images/t_claude-ai9117.logowik.com.webp", size: "md" },
  { name: "Gemini", src: "/assets/images/google-gemini-icon.svg", size: "md" },
  { name: "Zapier", src: "/assets/images/Zapier_logo.jpg", size: "md" },
  { name: "ElevenLabs", src: "/assets/images/9trrmnj2sj8-logo-logo.svg", size: "md" },
  { name: "Airtable", src: "/assets/images/airtable-vector-logo-2022-small.png", size: "md" },
  { name: "Slack", src: "/assets/logos/slack-icon.svg", size: "sm" },
  { name: "Gmail", src: "/assets/logos/gmail-icon.svg", size: "sm" },
  { name: "LinkedIn", src: "/assets/logos/linkedin-app-icon.svg", size: "sm" },
  { name: "YouTube", src: "/assets/logos/youtube-logo-icon(1).svg", size: "sm" },
  { name: "Teams", src: "/assets/logos/microsoft-teams-icon.svg", size: "sm" },
  { name: "TikTok", src: "/assets/logos/tiktok-color-icon.svg", size: "sm" },
  { name: "X", src: "/assets/logos/x-share-button-icon(1).svg", size: "sm" },
  { name: "Facebook", src: "/assets/logos/facebook-square-icon.svg", size: "sm" },
];

// Container-relative positions (percentages) so logos stay inside the box at every breakpoint.
// Radius shrinks slightly for tighter mobile containers; perturbed by index for organic look.
const logoPositions = allLogos.map((_, i) => {
  const count = allLogos.length;
  const angle = (i / count) * Math.PI * 2 - Math.PI / 2;
  const radiusPct = 36 + ((i % 3) * 3);
  return {
    xPct: 50 + Math.cos(angle) * radiusPct,
    yPct: 50 + Math.sin(angle) * radiusPct,
  };
});

onMounted(() => {
  // Animate automation cards — fromTo with clearProps so cards never get stuck invisible
  if (automationsGrid.value) {
    const cards = automationsGrid.value.querySelectorAll(".automation-card");
    if (cards.length > 0) {
      gsap.fromTo(
        cards,
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.1,
          ease: "power2.out",
          clearProps: "opacity,transform",
          scrollTrigger: {
            trigger: automationsGrid.value,
            start: "top 85%",
            toggleActions: "play none none none",
          },
        },
      );
    }
  }

  // Float the tool logos. Position is the inline % left/top; GSAP centers via
  // xPercent/yPercent (replacing the inline translate) and animates a small drift on top.
  if (toolsContainer.value) {
    const logos = toolsContainer.value.querySelectorAll<HTMLElement>(".logo-float");
    logos.forEach((logo, index) => {
      gsap.set(logo, { xPercent: -50, yPercent: -50, x: 0, y: 0 });
      gsap.to(logo, {
        x: gsap.utils.random(-20, 20),
        y: gsap.utils.random(-16, 16),
        rotation: gsap.utils.random(-8, 8),
        duration: gsap.utils.random(2.5, 4),
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        delay: index * 0.1,
      });
    });
  }

  if (typeof window !== "undefined") {
    window.addEventListener("load", () => ScrollTrigger.refresh(), { once: true });
    setTimeout(() => ScrollTrigger.refresh(), 1500);
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
