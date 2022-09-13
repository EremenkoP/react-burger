import { TOrder } from "../ordersDetail"
import {WS_CLOSED, WS_OPENED, WS_CLOSED_WITH_ERROR, WS_GET_DATA, WS_START} from '../../actions/WS';
import {WS_AUTH_CLOSED, WS_AUTH_OPENED, WS_AUTH_CLOSED_WITH_ERROR, WS_AUTH_GET_DATA, WS_AUTH_START} from '../../actions/WSauth';

type TWsState = {
  wsContected: boolean,
  connectionError: {} | string,
  orders: TOrdersData
}

interface IWsClosed {
  readonly type: typeof WS_CLOSED;
}

interface IWsOpened {
  readonly type: typeof WS_OPENED;
}

interface IWsClosedWithError {
  readonly type: typeof WS_CLOSED_WITH_ERROR;
  readonly data: {}
}

interface IWsGetData {
  readonly type: typeof WS_GET_DATA;
  readonly data: TOrdersData
}

interface IWsStart {
  readonly type: typeof WS_START;
  readonly data: string;
}

type TUnioniWsAll = IWsClosed | IWsOpened | IWsClosedWithError | IWsGetData |IWsStart

interface IWsAuthClosed {
  readonly type: typeof WS_AUTH_CLOSED;
}

interface IWsAuthOpened {
  readonly type: typeof WS_AUTH_OPENED;
}

interface IWsAuthStart {
  readonly type: typeof WS_AUTH_START;
  readonly data: string;
}

interface IWsAuthClosedWithError {
  readonly type: typeof WS_AUTH_CLOSED_WITH_ERROR;
  readonly data: {}
}

type TOrdersData = {
  orders: Array<TOrder>;
  success: boolean
  total: number
  totalToday: number
}

interface IWsAuthGetData {
  readonly type: typeof WS_AUTH_GET_DATA;
  readonly data: TOrdersData
}

type TUnioniWsAuth = IWsAuthClosed | IWsAuthOpened | IWsAuthClosedWithError | IWsAuthGetData | IWsAuthStart;

export { TWsState, TUnioniWsAll, TUnioniWsAuth, TOrdersData}
