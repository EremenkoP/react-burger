import { combineReducers } from 'redux';

import {ingridientReducer} from './reducers/index'
import { authReducer } from './reducers/auth';
import {wsReducerAll} from './reducers/wsReducerAll'
import {orderReducer} from './reducers/orderDetail'


const rootReducer = combineReducers({
  ingridientReducer,
  authReducer,
  wsReducerAll,
  orderReducer
})

export {rootReducer}
