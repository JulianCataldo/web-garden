import type { MapOptions } from 'leaflet';

export interface Props extends MapOptions {
  /**
   * **Default**: `true`
   * */
  ssr?: boolean;

  /**
   * **Default**: `{}`
   * */
  htmlAttributes?: astroHTML.JSX.HTMLAttributes;

  /* ————————————————————————————— */

  /**
   * **Default**: `null`
   * */
  address?: string;

  /* ————————————————————————————— */

  /**
   * CSS Unit (fixed, no relative unit)
   *
   * **Default**: `'25rem'`
   * */
  height?: string;

  /**
   * CSS Unit
   *
   * **Default**: `'25rem'`
   * */
  width?: string;

  /* ————————————————————————————— */

  /**
   * **Default**: `'http://{s}.tile.osm.org/{z}/{x}/{y}.png'`
   *
   * @example
   * ```js
   * const mapAccessToken = `import.meta.env.PUBLIC_MAP_TILER_ACCESS_TOKEN`;
   * const mapId = 'topographique';
   * const mapImgFormat = 'png';
   * const urlMapTiler = `https://api.maptiler.com/maps/${mapId}/256/{z}/{x}/{y}{r}.${mapImgFormat}?key=${mapAccessToken}`;
   * const urlOsmFr = 'https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png';
   * ```
   * */
  url?:
    | 'https://{s}.tile.osm.org/{z}/{x}/{y}.png'
    | 'https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png'
    | string;

  /* ————————————————————————————— */
}
