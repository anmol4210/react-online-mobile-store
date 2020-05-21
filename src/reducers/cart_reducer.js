import { ADD_MOBILE, DELETE_MOBILE, DELETE_ALL_MOBILES } from '../actions/action'
function cart(state = [], action) {
    let cart = []
    switch (action.type) {

        case ADD_MOBILE:
            // let mob = state.filter(item => item.id === action.mobile.id)
            let mob = state.find((item, index) => {
                if (item.id === action.mobile.id) {
                    if (state[index].count === undefined) {
                        state[index].count = 2
                    }
                    else {
                        state[index].count += 1
                    }
                    return true
                }
                else {
                    return false
                }
            })
            // console.log("mob", mob)
            if (mob === undefined) {
                cart = [...state, action.mobile]
            }
            else {
                cart = [...state]
            }
            return cart

        case DELETE_MOBILE:
            console.log(action)
            cart = state.filter(item => item.id !== action.mobile.id)
            return cart

        case DELETE_ALL_MOBILES:
            return []
        default:
            return state

    }

}

export default cart