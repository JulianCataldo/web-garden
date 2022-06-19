# Astro — Tooltips

Progressively enhanced.  
This component globally override regular `title` attributes on all links with [Tippy.js](https://atomiks.github.io/tippyjs/) tooltips.

## Installation

```sh
pnpm i @julian_cataldo/astro-tooltips
```

## Usage

```ts
---
import Tooltips from '@julian_cataldo/astro-tooltips/Tooltips.astro';
// ...
---
```

```tsx

  <head>
    <!-- place component inside HEAD tag -->

    <Tooltips />

    <!-- … -->
  </head>

```

```tsx

// use the regular title attribute on A tags

<a href='#' title='Hello!'>Tooltip</a>


// tooltip placement control

<a href='#' title='Hello!' data-tooltip-placement='left'>Tooltip left</a>


```

# Demo

https://user-images.githubusercontent.com/603498/174427470-cd84028c-4f2f-41d0-8297-e71f21ad62f5.mp4

# To do

- [ ] Theming
  - [ ] Override
  - [ ] Docs

---

[Live website demo documentation](../../demo)
