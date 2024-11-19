<template>
    <div class="min-h-screen bg-white">
      <!-- Hero Section -->
      <section class="container mx-auto px-4 py-12 md:py-20">
        <div class="text-center mb-16">
          <div class="inline-block bg-green-100 text-green-800 px-4 py-1 rounded-full text-sm font-medium mb-6">
            Popular Automations
          </div>
          <h1 class="text-3xl md:text-4xl font-bold mb-2">Unsure where to start?</h1>
          <p class="text-xl text-gray-600">Here are some real world use cases.</p>
        </div>
  
        <!-- Automation Grid -->
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
          <div v-for="(item, index) in automations" :key="index" 
               class="p-6 rounded-xl border border-gray-200 automation-card"
               :ref="el => { if (el) automationRefs[index] = el }">
            <component :is="item.icon" class="w-8 h-8 mb-4" :class="item.iconClass" />
            <h3 class="font-semibold text-lg mb-2">{{ item.title }}</h3>
            <p class="text-gray-600 text-sm">{{ item.description }}</p>
          </div>
        </div>
  
        <!-- Integration Section -->
        <div class="relative h-[400px] mb-20">
          <h2 class="text-3xl font-bold text-center mb-4">
            Imagine your favorite<br />tools now talk to each other.
          </h2>
          <p class="text-center text-gray-600 mb-8">
            Yes, we can do that. Connect the tools you use for next level productivity.
          </p>
          <div class="floating-logos" ref="logosContainer">
            <img v-for="(logo, index) in logos" 
                 :key="index"
                 :src="logo.src"
                 :alt="logo.name"
                 class="absolute w-10 h-10 rounded-lg shadow-lg"
                 :ref="el => { if (el) logoRefs[index] = el }" />
          </div>
          <button class="mx-auto block bg-black text-white px-6 py-3 rounded-full hover:bg-gray-800 transition-colors">
            Connect your apps →
          </button>
        </div>
  
        <!-- CTA Section -->
        <div class="bg-[#FF4405] rounded-2xl p-8 md:p-12 text-white mb-20">
          <div class="max-w-2xl mx-auto text-center">
            <h2 class="text-3xl md:text-4xl font-bold mb-4">
              See if Friday is right for you. (It totally is.)
            </h2>
            <p class="mb-8 opacity-90">
              Book a demo call with our team and find out how you & your team can share 40 hours of time, forever.
            </p>
            <button class="bg-black text-white px-6 py-3 rounded-full hover:bg-gray-800 transition-colors">
              • Request a brainstorm →
            </button>
            <div class="mt-4 opacity-80">
              Or say hi first: hello@fridayautomation.com
            </div>
          </div>
          <div class="relative mt-8">
            <!-- <img src="/placeholder.svg?height=200&width=300" alt="High five illustration" class="mx-auto" /> -->
          </div>
        </div>
  
        <!-- Testing Section -->
        <div class="bg-black rounded-2xl p-8 md:p-12 text-white mb-20 relative overflow-hidden">
          <div class="absolute top-0 right-0 w-32 h-32 grid-pattern opacity-20"></div>
          <div class="max-w-2xl">
            <h2 class="text-3xl md:text-4xl font-bold mb-4">
              Testing the automation waters?
            </h2>
            <p class="mb-8 opacity-90">
              Get our 7-day Automation Blueprint to see how automation can help your business.
            </p>
            <div class="flex gap-4">
              <input type="email" placeholder="Work Email" 
                     class="px-4 py-2 rounded-lg bg-white/10 border border-white/20 text-white" />
              <button class="bg-purple-600 text-white px-6 py-2 rounded-lg hover:bg-purple-700 transition-colors">
                Get PDF
              </button>
            </div>
          </div>
        </div>
  
        <!-- Footer -->
        <footer class="bg-purple-600 rounded-2xl p-8 text-white">
          <div class="flex justify-between items-center">
            <div class="flex gap-4">
              <a href="#" class="opacity-60 hover:opacity-100">X</a>
              <a href="#" class="opacity-60 hover:opacity-100">LinkedIn</a>
              <a href="#" class="opacity-60 hover:opacity-100">Email</a>
            </div>
            <!-- <img src="/placeholder.svg?height=40&width=120" alt="Friday Logo" class="h-8" /> -->
          </div>
          <div class="mt-8 text-sm opacity-60">
            © Copyright 2024, All Rights Reserved
          </div>
        </footer>
      </section>
    </div>
  </template>
  
  <script setup lang="ts">
  import { ref, onMounted } from 'vue'
  import { gsap } from 'gsap'
  import { 
    FileText, 
    RefreshCw, 
    DollarSign,
    MessageSquare,
    FileSpreadsheet,
    Clock,
    Users,
    Building,
    UserPlus
  } from 'lucide-vue-next'
  
  const automations = [
    {
      title: 'Generate Automatic Reports',
      description: 'Stop wasting time pulling data from different sources. Let automated reports give you real-time insights without the hassle.',
      icon: FileText,
      iconClass: 'text-blue-500'
    },
    {
      title: 'Sync Data Across Apps',
      description: 'Keep your data consistent and updated across all your tools by automating data sync. Eliminate the risk of outdated information and manual updates.',
      icon: RefreshCw,
      iconClass: 'text-purple-500'
    },
    {
      title: 'Sales Pipeline Management',
      description: 'Keep your deals moving. Automate follow ups and task assignments to make sure no lead slips through the cracks.',
      icon: DollarSign,
      iconClass: 'text-green-500'
    },
    {
      title: 'Support Tickets',
      description: 'Automatically tag, organize, prioritize, and route support tickets to the right team members, reducing response times & improving satisfaction.',
      icon: MessageSquare,
      iconClass: 'text-yellow-500'
    },
    {
      title: 'Invoice & Payments',
      description: 'No more chasing payments. Automate your invoices and reminders to keep cash flowing in without the time and fuss.',
      icon: FileSpreadsheet,
      iconClass: 'text-red-500'
    },
    {
      title: 'Content Scheduling',
      description: 'Streamline your content with automated posts & engagement. Ensure your brand message is consistently delivered across channels.',
      icon: Clock,
      iconClass: 'text-indigo-500'
    },
    {
      title: 'Recurring Task Automation',
      description: 'Save time on day to day or weekly recurring tasks. Automate the boring admin stuff that steals updates, so your team can focus on stuff that matters.',
      icon: Users,
      iconClass: 'text-pink-500'
    },
    {
      title: 'Lead Management',
      description: 'Capture and track leads from all your marketing channels. Never miss out on potential customers without lifting a finger.',
      icon: Building,
      iconClass: 'text-orange-500'
    },
    {
      title: 'Client/Employee Onboarding',
      description: 'Make a great first impression. Automate welcome emails, form filling, and document sharing to get new clients or employees up and running smoothly.',
      icon: UserPlus,
      iconClass: 'text-teal-500'
    }
  ]
  
  const logos = [
    { name: 'TikTok', src: '/assets/logos/tiktok-color-icon.svg?height=40&width=40' },
    // { name: 'YouTube', src: '/placeholder.svg?height=40&width=40' },
    // { name: 'LinkedIn', src: '/placeholder.svg?height=40&width=40' },
    // { name: 'Teams', src: '/placeholder.svg?height=40&width=40' },
    // { name: 'Slack', src: '/placeholder.svg?height=40&width=40' },
    // { name: 'Gmail', src: '/placeholder.svg?height=40&width=40' },
    // Add more logos as needed
  ]
  
  const logoRefs = ref<HTMLElement[]>([])
  const automationRefs = ref<HTMLElement[]>([])
  
  onMounted(() => {
    // Animate automation cards
    gsap.from(automationRefs.value, {
      y: 50,
      opacity: 0,
      duration: 0.8,
      stagger: 0.1,
      ease: 'power2.out'
    })
  
    // Animate floating logos
    logoRefs.value.forEach((logo, index) => {
      gsap.to(logo, {
        x: 'random(-100, 100)',
        y: 'random(-50, 50)',
        rotation: 'random(-15, 15)',
        duration: 'random(2, 4)',
        repeat: -1,
        yoyo: true,
        ease: 'none',
        delay: index * 0.2
      })
    })
  })
  </script>
  
  <style scoped>
  .grid-pattern {
    background-image: linear-gradient(to right, rgba(255,255,255,0.1) 1px, transparent 1px),
      linear-gradient(to bottom, rgba(255,255,255,0.1) 1px, transparent 1px);
    background-size: 20px 20px;
  }
  
  .floating-logos {
    position: relative;
    height: 200px;
    margin: 2rem 0;
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