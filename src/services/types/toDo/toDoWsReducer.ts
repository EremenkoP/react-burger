import { TOrderDetail } from "../ordersDetail"
import {WS_CLOSED, WS_OPENED, WS_CLOSED_WITH_ERROR, WS_GET_DATA} from '../../actions/WS';
import {WS_AUTH_CLOSED, WS_AUTH_OPENED, WS_AUTH_CLOSED_WITH_ERROR, WS_AUTH_GET_DATA} from '../../actions/WSauth';

type TInitialWsState = {
  wsContected: false,
  connectionError: '',
  orders: {}
}

type TWsState = {
  wsContected: boolean,
  connectionError: string,
  orders: {} | Array<TOrderDetail>
}

interface IWsClosed {
  readonly type: typeof WS_CLOSED;
}

interface IWsOpened {
  readonly type: typeof WS_OPENED;
}

interface IWsClosedWithError {
  readonly type: typeof WS_CLOSED_WITH_ERROR;
  readonly data: string
}

interface IWsGetData {
  readonly type: typeof WS_GET_DATA;
  readonly data: Array<TOrderDetail>
}

type TUnioniWsAll = IWsClosed | IWsOpened | IWsClosedWithError | IWsGetData

interface IWsAuthClosed {
  readonly type: typeof WS_AUTH_CLOSED;
}

interface IWsAuthOpened {
  readonly type: typeof WS_AUTH_OPENED;
}

interface IWsAuthClosedWithError {
  readonly type: typeof WS_AUTH_CLOSED_WITH_ERROR;
  readonly data: string
}

type TAuthOrders = {
  orders: Array<TOrderDetail>;
  success: boolean
  total: number
  totalToday: number
}

interface IWsAuthGetData {
  readonly type: typeof WS_AUTH_GET_DATA;
  readonly data: TAuthOrders
}

type TUnioniWsAuth = IWsAuthClosed | IWsAuthOpened | IWsAuthClosedWithError | IWsAuthGetData

export {TInitialWsState, TWsState, TUnioniWsAll, TUnioniWsAuth}
