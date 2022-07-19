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
    <!-- Things you can inject in HEAD -->
    <style is:inline>
      .some-class {
        color: red;
      }
    </style>
  </Fragment>

  <Fragment slot='body'>
    <!-- Things you can inject in BODY -->
    <nav>My navbar</nav>

    <!-- Your page content slot  -->
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
        const root = document.documentElement;
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

<div class="git-footer">

---

## [LIVE DEMO  🎭  DOCUMENTATION WEBSITE ⎋](https://code.juliancataldo.com/)

[![Live demo website](https://code.juliancataldo.com/poster.png)](https://code.juliancataldo.com)

**_[`code.juliancataldo.com`](https://code.juliancataldo.com/)_**

---

🔗  [JulianCataldo.com](https://www.juliancataldo.com/)

</div>
