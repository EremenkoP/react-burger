import { noneUser } from '../../utils/constants'
import {GET_USER, DELETE_USER, IS_AUTH ,IS_UNAUTH, TRY_RESET_PASSWORD, PASSWORD_IS_RESET} from '../actions/auth'
import { TAuthState, TUnionAuthAction } from '../types/toDo/toDoAuth'

const authState: TAuthState = {
  user: noneUser,
  isAuth: false,
  resetPassword: false
}

const authReducer = (state = authState, action:TUnionAuthAction): TAuthState => {
  switch(action.type) {
    case GET_USER: {
      return {
        ...state,
        user: action.data
      }
    }
    case DELETE_USER: {
      return {
        ...state,
        user: noneUser
      }
    }
    case IS_AUTH: {
      return{
        ...state,
        isAuth: true
      }
    }
    case IS_UNAUTH: {
      return{
        ...state,
        isAuth: false
      }
    }
    case TRY_RESET_PASSWORD: {
      return{
        ...state,
        resetPassword: true
      }
    }
    case PASSWORD_IS_RESET: {
      return {
        ...state,
        resetPassword: false
      }
    }
    default: {
      return state
    }
  }
}

export {authReducer}

