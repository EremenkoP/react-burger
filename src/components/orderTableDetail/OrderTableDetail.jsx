import { CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';

import style from './OrderTableDetail.module.css';

const OrderTableDetail = ({order}) => {

  const count = 123

  const price = 123123
  return(
    <div className={style.content}>
      <h4 className={'text text_type_digits-default '+ style.number}>{order._id}</h4>
      <p className='text text_type_main-medium mt-10 mb-3'>{order.name}</p>
      <span className={'text text_type_main-medium mt-3 mb-15 ' + style.span}>{order.status}</span>
      <p className='text text_type_main-medium mt-15 mb-6'>Состав:</p>
      <div className={'text text_type_main-default mt-6 mb-10 pr-6' + style.ingredient__box}>
        {order.ingredients.map(ingredient => {
          <div className={style.ingredient}>
            <img src={ingredient.image_mobile} alt={"Миниатюра" + ingredient.name} className={style.image}/>
            <p className={'text text_type_main-default '}>{ingredient.name}</p>
            <p className={'text text_type_main-default '}>{count}x{ingredient.price} <CurrencyIcon type="primary" /></p>
          </div>
        })}
      </div>
      <div className={style.footer}>
        <p className="text text_type_main-default text_color_inactive">{order.data}</p>
        <p className={'text text_type_main-default '}>{price} <CurrencyIcon type="primary" /></p>
      </div>
    </div>
  )
}

export default OrderTableDetail;
