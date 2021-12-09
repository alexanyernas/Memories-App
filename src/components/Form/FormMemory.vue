<template>
    <form  
        @submit.prevent="() => { addMemory( memory); $router.replace('/memories/home') }" 
        class="ion-padding"
    >
        <ion-list>
            <ion-item>
                <ion-label position="floating">Title</ion-label>
                <ion-input v-model.trim="memory.title" required />
            </ion-item>
            <ion-item>
                <ion-label position="floating">Description</ion-label>
                <ion-textarea v-model.trim="memory.description" required />
            </ion-item>
        </ion-list>
      <ion-button type="submit" expand="full">SAVE</ion-button>
    </form>
</template>

<script lang="ts">
import {
    IonInput,
    IonLabel,
    IonButton,
    IonList,
    IonTextarea,
    IonItem
} from '@ionic/vue'

import { mapActions } from 'vuex'
import { Memory } from '../../interfaces/Memory'

export default {
    name: 'FormMemory',
    components: { IonInput, IonButton, IonList, IonTextarea, IonLabel, IonItem },
    data () {
        return {
            memory: { 
                id: '', 
                title: '', 
                description: ''
            } as Memory
        }
    },
    methods: {
        ...mapActions(['addMemory'])
    }
}
</script>