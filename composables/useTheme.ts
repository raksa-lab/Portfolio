"use client"

import { ref, onMounted, readonly } from "vue"

export type Theme = "light" | "dark"

const isDark = ref<boolean>(false)

export function useTheme() {
  const initializeTheme = () => {
    if (typeof window === "undefined") return

    const stored = localStorage.getItem("theme") as Theme | null
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches

    const shouldBeDark = stored === "dark" || (!stored && prefersDark)
    isDark.value = shouldBeDark
    document.documentElement.classList.toggle("dark", shouldBeDark)
  }

  const toggleTheme = () => {
    isDark.value = !isDark.value
    document.documentElement.classList.toggle("dark", isDark.value)
    localStorage.setItem("theme", isDark.value ? "dark" : "light")
  }

  if (typeof window !== "undefined") {
    onMounted(() => {
      initializeTheme()
    })
  }

  return {
    isDark: readonly(isDark),
    toggleTheme,
  }
}
