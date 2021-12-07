<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>Add Memory</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true">

    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/vue';

export default  {
  name: 'AddPage',
  components: { IonHeader, IonToolbar, IonTitle, IonContent, IonPage }
}
</script>