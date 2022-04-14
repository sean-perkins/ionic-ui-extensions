import { initialize as initializeIonic } from '@ionic/core/components';
import { setMode } from '@stencil/core';

initializeIonic();

export const initialize = () => {
  if (typeof (window as any) === 'undefined') {
    return;
  }
  setMode(elm => {
    return (elm as any).mode || elm.getAttribute('mode') || window.document.documentElement.getAttribute('mode') || 'md';
  });
}

export default initialize;

