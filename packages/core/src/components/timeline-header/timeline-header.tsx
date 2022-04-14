import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'ion-x-timeline-header',
  styleUrl: 'timeline-header.scss',
  shadow: true,
})
export class TimelineHeader {
  render() {
    return (
      <Host>
        <div>
          <slot></slot>
        </div>
        <div class="timeline__divider"></div>
        <div>
          <slot name="end"></slot>
        </div>
      </Host>
    );
  }
}
