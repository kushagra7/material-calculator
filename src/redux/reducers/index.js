import { combineReducers } from 'redux';
import { materialReducer } from "../reducers/materialReducer";


export default combineReducers({
    material:materialReducer,
});
