import { createStore } from 'vuex'
import { Memory } from '../interfaces/Memory'

const store = createStore({
    state: {
        memories: [
            {
                id: '1',
                title: 'First day in university',
                description: 'First day with my friends and teachers in university'
            },
            {
                id: '2',
                title: 'Coocking with my family',
                description: 'Coocking a delicius chicken with my mother'
            },
            {
                id: '3',
                title: 'Lorem ipsum dolor sit amet 1',
                description: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium'
            }
        ]
    },
    mutations: {
        addMemory ( state, payload: Memory ) {
            state.memories = [...state.memories, payload]
        },
        deleteMemory ( state, payload: string ) {
            state.memories = state.memories.filter( memory => memory.id !== payload )
        } 
    },
    actions: {
        addMemory( {commit}, newMemory: Memory ) {
            commit('addMemory', newMemory)
        },
        deleteMemory( {commit}, id: string ) {
            commit('deleteMemory', id)
        }
    }
})

export default store