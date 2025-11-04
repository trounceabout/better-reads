import { defineConfig } from 'astro/config';
import node from '@astrojs/node';

export default defineConfig({
  // Enable server-side rendering for authentication support
  output: 'server',
  adapter: node({
    mode: 'standalone',
  }),

  // Tailwind CSS is now configured via Vite plugin in Astro 5.2+
  // Configure TypeScript
  vite: {
    ssr: {
      external: ['node-fetch'],
    },
  },
});
