import { Component, ComponentInterface, h, Host, Prop } from '@stencil/core';

import { getIonMode } from '../../global/ionic-global';

/**
 * @slot - Content is placed in the primary area of the timeline item.
 * @slot dot - Content is placed in the dot area of the timeline.
 * @slot
 */
@Component({
  tag: 'ion-x-timeline-item',
  styleUrls: {
    ios: 'timeline-item.ios.scss',
    md: 'timeline-item.md.scss',
  },
  shadow: true,
})
export class TimelineItem implements ComponentInterface {
  /**
   * If `true`, the timeline item will be grayed out and "disabled".
   */
  @Prop({ reflect: true }) disabled = false;

  render() {
    return (
      <Host class={getIonMode(this)}>
        <div class="timeline-item__content timeline-item__before">
          <slot name="subtitle"></slot>
        </div>
        <div class="timeline-item__divider" part="divider">
          <div class="timeline-item__dot" part="dot">
            <slot name="dot"></slot>
          </div>
        </div>
        <div class="timeline-item__content timeline-item__after">
          <slot></slot>
        </div>
      </Host>
    );
  }
}
