import type { UiSchema } from '@rjsf/utils';
import type { JSONSchema7 } from 'json-schema';

export interface Props extends astroHTML.JSX.HTMLAttributes {
  /**
   * Component path. Ex. `/src/components/MyComp.<jsx,tsx,astro>`
   *
   * **Default**: `''`
   * */
  component: string;

  /**
   * Props. further passed to the tested component
   *
   * **Default**: `{}`
   * */
  props?: Record<string, unknown>;

  /**
   * Remove all testbed styles so you can apply you own
   *
   * **Default**: `false`
   * */
  headless?: boolean;

  /**
   * JSON schema to auto-generate controls
   *
   * See [`react-jsonschema-form` documentation](https://react-jsonschema-form.readthedocs.io/en/latest/)
   *
   * **Default**: `{}`
   * */
  schema?: JSONSchema7;

  /**
   * UI schema for auto-generated controls
   *
   * **Default**: `{}`
   * */
  ui?: UiSchema;
}
