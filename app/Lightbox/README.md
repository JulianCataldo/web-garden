# Astro — Lightbox • Zoom image to fullscreen

Simple lightbox component.

<!-- ## Installation

```sh
pnpm i @julian_cataldo/astro-lightbox
``` -->

## Usage

> **Note**  
> Only **one** map per page for now

```astro
---
import Lightbox from '@julian_cataldo/astro-lightbox/Lightbox.astro';
// ...
---
```

```astro
<!-- … -->
<head>
  <!-- … -->
  <Lightbox />
</head>
<body>
  <!-- … -->

  <div class='some-wrapper' data-lightbox='true'>
    <Image />
  </div>

  <!-- … -->
</body>
```

<!-- ## Result -->

<!-- ![](../../../docs/foo.png) -->

<!-- ## To do -->

<!-- - [ ]  -->

---

[Live website demo documentation](../demo)

See [/demo/src/layouts/Layout.astro](../../demo/src/layouts/Layout.astro)
for full implementation demo.

---

🔗  [JulianCataldo.com](https://www.juliancataldo.com/)
