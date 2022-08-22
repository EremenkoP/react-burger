import {WS_AUTH_CLOSED, WS_AUTH_OPENED, WS_AUTH_CLOSED_WITH_ERROR, WS_AUTH_GET_DATA} from '../actions/WSauth';

const wsState = {
  wsContected: false,
  connectionError:'',
  orders: {}
}

const wsReducerAuth = (state = wsState, action) => {
  switch (action.type) {
    case WS_AUTH_CLOSED: {
      return {
        ...state,
        wsContected: false
      }
    }
    case WS_AUTH_OPENED: {
      return {
        ...state,
        wsContected: true,
        connectionError: ''
      }
    }
    case WS_AUTH_CLOSED_WITH_ERROR: {
      return {
        ...state,
        wsContected: false,
        connectionError: action.data
      }
    }
    case WS_AUTH_GET_DATA: {
      return {
        ...state,
        orders: action.data.orders
      }
    }
    default: {
      return state
    }
  }
}

export {wsReducerAuth}
