import { defineConfig } from 'astro-imagetools/config';

export default defineConfig({
  // placeholder: 'tracedSVG',
  format: ['png', 'webp', 'jpg'],
  // fallbackFormat: 'png',
  // includeSourceFormat: false,
  // formatOptions: {
  //   jpg: {
  //     quality: 80,
  //   },
  //   png: {
  //     quality: 80,
  //   },
  //   webp: {
  //     quality: 50,
  //   },
  //   tracedSVG: {
  //     options: {
  //       background: '#fff',
  //       color: '#000',
  //       turnPolicy: 'black',
  //       turdSize: 1,
  //       alphaMax: 1,
  //       optCurve: true,
  //       threshold: 100,
  //       blackOnWhite: false,
  //     },
  //   },
  // },
});
