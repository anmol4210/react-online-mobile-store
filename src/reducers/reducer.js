import { combineReducers } from "redux";

import mobiles from './product_reducer'
import cart from './cart_reducer'
const rootReducer = combineReducers({
    mobiles,
    cart
});

export default rootReducer;
