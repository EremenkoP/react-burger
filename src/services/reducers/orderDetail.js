import { GET_ORDER_DETAILS, REMOVE_ORDER_DETAILS } from "../actions/orderDetail"

const orderState = {
  order: {}
}

const orderReducer = (state = orderState, action) => {
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
