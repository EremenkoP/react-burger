import { combineReducers } from 'redux';

import {ingridientReducer} from './reducers/index'
import { authReducer } from './reducers/auth';
import {wsReducerAll} from './reducers/wsReducerAll'


const rootReducer = combineReducers({
  ingridientReducer,
  authReducer,
  wsReducerAll
})

export {rootReducer}
