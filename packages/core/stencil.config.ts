import { Config } from '@stencil/core';

import { sass } from '@stencil/sass';


export const config: Config = {
  autoprefixCss: true,
  namespace: 'ionic-ui-extensions',
  globalScript: './src/global/app.ts',
  plugins: [sass()],
  outputTargets: [
    {
      type: 'dist',
      esmLoaderPath: '../loader',
    },
    {
      type: 'dist-custom-elements',
      autoDefineCustomElements: true
    },
    {
      type: 'docs-readme',
    },
  ]
};
