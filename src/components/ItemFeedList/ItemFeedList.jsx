import { CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';

import { formatOrderDate } from '../../utils/date';
import {statusDone, statusMap} from "../../utils/constants";

import style from './ItemFeedList.module.css'


const ItemFeedList = ({order, isPersonal}) => {

  return (
    <article  className={'p-6 ' + style.box}>
      <div className={style.number__box}>
        <span className={'text text_type_digits-default'}>{`#${order.number}`}</span>
        <span className={'text text_type_main-default text_color_inactive'}>{formatOrderDate(order.createdAt)}</span>
      </div>
      <h3 className={'mt-6 text text_type_main-medium ' + style.name}>{order.name}</h3>
      {isPersonal &&
        <p className={`mt-2 text text_type_main-default ${order.status === statusDone.key ? style.done : ''}`}>
          {
            statusMap[order.status]?.name
          }
        </p>}
      <div className={'mt-6 ' + style.order__box}>
        {/* плашку для картинок и счетчик стоймости */}
        <div>
          {order.ingredients.map(ingredient => {
            <img src={ingredient.image_mobile} alt={"Миниатюра" + ingredient.name} />
          })}
        </div>
        <div className="text text_type_main-medium">
          {order.cost} <CurrencyIcon type="primary" />
        </div>
      </div>
    </article>
  )
}

export default ItemFeedList;
