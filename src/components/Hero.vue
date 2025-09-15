<template>
  <div class="grid md:grid-cols-2 gap-8 items-center md:flex-row-reverse">
    <!-- Right Image Section -->
    <div
      class="container-card p-6 w-80 h-100 rounded-xl overflow-hidden bg-white dark:bg-gray-900 shadow-md dark:shadow-lg transition-colors duration-500 animate-fade-in delay-400"
    >
      <img
        src="../assets/Nov Raksa.png"
        alt="Professional portrait of Nov Raksa"
        class="w-full h-full object-cover rounded-xl"
        loading="eager"
      />
    </div>

    <!-- Left Text Section -->
    <div class="space-y-4">
      <p
        class="text-xl uppercase tracking-wide text-zinc-500"
        aria-label="Introduction"
      >
        Hello, I'm
      </p>

      <h1
        class="text-5xl sm:text-5xl font-extrabold leading-tight animate-fade-in"
      >
        Nov Raksa
      </h1>

      <p
        class="text-lg text-zinc-600 dark:text-zinc-300 animate-fade-in delay-200"
      >
        I am an Information Technology Engineering student at the Royal
        University of Phnom Penh, passionate about building engaging and
        accessible user interfaces with React and modern web technologies.
      </p>

      <div class="flex gap-3 pt-2" role="group" aria-label="Primary actions">
        <a
          href="#projects"
          class="btn focus:outline-none focus:ring-2 focus:ring-brand"
        >
          View Projects
        </a>
        <a
          href="#contact"
          class="btn focus:outline-none focus:ring-2 focus:ring-brand"
        >
          Contact Me
        </a>
        <!-- <button
          class="btn focus:outline-none focus:ring-2 focus:ring-brand"
          @click="showCV = true"
          aria-label="Open CV"
        >
          Here's CV
        </button> -->
      </div>
    </div>

    <!-- CV Modal -->
    <Transition name="modal">
      <div
        v-if="showCV"
        class="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50"
        @click.self="showCV = false"
      >
        <div
          class="bg-white p-6 rounded-lg shadow-lg max-w-5xl w-full h-3/4 flex flex-col modal-content"
        >
          <div class="flex justify-end items-center mb-4">
            <button
              @click="showCV = false"
              class="text-zinc-500 hover:text-zinc-800 text-3xl"
            >
              &times;
            </button>
          </div>
          <iframe :src="cvFile" class="flex-1 w-full" frameborder="0"></iframe>
        </div>
      </div>
    </Transition>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import cvFile from "../public/Nov_Raksa_CV.pdf"; // Corrected import path

const showCV = ref(false);
</script>

<style>
/* Fade-in animation for Hero text and image */
@keyframes fade-in {
  from {
    opacity: 0;
    transform: translateY(-20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
.animate-fade-in {
  animation: fade-in 1s ease-out forwards;
}
.animate-fade-in.delay-200 {
  animation-delay: 0.2s;
}
.animate-fade-in.delay-400 {
  animation-delay: 0.4s;
}

/* Modal fade + scale animation */
.modal-enter-active,
.modal-leave-active {
  transition: opacity 0.3s ease, transform 0.3s ease;
}
.modal-enter-from,
.modal-leave-to {
  opacity: 0;
  transform: scale(0.95);
}
.modal-enter-to,
.modal-leave-from {
  opacity: 1;
  transform: scale(1);
}
</style>
