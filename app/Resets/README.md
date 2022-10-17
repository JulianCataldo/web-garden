# 🚀  Astro — Resets

[![NPM](https://img.shields.io/npm/v/@julian_cataldo/astro-resets)](https://www.npmjs.com/package/@julian_cataldo/astro-resets)
![Downloads](https://img.shields.io/npm/dt/@julian_cataldo/astro-resets.svg)
[![ISC License](https://img.shields.io/npm/l/@julian_cataldo/astro-resets)](https://github.com/JulianCataldo/web-garden/blob/develop/LICENSE)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](https://makeapullrequest.com)  
[![Astro](https://img.shields.io/badge/Astro-333333.svg?logo=astro)](https://astro.build)
[![TypeScript](https://img.shields.io/badge/TypeScript-333333.svg?logo=typescript)](http://www.typescriptlang.org/)
[![Prettier](https://img.shields.io/badge/Prettier-333333.svg?logo=prettier)](https://prettier.io)
[![EditorConfig](https://img.shields.io/badge/EditorConfig-333333.svg?logo=editorconfig)](https://editorconfig.org)
[![ESLint](https://img.shields.io/badge/ESLint-3A33D1?logo=eslint)](https://eslint.org)

Common CSS resets in a configurable Astro component.  
Only needed CSS is injected into critical path.

All settings are applied by default. Individual rule can be disabled.

## 📦  Installation

```sh
pnpm i @julian_cataldo/astro-resets
```

## 🛠  Usage

```astro
---
import Resets from '@julian_cataldo/astro-resets/Resets.astro';
// ...
---
```

```astro
<!-- ... -->
<head>
  <!-- Place component inside `HEAD` tag -->

  <!-- All properties are optional -->
  <Resets
    bodyMargin={true}
    fontSmoothing={true}
    fontSystem={true}
    scrollSmooth={true}
    borderBox={true}
    scrollBarKeep={true}
  />

  <!-- ... -->
</head>
<!-- ... -->
```

# Suggestions

It is assumed that CSS resetting is an highly opinionated topic.  
This component takes these stances about it:

- Must not aggressively override beneficial defaults
- Must make user experience better
- Must avoid side-effects
- Must be clear about what is affected
- Might be used to level-out browser inconsistencies
- Might be used to offer next gen. features
- Should be used in last resort
- Must be re-evaluated / removed regularly while browsers evolve

That being said, **don't hesitate to share your handy little resets**
in issues.

# Rules

## Body margin

Removes body margin.

## Font smoothing

Cross-browser grayscale font-smoothing.

## Font system

Apply default system font instead of Times, before loading custom web-font or keeped as is.

## Scroll smooth

Ensure smooth CSS scrolling.  
Native only, no polyfill for older Safari etc.

## Border box

Consistent border box for all elements.

<!-- ## Svg

Maximize canvas.
Set color as default text color. -->

## Scroll bar keep

Always show browser scrollbar.  
This is to prevent annoying layout jump when you navigate to a page which
doesn't scroll, or when you open a lightbox/modal etc.

# To do

- [ ] Find a more practical way to handle CSS snippets files and their import

<div class="git-footer">

---

## [LIVE DEMO  🎭  DOCUMENTATION WEBSITE ⎋](https://code.juliancataldo.com/)

[![Live demo website](https://code.juliancataldo.com/poster.png)](https://code.juliancataldo.com)

**_[`code.juliancataldo.com`](https://code.juliancataldo.com/)_**

---

🔗  [JulianCataldo.com](https://www.juliancataldo.com/)

</div>
