// @ts-check
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  site: 'https://paulociecomp.github.io',
  base: '/denile-landing-page',
  integrations: [tailwind()]  
});
