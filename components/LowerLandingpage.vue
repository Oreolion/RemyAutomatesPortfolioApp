<template>
  <div class="min-h-screen bg-white">
    <section
      id="popular-automations"
      class="container mx-auto px-4 py-12 md:py-20"
    >
      <div class="text-center mb-16">
        <div
          class="inline-block bg-green-100 text-green-800 px-4 py-1 rounded-full text-sm font-medium mb-6"
        >
          Popular Automations
        </div>
        <h1 class="text-3xl md:text-4xl font-bold mb-2">
          Unsure where to start?
        </h1>
        <p class="text-xl text-gray-600">Here are some real world use cases.</p>
      </div>

      <!-- Automation Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
        <div
          v-for="(item, index) in automations"
          :key="index"
          class="p-6 rounded-xl border border-gray-200 automation-card"
          :ref="
            (el) => {
              if (el) automationRefs[index] = el;
            }
          "
        >
          <component
            :is="item.icon"
            class="w-8 h-8 mb-4"
            :class="item.iconClass"
          />
          <h3 class="font-semibold text-lg mb-2">{{ item.title }}</h3>
          <p class="text-gray-600 text-sm">{{ item.description }}</p>
        </div>
      </div>

      <!-- Integration Section -->
      <div class="flex flex-col h-[400px] mb-20">
        <h2 class="text-3xl font-bold text-center mb-4">
          Imagine your favorite<br />tools now talk to each other.
        </h2>
        <p class="text-center text-gray-600 mb-8">
          <strong>Yes, we can do that.</strong> Connect the tools you use for
          next level productivity.
        </p>
        <div class="floating-logos" ref="logosContainer">
          <img
            v-for="(logo, index) in logos"
            :key="index"
            :src="logo.src"
            :alt="logo.name"
            class="absolute w-14 h-14 rounded-lg shadow-lg"
            :ref="
              (el) => {
                if (el) logoRefs[index] = el;
              }
            "
          />
        </div>
        <button
          class="mx-auto block bg-black text-white px-6 py-3 rounded-full hover:bg-gray-800 transition-colors"
        >
          Connect your apps →
        </button>
      </div>

      <!-- CTA Section -->
      <div
        id="contact"
        class="bg-[#FF4405] rounded-2xl p-8 md:p-12 text-white flex justify-between h-[22rem]"
      >
        <div class="h-[14rem] w-[13rem] basis-6/12">
          <img
            src="/public/assets/images/pixeltrue-contact.png"
            alt="High five illustration"
            class="mx-auto"
          />
        </div>

        <div class="max-w-2xl mx-auto basis-6/12">
          <h2 class="text-3xl md:text-4xl font-bold mb-4">
            See if Remy is right for you. (It totally is.)
          </h2>
          <p class="mb-8 opacity-90">
            Book a demo call with our team and find out how you & your team can
            share 40 hours of time, forever.
          </p>
          <button
            class="bg-black text-white px-6 py-3 rounded-full hover:bg-gray-800 transition-colors"
          >
            • Request a brainstorm →
          </button>
          <div class="mt-4 opacity-80">
            Or say hi first: hello@remyautomates.com
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";
import { gsap } from "gsap";
import {
  FileText,
  RefreshCw,
  DollarSign,
  MessageSquare,
  FileSpreadsheet,
  Clock,
  Users,
  Building,
  UserPlus,
} from "lucide-vue-next";

const automations = [
  {
    title: "Generate Automatic Reports",
    description:
      "Stop wasting time pulling data from different sources. Let automated reports give you real-time insights without the hassle.",
    icon: FileText,
    iconClass: "text-blue-500",
  },
  {
    title: "Sync Data Across Apps",
    description:
      "Keep your data consistent and updated across all your tools by automating data sync. Eliminate the risk of outdated information and manual updates.",
    icon: RefreshCw,
    iconClass: "text-purple-500",
  },
  {
    title: "Sales Pipeline Management",
    description:
      "Keep your deals moving. Automate follow ups and task assignments to make sure no lead slips through the cracks.",
    icon: DollarSign,
    iconClass: "text-green-500",
  },
  {
    title: "Support Tickets",
    description:
      "Automatically tag, organize, prioritize, and route support tickets to the right team members, reducing response times & improving satisfaction.",
    icon: MessageSquare,
    iconClass: "text-yellow-500",
  },
  {
    title: "Invoice & Payments",
    description:
      "No more chasing payments. Automate your invoices and reminders to keep cash flowing in without the time and fuss.",
    icon: FileSpreadsheet,
    iconClass: "text-red-500",
  },
  {
    title: "Content Scheduling",
    description:
      "Streamline your content with automated posts & engagement. Ensure your brand message is consistently delivered across channels.",
    icon: Clock,
    iconClass: "text-indigo-500",
  },
  {
    title: "Recurring Task Automation",
    description:
      "Save time on day to day or weekly recurring tasks. Automate the boring admin stuff that steals updates, so your team can focus on stuff that matters.",
    icon: Users,
    iconClass: "text-pink-500",
  },
  {
    title: "Lead Management",
    description:
      "Capture and track leads from all your marketing channels. Never miss out on potential customers without lifting a finger.",
    icon: Building,
    iconClass: "text-orange-500",
  },
  {
    title: "Client/Employee Onboarding",
    description:
      "Make a great first impression. Automate welcome emails, form filling, and document sharing to get new clients or employees up and running smoothly.",
    icon: UserPlus,
    iconClass: "text-teal-500",
  },
];

const logos = [
  {
    name: "TikTok",
    src: "/assets/logos/tiktok-color-icon.svg",
  },
  { name: "YouTube", src: "/assets/logos/youtube-logo-icon(1).svg" },
  { name: "LinkedIn", src: "/assets/logos/linkedin-app-icon.svg" },
  { name: "Teams", src: "/assets/logos/microsoft-teams-icon.svg" },
  { name: "Slack", src: "/assets/logos/slack-icon.svg" },
  { name: "Gmail", src: "/assets/logos/gmail-icon.svg" },
  { name: "X", src: "/assets/logos/x-share-button-icon(1).svg" },
  { name: "Facebook", src: "/assets/logos/facebook-square-icon.svg" },
  {
    name: "Airtable",
    src: "/assets/images/airtable-vector-logo-2022-small.png",
  },
];

const logoRefs = ref<HTMLElement[]>([]);
const automationRefs = ref<HTMLElement[]>([]);

onMounted(() => {
  // Animate automation cards
  gsap.from(automationRefs.value, {
    y: 50,
    opacity: 0,
    duration: 0.8,
    stagger: 0.1,
    ease: "power2.out",
  });

  // Animate floating logos
  logoRefs.value.forEach((logo, index) => {
    gsap.to(logo, {
      x: "random(-200, 200)",
      y: "random(-70, 70)",
      rotation: "random(-15, 15)",
      duration: "random(2, 4)",
      repeat: -1,
      yoyo: true,
      ease: "none",
      delay: index * 0.2,
    });
  });
});
</script>

<style scoped>
.grid-pattern {
  background-image: linear-gradient(
      to right,
      rgba(255, 255, 255, 0.1) 1px,
      transparent 1px
    ),
    linear-gradient(to bottom, rgba(255, 255, 255, 0.1) 1px, transparent 1px);
  background-size: 20px 20px;
}

.floating-logos {
  height: 300px;
  margin: 2rem auto;
}

#contact img {
  object-fit: cover;
  width: 100%;
  height: 100%;
}

@media (max-width: 380px) {
  .automation-card {
    padding: 1rem;
  }

  h1 {
    font-size: 1.75rem;
  }

  h2 {
    font-size: 1.5rem;
  }
}
</style>
