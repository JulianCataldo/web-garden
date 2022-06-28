# 🚀  Astro — Link, with smart optimizations

Supercharge your links.  
This component detects external / anchor / same domain / mail / telephone
**`href`**, and apply optimizations accordingly.

# Features

- External links
  - **Badge** icon as a hint for users (⎋)
  - `rel="noopener nofollow"` for search engines optimization
  - `target="_blank"` for opening link in a new tab
- JS-based **obfuscation** for `mailto:` and `tel:` links
- Applying CSS classes for specific link types

Some of these features can be disabled if needed.

## Classes

- `link`
- `is-external`
- `is-hash`
- `is-mail`
- `is-tel`
- `has-hint`

You can then style these globally with `:global(.link.is-mail)` for example.

## 📦  Installation

```sh
pnpm i @julian_cataldo/astro-link
```

## 🛠  Usage

```astro
---
import Link from '@julian_cataldo/astro-link/Link.astro';
// ...
---
```

```astro
<!-- ... -->
<body>
  <!-- Place component inside BODY tag -->

  <Link
    href={'https://www.juliancataldo.com' /* Required */}
    title={'Bonjour !'}
    externalHint={false}
    externalInNewTab={true}
  >
    Some <strong>external</strong> link, loaded in current tab
  </Link>

  <!-- ... -->
</body>
```

## 🎉  Result

```astro
<a
  href='https://www.juliancataldo.com'
  class='link is-external astro-H4CCARKM'
  rel='noopener nofollow'
  target='_blank'
>
  Some external link, loaded in a new tab
</a>
```

## 🎨  Styling

As all component in this collection, you are responsible to bring style to them.  
This will give you maximum freedom, still you can prevent most of potential styles leaking when needed.

Of course, as links are ubiquitous in any website, it's totally valid to style them globally with `is:global`.

---

Semi-scoped styles inside parent (it won't effect upstream, only downstream):

```astro
<style lang='scss'>
  .my-parent-with-custom-links {
    // Use `:global` as a localized escape hatch:

    & :global(.link) {
      font-weight: 700;
      color: green;
    }
    & :global(.link.is-tel) {
      background: yellow;
    }
    & :global(.link.is-mail) {
      color: red;
    }
  }
</style>
```

-**OR**-

Global styles (in your layout component, for example):

```astro
<style lang='scss' is:global>
  a.link {
    font-weight: 700;
    color: green;
  }
  // ...
</style>
```

# 👨‍🏭  TypeScript API

```ts
export interface Props {
  href: string;
  title?: string;
  /** Whether to show external link icon or not. Default: true */
  externalHint?: boolean;
  /** Open external link in a new tab/window. Default: true */
  externalInNewTab?: boolean;
}
```

---

[Live website demo documentation](../../demo)

See [/demo/src/pages/index.astro](../../demo/src/pages/index.astro)
for full implementation demo.

---

🔗  [JulianCataldo.com](https://www.juliancataldo.com/)
