# Astro — Full page transition overlay

## Demo

https://user-images.githubusercontent.com/603498/174424456-edce69a7-adef-4e59-b2d8-cfc22414b8a4.mp4

## Installation

```sh
pnpm i @julian_cataldo/astro-transition
```

## Usage

```astro
---
import TransitionOverlay from '@julian_cataldo/astro-transition/Overlay/TransitionOverlay.astro';
// …
---
```

```astro
<!-- … -->
<body>
  <!-- place component just after opening BODY tag (mandatory) -->

  <TransitionOverlay speed={500} color='white' zIndex={99} />

  <!-- … -->
</body>
```

---

[Live website demo documentation](../../demo)

---

🔗  [JulianCataldo.com](https://www.juliancataldo.com/)
