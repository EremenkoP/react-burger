import {GET_USER, DELETE_USER, IS_AUTH ,IS_UNAUTH, TRY_RESET_PASSWORD, PASSWORD_IS_RESET} from '../../actions/auth'
import { TUser } from '../auth'

type TAuthState = {
  user: TUser,
  isAuth: boolean,
  resetPassword: boolean
}

interface IGetUser {
  readonly type: typeof GET_USER;
  readonly data: TUser
}

interface  IDeleteUser {
  readonly type: typeof DELETE_USER;
}

interface  IIsAuth {
  readonly type: typeof IS_AUTH;
}

interface  IIsUnAuth {
  readonly type: typeof IS_UNAUTH;
}

interface  ITryResetPassword {
  readonly type: typeof TRY_RESET_PASSWORD;
}

interface  IPasswordIsReset {
  readonly type: typeof PASSWORD_IS_RESET;
}

type TUnionAuthAction = IGetUser | IDeleteUser | IIsAuth | IIsUnAuth| ITryResetPassword| IPasswordIsReset;


export {TAuthState, TUnionAuthAction}
