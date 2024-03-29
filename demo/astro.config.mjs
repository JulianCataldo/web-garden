import { defineConfig } from 'astro/config';
import { astroImageTools } from 'astro-imagetools';
// import { astroOGImage } from './og-image-integration';
// eslint-disable-next-line import/no-extraneous-dependencies
import sitemap from '@astrojs/sitemap';
// import mdx from '@astrojs/mdx';
import remarkMermaid from 'astro-diagram/remark-mermaid';
import { visit } from 'unist-util-visit';
import remarkGfm from 'remark-gfm';
import robotsTxt from 'astro-robots-txt';

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
  visit(ast, 'link', (node) => {
    const matcher = node.children?.[0]?.value?.match(
      /https:\/\/user-images.githubusercontent.com\/(.*).mp4/,
    );
    if (matcher?.length) {
      node.type = 'html';
      const value = node.children[0].value;
      node.value = `<video src="${value}" controls="controls" autoplay="autoplay" muted="muted"></video>`;
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
    // astroOGImage({
    //   config: {
    //     path: '/content/packages/components', // change this value to the folder where your posts are
    //     // NOTE: index.md file will not get proccesed, so please avoid it
    //   },
    // }),
    robotsTxt(),
  ],

  markdown: {
    // TODO: Implement
    // extendDefaultPlugins: true,
    remarkPlugins: [
      //
      remarkGfm,

      remarkMermaid,

      oEmbedsRemarkPlugin,
    ],
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
          additionalData(source, filePath) {
            // Exclude file, prevents module loop
            if (filePath.includes('use-')) return source;
            if (filePath.includes('src/themes/default/tokens')) return source;
            if (filePath.includes('src/themes/selector')) return source;
            return `
            @use "sass:color";

            @use "astro-breakpoints/use-breakpoints.scss" as * with (
              $breakpoints: (
                "xs": ${breakpoints.xs},
                "sm": ${breakpoints.sm},
                "md": ${breakpoints.md},
                "lg": ${breakpoints.lg},
                "xl": ${breakpoints.xl},
                "xxl": ${breakpoints.xxl},
              )
            );
            
            @use 'astro-scroll-observer/use-scroll-observer.scss' as *;

            @use './src/themes/default/tokens' as *;
            @use './src/themes/selector' as *;

            ${source}
          `;
          },
        },
      },
    },
  },
});
