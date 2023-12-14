
import { createStore } from 'vuex'
import user from './module/user'
// 创建一个新的 store 实例
const store = createStore({
    state() {
        return {
            count: 0
        }
    },
    mutations: {
        increment(state) {
            state.count++
        }
    },
    mutations: {},
    actions: {
        update: (ctx, playload) => {

        }
    },
    modules: {
        user
    }
})
export default store
