export interface Props {
  /**
   * Image URL, preferably absolute and 1200x630px  \
   * Used for social networks…
   *
   * **Default**: `'/poster.jpg'`
   * */
  image: string;
  /**
   * Used for window / tab title, search engines results, social networks…
   *
   * **Default**: `'Untitled'`
   * */
  title: string;
  /**
   * Used for search engines results, social networks…
   *
   * **Default**: `'- Website -'`
   * */
  description: string;
  /**
   * Used for Discord, PWA…
   *
   * **Default**: `'• Website •'`
   * */
  siteName: string;
}
