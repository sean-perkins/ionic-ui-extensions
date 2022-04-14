```html
<style>
  .error-state {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    height: 100%;
  }

  .error-state__icon {
    font-size: 72px;
  }

  .error-state__description {
    font-weight: 500;
    line-height: 1.5rem;
  }
</style>

<ion-content class="ion-padding">
  <div class="error-state">
    <ion-icon class="error-state__icon" name="wifi-outline"></ion-icon>
    <ion-text>
      <h1>Check Your Connection</h1>
    </ion-text>
    <ion-text class="ion-text-center error-state__description" color="medium">
      There is a connection error. Please check your internet and try again.
    </ion-text>
  </div>
</ion-content>
<ion-footer class="ion-padding">
  <ion-button expand="block">Try again</ion-button>
</ion-footer>
```
