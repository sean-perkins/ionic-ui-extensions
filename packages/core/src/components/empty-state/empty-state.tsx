import { Host, Prop, Component, h } from '@stencil/core';
import { getIonMode } from '../../global/ionic-global';

import { defineCustomElement as defineIonTextCustomElement } from '@ionic/core/components/ion-text.js';
import { d as defineIonIconCustomElement } from '@ionic/core/components/icon.js';

/**
 * @virtualProp {"ios" | "md"} mode - The mode determines which platform styles to use.
 */
@Component({
  tag: 'ion-x-empty-state',
  styleUrls: {
    ios: 'empty-state.ios.scss',
    md: 'empty-state.md.scss',
  },
  scoped: true,
})
export class EmptyState {
  @Prop() icon?: string;

  @Prop() heading: string;

  @Prop() description: string;

  connectedCallback() {
    defineIonTextCustomElement();
    defineIonIconCustomElement();
  }

  render() {
    return (
      <Host class={getIonMode(this)}>
        <ion-icon class="empty-state__icon" icon={this.icon}></ion-icon>
        <ion-text>
          {this.heading && <h1>{this.heading}</h1>}
          {!this.heading && <slot name="heading"></slot>}
        </ion-text>
        <ion-text class="empty-state__description" color="medium">
          {this.description}
          {!this.description && <slot name="description"></slot>}
        </ion-text>
        <div class="empty-state__action">
          <slot></slot>
        </div>
      </Host>
    );
  }
}
