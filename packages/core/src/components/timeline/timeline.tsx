import { Component, h, Host, Prop } from '@stencil/core';
import { TimelineAlign } from './timeline-interface';

@Component({
  tag: 'ion-x-timeline',
  styleUrls: {
    ios: 'timeline.ios.scss',
    md: 'timeline.md.scss',
  },
  shadow: true,
})
export class Timeline {
  @Prop({ reflect: true }) align: TimelineAlign = 'start';

  @Prop() divider = true;

  render() {
    const { divider } = this;
    return (
      <Host>
        <div
          class={{
            timeline: true,
            ['timeline-has-divider']: divider,
          }}
        >
          <slot></slot>
        </div>
      </Host>
    );
  }
}
