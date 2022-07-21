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

<div class="git-toc">

- [🚀  Julian's Web Garden](#julians-web-garden)
  - [🤷🏼‍♂️  Philosophy](#️philosophy)
- [🔗  Quick links](#quick-links)
  - [LIVE DEMO  🎭  DOCUMENTATION WEBSITE ⎋](#live-demo--documentation-website)
  - [📖  Website source code](#website-source-code)
  - [📦  Application-level components](#application-level-components)
  - [📦  Components](#components)
  - [🛠  Tooling configurations](#tooling-configurations)
- [✅  Tests](#tests)
- [🚧  To dos](#to-dos)
- [🧫  Experimenting](#experimenting)
- [🧑‍🚀  Development](#development)
  - [🏁  Commands](#commands)
- [🦾  Contribute](#contribute)
  - [Conventions](#conventions)
    - [Issue](#issue)
    - [Branching](#branching)
    - [Committing](#committing)
    - [Pull request](#pull-request)

---

</div>

# 🔗  Quick links

<div class="git-web-garden-link">

## [LIVE DEMO  🎭  DOCUMENTATION WEBSITE ⎋](https://code.juliancataldo.com/)

_[Deployed on `code.juliancataldo.com`](https://code.juliancataldo.com/) automatically (GitHub Pages)._

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
pnpm run publish
```

# 🦾  Contribute

Any remark, feature or pull request can be done in this GitHub repository and issues tracker.

## Conventions

### Issue

> Subject, sentence cased  
> Label: `type`.

ex.: My new component  
GitHub issues label: \[feature\]

### Branching

**Create branch from issue**.

> `{subject-kebab-cased}/{type}/{issueNumber}`

ex.:  
`my-new-component/feat/123`

### Committing

Committing is linted following [conventional commits conventions](http://conventionalcommits.org).  
This allows an easy and automatic versioning, change-logging, and NPM publishing workflow.

ex.:

- `feat: my new sub-feature`
- `docs: some doc for this sub-feature`

### Pull request

_(Auto-generated titles)_

Mono-commit:

> `docs: adding one-shot docs`

Multi-commits:

> My new component/feat/123

<div class="git-footer">

---

[LIVE DEMO  🎭  DOCUMENTATION WEBSITE ⎋](https://code.juliancataldo.com/)

---

🔗  [JulianCataldo.com](https://www.juliancataldo.com/)

</div>
