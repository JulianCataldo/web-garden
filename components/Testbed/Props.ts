import type { UiSchema } from '@rjsf/utils';
import type { JSONSchema7 } from 'json-schema';

export interface Props extends astroHTML.JSX.HTMLAttributes {
  /**
   * Component path. Ex. `/src/components/MyComp.<jsx,tsx,astro>`
   * */
  component: string;
  /**
   * Props. further passed to the tested component
   * */
  props?: Record<string, unknown>;
  /**
   * Remove all testbed styles so you can apply you own
   * */
  headless?: boolean;
  /**
   * JSON schema to auto-generate controls
   *
   * See [`react-jsonschema-form` documentation](https://react-jsonschema-form.readthedocs.io/en/latest/)
   * */
  schema?: JSONSchema7;
  /**
   * UI schema for auto-generated controls
   * */
  ui?: UiSchema;
}
