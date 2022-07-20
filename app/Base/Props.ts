/// <reference types="astro/astro-jsx" />

export interface Props extends astroHTML.JSX.HTMLAttributes {
  /**
   * Provides early JS detection for further CSS use
   * by adding `js` class critically to HTML element.
   *
   * **Default**: `true`
   * */
  jsEnabledClass?: boolean;
  /**
   * **Default**: `null`
   * */
  redirectTo?: string | null;
}
