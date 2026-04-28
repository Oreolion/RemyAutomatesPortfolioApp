<script setup lang="ts">
import Navbar from "~/components/Navbar.vue";
</script>

<template>
  <div class="bg-void min-h-screen">
    <Navbar />
    <main>
      <slot />
    </main>

    <!-- Footer -->
    <footer class="relative border-t border-white/[0.06] bg-void-light">
      <!-- Top gradient line -->
      <div class="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-cyan-glow/20 to-transparent" />

      <div class="max-w-7xl mx-auto px-4 py-16 md:py-20">
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <!-- Brand -->
          <div class="lg:col-span-2">
            <NuxtLink to="/" class="flex items-center gap-2.5 mb-6 group">
              <div class="relative w-8 h-8 flex items-center justify-center">
                <div class="absolute inset-0 bg-gradient-to-br from-cyan-glow to-violet-glow rounded-lg opacity-20 group-hover:opacity-40 transition-opacity" />
                <NuxtImg height="20" width="20" src="/assets/logos/raautologo.webp" class="relative z-10 rounded" loading="eager" decoding="async" />
              </div>
              <span class="font-bold text-lg text-white">Remy Automates</span>
            </NuxtLink>
            <p class="text-slate-400 max-w-sm leading-relaxed mb-6">
              We help teams save 10+ hours every week by automating repetitive tasks with AI-powered workflows and intelligent integrations.
            </p>
            <div class="flex items-center gap-4">
              <a
                href="mailto:ra@remyautomates.com"
                rel="noopener"
                class="w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-white/[0.04] border border-white/[0.06] flex items-center justify-center hover:border-cyan-glow/30 hover:bg-cyan-glow/5 transition-all group"
              >
                <NuxtImg height="26" width="26" src="/assets/logos/gmail-icon.svg" class="w-6 h-6 sm:w-7 sm:h-7 opacity-60 group-hover:opacity-100 transition-opacity" loading="lazy" decoding="async" />
              </a>
              <a
                href="https://linkedin.com/company/remyautomates"
                target="_blank"
                rel="noopener noreferrer"
                class="w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-white/[0.04] border border-white/[0.06] flex items-center justify-center hover:border-cyan-glow/30 hover:bg-cyan-glow/5 transition-all group"
              >
                <NuxtImg height="26" width="26" src="/assets/logos/linkedin-app-icon.svg" class="w-6 h-6 sm:w-7 sm:h-7 opacity-60 group-hover:opacity-100 transition-opacity" loading="lazy" decoding="async" />
              </a>
              <a
                href="https://twitter.com/remyautomates"
                target="_blank"
                rel="noopener noreferrer"
                class="w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-white/[0.04] border border-white/[0.06] flex items-center justify-center hover:border-cyan-glow/30 hover:bg-cyan-glow/5 transition-all group"
              >
                <NuxtImg height="26" width="26" src="/assets/logos/follow-us-on-x-icon.svg" class="w-6 h-6 sm:w-7 sm:h-7 opacity-60 group-hover:opacity-100 transition-opacity" loading="lazy" decoding="async" />
              </a>
            </div>
          </div>

          <!-- Links -->
          <div>
            <h4 class="text-sm font-semibold text-white uppercase tracking-wider mb-6">Navigation</h4>
            <ul class="space-y-3">
              <li>
                <NuxtLink to="/" class="text-slate-400 hover:text-cyan-glow transition-colors text-sm">Home</NuxtLink>
              </li>
              <li>
                <NuxtLink to="/#solutions" class="text-slate-400 hover:text-cyan-glow transition-colors text-sm">Solutions</NuxtLink>
              </li>
              <li>
                <NuxtLink to="/#popular-automations" class="text-slate-400 hover:text-cyan-glow transition-colors text-sm">Automations</NuxtLink>
              </li>
              <li>
                <NuxtLink to="/form" class="text-slate-400 hover:text-cyan-glow transition-colors text-sm">Book a Call</NuxtLink>
              </li>
            </ul>
          </div>

          <!-- Contact -->
          <div>
            <h4 class="text-sm font-semibold text-white uppercase tracking-wider mb-6">Contact</h4>
            <ul class="space-y-3">
              <li>
                <a href="mailto:ra@remyautomates.com" rel="noopener" class="text-slate-400 hover:text-cyan-glow transition-colors text-sm">ra@remyautomates.com</a>
              </li>
              <li>
                <NuxtLink to="/form" class="btn-primary text-xs px-4 py-2.5 mt-2 inline-flex">
                  <span class="w-1.5 h-1.5 bg-void rounded-full" />
                  Book a Call
                </NuxtLink>
              </li>
            </ul>
          </div>
        </div>

        <!-- Bottom bar -->
        <div class="pt-8 border-t border-white/[0.06] flex flex-col md:flex-row items-center justify-between gap-4">
          <p class="text-xs text-slate-600 font-mono">
            © 2026 Remy Automates. All rights reserved.
          </p>
          <p class="text-xs text-slate-600 font-mono">
            Transforming workflows worldwide.
          </p>
        </div>
      </div>
    </footer>
  </div>
</template>
