/// <reference types="astro/astro-jsx" />

export interface Licenses {
  name?: string;
  author?: string | { name: string } | undefined;
  homepage?: string | undefined;
  license?: string | undefined;
  repository?: { url: string };
}

export interface Props extends astroHTML.JSX.TableHTMLAttributes {
  /**
   * **Default**: `2`
   * */
  depth?: number;
  /**
   * **Default**: `true`
   * */
  useDev?: boolean;
  /**
   * **Default**: `process.cwd()`
   * */
  packagePath?: string;
  /* ————————————————————————————— */
  /**
   * **Default**: `'Package'`
   * */
  nameText?: string;
  /**
   * **Default**: `'Author'`
   * */
  authorText?: string;
  /**
   * **Default**: `'License'`
   * */
  licenseText?: string;
  /**
   * **Default**: `'URL'`
   * */
  linkText?: string;
}
