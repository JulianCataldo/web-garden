export interface Props extends astroHTML.JSX.HTMLAttributes {
  value?: string;

  extractMarkdownFrontmatter?: boolean;

  schemaUrlRef?: string;

  // TODO:
  // schemaObject?: string;
}
