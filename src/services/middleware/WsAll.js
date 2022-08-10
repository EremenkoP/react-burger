const socetMiddleware = (wsUrl, wsAction) => {
  return store => {
    let socket = null;

    return next => action => {
      const { dispatch } = store;
      const {type , data} = action;
      const {wsInit, onOpen, onClose, onError, onGetDate} = wsAction;

      console.log(1)

      if (type === wsInit) {
        socket = new WebSocket(wsUrl)
        console.log('connect', socket)
      }

      if (socket) {
        socket.onopen = event => {
          dispatch ({type: onOpen})
          console.log('onopen', event)
        }

        socket.onclose = event => {
          dispatch({type: onClose})
          console.log('onClose', event)
        }

        socket.onerror = event => {
          dispatch({type: onError, data: event})
          console.log('onerror', event)
        }

        socket.onmessage = event => {
          const {data} = event;
          dispatch({type: onGetDate, data: JSON.parse(data)})
          console.log('onmessage', event)
        }
      }

      next(action)
    }
  }
}

export default socetMiddleware
