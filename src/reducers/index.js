import {combineReducers} from 'redux';
import accounts from './accountReducer.js';

const rootReducer = combineReducers({
    accounts
});

export default rootReducer;