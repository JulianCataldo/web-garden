type htmlAttrs = { [key: string]: string };

export interface Props {
  /**
   * **Default**: `'en'` (English)
   * */
  lang?: string;
  /**
   * **Default**: `[]` (no classes)
   * */
  htmlClasses?: string[];
  /**
   * **Default**: `[]` (no classes)
   * */
  bodyClasses?: string[];
  /**
   * **Default**: `[]` (no attributes)
   * */
  htmlExtraAttributes?: htmlAttrs;
  /**
   * **Default**: `[]` (no attributes)
   * */
  bodyExtraAttributes?: htmlAttrs;
  /**
   * **Default**: `null` (no id)
   * */
  htmlId?: string;
  /**
   * **Default**: `null` (no id)
   * */
  bodyId?: string;
  /**
   * Provides early JS detection for further CSS use
   * by adding `js` class critically to HTML element.
   *
   * **Default**: `true`
   * */
  jsEnabledClass?: boolean;
}
