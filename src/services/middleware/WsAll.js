const socetMiddleware = (wsUrl, wsAction) => {
  return store => {
    let socket = null;

    return next => action => {
      const { dispatch } = store;
      const {type , data} = action;
      const {wsInit, onOpen, onClose, onError, onDate} = wsAction;

      if (type === wsInit) {
        socket = new WebSocket(wsUrl)
      }

      if (socket) {
        socket.onopen = event => {
          dispatch ({type: onOpen})
        }

        socket.onclose = event => {
          dispatch({type: onClose})
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

export default socetMiddleware
