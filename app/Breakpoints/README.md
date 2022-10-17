# 🚀  Astro — Breakpoints handlers with (S)CSS / DOM / JS

[![NPM](https://img.shields.io/npm/v/@julian_cataldo/astro-breakpoints)](https://www.npmjs.com/package/@julian_cataldo/astro-breakpoints)
![Downloads](https://img.shields.io/npm/dt/@julian_cataldo/astro-breakpoints.svg)
[![ISC License](https://img.shields.io/npm/l/@julian_cataldo/astro-breakpoints)](https://github.com/JulianCataldo/web-garden/blob/develop/LICENSE)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](https://makeapullrequest.com)  
[![Astro](https://img.shields.io/badge/Astro-333333.svg?logo=astro)](https://astro.build)
[![TypeScript](https://img.shields.io/badge/TypeScript-333333.svg?logo=typescript)](http://www.typescriptlang.org/)
[![Prettier](https://img.shields.io/badge/Prettier-333333.svg?logo=prettier)](https://prettier.io)
[![EditorConfig](https://img.shields.io/badge/EditorConfig-333333.svg?logo=editorconfig)](https://editorconfig.org)
[![ESLint](https://img.shields.io/badge/ESLint-3A33D1?logo=eslint)](https://eslint.org)

Provides cross languages breakpoints handlers for your app.  
SCSS mixin, JS hook and a DOM data attribute, all share the same responsive scale you choose to feed in.

## 📦  Installation

```sh
pnpm i astro-breakpoints
```

## 🛠  Usage

### With JavaScript

> **Warning**  
> 🚧  Documentation work is in progress

### With SCSS

SCSS mixins registration in `astro.config.mjs`:

```js
// You can redefine breakpoints options.
// Also, putting in an external file,
// so you can share it with your JS environments.
const breakpoints = {
  // These are default values
  xs: '320px',
  sm: '576px',
  md: '768px',
  lg: '992px',
  xl: '1200px',
  xxl: '1840px',
};

export default defineConfig({
  // ...
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `
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
          `,
        },
      },
    },
  },
});
```

Then, use it like this in your stylesheets:

```scss
.hippopotame {
  padding: 2vw;

  @include breakpoint(md) {
    padding: 10vw;
  }

  @include breakpoint(xxl) {
    padding: calc(10vw + 3rem);
  }
}
```

## To do

- [ ] Full documentation, for JS hook in particular
- [ ] Live demo

<div class="git-footer">

---

## [LIVE DEMO  🎭  DOCUMENTATION WEBSITE ⎋](https://code.juliancataldo.com/)

[![Live demo website](https://code.juliancataldo.com/poster.png)](https://code.juliancataldo.com)

**_[`code.juliancataldo.com`](https://code.juliancataldo.com/)_**

---

🔗  [JulianCataldo.com](https://www.juliancataldo.com/)

</div>
