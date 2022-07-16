/// <reference types="astro/astro-jsx" />

export interface Props extends astroHTML.JSX.TableHTMLAttributes {
  /**
   * **Default**: `2`
   * */
  depth?: number;
  /**
   * **Default**: `true`
   * */
  useDev?: boolean;
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
  /**
   * **Default**: `'licenses-report'`
   * */
  // customRootClass?: string;
}
