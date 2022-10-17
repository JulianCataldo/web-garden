# 🚀  Astro — SEO metadata

[![NPM](https://img.shields.io/npm/v/@julian_cataldo/astro-seo)](https://www.npmjs.com/package/@julian_cataldo/astro-seo)
![Downloads](https://img.shields.io/npm/dt/@julian_cataldo/astro-seo.svg)
[![ISC License](https://img.shields.io/npm/l/@julian_cataldo/astro-seo)](https://github.com/JulianCataldo/web-garden/blob/develop/LICENSE)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](https://makeapullrequest.com)  
[![Astro](https://img.shields.io/badge/Astro-333333.svg?logo=astro)](https://astro.build)
[![TypeScript](https://img.shields.io/badge/TypeScript-333333.svg?logo=typescript)](http://www.typescriptlang.org/)
[![Prettier](https://img.shields.io/badge/Prettier-333333.svg?logo=prettier)](https://prettier.io)
[![EditorConfig](https://img.shields.io/badge/EditorConfig-333333.svg?logo=editorconfig)](https://editorconfig.org)
[![ESLint](https://img.shields.io/badge/ESLint-3A33D1?logo=eslint)](https://eslint.org)

Bare minimum SEO meta tags to make most social networks and Google engine happy.

## 📦  Installation

```sh
pnpm i astro-seo-metadata
```

## 🛠  Usage

```astro
---
import { SEOMetadata } from 'astro-seo-metadata';
// ...
---
```

```astro
<!-- ... -->
<head>
  <!-- Place component inside `HEAD` tag -->

  <!-- All properties are optional -->
  <SEO
    siteName={'Le Website'}
    title={'Le cool title'}
    description={'Le insightful description'}
    image={'http://example.com/the_image_url-preferably_absolute.jpg'}
    favicon={'/favicon.svg'}
    author="Julian Cataldo"
    copyright="ISC"
    astroSitemap={true}
    canonicalUrl={Astro.url}
    type={'website'}
    astroGenerator={true}
  />

  <!-- ... -->
</head>
<!-- ... -->
```

---

In `<head>`:

```html
<!-- SEO -->

<link
  rel="canonical"
  href="https://code.juliancataldo.com/component/astro-seo"
/>

<meta property="og:type" content="website" />

<meta name="apple-mobile-web-app-title" content="Julian's Web Garden" />
<meta property="og:site_name" content="Julian's Web Garden" />

<title>
  🚀&nbsp;&nbsp;Astro — SEO | Bare minimum SEO meta tags to make most social
  networks and Google engine happy. | 🚀&nbsp;&nbsp;Astro — SEO
</title>

<meta
  property="og:title"
  content="🚀&nbsp;&nbsp;Astro — SEO | Bare minimum SEO meta tags to make most social networks and Google engine happy. | 🚀&nbsp;&nbsp;Astro — SEO"
/>
<meta
  name="twitter:title"
  content="🚀&nbsp;&nbsp;Astro — SEO | Bare minimum SEO meta tags to make most social networks and Google engine happy. | 🚀&nbsp;&nbsp;Astro — SEO"
/>

<meta
  property="og:image:alt"
  content="Building blocks for making progressive and future-proof websites.
Components collection features Astro, HTML, SCSS, JS, TS…
Configurations features ESLint, Prettier, Stylelint…"
/>
<meta
  name="description"
  property="og:description"
  content="Building blocks for making progressive and future-proof websites.
Components collection features Astro, HTML, SCSS, JS, TS…
Configurations features ESLint, Prettier, Stylelint…"
/>
<meta
  name="twitter:description"
  content="Building blocks for making progressive and future-proof websites.
Components collection features Astro, HTML, SCSS, JS, TS…
Configurations features ESLint, Prettier, Stylelint…"
/>

<meta property="og:image" content="https://code.juliancataldo.com/poster.png" />
<meta
  name="twitter:image:src"
  content="https://code.juliancataldo.com/poster.png"
/>
<meta name="twitter:card" content="summary_large_image" />

<!--  -->

<meta name="author" content="Julian Cataldo" />

<meta name="copyright" content="ISC" />

<!--  -->

<link rel="sitemap" type="application/xml" href="/sitemap-index.xml" />

<meta name="generator" content="Astro v1.0.6" />

<!-- /SEO -->
```

<div class="git-footer">

---

## [LIVE DEMO  🎭  DOCUMENTATION WEBSITE ⎋](https://code.juliancataldo.com/)

[![Live demo website](https://code.juliancataldo.com/poster.png)](https://code.juliancataldo.com)

**_[`code.juliancataldo.com`](https://code.juliancataldo.com/)_**

---

🔗  [JulianCataldo.com](https://www.juliancataldo.com/)

</div>
