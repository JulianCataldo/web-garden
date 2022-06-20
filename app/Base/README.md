# Astro — Base document enclosure

Provide sensible defaults for HTML base document.  
The goal is to reduce boilerplate when using multiple layouts in Astro projects.

## Installation

```sh
pnpm i @julian_cataldo/astro-base
```

## Usage

In your layout component, for example `./src/layouts/Default.astro`:

```astro
---
import Base from '@julian_cataldo/astro-base/Base.astro';
// …
---

<Base
  lang='es'
  htmlClasses={['some-class', 'doby-doba']}
  htmlId={'the-id'}
  bodyClasses={['other-class', 'dabadi-dabada']}
  bodyId={'much-id'}
>
  <Fragment slot='head'>
    <!-- Put things in HEAD tag  -->
    <style is:inline>
      .some-class {
        color: red;
      }
    </style>
  </Fragment>

  <Fragment slot='body'>
    <!-- Put things in BODY tag  -->
    <nav>My navbar</nav>

    <!-- Page content slot  -->
    <slot></slot>
  </Fragment>
</Base>
```

## Result

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

    <!-- Page content slot  -->
    <div>My page content</div>
  </body>
</html>
```

The `js` class is added to HTML tag, critically.
That way, you can handle CSS for users with or without JS enabled.

---

[Live website demo documentation](../../demo)

See [./demo/src/layouts/Layout.astro](../../demo/src/layouts/Layout.astro)
for full implementation demo.

---

🔗  [JulianCataldo.com](https://www.juliancataldo.com/)
