# 🚀  Astro — Scroll observer

[![NPM](https://img.shields.io/npm/v/astro-scroll-observer)](https://www.npmjs.com/package/astro-scroll-observer)
![Downloads](https://img.shields.io/npm/dt/astro-scroll-observer.svg)
[![ISC License](https://img.shields.io/npm/l/astro-scroll-observer)](https://github.com/JulianCataldo/web-garden/blob/develop/LICENSE)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](https://makeapullrequest.com)  
[![Astro](https://img.shields.io/badge/Astro-333333.svg?logo=astro)](https://astro.build)
[![TypeScript](https://img.shields.io/badge/TypeScript-333333.svg?logo=typescript)](http://www.typescriptlang.org/)
[![Prettier](https://img.shields.io/badge/Prettier-333333.svg?logo=prettier)](https://prettier.io)
[![EditorConfig](https://img.shields.io/badge/EditorConfig-333333.svg?logo=editorconfig)](https://editorconfig.org)
[![ESLint](https://img.shields.io/badge/ESLint-3A33D1?logo=eslint)](https://eslint.org)

Viewport scroll **position** and **direction** watcher.  
Binds states data attributes to `HTML` for further JS/CSS usage.  
Scroll event is throttled for performance economy.

Scroll states are:

- Which current area? **TOP**, **BOTTOM**, and everything **in-between** (with a bit of margins).
- Is user scrolling **UP** or **DOWN**?
- Is viewport scrollbar present (i.e. is vertical viewport overflowing)?

## What for ?

With this tool, you can easily hook up and animate UI components like:  
Scroll hints, back to top button, top navigation menu bar…

<!-- ## Demo

https://user-images.githubusercontent.com/603498/174468167-4f3cdbe3-ec90-49f6-8c51-d6028605c7d6.mp4 -->

## 📦  Installation

```sh
pnpm i astro-scroll-observer
```

## 🛠  Usage

```astro
---
import { ScrollObserver } from 'astro-scroll-observer';
// ...
---
```

```astro
<!-- ... -->
<head>
  <!-- Place component inside `HEAD` tag -->

  <ScrollObserver />

  <!-- ... -->
</head>
```

### With SCSS

Firstly, import SCSS mixin in `astro.config.mjs`:

```js
export default defineConfig({
  // ...

  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: ` 
            @use "astro-scroll-observer/scss" as *;
          `,
        },
      },
    },
  },

  // ...
});
```

Then, use it like this in your stylesheets:

```scss
nav {
  @include scroll-is($bottom: true, $top: true, $going-up: false) {
    opacity: 0;
    transform: translateX(100%);
    // ...
  }
}

.scroll-down-hint {
  @include scroll-is($top: true) {
    opacity: 1;
    // ...
  }
}
```

### With vanilla CSS

```css
[data-is-scrolling-up='true'][data-is-top='false'] .my-element {
  opacity: 1;
}
```

## 🎉  Result

```html
<!-- ... -->
<html
  data-is-scrolling-up="true|false"
  data-is-bottom="true|false"
  data-is-top="true|false"
  data-has-scroll="true|false"
>
  <!-- ... -->
</html>
<!-- ... -->
```

# To do

- Create JS hook like [app/Breakpoints/use-breakpoints.ts](https://github.com/JulianCataldo/web-garden/blob/develop/app/Breakpoints/use-breakpoints.ts)
- Provide mixin option for scroll bar presence detector

<div class="git-footer">

---

## [LIVE DEMO  🎭  DOCUMENTATION WEBSITE ⎋](https://code.juliancataldo.com/)

[![Live demo website](https://code.juliancataldo.com/poster.png)](https://code.juliancataldo.com)

**_[`code.juliancataldo.com`](https://code.juliancataldo.com/)_**

---

🔗  [JulianCataldo.com](https://www.juliancataldo.com/)

</div>
