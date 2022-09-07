import {GET_ORDER_DETAILS,REMOVE_ORDER_DETAILS} from '../../actions/orderDetail'
import { TOrder } from '../ordersDetail'

type TStateOrder = {
  order: TOrder
}

interface IGetOrderDetails {
  readonly type: typeof GET_ORDER_DETAILS;
  readonly data: TOrder
}

interface IRemoveOrderDetails {
  readonly type: typeof REMOVE_ORDER_DETAILS;
  readonly data: {}
}

type TUnionOrderDetail = IGetOrderDetails | IRemoveOrderDetails;

export { TStateOrder, TUnionOrderDetail}
