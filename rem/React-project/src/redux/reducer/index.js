import { combineReducers } from 'redux';
import cartReducer from "./cart"

let Reducer = combineReducers({
    cart: cartReducer
})
export default Reducer;