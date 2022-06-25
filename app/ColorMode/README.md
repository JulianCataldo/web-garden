# 🚀  Astro — Color mode, with user override

Provides system or user-defined color scheme preference, with a toggle mechanism.  
Settings are persisted, component is progressively enhanced and flash of unstyled content avoided.  
Also, it will provide an easier way to target theme with CSS / SCSS / JS.

> **Warning**  
> 🚧  Work in progress

# Features

- Detects user current color mode
- Apply a `data-color-mode="dark|light"` attribute on root document
- Provides a toggle mechanism for overriding system preference
- Persists user preference in browser local storage
- Inject saved setting **critically**, avoiding a blinding flash of mis-styled content.
- Provides SCSS mixins for easy theme targeting
- Supports JS / No-JS, with a fallback to user system preference

> **Warning**  
> The SCSS part is still a work in progress towards full no-JS support
> (progressive enhancement).

## 📦  Installation

```sh
pnpm i @julian_cataldo/astro-color-mode
```

## 🛠  Usage

```astro
---
import ColorMode from '@julian_cataldo/astro-color-mode/ColorMode.astro';
// ...
---
```

```astro
<!-- ... -->
<head>
  <!-- Place component inside HEAD tag -->

  <ColorMode />

  <!-- ... -->
</head>
```

```astro
<!-- ... -->
<body>
  <!-- Use 'data-color-mode-switch' where you want to -->
  <!-- toggle theme setting, on an element inside BODY tag -->

  <button data-color-mode-switch>Toggle COLOR MODE 💡</button>

  <!-- ... -->
</body>
```

<!-- ```scss

``` -->

SCSS mixins registration in `astro.config.mjs`:

```js
export default defineConfig({
  // ...
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `
            @use "@julian_cataldo/astro-color-mode/use-mixins.scss" as *;
            `,
        },
      },
    },
  },
});
```

## 🎉  Result

```html
<html data-color-mode="light|dark">
  <!-- ... -->
</html>
```

<!-- ![](../../../docs/component-media-map.png) -->

## To do

- [ ] Full native `@media` query support for SCSS mixin

---

[Live website demo documentation](../../demo)

See [/demo/src/layouts/Layout.astro](../../demo/src/layouts/Layout.astro)
for full implementation demo.

---

🔗  [JulianCataldo.com](https://www.juliancataldo.com/)
