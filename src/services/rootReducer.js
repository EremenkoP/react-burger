import { combineReducers } from 'redux';

import {ingridientReducer} from './reducers/index'
import { authReducer } from './reducers/auth';


const rootReducer = combineReducers({
  ingridientReducer,
  authReducer
})

export {rootReducer}
