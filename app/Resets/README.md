# 🚀  Astro — Resets

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
  <!-- Place component inside HEAD tag -->

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

[LIVE DEMO  🎭  DOCUMENTATION WEBSITE ⎋](https://code.juliancataldo.com/)

---

🔗  [JulianCataldo.com](https://www.juliancataldo.com/)

</div>
