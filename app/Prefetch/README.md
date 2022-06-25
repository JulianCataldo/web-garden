# 🚀  Astro — URLs prefetching on hover

This component capture mouse hovering on links with internal URLs.  
Then, it will prefetch the HTML document beforehand.

The goal is to make further page loading snappier.  
It's useful with SSG but also with SSR in certain scenarios.

It plays well with this page transition component:  
[@julian_cataldo/astro-transition](https://github.com/JulianCataldo/astro/tree/master/app/Transition)

## Demo

https://user-images.githubusercontent.com/603498/174425991-7151f1b1-0192-4508-8e6c-3e0d8eabed0d.mp4

## 📦  Installation

```sh
pnpm i @julian_cataldo/astro-prefetch
```

## 🛠  Usage

```astro
---
import Prefetch from '@julian_cataldo/astro-prefetch/Prefetch.astro';
// ...
---
```

```astro
<!-- ... -->
<head>
  <!-- Place component inside HEAD tag -->

  <!-- 'max' property is optional -->
  <Prefetch max={8} />

  <!-- ... -->
</head>
```

# 👨‍🏭  TypeScript API

```ts
export interface Props {
  /** Maximum prefetched documents. Default: 8 */
  max?: number;
}
```

---

[Live website demo documentation](../../demo)

See [/demo/src/layouts/Layout.astro](../../demo/src/layouts/Layout.astro)
for full implementation demo.

---

🔗  [JulianCataldo.com](https://www.juliancataldo.com/)
