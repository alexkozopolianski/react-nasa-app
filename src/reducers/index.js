import { combineReducers } from 'redux';
import AppReducer from './app-reducer';


const rootReducer = combineReducers({
	astronomy: AppReducer,
	

})

export default rootReducer;