import { GET_INGREDIENTS } from "../actions"
import { WS_CLOSED, WS_CLOSED_WITH_ERROR, WS_GET_DATA, WS_IS_CLOSE, WS_IS_OPEN, WS_OPENED } from "../actions/WS"
import { WS_AUTH_CLOSED, WS_AUTH_CLOSED_WITH_ERROR, WS_AUTH_GET_DATA, WS_AUTH_IS_OPEN, WS_AUTH_OPENED, WS_AUTH_START } from "../actions/WSauth"

type TWsAction = {
  readonly wsInit: typeof  GET_INGREDIENTS,
  readonly onOpen: typeof  WS_OPENED,
  readonly onClose: typeof  WS_CLOSED,
  readonly  onError: typeof  WS_CLOSED_WITH_ERROR,
  readonly onDate: typeof  WS_GET_DATA,
  readonly wsStart: typeof  WS_IS_OPEN,
  readonly wsClose: typeof  WS_IS_CLOSE
}

type TWsAuthAction = {
  readonly wsInit: typeof  WS_AUTH_START,
  readonly onOpen: typeof  WS_AUTH_OPENED,
  readonly onClose: typeof  WS_AUTH_CLOSED,
  readonly onError: typeof  WS_AUTH_CLOSED_WITH_ERROR,
  readonly onDate: typeof  WS_AUTH_GET_DATA,
  readonly wsStart: typeof WS_AUTH_IS_OPEN,
  readonly wsClose: typeof WS_AUTH_CLOSED
}

type TUnionWsAction = TWsAction | TWsAuthAction;

export {TUnionWsAction, TWsAction, TWsAuthAction}
