<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-back-button
            default-href="/memories/home"
          >  
          </ion-back-button>
        </ion-buttons>
        <ion-title>{{ memoryFind.title }}</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true">
      <ion-card>
        <ion-card-header>
          <ion-card-subtitle>Alexanyer Naranjo</ion-card-subtitle>
          <ion-card-title>{{ memoryFind.title }}</ion-card-title>
        </ion-card-header>
        <ion-card-content>
          {{ memoryFind.description }}
        </ion-card-content>
      </ion-card>
    </ion-content>
  </ion-page>
</template>

<script>
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonButtons, IonBackButton, IonCard, IonCardContent, IonCardTitle, IonCardSubtitle, IonCardHeader } from '@ionic/vue';

export default  {
  name: 'DetailsPage',
  components: { IonHeader, IonToolbar, IonTitle, IonContent, IonPage, IonButtons, IonBackButton, IonCard, IonCardHeader, IonCardTitle, IonCardSubtitle, IonCardContent },
  data () {
    return {
      memoryFind: this.$store.getters.getMemoryById( this.$route.params.id )
    }
  }
}
</script>