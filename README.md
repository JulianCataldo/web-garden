# Astro components and configurations collection

Here lies some re-usable components and tooling settings,
taking advantage of Astro strengths as much as possible.

Focus is on common web patterns and progressive enhancements.

See [/demo/src/layouts/Layout.astro](demo/src/layouts/Layout.astro)
for full implementation demo.

---

- [Astro components and configurations collection](#astro-components-and-configurations-collection)
- [📦  Application-level components](#application-level-components)
  - [Base document enclosure — \[astro-base\]](#base-document-enclosure--astro-base)
  - [CSS Resets — \[astro-resets\]](#css-resets--astro-resets)
  - [Full page transition — \[astro-transition\]](#full-page-transition--astro-transition)
  - [Scroll observer — \[astro-scroll-observer\]](#scroll-observer--astro-scroll-observer)
  - [URLs prefetching — \[astro-prefetch\]](#urls-prefetching--astro-prefetch)
  - [Tooltips — \[astro-tooltips\]](#tooltips--astro-tooltips)
  - [SEO — \[astro-seo\]](#seo--astro-seo)
  - [Traffic analysis — \[astro-analytics\]](#traffic-analysis--astro-analytics)
- [📦  Components](#components)
  - [Media map embed — \[astro-media-map\]](#media-map-embed--astro-media-map)
  - [Lightbox — \[astro-lightbox\]](#lightbox--astro-lightbox)
- [👀  Astro demo website](#astro-demo-website)
- [⚙️  Tooling configurations — \[astro-configs\]](#️tooling-configurations--astro-configs)
- [🚧  To dos](#to-dos)
- [✅  Tests](#tests)
- [🧑‍🚀  Development](#development)
  - [Commands](#commands)

---

# 📦  Application-level components

## Base document enclosure — \[astro-base\]

**📦  [See component instructions](./app/Base)**

## CSS Resets — \[astro-resets\]

**📦  [See component instructions](./app/Resets)**

## Full page transition — \[astro-transition\]

https://user-images.githubusercontent.com/603498/174424456-edce69a7-adef-4e59-b2d8-cfc22414b8a4.mp4

---

**📦  [See component instructions](./app/Transition)**

## Scroll observer — \[astro-scroll-observer\]

https://user-images.githubusercontent.com/603498/174468167-4f3cdbe3-ec90-49f6-8c51-d6028605c7d6.mp4

---

**📦  [See component instructions](./app/Scroll/Observer)**

## URLs prefetching — \[astro-prefetch\]

https://user-images.githubusercontent.com/603498/174425991-7151f1b1-0192-4508-8e6c-3e0d8eabed0d.mp4

---

**📦  [See component instructions](./app/Prefetch)**

## Tooltips — \[astro-tooltips\]

https://user-images.githubusercontent.com/603498/174427470-cd84028c-4f2f-41d0-8297-e71f21ad62f5.mp4

---

**📦  [See component instructions](./app/Tooltips)**

## SEO — \[astro-seo\]

**📦  [See component instructions](./app/SEO)**

## Traffic analysis — \[astro-analytics\]

**📦  [See component instructions](./app/Analytics)**

# 📦  Components

## Media map embed — \[astro-media-map\]

![](./docs/component-media-map.png)

**📦  [See component instructions](./components/Media/Map)**

## Lightbox — \[astro-lightbox\]

**📦  [See component instructions](./app/Lightbox)**

# 👀  Astro demo website

[Live website demo documentation](./demo) where you can test all components above.

# ⚙️  Tooling configurations — \[astro-configs\]

[📖  See documentation](./configs).

# 🚧  To dos

- [ ] Fix default package import  
       `import Tooltips from '@julian_cataldo/astro-tooltips/Tooltips.astro';`  
       to  
       `import Tooltips from '@julian_cataldo/astro-tooltips';`

---

- [ ] Fully working tooling environment

# ✅  Tests

Cypress:

- [ ] App/Analytics
- [x] App/Base
- [x] App/Prefetch
- [ ] App/Resets
- [x] App/Scroll/Observer
- [ ] App/SEO
- [x] App/Tooltips
- [x] App/Transition
- [ ] App/Lightbox
- [x] Components/Media/Map
- [ ] …

# 🧑‍🚀  Development

## Commands

```zsh
# Scripts located in root ./package.json

# Launch implementations demo website
pnpm demo

# Cypress: Open dev GUI
pnpm cypress:open

# Cypress: Run test suite
pnpm cypress:run

# 1. Cypress test suite
# 2. Packages bump based on commits
# 3. Tagging releases
# 4. Git push
pnpm version

# Publish updated packages on NPM public registry
pnpm publish
```

---

🔗  [JulianCataldo.com](https://www.juliancataldo.com/)
