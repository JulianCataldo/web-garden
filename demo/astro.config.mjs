import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  server: { port: 2424, host: false },
});
