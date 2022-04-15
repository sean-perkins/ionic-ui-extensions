import { Component, h, Host, Prop } from '@stencil/core';

@Component({
  tag: 'ion-x-timeline',
  styleUrls: {
    ios: 'timeline.ios.scss',
    md: 'timeline.md.scss',
  },
  // scoped: true,
})
export class Timeline {
  /**
   * `true` if the timeline orientation is horizontal.
   */
  @Prop({ reflect: true }) horizontal: boolean;

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }
}
