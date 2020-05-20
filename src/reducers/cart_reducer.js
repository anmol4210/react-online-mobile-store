import { ADD_MOBILE, DELETE_MOBILE } from '../actions/action'
function cart(state = [], action) {
    let cart = []
    switch (action.type) {

        case ADD_MOBILE:
            cart = [...state, action.mobile]
            return cart

        case DELETE_MOBILE:
            console.log(action)
            cart = state.filter(item => item.id !== action.mobile.id)
            return cart
        default:
            return state

    }

}

export default cart