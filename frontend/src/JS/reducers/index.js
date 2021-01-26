import {combineReducers} from 'redux' ; 
import userReducer from './userReducers';

import tshirtReducer from './tshirtReducer';
import jeansReducer from './jeansReducer';
import shoesReducer from './shoesReducer'
const combineReducer = combineReducers({userReducer ,tshirtReducer ,shoesReducer, jeansReducer})
export default combineReducer ;