import { combineReducers } from 'redux';

import {ingridientReducer} from './reducers/index'


const rootReducer = combineReducers({
  ingridientReducer
})

export {rootReducer}
