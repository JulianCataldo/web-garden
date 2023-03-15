# 🚀  Astro — Packages licenses report generator

[![NPM](https://img.shields.io/npm/v/astro-licenses-report)](https://www.npmjs.com/package/astro-licenses-report)
![Downloads](https://img.shields.io/npm/dt/astro-licenses-report.svg)
[![ISC License](https://img.shields.io/npm/l/astro-licenses-report)](https://github.com/JulianCataldo/web-garden/blob/develop/LICENSE)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](https://makeapullrequest.com)  
[![Astro](https://img.shields.io/badge/Astro-333333.svg?logo=astro)](https://astro.build)
[![TypeScript](https://img.shields.io/badge/TypeScript-333333.svg?logo=typescript)](http://www.typescriptlang.org/)
[![Prettier](https://img.shields.io/badge/Prettier-333333.svg?logo=prettier)](https://prettier.io)
[![EditorConfig](https://img.shields.io/badge/EditorConfig-333333.svg?logo=editorconfig)](https://editorconfig.org)
[![ESLint](https://img.shieldês.io/badge/ESLint-3A33D1?logo=eslint)](https://eslint.org)

Give credits to the awesome JS open-source community with this component.  
It will generate a table with important informations about packages used by your project.

Uses Sebastian Roming' `license-report-generator` under the hood
(see [@wbmnky/license-report-generator](https://github.com/sebastianroming/license-report-generator)).

## 📦  Installation

```sh
pnpm i @wbmnky/license-report-generator astro-licenses-report
```

## 🛠  Usage

```astro
---
import { LicensesReport } from 'astro-licenses-report';
// ...
---
```

```astro
<!-- ... -->
<body>
  <!-- Place component inside `BODY` tag -->

  <!-- All properties are optional -->
  <LicensesReport
    useDevDependencies={true}
    depth={2}
    nameText={'Nom'}
    authorText={'Auteur'}
    licenseText={'License'}
    linkText={'URL'}
  />

  <!-- ... -->
</body>
```

## 🎉  Result

```html
<table class="licenses-report">
  <thead class="table-header">
    <tr class="row">
      <th class="header name">Package</th>
      <th class="header author">Author</th>
      <th class="header license">License</th>
      <th class="header link">URL</th>
    </tr>
  </thead>

  <tbody class="table-body">
    <tr class="row">
      <td class="column name">@astrojs/compiler</td>

      <td class="column author">withastro</td>

      <td class="column license">MIT</td>

      <td class="column link">
        <a
          class="link is-external"
          href="https://astro.build"
          target="_blank"
          rel="noopener nofollow"
        >
          https://astro.build
        </a>
      </td>
    </tr>

    <!-- ... -->
  </tbody>
</table>
```

<div class="git-footer">

---

## [LIVE DEMO  🎭  DOCUMENTATION WEBSITE ⎋](https://code.juliancataldo.com/)

[![Live demo website](https://code.juliancataldo.com/poster.png)](https://code.juliancataldo.com)

**_[`code.juliancataldo.com`](https://code.juliancataldo.com/)_**

---

🔗  [JulianCataldo.com](https://www.juliancataldo.com/)

</div>
