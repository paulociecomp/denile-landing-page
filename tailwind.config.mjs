/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#4E5D3A',
        },
        secondary: {
          DEFAULT: '#A08C6B',
        },
        accent: {
          DEFAULT: '#E07A5F',
        },
        gold: {
          DEFAULT: '#D4B483',
        },
        bg: {
          light: '#F6F5F2',
          dark: '#223047',
        },
        text: {
          main: '#2D2D2D',
          secondary: '#6B7B45',
        },
        white: '#FFFFFF',
      },
    },
  },
  plugins: [],
} 