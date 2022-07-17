/// <reference types="astro/astro-jsx" />

import type { APIProps } from 'src/packages-loader';

export interface Props extends astroHTML.JSX.TableHTMLAttributes {
  /**
   * **Default**: `2`
   * */
  data: APIProps[];
}
