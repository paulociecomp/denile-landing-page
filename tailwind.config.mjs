/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#5E6B4A',
          dark: '#4A5540',
        },
        secondary: {
          DEFAULT: '#D8C7A3',
        },
        accent: {
          DEFAULT: '#C9826A',
        },
        gold: {
          DEFAULT: '#D8C7A3',
        },
        bg: {
          light: '#F7F4EE',
          dark: '#223047',
        },
        text: {
          main: '#4F4A45',
          secondary: '#5E6B4A',
        },
        white: '#FFFFFF',
      },
    },
  },
  plugins: [],
} 