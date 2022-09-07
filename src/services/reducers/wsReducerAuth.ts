import { noneOrders } from '../../utils/constants';
import {WS_AUTH_CLOSED, WS_AUTH_OPENED, WS_AUTH_CLOSED_WITH_ERROR, WS_AUTH_GET_DATA} from '../actions/WSauth';
import { TUnioniWsAuth, TWsState } from '../types/toDo/toDoWsReducer';

const wsState: TWsState = {
  wsContected: false,
  connectionError:{},
  orders: noneOrders
}

const wsReducerAuth = (state = wsState, action: TUnioniWsAuth):TWsState => {
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
        connectionError: {}
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
        orders: action.data
      }
    }
    default: {
      return state
    }
  }
}

export {wsReducerAuth}
