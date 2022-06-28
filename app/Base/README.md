# 🚀  Astro — Base document enclosure

Provide sensible defaults for HTML base document.  
The goal is to reduce boilerplate when using multiple layouts in Astro projects.

## 📦  Installation

```sh
pnpm i @julian_cataldo/astro-base
```

## 🛠  Usage

In your layout component, for example `./src/layouts/Default.astro`:

```astro
---
import Base from '@julian_cataldo/astro-base/Base.astro';
// ...
---

<!-- All properties are optional -->
<Base
  lang={'es'}
  htmlClasses={['some-class', 'doby-doba']}
  htmlId={'the-id'}
  bodyClasses={['other-class', 'dabadi-dabada']}
  bodyId={'much-id'}
  jsEnabledClass={true}
>
  <Fragment slot='head'>
    <!-- Things injected in HEAD -->
    <style is:inline>
      .some-class {
        color: red;
      }
    </style>
  </Fragment>

  <Fragment slot='body'>
    <!-- Things injected inside BODY -->
    <nav>My navbar</nav>

    <!-- Page content slot  -->
    <slot></slot>
  </Fragment>
</Base>
```

## 🎉  Result

```html
<!DOCTYPE html>
<html lang="es" class="some-class doby-doba js" id="the-id">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />

    <script>
      // CRITICAL
      // Add 'js' class to HTML tag if JavaScript is enabled
      (() => {
        const root = document.getElementsByTagName('html')[0];
        root.classList.add('js');
      })();
    </script>

    <style is:inline>
      .some-class {
        color: red;
      }
    </style>
  </head>

  <body class="other-class dabadi-dabada" id="much-id">
    <nav>My navbar</nav>

    <!-- Page content slot -->
    <div>My page content</div>
  </body>
</html>
```

The `js` class is added to HTML tag, critically.  
That way, you can handle CSS for users with or without JS enabled
with **`.js &`** / **`:not(.js) &`** SCSS selectors.

# 👨‍🏭  TypeScript API

```ts
export interface Props {
  /** **Default**: `'en'` */
  lang?: string;
  /** **Default**: `[]` (no classes) */
  htmlClasses?: string[];
  /** **Default**: `[]` (no classes) */
  bodyClasses?: string[];
  /** **Default**: `null` (no id) */
  htmlId?: string;
  /** **Default**: `null` (no id) */
  bodyId?: string;
  /** **Default**: `true`
   * Provides early JS detection for further CSS use
   * by adding `js` class critically to HTML element. */
  jsEnabledClass?: boolean;
}
```

---

[Live website demo documentation](../../demo)

See [/demo/src/layouts/Layout.astro](../../demo/src/layouts/Layout.astro)
for full implementation demo.

---

🔗  [JulianCataldo.com](https://www.juliancataldo.com/)
