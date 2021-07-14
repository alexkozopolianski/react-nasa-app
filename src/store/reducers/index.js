import { combineReducers } from "redux";
import AppReducer from "./appReducer";

const rootReducer = combineReducers({
  astronomy: AppReducer,
});

export default rootReducer;
