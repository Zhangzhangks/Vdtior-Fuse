export default {
    namespaced: true,
    state: {
        name: 'zks',
        age: '18'
    },
    getters: {
        getName: (state, getters) => {
            return state.name.length
        }
    },
    mutations: {
        changeName: (state, val) => {
            state.name = val
        }
    },
    actions: {
        updates: (ctx, playload) => {
            console.log('user模块的actions');
        }
    }
}