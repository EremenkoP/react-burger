import { useHistory } from "react-router-dom";


import Modal from "../../components/modal/Modal";
import OrderTableDetail from "../../components/orderTableDetail/OrderTableDetail";

const OrderDetails = () => {

  const history = useHistory()

  const closeModals = () => {
    history.goBack();
  };

  return(
    <Modal onCloseClick={closeModals}>
      <OrderTableDetail />
    </Modal>
  )
}

export default OrderDetails;
