import { CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import { useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';

import { statusMap, statusDone, statusCancel } from '../../utils/constants';
import { formatOrderDate } from '../../utils/date';
import { makeUniq } from '../../utils/makeUniq';

import style from './OrderTableDetail.module.css';

const OrderTableDetail = () => {

  const local = useLocation()

  const orders = useSelector(state => state.wsReducerAll.data.orders);
  const ingredients = useSelector(store => store.ingridientReducer.ingredients);

  let order;
  let ingredientsInOrder = [];

  const orderId =  local.pathname.split('/feed/')[1];
  orders.map(el => {
    if (el._id === orderId) {
      order = el
    }
  });

  order.ingredients.map(id => {
    ingredients.map(ingredient => {
      if (ingredient._id === id) {
        ingredientsInOrder.push(ingredient)
      }
    })
  })

  const count = (ingredient) => {
    if (ingredient.type === 'bun') {
      return 2
    } else {
      return ( ingredientsInOrder.filter(i => i._id === ingredient._id).length)
    }
  }

  const ingredientsSet= makeUniq(ingredientsInOrder);

  const price = ingredientsSet.reduce((accumulator, currentValue) => accumulator + (currentValue.price* count(currentValue)),0);

  return(
    <div className={style.content}>
      <h4 className={'text text_type_digits-default '+ style.number}>{order.number}</h4>
      <p className='text text_type_main-medium mt-10 mb-3'>{order.name}</p>
      <span className={`text text_type_main-medium mt-3 mb-15 ${order.status === statusDone.key ? style.done : order.status === statusCancel.key ? style.cansel :''}`}>
        {statusMap[order.status].value}
      </span>
      <p className='text text_type_main-medium mt-15 mb-6'>Состав:</p>
      <ul className={'text text_type_main-default mt-2 mb-10 pr-10 ' + style.ingredient__box}>
        {
          ingredientsSet.map(ingredient => (
            <li className={"mt-4 " +style.ingredient } key={ingredient._id}>
              <div className={style.imageContainer}>
                <img src={ingredient.image_mobile} alt={"Миниатюра" + ingredient.name} className={style.image}/>
              </div>
              <p className={'text text_type_main-default '}>{ingredient.name}</p>
              <p className={'text text_type_digits-default ' + style.price}>{count(ingredient)} x {ingredient.price} &nbsp; <CurrencyIcon type="primary" /></p>
            </li>
          ))
        }
      </ul>
      <div className={style.footer}>
        <p className="text text_type_main-small text_color_inactive">{formatOrderDate(order.createdAt)}</p>
        <p className={'text text_type_digits-default '}>{price} <CurrencyIcon type="primary" /></p>
      </div>
    </div>
  )
}

export default OrderTableDetail;
