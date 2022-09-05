import {GET_USER, DELETE_USER, IS_AUTH ,IS_UNAUTH, TRY_RESET_PASSWORD, PASSWORD_IS_RESET} from '../../actions/auth'
import { TUser } from '../auth'

type TAuthState = {
  user: {} | TUser,
  isAuth: boolean,
  resetPassword: boolean
}

type TInitAuthState = {
  user: {},
  isAuth: false,
  resetPassword: false
}

interface IGetUser {
  readonly type: typeof GET_USER;
  readonly data: TUser
}

interface  IDeleteUser {
  readonly type: typeof DELETE_USER;
  readonly user: {};
}

interface  IIsAuth {
  readonly type: typeof IS_AUTH;
  readonly isAuth: true;
}

interface  IIsUnAuth {
  readonly type: typeof IS_UNAUTH;
  readonly isAuth: false;
}

interface  ITryResetPassword {
  readonly type: typeof TRY_RESET_PASSWORD;
  readonly resetPassword: true;
}

interface  IPasswordIsReset {
  readonly type: typeof PASSWORD_IS_RESET;
  readonly resetPassword: false;
}

type TUnionAuthAction = IGetUser | IDeleteUser | IIsAuth | IIsUnAuth| ITryResetPassword| IPasswordIsReset;


export {TAuthState, TInitAuthState, TUnionAuthAction}
