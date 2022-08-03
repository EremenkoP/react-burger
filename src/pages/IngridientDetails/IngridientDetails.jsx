import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

import IngredientDetails from "../../components/ingredientDetails/IngredientDetails";
import Modal from "../../components/modal/Modal";

import { DETAILS_REMOVE } from '../../services/actions/index'

const IngridientDetails = () => {
  const dispatch = useDispatch()
  const history = useHistory()

  const closeModals = () => {
    history.goBack();
    dispatch({type: DETAILS_REMOVE})
  };

  return(
    <Modal onCloseClick={closeModals} modalTitle={"Детали ингредиента"}>
      <IngredientDetails />
    </Modal>
  )
}

export default IngridientDetails;
