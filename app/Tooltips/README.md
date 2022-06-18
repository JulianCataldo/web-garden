# Astro — URLs prefetching on hover

Progressively enhanced.  
This component globally override regular `title` attributes on all links with [Tippy.js](https://atomiks.github.io/tippyjs/) tooltips.

```ts
---
import Tooltips from '@jc/astro-tooltips/Tooltips.astro';
// ...
---
```

```tsx

  <head>
    <!-- … -->

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

<!-- https://user-images.githubusercontent.com/603498/174425991-7151f1b1-0192-4508-8e6c-3e0d8eabed0d.mp4 -->

# To do

- [ ] Theming
  - [ ] Override
  - [ ] Docs

---

[Live website demo documentation](../../demo/README.md)
