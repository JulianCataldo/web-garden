export interface Props extends astroHTML.JSX.HTMLAttributes {
  /* ————————————————————————————— */
  /**
   * Longitude
   *
   * **Default**: `43.389636`
   * */
  x: number;
  /**
   * Latitude
   *
   * **Default**: `5.3964332`
   * */
  y: number;
  /**
   * Zoom level
   *
   * **Default**: `10`
   * */
  z?: number;
  /* ————————————————————————————— */
  /**
   * CSS Unit (fixed, no relative unit)
   *
   * **Default**: `'12rem'`
   * */
  height: string;
  /**
   * CSS Unit
   *
   * **Default**: `'100%'`
   * */
  width?: string;
  /* ————————————————————————————— */
  /**
   * **Default**: `true`
   * */
  attribution?: boolean;
  /* ————————————————————————————— */
}
