import type { Placement, Props as TippyProps } from 'tippy.js';

declare global {
  interface Window {
    tooltipsOptions: TippyProps;
  }
}

export interface Props extends Partial<TippyProps> {
  /**
   * **Default**: `true`
   *
   * BEWARE: You should trust your sources
   * */
  allowHTML?: boolean;
  /**
   * **Default**: `'default'`
   * */
  theme?: string;
  /**
   * **Default**: `'none'`
   * */
  maxWidth?: string;
  /**
   * **Default**: `[15, 150]`
   * */
  delay?: [number, number];
  /**
   * **Default**: `'auto'`
   * */
  placement?: Placement;
  /**
   * **Default**: `true`
   * */
  interactive?: boolean;
}
