# Astro — Resets

Common CSS resets in a configurable Astro component.  
Only needed CSS is injected into critical path.

All settings are applied by default. Individual rule can be disabled.

## Installation

```sh
pnpm i @julian_cataldo/astro-resets
```

## Usage

```astro
---
import Resets from '@julian_cataldo/astro-resets/Resets.astro';
// ...
---
```

```astro
<!-- … -->
<head>
  <!-- place component inside HEAD tag -->

  <Resets
    bodyMargin={true}
    fontSmoothing={true}
    fontSystem={true}
    scrollSmooth={true}
    borderBox={true}
    svg={true}
    scrollBarKeep={true}
  />

  <!-- … -->
</head>
<!-- … -->
```

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

## Svg

Maximize canvas.  
Set color as default text color.

## Scroll bar keep

Always show browser scrollbar.  
This is to prevent annoying layout jump when you navigate to a page which
doesn't scroll, or when you open a lightbox/modal etc.

---

[Live website demo documentation](../../demo)

See [./demo/src/layouts/Layout.astro](../../demo/src/layouts/Layout.astro)
for full implementation demo.

---

🔗  [JulianCataldo.com](https://www.juliancataldo.com/)
