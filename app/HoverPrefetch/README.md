# 🚀  Astro — URLs prefetching on hover

[![NPM](https://img.shields.io/npm/v/@julian_cataldo/astro-prefetch)](https://www.npmjs.com/package/@julian_cataldo/astro-prefetch)
![Downloads](https://img.shields.io/npm/dt/@julian_cataldo/astro-prefetch.svg)
[![ISC License](https://img.shields.io/npm/l/@julian_cataldo/astro-prefetch)](https://github.com/JulianCataldo/web-garden/blob/develop/LICENSE)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](https://makeapullrequest.com)  
[![Astro](https://img.shields.io/badge/Astro-333333.svg?logo=astro)](https://astro.build)
[![TypeScript](https://img.shields.io/badge/TypeScript-333333.svg?logo=typescript)](http://www.typescriptlang.org/)
[![Prettier](https://img.shields.io/badge/Prettier-333333.svg?logo=prettier)](https://prettier.io)
[![EditorConfig](https://img.shields.io/badge/EditorConfig-333333.svg?logo=editorconfig)](https://editorconfig.org)
[![ESLint](https://img.shields.io/badge/ESLint-3A33D1?logo=eslint)](https://eslint.org)

This component capture mouse hovering on links with internal URLs.  
Then, it will prefetch the HTML document beforehand.

The goal is to make further page loading snappier.  
It's useful with SSG but also with SSR in certain scenarios.

It plays well with this page transition component:  
[@julian_cataldo/astro-transition](https://github.com/JulianCataldo/web-garden/tree/master/app/Transition)

<!-- ## Demo

https://user-images.githubusercontent.com/603498/174425991-7151f1b1-0192-4508-8e6c-3e0d8eabed0d.mp4 -->

## 📦  Installation

```sh
pnpm i astro-hover-prefetch
```

## 🛠  Usage

```astro
---
import { HoverPrefetch } from 'astro-hover-prefetch';
// ...
---
```

```astro
<!-- ... -->
<head>
  <!-- Place component inside `HEAD` tag -->

  <!-- 'max' property is optional -->
  <HoverPrefetch max={8} />

  <!-- ... -->
</head>
```

<div class="git-footer">

---

## [LIVE DEMO  🎭  DOCUMENTATION WEBSITE ⎋](https://code.juliancataldo.com/)

[![Live demo website](https://code.juliancataldo.com/poster.png)](https://code.juliancataldo.com)

**_[`code.juliancataldo.com`](https://code.juliancataldo.com/)_**

---

🔗  [JulianCataldo.com](https://www.juliancataldo.com/)

</div>
