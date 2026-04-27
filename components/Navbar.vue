<template>
  <nav
    ref="navRef"
    :class="[
      'fixed top-0 w-full z-50 transition-all duration-500',
      scrolled ? 'glass-strong py-3' : 'bg-transparent py-5',
    ]"
  >
    <div class="max-w-7xl mx-auto px-4 flex items-center justify-between">
      <NuxtLink to="/" class="flex items-center gap-2.5 group">
        <div class="relative w-8 h-8 flex items-center justify-center">
          <div class="absolute inset-0 bg-gradient-to-br from-cyan-glow to-violet-glow rounded-lg opacity-20 group-hover:opacity-40 transition-opacity" />
          <div class="absolute inset-0 bg-gradient-to-br from-cyan-glow to-violet-glow rounded-lg blur-md opacity-0 group-hover:opacity-30 transition-opacity" />
          <NuxtImg
            height="20"
            width="20"
            src="/assets/logos/raautologo.webp"
            class="relative z-10 rounded"
            loading="eager"
            decoding="async"
          />
        </div>
        <span class="font-bold text-base tracking-tight text-white group-hover:text-cyan-glow transition-colors">
          Remy Automates
        </span>
      </NuxtLink>

      <div class="hidden md:flex items-center gap-1">
        <NuxtLink
          v-for="item in navItems"
          :key="item.to"
          :to="item.to"
          class="px-4 py-2 text-sm font-medium text-slate-400 hover:text-white rounded-full hover:bg-white/[0.04] transition-all duration-300"
        >
          {{ item.label }}
        </NuxtLink>
      </div>

      <div class="hidden md:flex items-center gap-3">
        <NuxtLink
          to="/form"
          class="btn-primary text-sm px-5 py-2.5"
        >
          <span class="w-1.5 h-1.5 bg-void rounded-full animate-pulse" />
          Book a Call
        </NuxtLink>
      </div>

      <button
        @click="toggleMobileMenu"
        aria-label="Toggle navigation menu"
        aria-expanded="false"
        class="md:hidden relative w-10 h-10 flex items-center justify-center rounded-xl bg-white/[0.04] border border-white/[0.06]"
      >
        <div class="flex flex-col gap-1.5 w-5">
          <span
            :class="[
              'block h-px bg-slate-300 transition-all duration-300',
              isMobileMenuOpen ? 'rotate-45 translate-y-[3.5px]' : '',
            ]"
          />
          <span
            :class="[
              'block h-px bg-slate-300 transition-all duration-300',
              isMobileMenuOpen ? 'opacity-0' : '',
            ]"
          />
          <span
            :class="[
              'block h-px bg-slate-300 transition-all duration-300',
              isMobileMenuOpen ? '-rotate-45 -translate-y-[3.5px]' : '',
            ]"
          />
        </div>
      </button>
    </div>

    <!-- Mobile Menu -->
    <transition
      enter-active-class="transition ease-out duration-200"
      enter-from-class="opacity-0 -translate-y-2"
      enter-to-class="opacity-100 translate-y-0"
      leave-active-class="transition ease-in duration-150"
      leave-from-class="opacity-100 translate-y-0"
      leave-to-class="opacity-0 -translate-y-2"
    >
      <div
        v-if="isMobileMenuOpen"
        class="md:hidden absolute top-full left-0 right-0 mx-4 mt-2 glass-strong rounded-2xl border border-white/[0.08] overflow-hidden"
      >
        <div class="p-2 space-y-1">
          <NuxtLink
            v-for="item in navItems"
            :key="item.to"
            :to="item.to"
            @click="isMobileMenuOpen = false"
            class="block px-4 py-3 rounded-xl text-sm font-medium text-slate-300 hover:text-white hover:bg-white/[0.04] transition-all"
          >
            {{ item.label }}
          </NuxtLink>
          <div class="pt-2 border-t border-white/[0.06]">
            <NuxtLink
              to="/form"
              @click="isMobileMenuOpen = false"
              class="block px-4 py-3 rounded-xl text-sm font-semibold text-void bg-gradient-to-r from-cyan-glow to-cyan-500/80 text-center"
            >
              Book a Call
            </NuxtLink>
          </div>
        </div>
      </div>
    </transition>
  </nav>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from "vue";

const isMobileMenuOpen = ref(false);
const scrolled = ref(false);
const navRef = ref<HTMLElement | null>(null);

const navItems = [
  { label: "Solutions", to: "#solutions" },
  { label: "Automations", to: "#popular-automations" },
  { label: "Contact", to: "#contact" },
];

const toggleMobileMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value;
};

const closeMobileMenu = () => {
  isMobileMenuOpen.value = false;
};

const handleScroll = () => {
  scrolled.value = window.scrollY > 20;
};

const handleClickOutside = (event: MouseEvent) => {
  if (navRef.value && !navRef.value.contains(event.target as Node)) {
    isMobileMenuOpen.value = false;
  }
};

onMounted(() => {
  window.addEventListener("scroll", handleScroll);
  document.addEventListener("click", handleClickOutside);
  handleScroll();
});

onUnmounted(() => {
  window.removeEventListener("scroll", handleScroll);
  document.removeEventListener("click", handleClickOutside);
});
</script>
