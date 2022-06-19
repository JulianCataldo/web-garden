# Astro — Scroll observer

Viewport scroll position watcher which binds data attributes to `body` for further CSS usage.

## Demo

https://user-images.githubusercontent.com/603498/174468167-4f3cdbe3-ec90-49f6-8c51-d6028605c7d6.mp4

## Installation

```sh
pnpm i @julian_cataldo/astro-scroll-observer
```

## Usage

```ts
---
import ScrollObserver from '@julian_cataldo/astro-scroll-observer/ScrollObserver.astro';
// ...
---
```

```tsx
<!-- … -->
  <head>
    <!-- place component inside HEAD tag -->

    <ScrollObserver />

    <!-- … -->
  </head>
<!-- … -->
```

Example usage with SCSS:

```scss
nav {
  // …navbar styles…
  // See live demo for complete example

  opacity: 0;
  transform: translateY(-100%);
  transition: all 1s;

  [data-is-scrolling-up='true'] & {
    opacity: 1;
    transform: translateY(0);
    &::after {
      content: 'Is scrolling up…';
    }
  }
  [data-is-top='true'] & {
    opacity: 1;
    transform: translateY(0);
    &::after {
      content: 'Is top';
    }
  }
  [data-is-bottom='true'] & {
    opacity: 1;
    transform: translateY(0);
    &::after {
      content: 'Is bottom';
    }
  }
}
```

## Result

```html
<!-- … -->
<body
  data-is-scrolling-up="true|false"
  data-is-bottom="true|false"
  data-is-top="true|false"
  data-has-scroll="true|false"
>
  <!-- … -->
</body>
<!-- … -->
```

---

[Live website demo documentation](../../demo)

---

🔗  [JulianCataldo.com](https://www.juliancataldo.com/)
