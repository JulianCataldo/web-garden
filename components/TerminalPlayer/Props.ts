export interface Props extends astroHTML.JSX.HTMLAttributes {
  src: string | undefined;

  settings?: AsciinemaSettings;
}

interface AsciinemaSettings {
  /**
   * Number of columns of player's terminal.
   *
   * When not set it defaults to 80 (until asciicast gets loaded) and to terminal
   * width saved in the asciicast file (after it gets loaded).
   *
   * It's recommended to set it to the same value as in asciicast file to prevent
   * player to resize itself from 80x24 to the actual dimensions of the asciicast
   * when it gets loaded.
   */
  cols?: number;

  /**
   * Number of lines of player's terminal.
   *
   * When not set it defaults to 24 (until asciicast gets loaded) and to terminal
   * height saved in the asciicast file (after it gets loaded).
   *
   * Same recommendation as for `cols` applies here.
   */
  rows?: number;

  /**
   * Set this option to `true` if playback should start automatically.
   *
   * Defaults to `false` - no auto play.
   */
  autoPlay?: boolean;

  /**
   * Set this option to `true` if the recording should be preloaded on player's
   * initialization.
   *
   * Defaults to `false` - no preload.
   */
  preload?: boolean;

  /**
   * Set this option to either `true` or a number if playback should be looped. When
   * set to a number (e.g. `3`) then the recording will be re-played given number of
   * times and stopped after that.
   *
   * Defaults to `false` - no looping.
   */
  loop?: boolean | number;

  /**
   * Start playback at a given time.
   *
   * Supported formats:
   *
   * * `123` (number of seconds)
   * * `"2:03"` ("mm:ss")
   * * `"1:02:03"` ("hh:mm:ss")
   *
   * Defaults to `0`.
   */
  startAt?: number | string;

  /**
   * Playback speed. The value of `2` means 2x faster.
   *
   * Defaults to `1` - normal speed.
   */
  speed?: number;

  /**
   * Limit terminal inactivity to a given number of seconds.
   *
   * For example, when set to `2` any inactivity longer than 2 seconds will be
   * "compressed" to 2 seconds.
   *
   * Defaults to:
   *
   * - `idle_time_limit` from asciicast header (saved when passing `-i <sec>` to
   *   `asciinema rec`),
   * - no limit, when it was not specified at the time of recording.
   */
  idleTimeLimit?: number;

  /**
   * Terminal color theme.
   *
   * One of:
   *
   * * `"asciinema"`
   * * `"monokai"`
   * * `"tango"`
   * * `"solarized-dark"`
   * * `"solarized-light"`
   *
   * Defaults to `"asciinema"`.
   *
   * You can also [use a custom theme](https://github.com/asciinema/asciinema-player/wiki/Custom-terminal-themes).
   */
  theme?:
    | 'asciinema'
    | 'monokai'
    | 'tango'
    | 'solarized-dark'
    | 'solarized-light';

  /**
   * Poster (a preview frame) to display until the playback is started.
   *
   * The following poster specifications are supported:
   *
   * * `npt:1:23` - display recording "frame" at given time using [NPT ("Normal Play Time") notation](https://www.ietf.org/rfc/rfc2326.txt)
   * * `data:text/plain,Poster text` - print given text
   *
   * The easiest way of specifying a poster is to use NPT format. For example,
   * `npt:1:23` will preload the recording and display terminal contents at 1 min 23
   * sec.
   *
   * Example:
   *
   * ```javascript
   * AsciinemaPlayer.create('/demo.cast', document.getElementById('demo'), {
   *   poster: 'npt:1:23'
   * });
   * ```
   *
   * Alternatively, a `poster` value of `data:text/plain,This will be printed as
   * poster\n\rThis in second line` will display arbitrary text. All [ANSI escape
   * codes](https://en.wikipedia.org/wiki/ANSI_escape_code) can be used to add color
   * and move the cursor around to produce good looking poster.
   *
   * Example of using custom text poster with control sequences (aka escape codes):
   *
   * ```javascript
   * AsciinemaPlayer.create('/demo.cast', document.getElementById('demo'), {
   *   poster: "data:text/plain,I'm regular \x1b[1;32mI'm bold green\x1b[3BI'm 3 lines down"
   * });
   * ```
   *
   * Defaults to blank terminal or, when `startAt` is specified, to screen contents
   * at time specified by `startAt`.
   */
  poster?: string;

  /**
   * Controls the player's fitting (sizing) behaviour inside its container element.
   *
   * Possible values:
   *
   * * `"width"` - scale to full width of the container
   * * `"height"` - scale to full height of the container (requires the container element to have fixed height)
   * * `"both"` - scale to either full width or height, maximizing usage of available space (requires the container element to have fixed height)
   * * `false` / `"none"` - don't scale, use fixed size font (also see `fontSize` option below)
   *
   * Defaults to `"width"`.
   *
   * > Version 2.x of the player supported only the behaviour represented by the
   * > `false` value. If you're upgrading from v2 to v3 and want to preserve the sizing
   * > behaviour then include `fit: false` option.
   */
  fit?: string;

  /**
   *
   * Size of the terminal font.
   *
   * Possible values:
   *
   * * `"small"`
   * * `"medium"`
   * * `"big"`
   * * any valid CSS `font-size` value, e.g. `"15px"`
   *
   * Defaults to `"small"`.
   *
   * > This option is effective only when `fit: false` option is specified as well
   * > (see above).
   */
  terminalFontSize?: 'small' | 'medium' | 'big' | string;

  /**
   *
   * Terminal font-family override.
   *
   * Use any valid CSS `font-family` value, e.g `"'JetBrains Mono', Consolas, Menlo, 'Bitstream Vera Sans Mono', monospace"`.
   */
  terminalFontFamily?: string;

  /**
   *
   * Terminal line height override.
   *
   * The value is relative to the font size (like `em` unit in CSS). For example a
   * value of `1` makes the line height equal to the font size, leaving no space
   * between lines. A value of `2` makes it double the font size, etc.
   *
   * Defaults to `1.33333333`.
   */
  terminalLineHeight?: number;
}
