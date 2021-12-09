import { createStore } from 'vuex'
import { Memory } from '../interfaces/Memory'
import { v4 } from 'uuid'

const store = createStore({
    state: {
        // memoryFind: {
        //     id: '',
        //     title: '',
        //     description: ''
        // } as Memory,
        memories: [] as Memory[],
    },
    mutations: {
        addMemory ( state, payload: Memory ) {
            state.memories = [...state.memories, payload]
        },
        deleteMemory ( state, payload: string ) {
            state.memories = state.memories.filter( memory => memory.id !== payload )
        },
        // memoryFilter ( state, payload: string ) {
        //     state.memoryFind = state.memories.find( memory => memory.id === payload )
        // } 
    },
    actions: {
        addMemory( {commit}, newMemory: Memory ) {
            newMemory = { ...newMemory, id: v4() }
            commit('addMemory', newMemory)
        },
        deleteMemory( {commit}, id: string ) {
            commit('deleteMemory', id)
        },
        // memoryFilter ( {commit}, id: string ) {
        //     commit('memoryFilter', id)
        // }
    }
})

export default store