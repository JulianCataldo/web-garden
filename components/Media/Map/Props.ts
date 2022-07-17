export interface Props extends astroHTML.JSX.HTMLAttributes {
  /* ————————————————————————————— */
  /**
   * Longitude
   * */
  x: number;
  /**
   * Latitude
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
   * CSS Unit
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
