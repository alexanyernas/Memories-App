<template>
    <div 
        v-if="memories.length === 0"
        class="container" 
    >
        <p>No memories :(</p>
    </div>
    <ion-list 
        v-else
        class="ion-padding" 
    >
        <memory-item 
            v-for="memory in memories"
            :key="memory.id"
            :memory="memory"
        ></memory-item>
    </ion-list>
</template>

<script lang="ts">
import { IonList } from '@ionic/vue'
import MemoryItem from './MemoryItem.vue'

import { mapState } from 'vuex';

export default {
    name: 'MemoriesList',
    components: { IonList, MemoryItem },
    computed: {
        ...mapState(['memories'])
    }
}
</script>

<style scoped>
.container
{
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
}

.container p
{
    font-weight: 600;
    font-size: 48px;
    color: #808289;
}
</style>