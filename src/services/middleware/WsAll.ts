import { MiddlewareAPI, Middleware } from "redux";
import { WSS } from "../../utils/constants";
import { AppDispatch, RootState } from "../types/store";
import { TUnionWsAction } from "../types/ws";

const socketMiddleware = (url: string, wsAction: TUnionWsAction): Middleware => {
  return (store: MiddlewareAPI<AppDispatch, RootState>) => {
    let socket: WebSocket | null = null;

    return next => action => {
      const { dispatch } = store;
      const {type , data} = action;
      const {wsInit, onOpen, onClose, onError, onDate, wsStart, wsClose} = wsAction;

      if (type === wsInit) {
        socket = new WebSocket(`${WSS}${data}`)
      }

      if (socket) {
        if (type === wsStart) {
          socket.onopen = event => {
            dispatch ({type: onOpen})
          }
        }

        if (type === wsClose) {
          socket.onclose = event => {
            dispatch({type: onClose})
          }
        }

        socket.onerror = event => {
          dispatch({type: onError, data: event})
        }

        socket.onmessage = event => {
          const {data} = event;
          dispatch({type: onDate, data: JSON.parse(data)})
        }
      }

      next(action)
    }
  }
}

export default socketMiddleware
