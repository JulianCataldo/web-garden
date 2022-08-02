# 🚀  Julian's Web Garden

Here lies some re-usable components and tooling settings,
taking advantage of Astro strengths as much as possible.

Focus is on common web patterns and progressive enhancements.

> **Note**  
> Astro is still in Beta, so is this collection.  
> Components API might change a bit, though not drastically.  
> Thanks for you understanding ✌️.

## 🤷🏼‍♂️  Philosophy

We've all been to the point of throwing valuable code when adopting new
shiny website frameworks.  
Thanks to "island architecture" practices, we can establish standard and
future-proof, commonly used, generic patterns, using the web holy trinity of languages : **HTML** / **CSS** and **JavaScript**.  
That way, we can sprinkle advanced JS widgets as we like, with trendy UI framework, while
things like global application utilities remain stable over time.

Vanilla means future-proofing our code, but it also bring the benefit of
minuscule file sizes compared to "all-or-nothing" UI frameworks.

---

<div class="git-hide">

- [🚀  Julian's Web Garden](#julians-web-garden)
  - [🤷🏼‍♂️  Philosophy](#️philosophy)
- [🔗  Quick links](#quick-links)
  - [LIVE DEMO  🎭  DOCUMENTATION WEBSITE ⎋](#live-demo--documentation-website)
    - [Architecture](#architecture)
      - [Terminology](#terminology)
  - [📖  Website source code](#website-source-code)
  - [📦  Application-level components](#application-level-components)
  - [📦  Components](#components)
  - [🛠  Tooling configurations](#tooling-configurations)
- [✅  Tests](#tests)
- [🚧  To dos](#to-dos)
- [🧫  Experimenting](#experimenting)
- [🧑‍🚀  Development](#development)
  - [🏁  Commands](#commands)

---

</div>

# 🔗  Quick links

## [LIVE DEMO  🎭  DOCUMENTATION WEBSITE ⎋](https://code.juliancataldo.com/)

<div class="git-hide">

[![Live demo website](https://code.juliancataldo.com/poster.png)](https://code.juliancataldo.com)

</div>

_[**Production** deployed on **`code.juliancataldo.com`**](https://code.juliancataldo.com/)._  
[See **Production** GitHub workflow](https://github.com/JulianCataldo/web-garden/blob/develop/.github/workflows/production.yml)

_[**Develop** deployed on **`develop--web-garden.netlify.app`**](https://develop--web-garden.netlify.app)._  
[See **Branch** GitHub workflow](https://github.com/JulianCataldo/web-garden/blob/develop/.github/workflows/branch.yml)

Deployed on Netlify via GitHub actions.

<div class="git-hide">

<!-- TODO: integrate mermaid renderer into website / or pre-render SVG -->

### Architecture

```mermaid

flowchart TB

subgraph Pages
Home(Home)
Etc2("...")
end
subgraph Components
  subgraph Layouts
  Default('Default')
  Etc3("...")
  end
  subgraph Application
  SEO('SEO')
  Prefetch('Prefetch')
  Etc("...")
  end
  subgraph Modules
  Landing('Landing')
  SinglePackage('SinglePackage')
  Etc5("...")
  end
  subgraph Generic
  Link('Link')
  LicensesReport('LicensesReport')
  Etc4("...")
  end
end

Data(Data)-->Pages

Application-->Layouts
Generic-->Pages
Modules-->Pages
Generic-->Modules
Generic-->Layouts
Layouts-->Pages

```

</div>

---

#### Terminology

- **Pages**: the base component entry point.  
  All other parts (**layouts**, generic **components**, **modules**…) and data are directly or indirectly gathered from here.
- **Layout**: Where your website shells lives. This is where you put your global navigation, footer…
  Alternative layouts can be created like  
  `Print`, `Compact`, `Bare`, `Blog`…
- **App-level component**: used everywhere, anytime, for a given **layout**, which import them.  
  E.g. Color modes handler, breakpoints handler…
- **Component**: Ubiquitous general purpose, atomic components.  
  E.g. icons, images, links, maps, videos…
- **Module**: Complex set of components, forming a single purpose page view/section.  
  E.g. `Landing`, `SinglePackage`, `ContactForm`…
- **Data**: Local JSONs, Markdown files, remote APIs…  
  Should be fetched from **pages**. Note that this is not a hard rule or a technical limitation with Astro as with other frameworks.  
  Ultimately, this pattern makes data-flow easier to follow ("top -> down"), preventing spaghetti code, duplications and performance hogs.

## [📖  Website source code](https://github.com/JulianCataldo/web-garden/tree/master/demo)

See [default layout](demo/src/layouts/Default/Default.astro) and [home page](./demo/src/pages/index.astro)
for live implementation examples.

---

## [📦  Application-level components](./app)

[These are global components](./app) which enhance or augment browser behavior and style,
while providing useful utilities to developers, website-wide.

## [📦  Components](./components)

Generic [extendables components](./components).

## [🛠  Tooling configurations](./configs)

[A useful collection](./configs) for JavaScript developers.  
Features ESLint, Prettier, Stylelint, Commitlint…  
For Astro, React, Vue, SCSS, TS…

# ✅  Tests

Cypress:

- [ ] App/Analytics
- [x] App/Base
- [ ] App/Prefetch
  - Broken: `realHover` [issue](https://github.com/dmtrKovalenko/cypress-real-events/issues/247)
- [ ] App/Resets
- [ ] App/Breakpoints
- [ ] App/ColorMode
- [x] App/Scroll/Observer
- [ ] App/SEO
- [x] App/Tooltips
- [x] App/Transition
  - [ ] External / contact links
- [ ] App/Lightbox
- [x] Components/Media/Map
- [ ] Components/Link
  - [ ] External / contact links
- [ ] Components/LicensesReport
- [ ] …

# 🚧  To dos

- [ ] Fix default package import when possible, as client side JS breaks for now  
       `import Tooltips from '@julian_cataldo/astro-tooltips/Tooltips.astro';`  
       to  
       `import Tooltips from '@julian_cataldo/astro-tooltips';`
- [ ] Find a way to launch only necessary tests when versioning
- [ ] Implement dev / prod mode for debugging outputs
- [x] Rehaul demo website
- [ ] Evaluate PNPM workspaces + tools for replacing Lerna version/publish?
- [ ] Fix Lerna conventional commits not following breaking changes for versioning
- [ ] Full no JS compatibility / fallbacks checks
  - [ ] Fix CSS theme not loading
- [ ] Fix flash of unstyled text (critical font loading strategy)

# 🧫  Experimenting

- Website full theme switcher, in addition to color dark / light variants.
- Feature flag manager
- Copy to clipboard
- Algolia search
- SSR Mermaid
  <!-- - Easy fonts integration -->
  <!-- - Easy iconify integration -->

# 🧑‍🚀  Development

## 🏁  Commands

```zsh
# Clone mono-repository
git clone https://github.com/JulianCataldo/web-garden

# Scripts located in root ./package.json

# Bootstrap all packages dependencies
pnpm install --recursive

# Launch implementations demo website
pnpm run demo

# Cypress: Open dev GUI
pnpm run cypress:open

# Cypress: Run test suite
pnpm run cypress:run

# Pre-release, does:
# 1. Packages bump based on commits
# 2. Tagging releases
# 3. Git push
pnpm run version

# Release updated packages on NPM public registry
pnpm run release
```

<div class="git-footer">

---

[LIVE DEMO  🎭  DOCUMENTATION WEBSITE ⎋](https://code.juliancataldo.com/)

---

🔗  [JulianCataldo.com](https://www.juliancataldo.com/)

</div>
