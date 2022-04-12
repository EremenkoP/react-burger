import {CheckMarkIcon} from '@ya.praktikum/react-developer-burger-ui-components'

import style from './OrderDetails.module.css'

const OrderDetails = () => {
  return (
    <>
    <h2 className={'text text_type_digits-large mt-30 '+style.number}>034536</h2>
    <p className={"text text_type_main-medium mt-8 " + style.id}>идентификатор заказа</p>
    <div className={"mt-15 "+style.check}>
      <CheckMarkIcon type="primary" />
    </div>
    <p className={"text text_type_main-default mt-15 "+style.order}>Ваш заказ начали готовить</p>
    <p className={"text text_type_main-default mt-2 mb-30 text_color_inactive "+style.order}>Дождитесь готовности на орбитальной станции</p>
    </>
  )
}

export default OrderDetails;
