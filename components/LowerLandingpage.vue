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
            class="group relative p-5 sm:p-6 rounded-2xl bg-surface border border-white/[0.08] hover:border-cyan-glow/30 transition-all duration-500"
            :ref="(el) => { if (el) automationRefs[index] = el; }"
          >
            <div class="absolute inset-0 bg-gradient-to-br from-cyan-glow/[0.03] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl pointer-events-none" />
            <div class="relative z-10">
              <div class="w-10 h-10 rounded-lg bg-gradient-to-br from-cyan-glow/10 to-violet-glow/10 border border-white/[0.06] flex items-center justify-center mb-4">
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

          <div ref="logosContainer" class="floating-logos relative h-[300px] sm:h-[350px] md:h-[400px] mb-10">
            <img
              v-for="(logo, index) in toolLogos"
              :key="index"
              :src="logo.src"
              :alt="logo.name"
              class="absolute w-12 h-12 sm:w-14 sm:h-14 rounded-xl glass shadow-lg"
              :ref="(el) => { if (el) logoRefs[index] = el; }"
            />
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
import { ref, onMounted } from "vue";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const logosContainer = ref<HTMLElement | null>(null);
const logoRefs = ref<HTMLElement[]>([]);
const automationRefs = ref<HTMLElement[]>([]);

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

const toolLogos = [
  { name: "TikTok", src: "/assets/logos/tiktok-color-icon.svg" },
  { name: "YouTube", src: "/assets/logos/youtube-logo-icon(1).svg" },
  { name: "LinkedIn", src: "/assets/logos/linkedin-app-icon.svg" },
  { name: "Teams", src: "/assets/logos/microsoft-teams-icon.svg" },
  { name: "Slack", src: "/assets/logos/slack-icon.svg" },
  { name: "Gmail", src: "/assets/logos/gmail-icon.svg" },
  { name: "X", src: "/assets/logos/x-share-button-icon(1).svg" },
  { name: "Facebook", src: "/assets/logos/facebook-square-icon.svg" },
  { name: "Airtable", src: "/assets/images/airtable-vector-logo-2022-small.png" },
];

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

  // Animate floating logos — original colliding animation restored
  logoRefs.value.forEach((logo, index) => {
    gsap.to(logo, {
      x: "random(-220, 220)",
      y: "random(-80, 80)",
      rotation: "random(-20, 20)",
      duration: "random(2.5, 4.5)",
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
      delay: index * 0.15,
    });
  });
});
</script>

<style scoped>
.floating-logos {
  margin: 2rem auto;
}

@media (max-width: 380px) {
  .floating-logos {
    height: 260px;
  }
}
</style>
