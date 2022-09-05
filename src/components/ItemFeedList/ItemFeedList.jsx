import { CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import { useDispatch, useSelector } from 'react-redux';
import { useMemo } from 'react';

import { formatOrderDate } from '../../utils/date';
import {statusDone, statusMap} from "../../utils/constants";

import style from './ItemFeedList.module.css'
import { GET_ORDER_DETAILS } from '../../services/actions/orderDetail.ts';


const ItemFeedList = ({order, isPersonal}) => {

  const dispatch = useDispatch()

  const ingredients = useSelector(store => store.ingridientReducer.ingredients)
  const len = order.ingredients ? order.ingredients.length : 0

  const images = useMemo(
    () => order.ingredients.slice(0, 6).map(item => ingredients.find(i => i._id === item)?.image_mobile)
  , [order.ingredients, ingredients])

  const total = useMemo(
    () => order.ingredients.reduce((accumulator, item) => {
      const ingredient =ingredients.find(i => i._id === item)
      const price = (ingredient.type === 'bun') ? ingredient.price * 2 : ingredient.price;
      accumulator += (!price ? 0 : price)
      return accumulator
    }, 0),
    [order.ingredients, ingredients]
  )

  const handleClick = () => {
    dispatch({
      type: GET_ORDER_DETAILS,
      data: order
    })
  }

  return (
    <article  className={'p-6 ' + style.box} onClick={handleClick}>
      <div className={style.number__box}>
        <span className={'text text_type_digits-default'}>{`#${order.number}`}</span>
        <span className={'text text_type_main-default text_color_inactive'}>{formatOrderDate(order.createdAt)}</span>
      </div>
      <h3 className={'mt-6 text text_type_main-medium ' + style.name}>{order.name}</h3>
      {isPersonal &&
        <p className={`mt-2 text text_type_main-default ${order.status === statusDone.key ? style.done : order.status === statusDone.key ? style.cansel :''}`}>
          {
            statusMap[order.status]?.name
          }
        </p>}
      <div className={'mt-6 ' + style.order__box}>
        <div className={style.images}>
          <ul className={`${style.imageList}`}>
            {images.map((image, index) => {
              return (
                <li key={index} style={{left: index * 48, zIndex: 6 - index, position: 'absolute'}}>
                  <div className={style.imageContainer}>
                    <img className={style.image} src={image} alt="Burger ingredient" />
                  </div>
                </li>);
              })}
          </ul>
          {
            len > 6 && (
              <p className={`text text_type_main-default ${style.fakeImage}`} style={{left: (6 - 1) * 48}}>
                {`+${len - 6}` }
              </p>
          )
          }
        </div>
        <div className="text text_type_digits-default">
          {total} <CurrencyIcon type="primary" />
        </div>
      </div>
    </article>
  )
}

export default ItemFeedList;
