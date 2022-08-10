import { rootReducer } from "./rootReducer";
import { createStore, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import {WS_CLOSED, WS_OPENED, WS_CLOSED_WITH_ERROR, WS_GET_DATA} from './actions/WS'
import socetMiddleware from "./middleware/WsAll";
import { WSS } from "../utils/constants";
import { GET_INGREDIENTS } from "./actions";

const composeEnhancers =
  typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
    : compose;

const wsAction = {
  wsInit: GET_INGREDIENTS,
  onOpen: WS_OPENED,
  onClose: WS_CLOSED,
  onError: WS_CLOSED_WITH_ERROR,
  onDate: WS_GET_DATA
}

const enhancer = composeEnhancers(applyMiddleware(thunk, socetMiddleware(`${WSS}/all`, wsAction)));

const store = createStore(rootReducer, enhancer);

export {store}
