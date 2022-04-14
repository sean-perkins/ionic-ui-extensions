```html
<style>
  ion-item {
    --padding-start: 0;
    --inner-padding-end: 0;
  }

  .search__section:not(:first-child) {
    margin-top: 2rem;
  }

  .search__section-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .recent-search__content {
    display: flex;
    flex-direction: column;
  }

  .recent-search__label {
    font-size: 0.75rem;
  }
</style>

<ion-header>
  <ion-toolbar>
    <ion-searchbar placeholder="Search"></ion-searchbar>
  </ion-toolbar>
</ion-header>
<ion-content class="ion-padding">
  <div class="search__section-header">
    <ion-text>
      <h4>Recent searches</h4>
    </ion-text>
    <ion-button fill="clear" size="small">See all</ion-button>
  </div>
  <ion-list>
    <ion-item class="recent-search">
      <ion-avatar slot="start">
        <img
          src="https://ownyourbits.com/wp-content/uploads/2017/01/chameleon3.jpg"
        />
      </ion-avatar>
      Animal Planet
      <ion-button slot="end" fill="clear" size="small" color="dark">
        <ion-icon name="close-outline"></ion-icon>
      </ion-button>
    </ion-item>
    <ion-item class="recent-search">
      <ion-avatar slot="start">
        <img
          src="https://thumbs.dreamstime.com/b/business-woman-portrait-profile-smiling-beautiful-166860054.jpghttps://thumbs.dreamstime.com/b/business-woman-portrait-profile-smiling-beautiful-166860054.jpg"
        />
      </ion-avatar>
      <div class="recent-search__content">
        Jane Doe
        <ion-text color="medium" class="recent-search__label">
          Friend
        </ion-text>
      </div>
      <ion-button slot="end" fill="clear" size="small" color="dark">
        <ion-icon name="close-outline"></ion-icon>
      </ion-button>
    </ion-item>
  </ion-list>

  <div class="search__section">
    <ion-text>
      <h4>Try searching for</h4>
    </ion-text>
    <ion-list>
      <ion-item button>
        <ion-icon slot="start" name="search" color="medium"></ion-icon>
        posts you've seen
      </ion-item>
      <ion-item button>
        <ion-icon slot="start" name="search" color="medium"></ion-icon>
        posts you may know
      </ion-item>
      <ion-item button>
        <ion-icon slot="start" name="search" color="medium"></ion-icon>
        videos you may like
      </ion-item>
      <ion-item button>
        <ion-icon slot="start" name="search" color="medium"></ion-icon>
        groups you may like
      </ion-item>
      <ion-item button>
        <ion-icon slot="start" name="search" color="medium"></ion-icon>
        events you may like
      </ion-item>
      <ion-item button>
        <ion-icon slot="start" name="search" color="medium"></ion-icon>
        shops you may like
      </ion-item>
    </ion-list>
  </div>
</ion-content>
```
