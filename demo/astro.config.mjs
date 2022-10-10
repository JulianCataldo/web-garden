import { defineConfig } from 'astro/config';
import { astroImageTools } from 'astro-imagetools';
// eslint-disable-next-line import/no-extraneous-dependencies
import sitemap from '@astrojs/sitemap';
// import mdx from '@astrojs/mdx';
import mdxMermaidPlugin from '@julian_cataldo/astro-diagram';
import { visit } from 'unist-util-visit';
import remarkGfm from 'remark-gfm';

// import react from '@astrojs/react';

// https://astro.build/config

const breakpoints = {
  // These are default values, can be overriden for SCSS mixin
  xs: '320px',
  sm: '576px',
  md: '768px',
  lg: '992px',
  xl: '1200px',
  xxl: '1840px',
};

const oEmbedsRemarkPlugin = () => async (ast) => {
  visit(ast, 'text', (node) => {
    const matcher = node.value.match(
      /https:\/\/user-images.githubusercontent.com\/(.*).mp4/,
    );
    if (matcher?.length) {
      console.log(node);
      node.type = 'html';
      node.value = `<video src="${node.value}" controls="controls" autoplay="autoplay" muted="muted"></video>`;
    }
  });
};

export default defineConfig({
  site: 'https://code.juliancataldo.com',

  server: {
    port: 2425,
    host: false,
  },
  // base: '/astro',

  integrations: [
    sitemap(),
    astroImageTools,
    // mdx({ remarkPlugins: { extends: [mdxMermaidPlugin] } }),

    // react(),
  ],

  markdown: {
    remarkPlugins: [oEmbedsRemarkPlugin, remarkGfm, mdxMermaidPlugin],
  },

  vite: {
    // FIXME: Using `gather-content.sh` for now as this Vite option doesn't work
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

            @use "@julian_cataldo/astro-breakpoints/use-breakpoints.scss" as * with (
              $breakpoints: (
                "xs": ${breakpoints.xs},
                "sm": ${breakpoints.sm},
                "md": ${breakpoints.md},
                "lg": ${breakpoints.lg},
                "xl": ${breakpoints.xl},
                "xxl": ${breakpoints.xxl},
              )
            );

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
