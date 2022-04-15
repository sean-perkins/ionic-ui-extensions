```html
<style>
  ion-content {
    --background: #eee;
  }

  ion-x-timeline {
    --timeline-dot-padding: 4px;
  }

  ion-x-timeline-item.incomplete::part(dot) {
    background: white;
    border: 2px solid #006ed1;
  }

  ion-x-timeline-item.complete::part(dot) {
    color: white;
    font-size: 0.75rem;
  }

  ion-x-timeline-item.complete:not([disabled])::part(dot) {
    background: #006ed1;
  }

  .large {
    --dot-width: 20px;
    --dot-height: 20px;
  }

  .huge {
    --dot-width: 48px;
    --dot-height: 48px;
  }
</style>

<ion-x-timeline>
  <ion-x-timeline-item class="incomplete huge" disabled="true">
    <div slot="subtitle" style="text-align: center">
      <span>21 JAN</span>
    </div>
    <ion-icon slot="dot" name="checkmark-outline"></ion-icon>
    <ion-card>
      <ion-card-content>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit.
      </ion-card-content>
    </ion-card>
  </ion-x-timeline-item>

  <ion-x-timeline-item class="complete large" disabled="true">
    <div slot="subtitle" style="text-align: center">
      <span>21 JAN</span>
    </div>
    <ion-icon slot="dot" name="checkmark-outline"></ion-icon>
    <ion-card>
      <ion-card-content>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit.
      </ion-card-content>
    </ion-card>
  </ion-x-timeline-item>

  <ion-x-timeline-item class="complete" disabled="true">
    <div slot="subtitle" style="text-align: center">
      <span>21 JAN</span>
    </div>
    <ion-icon slot="dot" name="checkmark-outline"></ion-icon>
    <ion-card>
      <ion-card-content>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit.
      </ion-card-content>
    </ion-card>
  </ion-x-timeline-item>

  <ion-x-timeline-item class="incomplete">
    <div slot="subtitle">
      <span>21 DEC</span>
    </div>
    <ion-card>
      <ion-card-content>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit.
      </ion-card-content>
    </ion-card>
  </ion-x-timeline-item>
  <ion-x-timeline-item class="complete">
    <div slot="subtitle" style="text-align: center">
      <span>21 JAN</span>
    </div>
    <ion-icon slot="dot" name="checkmark-outline"></ion-icon>
    <ion-card>
      <ion-card-content>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit.
      </ion-card-content>
    </ion-card>
  </ion-x-timeline-item>
  <ion-x-timeline-item>
    <div slot="subtitle">
      <span>21 JAN</span>
    </div>
    <ion-card>
      <ion-card-content>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nihil odit
        eius voluptatum quidem dicta. Aliquam totam quo unde eaque ex quis,
        laudantium earum consectetur accusamus obcaecati itaque aut. Non, autem.
      </ion-card-content>
    </ion-card>
  </ion-x-timeline-item>
</ion-x-timeline>
```
