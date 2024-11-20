<template>
  <section id="solutions" class="py-16 px-4 overflow-hidden">
    <div class="max-w-7xl mx-auto">
      <!-- Header -->
      <div class="text-center mb-16">
        <div
          ref="badge"
          class="inline-flex items-center rounded-full bg-[#FF4400] px-6 py-2 text-white text-base font-medium mb-8"
        >
          We're Remy Automates
        </div>

        <h2
          ref="heading"
          class="text-3xl md:text-5xl lg:text-4xl font-bold mb-6"
        >
          We bring your company into the AI age.
        </h2>

        <p
          ref="subheading"
          class="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto"
        >
          We're in the business of boosting human productivity,
          <em class="font-semibold not-italic">not</em> replacing it.
        </p>
      </div>

      <!-- Features Grid -->
      <div
        ref="grid"
        class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
      >
        <!-- Remove manual processes -->
        <div
          class="bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow"
        >
          <!-- <img
            src="/images/relax-illustration.svg"
            alt="Person relaxing with laptop"
            class="h-32 w-auto mb-6"
          /> -->
          <h3 class="text-2xl font-bold mb-4">Remove manual processes</h3>
          <p class="text-gray-600">
            Cut down on busy work, allowing your team to focus on the tasks that
            fuel growth.
          </p>
        </div>

        <!-- Integrate your apps -->
        <div
          class="bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow"
        >
          <!-- <img
            src="/images/apps-illustration.svg"
            alt="Connected app icons"
            class="h-32 w-auto mb-6"
          /> -->
          <h3 class="text-2xl font-bold mb-4">Integrate your apps</h3>
          <p class="text-gray-600">
            Connect your tools to avoid double entry, reduce errors, and keep
            everything in sync automatically.
          </p>
        </div>

        <!-- Agentic AI -->
        <div
          class="bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow"
        >
          <!-- <img
            src="/images/ai-illustration.svg"
            alt="AI automation illustration"
            class="h-32 w-auto mb-6"
          /> -->
          <h3 class="text-2xl font-bold mb-4">Agentic AI</h3>
          <p class="text-gray-600">
            AI agents are smart, automated systems that can perform tasks on
            their own, even while you sleep.
          </p>
        </div>

        <!-- Workshops & Training -->
        <div
          class="bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow"
        >
          <!-- <img src="/images/brain-illustration.svg" 
          alt="Brain lightbulb illustration" class="h-32 w-auto mb-6" /> -->
          <h3 class="text-2xl font-bold mb-4">Workshops & Training</h3>
          <p class="text-gray-600">
            Upgrade and empower your team to work smarter with practical
            training and workshops.
          </p>
        </div>

        <!-- Consulting -->
        <div
          class="bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow"
        >
          <!-- <img src="/images/consulting-illustration.svg"  
          alt="Automation consulting illustration" class="h-32 w-auto mb-6" /> -->
          <h3 class="text-2xl font-bold mb-4">Consulting (Automation & AI)</h3>
          <p class="text-gray-600">
            Get expert advice on how to best use automation & AI to streamline
            your specific business needs.
          </p>
        </div>

        <!-- No-code to custom code -->
        <div
          class="bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow"
        >
          <!-- <img src="/images/code-illustration.svg" 
          alt="Code blocks illustration" class="h-32 w-auto mb-6" /> -->
          <h3 class="text-2xl font-bold mb-4">No-code to custom code</h3>
          <p class="text-gray-600">
            Whether you need simple tools or custom solutions, we tailor our
            approach to fit your specific needs.
          </p>
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

// Refs for animation targets
const badge = ref<HTMLElement | null>(null);
const heading = ref<HTMLElement | null>(null);
const subheading = ref<HTMLElement | null>(null);
const grid = ref<HTMLElement | null>(null);

onMounted(() => {
  // Animate badge
  gsap.from(badge.value, {
    opacity: 0,
    y: -20,
    duration: 0.6,
    ease: "power2.out",
  });

  // Animate heading
  gsap.from(heading.value, {
    opacity: 0,
    y: 30,
    duration: 0.8,
    delay: 0.2,
    ease: "power2.out",
  });

  // Animate subheading
  gsap.from(subheading.value, {
    opacity: 0,
    y: 30,
    duration: 0.8,
    delay: 0.4,
    ease: "power2.out",
  });

  // Animate grid items
  if (grid.value) {
    const gridItems = grid.value.children;
    gsap.from(gridItems, {
      opacity: 0,
      y: 50,
      duration: 0.8,
      stagger: 0.1,
      ease: "power2.out",
      scrollTrigger: {
        trigger: grid.value,
        start: "top bottom-=100",
        toggleActions: "play none none reverse",
      },
    });
  }
});
</script>

<style scoped>
.rounded-2xl {
  border-radius: 1rem;
}

@media (max-width: 380px) {
  .text-4xl {
    font-size: 2rem;
  }

  .p-8 {
    padding: 1.5rem;
  }
}
</style>
