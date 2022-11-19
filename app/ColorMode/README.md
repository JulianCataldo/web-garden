# 🚀  Astro — Color mode, with user override

[![NPM](https://img.shields.io/npm/v/@julian_cataldo/astro-color-mode)](https://www.npmjs.com/package/@julian_cataldo/astro-color-mode)
![Downloads](https://img.shields.io/npm/dt/@julian_cataldo/astro-color-mode.svg)
[![ISC License](https://img.shields.io/npm/l/@julian_cataldo/astro-color-mode)](https://github.com/JulianCataldo/web-garden/blob/develop/LICENSE)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](https://makeapullrequest.com)  
[![Astro](https://img.shields.io/badge/Astro-333333.svg?logo=astro)](https://astro.build)
[![TypeScript](https://img.shields.io/badge/TypeScript-333333.svg?logo=typescript)](http://www.typescriptlang.org/)
[![Prettier](https://img.shields.io/badge/Prettier-333333.svg?logo=prettier)](https://prettier.io)
[![EditorConfig](https://img.shields.io/badge/EditorConfig-333333.svg?logo=editorconfig)](https://editorconfig.org)
[![ESLint](https://img.shields.io/badge/ESLint-3A33D1?logo=eslint)](https://eslint.org)

Provides system or user-defined color scheme preference, with a toggle mechanism.  
Settings are persisted, component is progressively enhanced and flash of mis-styled content avoided.  
Also, this provides an easier way to target theme with CSS selector / SCSS mixins / JS DOM selector.

# Features

- Detects user current color mode
- Apply a `data-color-mode="dark|light"` attribute on root document
- Provides a toggle mechanism for overriding system preference
- Persists user preference in browser local storage
- Inject saved setting **critically**, avoiding a blinding flash of mis-styled content.
- Provides SCSS mixins for easy theme targeting
- Supports JS / No-JS, with a fallback to user system preference

## 📦  Installation

```sh
pnpm i astro-color-mode
```

## 🛠  Usage

```astro
---
import { ColorMode } from 'astro-color-mode';
// ...
---
```

```astro
<!-- ... -->
<head>
  <!-- Place component inside `HEAD` tag -->

  <ColorMode />

  <!-- ... -->
</head>
```

Use `data-color-mode-switch` where you want to toggle theme setting,
on an any element, somewhere inside `BODY` tag:

```astro
<!-- ... -->
<body>
  <!-- ... -->

  <button data-color-mode-switch>Toggle COLOR MODE 💡</button>

  <!-- ... -->
</body>
```

#### 🎉  Result

```html
<html data-color-mode="light|dark">
  <!-- ... -->
</html>
```

### With SCSS

SCSS mixins registration in `astro.config.mjs`:

```js
export default defineConfig({
  // ...
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `
            @use "astro-color-mode/use-color-mode.scss" as *;
          `,
        },
      },
    },
  },
});
```

Then, use it like this in your stylesheets:

```scss
.my-layout {
  :is(.my-link, body) {
    @include color-mode(light) {
      color: black;
      background-color: white;
      // ...
    }
    @include color-mode(dark) {
      color: white;
      background-color: black;
      // ...
    }
  }
}

.some-class {
  @include color-mode(light) {
    color: blue;
    background-color: yellow;
    // ...
  }
  @include color-mode(dark) {
    color: yellow;
    background-color: blue;
    // ...
  }
}
```

## To do

- [ ] Fix no JS support (SCSS mixin…)
- [ ] Full JS independant `@media` query support for SCSS mixins
- [ ] SCSS mixins demo usage
- [ ] Thorough demo video for all user scenarios
  - [ ] With JS, system pref.
  - [ ] With JS, persisted user pref.
  - [ ] No JS, system pref.

<div class="git-footer">

---

## [LIVE DEMO  🎭  DOCUMENTATION WEBSITE ⎋](https://code.juliancataldo.com/)

[![Live demo website](https://code.juliancataldo.com/poster.png)](https://code.juliancataldo.com)

**_[`code.juliancataldo.com`](https://code.juliancataldo.com/)_**

---

🔗  [JulianCataldo.com](https://www.juliancataldo.com/)

</div>
