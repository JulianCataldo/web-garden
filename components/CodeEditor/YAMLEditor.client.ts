import { editor, Uri } from 'monaco-editor';
import EditorWorker from 'monaco-editor/esm/vs/editor/editor.worker?worker';
import { SchemasSettings, setDiagnosticsOptions } from 'monaco-yaml';
import YamlWorker from './YAMLEditor.worker.js?worker';
/* ========================================================================== */

window.MonacoEnvironment = {
  getWorker(moduleId, label) {
    switch (label) {
      case 'editorWorkerService':
        return new EditorWorker();
      case 'yaml':
        return new YamlWorker();
      default:
        throw new Error(`Unknown label ${label}`);
    }
  },
};

export default class YAMLEditor extends HTMLDivElement {
  model: editor.ITextModel | undefined;

  connectedCallback() {
    const { schemaUrlRef, schemaObject, modelUri, schemaUri, value } =
      this.dataset;

    // The uri is used for the schema file match.
    const modelUriParsed = Uri.parse(modelUri ?? 'a://b/foo.yaml');

    let schema: SchemasSettings;

    if (schemaUrlRef) {
      schema = {
        uri: schemaUrlRef,
        fileMatch: [String(modelUriParsed)],
        schema: {
          $ref: schemaUrlRef,
        },
      };
    } else if (typeof schemaObject === 'object') {
      schema = {
        uri: schemaUri ?? 'http://json-schema.org/draft-07/schema#',
        fileMatch: [String(modelUriParsed)],
        schema: schemaObject,
      };
    } else {
      /* Default: Core meta schema */
      schema = {
        uri: 'http://json-schema.org/draft-07/schema#',
        fileMatch: [String(modelUriParsed)],
        schema: {
          $ref: 'http://json-schema.org/draft-07/schema#',
        },
      };
    }

    setDiagnosticsOptions({
      enableSchemaRequest: true,
      hover: true,
      completion: true,
      validate: true,
      format: true,
      schemas: [schema],
    });

    const model = editor.createModel(value ?? '# YAML', 'yaml', modelUriParsed);
    editor.create(this, { automaticLayout: true, model, tabSize: 2 });

    this.model = model;
  }
}

/* Monaco needs a DIV, not working with a generic custom root element */
customElements.define('code-editor', YAMLEditor, { extends: 'div' });
