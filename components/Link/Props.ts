/// <reference types="astro/astro-jsx" />

export interface Props extends astroHTML.JSX.AnchorHTMLAttributes {
	/**
	 * Open external link in a new tab/window.
	 *
	 * **Default**: `true`
	 * */
	externalInNewTab?: boolean;

  /**
   * Open internal link in a new tab/window.
   *
   * **Default**: `false`
   * */
  internalInNewTab?: boolean;

	/**
	 * Prefetching marker (`rel=prefetch`)
	 *
	 * **Default**: `true`
	 * */
	prefetch?: boolean;
}
