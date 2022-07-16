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
  <!-- Place component inside HEAD tag -->

  <!-- All properties are mandatory -->
  <SEO
    image={'/some_image_url-preferably_absolute.jpg'}
    title={'Le cool title'}
    description={'Le insightful description'}
    siteName={'Le Website'}
  />

  <!-- ... -->
</head>
<!-- ... -->
```

# Result

![Social share preview](../../docs/app-seo.png)

---

In `<head>`:

```html
<meta name="mobile-web-app-capable" content="yes" />

<meta name="og:site_name" property="og:site_name" content="JulianCataldo.com" />
<meta name="apple-mobile-web-app-title" content="JulianCataldo.com" />

<title>
  Julian Cataldo ⫸ Développeur Web Front-end freelance ⫷ React | Vue | Node ⫸
  Julian Cataldo
</title>
<meta
  name="og:title"
  property="og:title"
  content="Julian Cataldo ⫸ Développeur Web Front-end freelance ⫷ React | Vue | Node ⫸ Julian Cataldo
"
/>

<meta
  name="twitter:card"
  content="/projet/bordeaux/main_gallery/Magister-Bordeaux_Gironde--20170719--w1280px.jpg"
/>
<meta
  name="og:image"
  property="og:image"
  content="/projet/bordeaux/main_gallery/Magister-Bordeaux_Gironde--20170719--w1280px.jpg"
/>

<meta
  name="og:description"
  property="og:description"
  content="Web, Expériences Utilisateur, Intégration Médias, Interactivité,
Design Graphique, Identité, Communication, Audiovisuel.
Découvrez mes projets et mon profil professionnel.
"
/>
<meta
  name="description"
  content="Web, Expériences Utilisateur, Intégration Médias, Interactivité,
Design Graphique, Identité, Communication, Audiovisuel.
Découvrez mes projets et mon profil professionnel.
"
/>
```

<div class="git-footer">

---

[LIVE DEMO  🎭  DOCUMENTATION WEBSITE ⎋](https://code.juliancataldo.com/)

---

🔗  [JulianCataldo.com](https://www.juliancataldo.com/)

</div>
