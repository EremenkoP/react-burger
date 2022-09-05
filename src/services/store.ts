import { rootReducer } from "./rootReducer";
import { createStore, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import {WS_CLOSED, WS_OPENED, WS_CLOSED_WITH_ERROR, WS_GET_DATA, WS_IS_OPEN, WS_IS_CLOSE} from './actions/WS'
import { WS_AUTH_START, WS_AUTH_CLOSED, WS_AUTH_OPENED, WS_AUTH_CLOSED_WITH_ERROR, WS_AUTH_GET_DATA, WS_AUTH_IS_OPEN} from "./actions/WSauth";
import socetMiddleware from "./middleware/WsAll";
import { accessToken, WSS } from "../utils/constants";
import { GET_INGREDIENTS } from "./actions";
import { getCookie } from "../utils/cookie";
import { TWsAction, TWsAuthAction } from "./types/ws";

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
  }
}

const composeEnhancers =
  typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    : compose;

const wsAction = {
  wsInit: GET_INGREDIENTS,
  onOpen: WS_OPENED,
  onClose: WS_CLOSED,
  onError: WS_CLOSED_WITH_ERROR,
  onDate: WS_GET_DATA,
  wsStart: WS_IS_OPEN,
  wsClose: WS_IS_CLOSE
}

const wsAuthAction = {
  wsInit: WS_AUTH_START,
  onOpen: WS_AUTH_OPENED,
  onClose: WS_AUTH_CLOSED,
  onError: WS_AUTH_CLOSED_WITH_ERROR,
  onDate: WS_AUTH_GET_DATA,
  wsStart: WS_AUTH_IS_OPEN,
  wsClose: WS_AUTH_CLOSED
}

const enhancer = composeEnhancers(applyMiddleware(
  thunk,
  socetMiddleware<TWsAction>(`${WSS}/all`, wsAction),
  socetMiddleware<TWsAuthAction>(`${WSS}?token=${getCookie(accessToken)}`, wsAuthAction)
  ));

const store = createStore(rootReducer, enhancer);

export default store
