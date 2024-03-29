import { noneOrders } from '../../utils/constants';
import {WS_CLOSED, WS_OPENED, WS_CLOSED_WITH_ERROR, WS_GET_DATA} from '../actions/WS';
import { TUnioniWsAll, TWsState } from '../types/toDo/toDoWsReducer';

const initalState: TWsState = {
  wsContected: false,
  connectionError: {},
  orders: noneOrders
}

const wsReducerAll = (state = initalState, action: TUnioniWsAll): TWsState => {
  switch (action.type) {
    case WS_CLOSED: {
      return {
        ...state,
        wsContected: false
      }
    }
    case WS_OPENED: {
      return {
        ...state,
        wsContected: true,
        connectionError: {}
      }
    }
    case WS_CLOSED_WITH_ERROR: {
      return {
        ...state,
        wsContected: false,
        connectionError: action.data
      }
    }
    case WS_GET_DATA: {
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

export {wsReducerAll}
