<template>
    <ion-item-sliding>
        <ion-item @click="() => { $router.replace(`/memories/details/${memory.id}`) }">
            <ion-thumbnail slot="start">
                <img src="https://gravatar.com/avatar/dba6bae8c566f9d4041fb9cd9ada7741?d=identicon&f=y">
            </ion-thumbnail>
            <ion-label>{{ memory.title }}</ion-label>
        </ion-item>
        <ion-item-options side="end">
            <ion-item-option @click="deleteMemory(memory.id)">
                <ion-label>Delete</ion-label>
                <ion-icon :icon="trashSharp" />
            </ion-item-option>
        </ion-item-options>
    </ion-item-sliding>
</template>

<script lang="ts">
import { IonThumbnail, IonLabel, IonItem, IonItemSliding, IonItemOptions, IonItemOption, IonIcon } from '@ionic/vue'
import { trashSharp } from 'ionicons/icons'
import { mapActions } from 'vuex'

export default {
    name: 'MemoryItem',
    components: { IonThumbnail, IonLabel, IonItem, IonItemSliding, IonItemOptions, IonItemOption, IonIcon },
    props: {
        memory: Object
    },
    data () {
        return {
            trashSharp
        }
    },
    methods: {
        ...mapActions(['deleteMemory'])
    }
}
</script>

<style scoped>
ion-item-option
{
    --background: var(--ion-color-danger)
}
ion-icon
{
    margin-left: 5px;
}
</style>