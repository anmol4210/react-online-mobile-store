import { ADD_MOBILE, DELETE_MOBILE, GET_ALL_MOBILES, GET_MOBILE_BY_ID } from '../actions/action'
// let all_mobiles = []
function mobiles(state = [], action) {
    let mobiles = []
    switch (action.type) {

        case GET_ALL_MOBILES:
            // console.log(action.data)
            state = action.data
            // all_mobiles = action.data
            return action.data;
        case GET_MOBILE_BY_ID:
            // state = action.data
            return action.data
        case ADD_MOBILE:
            // console.log(action)
            mobiles = state.filter(item => item.id !== action.mobile.id)
            return mobiles

        case DELETE_MOBILE:
            mobiles = [...state, action.mobile]
            return mobiles
        // case DELETE_ALL_MOBILES:
        //     console.log(action.data)
        //     state = action.data
        //     return action.data;

        default:
            return state
    }
}

export default mobiles

