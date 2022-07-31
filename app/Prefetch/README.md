# 🚀  Astro — URLs prefetching on hover

This component capture mouse hovering on links with internal URLs.  
Then, it will prefetch the HTML document beforehand.

The goal is to make further page loading snappier.  
It's useful with SSG but also with SSR in certain scenarios.

It plays well with this page transition component:  
[@julian_cataldo/astro-transition](https://github.com/JulianCataldo/web-garden/tree/master/app/Transition)

<!-- ## Demo

https://user-images.githubusercontent.com/603498/174425991-7151f1b1-0192-4508-8e6c-3e0d8eabed0d.mp4 -->

## 📦  Installation

```sh
pnpm i @julian_cataldo/astro-prefetch
```

## 🛠  Usage

```astro
---
import Prefetch from '@julian_cataldo/astro-prefetch/Prefetch.astro';
// ...
---
```

```astro
<!-- ... -->
<head>
  <!-- Place component inside `HEAD` tag -->

  <!-- 'max' property is optional -->
  <Prefetch max={8} />

  <!-- ... -->
</head>
```

<div class="git-footer">

---

## [LIVE DEMO  🎭  DOCUMENTATION WEBSITE ⎋](https://code.juliancataldo.com/)

[![Live demo website](https://code.juliancataldo.com/poster.png)](https://code.juliancataldo.com)

**_[`code.juliancataldo.com`](https://code.juliancataldo.com/)_**

---

🔗  [JulianCataldo.com](https://www.juliancataldo.com/)

</div>
