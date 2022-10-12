// FIXME: Typings

import { useEffect, useState } from 'react';
import cx from 'clsx';
import Form from '@rjsf/core';
import validator from '@rjsf/validator-ajv6';
import type { UiSchema } from '@rjsf/utils';
import type { JSONSchema7 } from 'json-schema';
import type { ComponentInstance } from 'astro';
/* ·········································································· */
import styles from './Testbed.module.scss';
/* —————————————————————————————————————————————————————————————————————————— */

const allComps = import.meta.glob<ComponentInstance>('/**/*.{jsx,tsx}');

// type CompExtended = ComponentInstance['default'] & {
//   testbed: { schema: JSONSchema7; ui: UiSchema };
// };
interface Props {
  children?: JSX.Element | undefined;
  schema: JSONSchema7;
  component: string;
  ui: UiSchema;
  props?: Record<string, unknown>;
  defaultSlot: string;
}
export default function Testbed({
  children = undefined,
  defaultSlot,
  component,
  schema,
  ui,
  props = {},
}: Props) {
  const [mod, setMyComp] = useState<ComponentInstance | null>(null);
  const [loaded, setLoaded] = useState(false);
  const [formData, setFormData] = useState<Record<string, unknown>>(props);

  // NOTE: react json schema breaks SSR build, so client only render
  const [isMounted, setMounted] = useState(false);

  useEffect(() => {
    async function loadComp(cc: string) {
      const compo = allComps[cc];
      const c = await compo();
      setMyComp(c);
      setLoaded(true);
    }
    loadComp(component).catch(() => null);

    setMounted(true);
  }, []);

  const Component = mod?.default;

  const formSchema = Component?.testbed?.schema || schema || {};
  const formUi = {
    'ui:submitButtonOptions': {
      norender: true,
    },
    ...(Component?.testbed?.ui || ui || {}),
  };
  const hasControls = Component?.testbed?.schema || schema;

  return (
    <>
      {loaded && (
        <div className={styles['component-render']}>
          {/* eslint-disable-next-line react/jsx-props-no-spreading */}
          <Component {...formData}>
            <astro-slot
              data-testbed-infos="slot:default"
              dangerouslySetInnerHTML={{ __html: defaultSlot }}
            />
          </Component>
        </div>
      )}

      {children}

      <div className={cx([styles['panel-2'], styles.panel])}>
        {hasControls && isMounted && (
          <Form
            schema={formSchema}
            validator={validator}
            uiSchema={formUi}
            formData={formData}
            onChange={(data) => {
              if (Object.entries(data.formData).length) {
                setFormData(data.formData);
              }
            }}
          />
        )}
      </div>
    </>
  );
}
