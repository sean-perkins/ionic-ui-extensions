import { getMode } from "@stencil/core";

export type Mode = 'ios' | 'md';

export const getIonMode = (ref?: any): Mode => {
  return (ref && getMode(ref)) || (window as any).Ionic.mode || 'ios';
};
