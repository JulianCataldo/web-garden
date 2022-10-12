# 🚀  Astro — SEO

Bare minimum SEO meta tags to make most social networks and Google engine happy.

## 📦  Installation

```sh
pnpm i @julian_cataldo/astro-seo
```

## 🛠  Usage

```astro
---
import SEO from '@julian_cataldo/astro-seo/SEO.astro';
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
