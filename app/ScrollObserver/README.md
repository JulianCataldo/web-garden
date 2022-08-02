# 🚀  Astro — Scroll observer

Viewport scroll position watcher which binds data attributes to `html` for further CSS usage.  
JS scroll event is properly throttled for performance economy.

Three areas are handled : Top, Bottom, and everything in between.  
Some margins are applied on these.

Also, viewport scrollbar detection is made available.

<!-- ## Demo

https://user-images.githubusercontent.com/603498/174468167-4f3cdbe3-ec90-49f6-8c51-d6028605c7d6.mp4 -->

## 📦  Installation

```sh
pnpm i @julian_cataldo/astro-scroll-observer
```

## 🛠  Usage

```astro
---
import ScrollObserver from '@julian_cataldo/astro-scroll-observer/ScrollObserver.astro';
// ...
---
```

```astro
<!-- ... -->
<head>
  <!-- Place component inside `HEAD` tag -->

  <ScrollObserver />

  <!-- ... -->
</head>
<!-- ... -->
```

### With SCSS

Firstly, import SCSS mixin in `astro.config.mjs`:

```js
export default defineConfig({
  // ...

  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: ` 
            @use "@julian_cataldo/astro-scroll-observer/use-scroll-observer.scss" as *;
          `,
        },
      },
    },
  },

  // ...
});
```

Then, use it like this in your stylesheets:

```scss
nav {
  @include scroll-is($bottom: true, $top: true, $going-up: false) {
    opacity: 0;
    transform: translateX(100%);
    // ...
  }
}

.scroll-down-hint {
  @include scroll-is($top: true) {
    opacity: 1;
    // ...
  }
}
```

### With vanilla CSS

```css
[data-is-scrolling-up='true'][data-is-top='false'] .my-element {
  opacity: 1;
}
```

## 🎉  Result

```html
<!-- ... -->
<html
  data-is-scrolling-up="true|false"
  data-is-bottom="true|false"
  data-is-top="true|false"
  data-has-scroll="true|false"
>
  <!-- ... -->
</html>
<!-- ... -->
```

# To do

- Create JS hook like [app/Breakpoints/use-breakpoints.ts](../Breakpoints/use-breakpoints.ts)

<div class="git-footer">

---

## [LIVE DEMO  🎭  DOCUMENTATION WEBSITE ⎋](https://code.juliancataldo.com/)

[![Live demo website](https://code.juliancataldo.com/poster.png)](https://code.juliancataldo.com)

**_[`code.juliancataldo.com`](https://code.juliancataldo.com/)_**

---

🔗  [JulianCataldo.com](https://www.juliancataldo.com/)

</div>
