import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  server: { port: 2424, host: false },
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `
            @use "@julian_cataldo/astro-color-mode/use-mixins.scss" as *;
            // @use "@julian_cataldo/astro-breakpoints/use-breakpoints.scss" as *;`,
        },
      },
    },
  },
});
