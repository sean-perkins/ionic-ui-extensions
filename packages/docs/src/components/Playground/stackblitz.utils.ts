import sdk from '@stackblitz/sdk';

import { loadSourceFiles } from 'docusaurus-plugin-code-preview';

// The default title to use for Stackblitz examples (when not overwritten)
const DEFAULT_EDITOR_TITLE = 'Code Preview Example';
// The default description to use for Stackblitz examples (when not overwritten)
const DEFAULT_EDITOR_DESCRIPTION = '';
// Default package version to use for all @ionic/* packages.
const DEFAULT_IONIC_VERSION = '^6.0.0';

export interface EditorOptions {
  /**
   * The title of the Stackblitz example.
   */
  title?: string;
  /**
   * The description of the Stackblitz example.
   */
  description?: string;
  /**
   * Dependencies to include in the Stackblitz example.
   * // TODO needs to be per usage example
   */
  dependencies?: {
    [name: string]: string;
  }
}


const openHtmlEditor = async (code: string, options?: EditorOptions) => {
  const [index_ts, index_html] = await loadSourceFiles([
    '/docs/code/stackblitz/html/index.ts',
    '/docs/code/stackblitz/html/index.html',
  ]);

  sdk.openProject({
    template: 'typescript',
    title: options?.title ?? DEFAULT_EDITOR_TITLE,
    description: options?.description ?? DEFAULT_EDITOR_DESCRIPTION,
    files: {
      // Injects our code sample into the body of the HTML document
      'index.html': index_html.replace(/<body><\/body>/g, `<body>\n` + code + '</body>'),
      'index.ts': index_ts,
    },
    dependencies: {
      '@ionic/core': DEFAULT_IONIC_VERSION,
    },
  })
}

const openAngularEditor = async (code: string, options?: EditorOptions) => {
  const [main_ts, app_module_ts, app_component_ts, styles_css, angular_json] = await loadSourceFiles([
    '/docs/code/stackblitz/angular/main.ts',
    '/docs/code/stackblitz/angular/app.module.ts',
    '/docs/code/stackblitz/angular/app.component.ts',
    '/docs/code/stackblitz/angular/styles.css',
    '/docs/code/stackblitz/angular/angular.json'
  ])

  sdk.openProject({
    template: 'angular-cli',
    title: options?.title ?? DEFAULT_EDITOR_TITLE,
    description: options?.description ?? DEFAULT_EDITOR_DESCRIPTION,
    files: {
      'src/main.ts': main_ts,
      'src/polyfills.ts': `import 'zone.js/dist/zone';`,
      'src/app/app.module.ts': app_module_ts,
      'src/app/app.component.ts': app_component_ts,
      'src/app/app.component.html': code,
      'src/index.html': '<app-root></app-root>',
      'src/styles.css': styles_css,
      'angular.json': angular_json,
    },
    dependencies: {
      '@ionic/angular': DEFAULT_IONIC_VERSION,
    },
  });
}

const openReactEditor = async (code: string, options?: EditorOptions) => {
  // Matches the name after `export default` to use as the component tag.
  let componentTagName;
  try {
    componentTagName = new RegExp(/function([\S\s]*?)\(/g).exec(code)![1].trim();
  } catch (e) {
    console.error('Error parsing the component tag name from the React code snippet. Please make sure that the code snippet for React ends with export default ComponentName;');
  }

  if (!componentTagName) {
    return;
  }

  const [index_js, app_tsx] = await loadSourceFiles([
    '/docs/code/stackblitz/react/index.js',
    '/docs/code/stackblitz/react/app.tsx'
  ]);

  const app_tsx_renamed = app_tsx
    // Inserts the component name from the sample into the <IonApp> tag.
    .replace(/<IonApp><\/IonApp>/g, `<IonApp><${componentTagName} /></IonApp>`)
    // Imports the component from our `main` example file.
    .replace(/setupIonicReact\(\);/g, `import ${componentTagName} from "./main";\n\n` + 'setupIonicReact();');

  sdk.openProject({
    template: 'create-react-app',
    title: options?.title ?? DEFAULT_EDITOR_TITLE,
    description: options?.description ?? DEFAULT_EDITOR_DESCRIPTION,
    files: {
      'index.html': `<div id="root"></div>`,
      'index.js': index_js,
      'App.js': app_tsx_renamed,
      'main.js': code,
    },
    dependencies: {
      react: 'latest',
      'react-dom': 'latest',
      '@ionic/react': DEFAULT_IONIC_VERSION,
      // Stackblitz requires this dependency to run
      '@stencil/core': '^2.13.0',
    },
  })
}

const openVueEditor = async (code: string, options?: EditorOptions) => {
  const [package_json, index_html, vite_config_js, main_js, app_vue] = await loadSourceFiles([
    '/docs/code/stackblitz/vue/package.json',
    '/docs/code/stackblitz/vue/index.html',
    '/docs/code/stackblitz/vue/vite.config.js',
    '/docs/code/stackblitz/vue/main.js',
    '/docs/code/stackblitz/vue/App.vue'
  ]);
  /**
   * We have to use Stackblitz web containers here (node template), due
   * to multiple issues with Vite, Vue/Vue Router and Vue 3's script setup.
   *
   * https://github.com/stackblitz/core/issues/1308
   */
  sdk.openProject({
    template: 'node',
    title: options?.title ?? DEFAULT_EDITOR_TITLE,
    description: options?.description ?? DEFAULT_EDITOR_DESCRIPTION,
    files: {
      'src/App.vue': app_vue,
      'src/components/Example.vue': code,
      'src/main.js': main_js,
      'index.html': index_html,
      'vite.config.js': vite_config_js,
      'package.json': package_json,
      '.stackblitzrc': `{
        "startCommand": "yarn run dev"
      }`
    }
  });
}

export { openAngularEditor, openHtmlEditor, openReactEditor, openVueEditor };
