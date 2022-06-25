# 🚀  Astro — Packages licenses report generator

Give credits to the awesome JS open-source community with this component.  
It will generate a table with important informations about packages used by your project.

Uses Sebastian Roming' `license-report-generator` under the hood
(see [@wbmnky/license-report-generator](https://github.com/sebastianroming/license-report-generator)).

## 📦  Installation

```sh
pnpm i @julian_cataldo/astro-licenses-report
```

## 🛠  Usage

```astro
---
import LicensesReport from '@julian_cataldo/astro-licenses-report/LicensesReport.astro';
// ...
---
```

```astro
<!-- … -->
<body>
  <!-- place component inside BODY tag -->

  <LicensesReport
    useDevDependencies={true}
    depth={2}
    nameText={'Nom'}
    authorText={'Auteur'}
    licenseText={'License'}
    linkText={'URL'}
  />

  <!-- … -->
</body>
```

## 🎉  Result

**Unstyled**:

![](../../docs/component-licenses-report.png)

```html
<table class="licenses-report">
  <thead>
    <tr>
      <th>Package</th>
      <th>Author</th>
      <th>License</th>
      <th>URL</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td class="name">@astrojs/compiler</td>
      <td class="author">withastro</td>
      <td class="license">MIT</td>
      <td>
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

# 👨‍🏭  TypeScript API

```ts
export interface Props {
  /** Default: true */
  useDevDependencies?: boolean;
  /** Default: 2 */
  depth?: number;

  /** Default: 'Package' */
  nameText?: string;
  /** Default: 'Author' */
  authorText?: string;
  /** Default: 'License' */
  licenseText?: string;
  /** Default: 'URL' */
  linkText?: string;
}
```

---

[Live website demo documentation](../../demo)

See [/demo/src/layouts/Layout.astro](../../demo/src/layouts/Layout.astro)
for full implementation demo.

---

🔗  [JulianCataldo.com](https://www.juliancataldo.com/)
