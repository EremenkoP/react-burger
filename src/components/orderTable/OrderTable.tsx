import { FC } from 'react';
import { TOrdersData } from '../../services/types/toDo/toDoWsReducer';
import style from './OrderTable.module.css'

type TOrderTable = {
  data: TOrdersData;
  className: string
}

const OrderTable: FC<TOrderTable> = ({data, className}) => {

  const orderReady = data.orders.filter(order => order.status === 'done')
  const orderInWork = data.orders.filter(order => order.status !== 'done')

  return(
    <article className={`${style.box} ${className}`}>
      <div className={style.orders}>
        <p className={'text text_type_main-medium ' + style.ready}>Готовы:</p>
        <ul className={style.numberReady}>
          {orderReady.map((order) => (
            <li key={order.number} className={"text text_type_digits-default "}>
              {order.number}
            </li>
          ))}
        </ul>
        <p className={'text text_type_main-medium '+ style.inWork}>В работе:</p>
        <ul className={style.numberInWork}>
        {orderInWork.length !== 0 ?
          (orderInWork.map((order) => (
              <li key={order.number} className={"text text_type_digits-default "}>
                {order.number}
              </li>
            ))
          ) : (
            <span className={"text text_type_main-medium "}>ждем заказа</span>
          )}
        </ul>
      </div>
      <p className='mt-10 text text_type_main-medium '>Выполнено за все время:</p>
      <p className="text text_type_digits-large"> {data.total} </p>
      <p className='mt-10 text text_type_main-medium '>Выполнено за сегодня:</p>
      <p className="text text_type_digits-large"> {data.totalToday} </p>
    </article>
  )
}

export default OrderTable

