<template>
  <section
    aria-labelledby="bring-title"
    class="mx-auto max-w-5xl px-4 py-8 sm:px-6 sm:py-12 md:py-14"
  >
    <h2 id="bring-title" class="sr-only">What I Bring</h2>

    <!-- Mobile-optimized intro card -->
    <div
      class="mb-8 rounded-xl border px-5 py-6 shadow-sm sm:mb-10 sm:px-7 sm:py-7 md:px-10 md:py-8 bg-white dark:bg-[#1f1f23] border-gray-200 dark:border-[#2a2a2e]"
    >
      <p class="text-base leading-7 sm:text-[1.05rem] sm:leading-8 text-gray-700 dark:text-slate-100">
        I am a
        <strong> Technology Engineering student</strong>
        who considers myself a responsible and organized individual. While I am
        looking forward to gaining my first professional work experience, I have
        already been actively involved in volunteer activities which have helped
        me build valuable teamwork and communication skills but Now I also Find
        Internship to improve my skills too.
      </p>
    </div>

    <!-- Mobile-optimized heading -->
    <h3
      class="mb-6 text-center text-2xl font-bold sm:text-3xl text-gray-900 dark:text-slate-100"
    >
      What I Bring
    </h3>

    <!-- Enhanced mobile-first grid -->
    <div class="grid gap-4 sm:gap-6 md:grid-cols-2">
      <!-- Card 1: ISTAD courses -->
      <article
        tabindex="0"
        role="group"
        class="flex items-start gap-3 rounded-xl border px-4 py-4 shadow-sm transition-all hover:shadow-md focus-visible:outline-none focus-visible:ring-2 sm:gap-4 sm:px-6 sm:py-5 bg-white dark:bg-[#1f1f23] border-gray-200 dark:border-[#2a2a2e] focus-visible:ring-blue-500 dark:focus-visible:ring-[#3a3a40]"
      >
        <div
          class="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-blue-50 dark:bg-[#2a2a2e] ring-1 ring-blue-200 dark:ring-[#3a3a40] shadow-inner sm:h-11 sm:w-11"
          aria-hidden="true"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-5 h-5 sm:w-6 sm:h-6 text-blue-600 dark:text-blue-400"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5"
            />
          </svg>
        </div>
        <div class="min-w-0 flex-1">
          <div class="font-semibold text-sm sm:text-base text-gray-900 dark:text-slate-100">
            ISTAD courses:
          </div>
          <p class="mt-1 text-sm leading-5 sm:text-sm sm:leading-6 text-gray-600 dark:text-zinc-300">
            Web fundamentals, GitHub, Java, React.js, Tailwind and C++.
          </p>
        </div>
      </article>

      <!-- Card 2: Volunteer experience -->
      <article
        tabindex="0"
        role="group"
        class="flex items-start gap-3 rounded-xl border px-4 py-4 shadow-sm transition-all hover:shadow-md focus-visible:outline-none focus-visible:ring-2 sm:gap-4 sm:px-6 sm:py-5 bg-white dark:bg-[#1f1f23] border-gray-200 dark:border-[#2a2a2e] focus-visible:ring-blue-500 dark:focus-visible:ring-[#3a3a40]"
      >
        <div
          class="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-red-50 dark:bg-[#2a2a2e] ring-1 ring-red-200 dark:ring-[#3a3a40] shadow-inner sm:h-11 sm:w-11"
          aria-hidden="true"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-5 h-5 sm:w-6 sm:h-6 text-red-600 dark:text-red-400"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
            />
          </svg>
        </div>
        <div class="min-w-0 flex-1">
          <div class="font-semibold text-sm sm:text-base text-gray-900 dark:text-slate-100">
            Volunteer experience:
          </div>
          <p class="mt-1 text-sm leading-5 sm:text-sm sm:leading-6 text-gray-600 dark:text-zinc-300">
            Strengthened teamwork, leadership, and communication across diverse groups.
          </p>
        </div>
      </article>

      <!-- Card 3: Deployment -->
      <article
        tabindex="0"
        role="group"
        class="flex items-start gap-3 rounded-xl border px-4 py-4 shadow-sm transition-all hover:shadow-md focus-visible:outline-none focus-visible:ring-2 sm:gap-4 sm:px-6 sm:py-5 bg-white dark:bg-[#1f1f23] border-gray-200 dark:border-[#2a2a2e] focus-visible:ring-blue-500 dark:focus-visible:ring-[#3a3a40]"
      >
        <div
          class="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-green-50 dark:bg-[#2a2a2e] ring-1 ring-green-200 dark:ring-[#3a3a40] shadow-inner sm:h-11 sm:w-11"
          aria-hidden="true"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-5 h-5 sm:w-6 sm:h-6 text-green-600 dark:text-green-400"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M12 16.5V9.75m0 0l3 3m-3-3l-3 3M6.75 19.5a4.5 4.5 0 01-1.41-8.775 5.25 5.25 0 0110.233-2.33 3 3 0 013.758 3.848A3.752 3.752 0 0118 19.5H6.75z"
            />
          </svg>
        </div>
        <div class="min-w-0 flex-1">
          <div class="font-semibold text-sm sm:text-base text-gray-900 dark:text-slate-100">
            Deployment:
          </div>
          <p class="mt-1 text-sm leading-5 sm:text-sm sm:leading-6 text-gray-600 dark:text-slate-300">
            GitHub Pages.
          </p>
        </div>
      </article>

      <!-- Card 4: Performance optimization -->
      <article
        tabindex="0"
        role="group"
        class="flex items-start gap-3 rounded-xl border px-4 py-4 shadow-sm transition-all hover:shadow-md focus-visible:outline-none focus-visible:ring-2 sm:gap-4 sm:px-6 sm:py-5 bg-white dark:bg-[#1f1f23] border-gray-200 dark:border-[#2a2a2e] focus-visible:ring-blue-500 dark:focus-visible:ring-[#3a3a40]"
      >
        <div
          class="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-yellow-50 dark:bg-[#2a2a2e] ring-1 ring-yellow-200 dark:ring-[#3a3a40] shadow-inner sm:h-11 sm:w-11"
          aria-hidden="true"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-5 h-5 sm:w-6 sm:h-6 text-yellow-600 dark:text-yellow-400"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z"
            />
          </svg>
        </div>
        <div class="min-w-0 flex-1">
          <div class="font-semibold text-sm sm:text-base text-gray-900 dark:text-slate-100">
            Performance optimization
          </div>
          <p class="mt-1 text-sm leading-5 sm:text-sm sm:leading-6 text-gray-600 dark:text-zinc-300">
            <span class="font-semibold">Projects:</span>
            Reservation Management System, iShop, Solar‑Tracking System, and more.
          </p>
        </div>
      </article>
    </div>
  </section>
</template>

<script setup lang="ts">
// Presentational component only
</script>

<style scoped>
@media (prefers-reduced-motion: no-preference) {
  article {
    transition: box-shadow 220ms ease, transform 220ms ease;
  }
  article:hover {
    transform: translateY(-1px);
  }
}

/* Enhanced mobile touch targets */
@media (max-width: 640px) {
  article {
    min-height: 80px; /* Ensure adequate touch target size */
  }
}

/* Prevent layout shift on very small screens */
@media (max-width: 320px) {
  .grid {
    gap: 12px;
  }
  
  article {
    padding: 12px 16px;
  }
}
</style>