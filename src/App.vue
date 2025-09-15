<!-- <template>
  <div>
    <Header />

    <main class="max-w-6xl mx-auto px-4">
      <section id="home" class="section-pad">
        <Hero />
      </section>

      <section id="about" class="section-pad">
        <h2 class="text-3xl font-bold mb-4">About Me</h2>
        <div class="container-card p-6">
          <About />
        </div>
      </section>

      <section id="experience" class="section-pad">
        <h2 class="text-3xl font-bold mb-4">Experience</h2>
        <div class="container-card p-6">
          <Experience />
        </div>
      </section>

      <section id="projects" class="section-pad">
        <h2 class="text-3xl font-bold mb-4">Projects</h2>
        <div class="container-card p-6">
          <Projects />
        </div>
      </section>

      <section id="skills" class="section-pad">
        <h2 class="text-3xl font-bold mb-4">Skills</h2>
        <div class="container-card p-6">
          <Skills />
        </div>
      </section>

      <section id="contact" class="section-pad">
        <h2 class="text-3xl font-bold mb-6">Contact</h2>
        <div class="container-card p-6">
          <Contact />
        </div>
      </section>

      <footer class="py-12 text-center text-sm text-zinc-500">
        © {{ new Date().getFullYear() }} Nov Raksa — All rights reserved.
      </footer>
    </main>
  </div>
</template>

<script setup>
import Header from './components/Header.vue'
import Hero from './components/Hero.vue'
import About from './components/About.vue'
import Experience from './components/Experience.vue'
import Projects from './components/Projects.vue'
import Skills from './components/Skills.vue'
import Contact from './components/Contact.vue'
</script> -->

<template>
  <div>
    <Header />

    <main class="max-w-6xl mx-auto px-4">
      <!-- Home / Hero Section -->
      <section id="home" class="section-pad" data-aos="fade-up">
        <Hero />
      </section>

      <!-- About Section -->
      <section id="about" class="section-pad" data-aos="fade-up">
        <h2 class="text-3xl font-bold mb-4">About Me</h2>
        <div class="container-card p-6">
          <About />
        </div>
      </section>

      <!-- Experience Section -->
      <section id="experience" class="section-pad" data-aos="fade-up">
        <h2 class="text-3xl font-bold mb-4">Experience</h2>
        <div class="container-card p-6">
          <Experience />
        </div>
      </section>

      <!-- Projects Section -->
      <section id="projects" class="section-pad" data-aos="fade-up">
        <h2 class="text-3xl font-bold mb-4">Projects</h2>
        <div class="container-card p-6">
          <Projects />
        </div>
      </section>

      <!-- Skills Section -->
      <section id="skills" class="section-pad" data-aos="fade-up">
        <h2 class="text-3xl font-bold mb-4">Skills</h2>
        <div class="container-card p-6">
          <Skills />
        </div>
      </section>

      <!-- Contact Section -->
      <section id="contact" class="section-pad" data-aos="fade-up">
        <h2 class="text-3xl font-bold mb-6">Contact</h2>
        <div class="container-card p-6">
          <Contact />
        </div>
      </section>
    </main>

    <!-- Footer (appears when scrolling down) -->
    <!-- Footer -->
    <footer
      class="py-8 text-center text-sm text-zinc-400 border-t border-zinc-200 dark:border-zinc-700"
    >
      © {{ new Date().getFullYear() }}
      <span class="font-semibold">Nov Raksa ❤️</span>
    </footer>
  </div>
</template>

<script setup>
import { onMounted, ref } from "vue";
import AOS from "aos";
import "aos/dist/aos.css";

import Header from "./components/Header.vue";
import Hero from "./components/Hero.vue";
import About from "./components/About.vue";
import Experience from "./components/Experience.vue";
import Projects from "./components/Projects.vue";
import Skills from "./components/Skills.vue";
import Contact from "./components/Contact.vue";


// Initialize AOS
onMounted(() => {
  AOS.init({
    duration: 400, 
    once: false,
    mirror: true,
  });
});

const showFooter = ref(false);
let lastScroll = 0;

window.addEventListener("scroll", () => {
  const currentScroll = window.scrollY;
  showFooter.value = currentScroll > lastScroll; // show when scrolling down
  lastScroll = currentScroll <= 0 ? 0 : currentScroll; // reset if at top
});
</script>

<style>
.section-pad {
  padding: 6rem 0;
}
</style>
