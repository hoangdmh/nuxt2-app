// export const state = () => {
//     return {
//         counter: 0
//     }
// }

//Cách 2
export const state = () => ({
    counter: 0
})

export const mutations = {
    increment(state) {
        state.counter++
    }
}

export const actions = {
    increment(context) {
        context.commit('increment')
    }
}