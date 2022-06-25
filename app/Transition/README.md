# 🚀  Astro — Full page transition overlay

This component relies on the good old browser router, still, it will give to
your website an SPA feel, without all the JS overhead.

## Demo

https://user-images.githubusercontent.com/603498/174424456-edce69a7-adef-4e59-b2d8-cfc22414b8a4.mp4

## 📦  Installation

```sh
pnpm i @julian_cataldo/astro-transition
```

## 🛠  Usage

```astro
---
import TransitionOverlay from '@julian_cataldo/astro-transition/Overlay/TransitionOverlay.astro';
// …
---
```

```astro
<!-- … -->
<body>
  <!-- Place component just after opening BODY tag (mandatory) -->

  <!-- All properties are optional -->
  <TransitionOverlay speed={500} color='white' zIndex={99} />

  <!-- … -->
</body>
```

# 👨‍🏭  TypeScript API

```ts
export interface Props {
  /** Default: 500 (milliseconds) */
  speed?: number;
  /** Default: 'white' (any CSS notation can be used) */
  color?: string;
  /** Default: 99 */
  zIndex?: number;
}
```

---

[Live website demo documentation](../../demo)

See [/demo/src/layouts/Layout.astro](../../demo/src/layouts/Layout.astro)
for full implementation demo.

---

🔗  [JulianCataldo.com](https://www.juliancataldo.com/)
