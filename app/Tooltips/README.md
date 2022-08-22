# 🚀  Astro — Tooltips

Progressively enhanced.  
This component globally override regular `title` attributes on all links with [Tippy.js](https://atomiks.github.io/tippyjs/) tooltips.

## 📦  Installation

```sh
pnpm i @julian_cataldo/astro-tooltips
```

## 🛠  Usage

```astro
---
import Tooltips from '@julian_cataldo/astro-tooltips/Tooltips.astro';
// ...
---
```

```astro
<!-- ... -->
<head>
  <!-- Place component inside `HEAD` tag -->

  <Tooltips />

  <!-- ... -->
</head>
```

```tsx

// use the regular title attribute on A tags

<a href="#" title="Hello!">Tooltip</a>


// tooltip placement control

<a href="#" title="Hello!" data-tooltip-placement="left">Tooltip left</a>


```

# To do

- [ ] Theming
  - [ ] Override
  - [ ] Docs

<div class="git-footer">

---

## [LIVE DEMO  🎭  DOCUMENTATION WEBSITE ⎋](https://code.juliancataldo.com/)

[![Live demo website](https://code.juliancataldo.com/poster.png)](https://code.juliancataldo.com)

**_[`code.juliancataldo.com`](https://code.juliancataldo.com/)_**

---

🔗  [JulianCataldo.com](https://www.juliancataldo.com/)

</div>
