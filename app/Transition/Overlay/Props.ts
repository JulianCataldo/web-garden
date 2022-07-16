export interface Props {
  /**
   * **Default**: `500` (milliseconds)
   * */
  speed?: number;
  /**
   * **Default**: `'white'` (CSS color unit)
   *
   * Or you can style overlay color with:
   * `:global(#app-transition-overlay) { --color: white; }`
   * */
  color?: string;
  /**
   * **Default**: `99`
   * */
  zIndex?: number;
}
