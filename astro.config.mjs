import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import node from '@astrojs/node';

export default defineConfig({
  // Enable server-side rendering for authentication support
  output: 'server',
  adapter: node({
    mode: 'standalone',
  }),

  // Integrate Tailwind CSS
  integrations: [
    tailwind(),
  ],

  // Configure TypeScript
  vite: {
    ssr: {
      external: ['node-fetch'],
    },
  },
});
