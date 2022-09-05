import {GET_ORDER_DETAILS,REMOVE_ORDER_DETAILS} from '../../actions/orderDetail'
import { TOrderDetail } from '../ordersDetail'

type TInitialStateOrder = {
  order: {}
}

type TStateOrder = {
  order: {} | TOrderDetail
}

interface IGetOrderDetails {
  readonly type: typeof GET_ORDER_DETAILS;
  readonly data: TOrderDetail
}

interface IRemoveOrderDetails {
  readonly type: typeof REMOVE_ORDER_DETAILS;
  readonly data: {}
}

type TUnionOrderDetail = IGetOrderDetails | IRemoveOrderDetails;

export {TInitialStateOrder, TStateOrder, TUnionOrderDetail}
