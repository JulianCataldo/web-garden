/* From https://github.com/jxson/front-matter/blob/master/index.js */
const platform = typeof process !== 'undefined' ? process.platform : '';
const optionalByteOrderMark = '\\ufeff?';
export const fmPattern =
  `^(${optionalByteOrderMark}(= yaml =|---)` +
  `$([\\s\\S]*?)` +
  `^(?:\\2|\\.\\.\\.)\\s*` +
  `$${platform === 'win32' ? '\\r?' : ''}(?:\\n)?)`;

export function extractMarkdownFrontmatter(markdown: string) {
  let rawFrontmatter: undefined | string;
  let body: string | undefined;

  const regex = new RegExp(fmPattern, 'm');
  const match = regex.exec(markdown);

  if (match) {
    const fmWithFences = match[match.length - 1];
    rawFrontmatter = fmWithFences.replace(/^\s+|\s+$/g, '');
    body = markdown.replace(match[0], '');
  }

  return { rawFrontmatter, body };
}
