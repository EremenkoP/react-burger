import { combineReducers } from 'redux';

import {ingridientReducer} from './reducers/index'
import { authReducer } from './reducers/auth';
import {wsReducerAll} from './reducers/wsReducerAll'
import {orderReducer} from './reducers/orderDetail'
import {wsReducerAuth} from './reducers/wsReducerAuth'


const rootReducer = combineReducers({
  ingridientReducer,
  authReducer,
  wsReducerAll,
  orderReducer,
  wsReducerAuth
})

export {rootReducer}
