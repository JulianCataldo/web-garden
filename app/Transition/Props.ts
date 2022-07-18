export interface Props {
  /**
   * **Default**: `500` (milliseconds)
   * */
  speed?: number;
  /**
   * Can be a color, gradient, image…
   *
   * **Default**: `'hsl(0, 0%, 100%)'` (CSS color unit)
   * */
  background?: string;
  /**
   * **Default**: `99`
   * */
  zIndex?: number;
}
