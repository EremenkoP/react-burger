import { rootReducer } from "./rootReducer";
import { createStore, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import {WS_CLOSED, WS_OPENED, WS_CLOSED_WITH_ERROR, WS_GET_DATA} from './actions/WS'
import { WS_AUTH_START, WS_AUTH_CLOSED, WS_AUTH_OPENED, WS_AUTH_CLOSED_WITH_ERROR, WS_AUTH_GET_DATA } from "./actions/WSauth";
import socetMiddleware from "./middleware/WsAll";
import { accessToken, WSS } from "../utils/constants";
import { GET_INGREDIENTS } from "./actions";
import { getCookie } from "../utils/cookie";


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

const wsAuthAction = {
  wsInit: WS_AUTH_START,
  onOpen: WS_AUTH_OPENED,
  onClose: WS_AUTH_CLOSED,
  onError: WS_AUTH_CLOSED_WITH_ERROR,
  onDate: WS_AUTH_GET_DATA
}

const enhancer = composeEnhancers(applyMiddleware(
  thunk,
  socetMiddleware(`${WSS}/all`, wsAction),
  socetMiddleware(`${WSS}?token=${getCookie(accessToken)}`, wsAuthAction)
  ));

const store = createStore(rootReducer, enhancer);

export {store}
