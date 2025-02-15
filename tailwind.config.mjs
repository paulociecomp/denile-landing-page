/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        green: {
          50: '#F2F7F5',
          100: '#EAF3ED',
          200: '#C2D3CB',
          600: '#90A59C',
          800: '#2F3E37',
          900: '#1A2420',
        },
      },
    },
  },
  plugins: [],
} 