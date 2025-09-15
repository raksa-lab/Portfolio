<!-- <template>
  <button
    class="btn"
    @click="toggle"
    :aria-pressed="isDark.toString()"
    :title="isDark ? 'Switch to light' : 'Switch to dark'"
  >
    <span v-if="isDark">🌙</span>
    <span v-else>☀️</span>
    <span class="sr-only">Toggle theme</span>
  </button>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const isDark = ref(false)

onMounted(() => {
  isDark.value = document.documentElement.classList.contains('dark')
})

function toggle() {
  isDark.value = !isDark.value
  document.documentElement.classList.toggle('dark', isDark.value)
  localStorage.setItem('theme', isDark.value ? 'dark' : 'light')
}

// Initialize from storage
const stored = typeof window !== 'undefined' ? localStorage.getItem('theme') : null
if (stored) {
  document.documentElement.classList.toggle('dark', stored === 'dark')
}
</script> -->






<template>
  <button
    class="btn"
    @click="handleToggle"
    :aria-pressed="darkMode"
    :aria-label="darkMode ? 'Switch to light mode' : 'Switch to dark mode'"
    type="button"
  >
    <!-- Use proper icons instead of emojis for better accessibility -->
    <svg v-if="darkMode" class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
    </svg>
    <svg v-else class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
    </svg>
    <span class="sr-only">Toggle theme</span>
  </button>
</template>

<script setup lang="ts">
import { ref, onMounted, computed } from 'vue'

const isDarkMode = ref<boolean>(false)

const darkMode = computed(() => isDarkMode.value)

const initializeTheme = () => {
  if (typeof window === 'undefined') return

  const stored = localStorage.getItem('theme')
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches

  const shouldBeDark = stored === 'dark' || (!stored && prefersDark)
  isDarkMode.value = shouldBeDark
  document.documentElement.classList.toggle('dark', shouldBeDark)
}

const handleToggle = () => {
  isDarkMode.value = !isDarkMode.value
  document.documentElement.classList.toggle('dark', isDarkMode.value)
  localStorage.setItem('theme', isDarkMode.value ? 'dark' : 'light')
}

onMounted(() => {
  initializeTheme()
})
</script>
