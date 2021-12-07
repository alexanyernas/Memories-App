<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>{{ title }}</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true">

    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/vue';

export default  {
  name: 'DetailsPage',
  components: { IonHeader, IonToolbar, IonTitle, IonContent, IonPage },
  data () {
    return {
      title: 'First day in university'
    }
  }
}
</script>