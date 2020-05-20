import { ADD_MOBILE, DELETE_MOBILE, GET_MOBILES } from '../actions/action'

function mobiles(state = [], action) {
    switch (action.type) {

        case GET_MOBILES:
            // console.log(action.data)
            state = action.data
            return action.data;
        case ADD_MOBILE:
            let mobiles = state.filter(item => item.id !== action.id)
            return mobiles

        case DELETE_MOBILE:
            mobiles = [...state, createMobile(action.id)]
            return mobiles
        default:
            return state
    }
}

export default mobiles

function createMobile(id) {
    let mobile = {}
    return mobile
}