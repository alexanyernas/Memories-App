import { createStore } from 'vuex'
import { Memory } from '../interfaces/Memory'
import { v4 } from 'uuid'

const store = createStore({
    state: {
        memories: [] as Memory[]
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
            newMemory = { ...newMemory, id: v4() }
            commit('addMemory', newMemory)
        },
        deleteMemory( {commit}, id: string ) {
            commit('deleteMemory', id)
        }
    },
    getters: {
        getMemoryById: ( state ) => ( id: string ) => {
            return state.memories.find( memory => memory.id === id )
        }
    }
})

export default store