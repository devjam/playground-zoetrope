import mdx from '@astrojs/mdx';
import tailwind from '@astrojs/tailwind';
import icon from 'astro-icon';
import { defineConfig } from 'astro/config';

import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  site: 'https://playground.shiftbrain.com/',
  base: '/post/zootropo',
  server: {
    open: '/post/zootropo'
  },
  prefetch: true,
  integrations: [mdx(), tailwind({
    nesting: true
  }), icon(), react()],
  vite: {
    define: {
      'import.meta.vitest': 'undefined'
    }
  }
});