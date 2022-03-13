import { combineReducers, createStore } from "redux";
import headerReducer from "./headerReducer";
import mainReducer from "./mainReducer"

let reducers = combineReducers({
	mainPage: mainReducer,
	headerPage: headerReducer,
})

let store = createStore(reducers)
export default store;