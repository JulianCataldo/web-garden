# 🚀  Astro — Packages licenses report generator

Give credits to the awesome JS open-source community with this component.  
It will generate a table with important informations about packages used by your project.

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

<!-- ## 🎉  Result -->

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
