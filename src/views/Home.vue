<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>My Memories</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true">
      <memories-list></memories-list>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import MemoriesList from '../components/List/MemoriesList.vue'
import { IonPage, IonHeader, IonToolbar, IonContent, IonTitle } from '@ionic/vue'

export default  {
  name: 'Home',
  components: {
    MemoriesList,
    IonPage,
    IonHeader,
    IonToolbar,
    IonContent,
    IonTitle
  }
}
</script>