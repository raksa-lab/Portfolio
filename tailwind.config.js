/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{vue,js,ts}'],
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: '#22d3ee',
          dark: '#0891b2'
        }
      }
    }
  },
  plugins: [
    require('lightswind/plugin')
  ]
}
