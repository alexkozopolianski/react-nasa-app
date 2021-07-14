import { createStore, applyMiddleware, combineReducers } from "redux";
import promise from "redux-promise";
import rootReducer from "./reducers/index";

const Store = createStore(rootReducer, applyMiddleware(promise));

export default Store;
