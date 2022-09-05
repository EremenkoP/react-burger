import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";


import Modal from "../../components/modal/Modal";
import OrderTableDetail from "../../components/orderTableDetail/OrderTableDetail";
import { REMOVE_ORDER_DETAILS } from "../../services/actions/orderDetail.ts";

const OrderDetails = () => {

  const history = useHistory()
  const dispatch = useDispatch()

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
