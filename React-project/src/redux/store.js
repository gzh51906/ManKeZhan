import { createStore } from "redux";
import allReducer from "./reducer/index"
const store = createStore(allReducer);
export default store;