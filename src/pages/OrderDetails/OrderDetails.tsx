import { useHistory } from "react-router-dom";

import Modal from "../../components/modal/Modal";
import OrderTableDetail from "../../components/orderTableDetail/OrderTableDetail";
import { useAppDispatch } from "../../hooks/store";
import { REMOVE_ORDER_DETAILS } from "../../services/actions/orderDetail";

const OrderDetails = () => {

  const history = useHistory()
  const dispatch = useAppDispatch()

  const closeModals = () => {
    dispatch({type: REMOVE_ORDER_DETAILS})
    history.goBack();
  };

  return(
    <Modal onCloseClick={closeModals}>
      <OrderTableDetail />
    </Modal>
  )
}

export default OrderDetails;
