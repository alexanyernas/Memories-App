<template>
  <ion-page>
    <ion-tabs>
      <ion-router-outlet></ion-router-outlet>
      <ion-tab-bar slot="bottom">
        <ion-tab-button tab="home" href="/memories/home">
          <ion-icon :icon="homeSharp" />
        </ion-tab-button>
        <ion-tab-button tab="add" href="/memories/add">
          <ion-icon :icon="addCircleSharp" />
        </ion-tab-button>
      </ion-tab-bar>
    </ion-tabs>
  </ion-page>
</template>

<script lang="ts">
import { 
  IonTabBar, 
  IonTabButton, 
  IonTabs, 
  IonIcon, 
  IonPage, 
  IonRouterOutlet 
} from '@ionic/vue';

import { 
  homeSharp, 
  addCircleSharp 
} from 'ionicons/icons';

export default {
  name: 'Home',
  components: { IonTabs, IonTabBar, IonTabButton, IonIcon, IonPage, IonRouterOutlet },
  data () {
    return {
      homeSharp, 
      addCircleSharp
    }
  }
}
</script>