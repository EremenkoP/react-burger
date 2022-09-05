import { GET_ORDER_DETAILS, REMOVE_ORDER_DETAILS } from "../actions/orderDetail"
import { TInitialStateOrder, TStateOrder, TUnionOrderDetail } from "../types/toDo/todoOrder"

const orderState: TInitialStateOrder = {
  order: {}
}

const orderReducer = (state = orderState, action: TUnionOrderDetail): TStateOrder => {
  switch (action.type) {
    case GET_ORDER_DETAILS: {
      return {
        ...state,
        order: action.data
      }
    }
    case REMOVE_ORDER_DETAILS: {
      return {
        ...state,
        order: {}
      }
    }
    default: {
      return state
    }
  }
}

export {orderReducer}
