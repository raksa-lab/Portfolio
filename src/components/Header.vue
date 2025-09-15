<!-- <template>
  <header class="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-white/60 dark:supports-[backdrop-filter]:bg-zinc-900/60 border-b border-zinc-200/60 dark:border-zinc-800">
    <div class="max-w-6xl mx-auto px-4 h-20 flex items-center justify-between">
      <a href="#home" class="font-bold text-lg flex items-center gap-2">
        <span class="inline-block w-2.5 h-2.5 rounded-full bg-brand"></span>
        Nov Raksa
      </a>

      <nav class="hidden md:flex items-center gap-6 text-sm">
        <a href="#about" class="hover:text-brand">About</a>
        <a href="#experience" class="hover:text-brand">Experience</a>
        <a href="#projects" class="hover:text-brand">Projects</a>
        <a href="#skills" class="hover:text-brand">Skills</a>
        <a href="#contact" class="hover:text-brand">Contact</a>
      </nav>

      <div class="flex items-center gap-2">
        <ThemeToggle />
        <a href="#contact" class="btn">Hire me</a>
      </div>
    </div>
  </header>
</template>

<script setup>
import ThemeToggle from './ThemeToggle.vue'
</script> -->





<template>
  <header class="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-white/60 dark:supports-[backdrop-filter]:bg-zinc-900/60 border-b border-zinc-200/60 dark:border-zinc-800">
    <div class="max-w-6xl mx-auto px-4 h-20 flex items-center justify-between">
      <!-- Improved accessibility and navigation -->
      <a 
        href="#home" 
        class="font-bold text-lg flex items-center gap-2 focus:outline-none focus:ring-2 focus:ring-brand rounded-lg p-1"
        aria-label="Nov Raksa - Go to top of page"
      >
        <span class="inline-block w-2.5 h-2.5 rounded-full bg-brand" aria-hidden="true"></span>
       
        <div class="hidden sm:inline-block font-sans ">
          Nov Raksa
        </div>
      </a>

      <nav class="hidden md:flex items-center gap-6 text-sm" role="navigation" aria-label="Main navigation">
        <a 
          v-for="link in navigationLinks" 
          :key="link.href"
          :href="link.href" 
          class="hover:text-brand transition-colors focus:outline-none focus:ring-2 focus:ring-brand rounded px-2 py-1"
          :aria-label="`Navigate to ${link.label} section`"
        >
          {{ link.label }}
        </a>
      </nav>

      <div class="flex items-center gap-2">
        <ThemeToggle />
        <!-- <a 
          href="#contact" 
          class="btn focus:outline-none focus:ring-2 focus:ring-brand"
          aria-label="Go to contact section to hire me"
        >
          Hire me
        </a> -->
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
import ThemeToggle from './ThemeToggle.vue'

interface NavigationLink {
  href: string
  label: string
}

const navigationLinks: readonly NavigationLink[] = Object.freeze([
  { href: '#about', label: 'About' },
  { href: '#experience', label: 'Experience' },
  { href: '#projects', label: 'Projects' },
  { href: '#skills', label: 'Skills' },
  { href: '#contact', label: 'Contact' }
])
</script>
