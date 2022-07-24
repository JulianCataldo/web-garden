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
import Document from '@julian_cataldo/astro-base/Document.astro';
import Body from '@julian_cataldo/astro-base/Body.astro';
// ...
---

<!-- All properties are optional -->
<Document
  id='test-base-rootDoc'
  data-theme='default'
  lang='en'
  class:list={[
    `mode-${import.meta.env.MODE}`,
    'test-base-rootDoc-1',
    'test-base-rootDoc-2',
  ]}
  data-test='scrollObserver-rootDoc base-rootDoc'
>
  <Fragment slot='head'>
    <!-- Things you can inject in HEAD -->
    <style is:inline>
      .some-class {
        color: red;
      }
    </style>
  </Fragment>

  <Body
    id='test-base-body'
    slot='body'
    class:list={['test-base-body-1', 'test-base-body-2']}
    data-test='base-body'
  >
    <!-- Things you can inject in BODY -->
    <nav>My navbar</nav>

    <!-- Your page content slot  -->
    <slot></slot>
  </Body>
</Document>
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
