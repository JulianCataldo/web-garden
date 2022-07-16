import { defineConfig } from 'astro/config';
import { astroImageTools } from 'astro-imagetools';
import sitemap from '@astrojs/sitemap';
// import react from '@astrojs/react';

// https://astro.build/config
export default defineConfig({
  server: {
    port: 2424,
    host: false,
  },
  // base: '/astro',

  integrations: [
    sitemap(),
    astroImageTools,
    // react(),
  ],

  vite: {
    // Using `gather-content.sh` for now
    // server: {
    //   fs: {
    //     allow: ['..'],
    //   },
    // },

    /* astro-icon */
    ssr: {
      external: ['svgo'],
    },

    plugins: [],

    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `
            @use "sass:color";
            @use "./src/themes" as *;
          `,
        },
      },
    },
  },

  // markdown: {
  //   remarkPlugins: [ ],
  //   rehypePlugins: [],
  // },

  experimental: { integrations: true },
});

// const breakpoints = {
//   xs: '320px',
//   sm: '576px',
//   md: '768px',
//   lg: '992px',
//   xl: '1200px',
//   xxl: '1840px',
// };

// @use "@julian_cataldo/astro-breakpoints/use-breakpoints.scss" as * with (
//   $breakpoints: (
//     "xs": ${breakpoints.xs},
//     "sm": ${breakpoints.sm},
//     "md": ${breakpoints.md},
//     "lg": ${breakpoints.lg},
//     "xl": ${breakpoints.xl},
//     "xxl": ${breakpoints.xxl},
//   )
// );
// @use "@julian_cataldo/astro-color-mode/use-color-mode.scss" as *;
