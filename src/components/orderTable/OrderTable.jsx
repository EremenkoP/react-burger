import style from '.OrderTable.module.css'

const OrderTable = () => {
  return(
    <article className={style.box}>
      <div className={style.orders}>
        <p className={'mb-6 text text_type_main-medium ' + style.ready}>Готовы:</p>
        <div className={style.numberReady}>
          {/* вычислить сколько готово */}
        </div>
        <p className={'mb-6 text text_type_main-medium '+ style.inWork}>В работе:</p>
        <div className={style.numberInWork}>
          {/* вычислить сколько готово */}
        </div>
      </div>
      <p className='mt-15 text text_type_main-medium '>Выполнено за все время:</p>
      <p className="text text_type_digits-large"> 123123123123 </p>
      <p className='mt-15 text text_type_main-medium '>Выполнено за сегодня:</p>
      <p className="text text_type_digits-large"> 123123123123 </p>
    </article>
  )
}

export default OrderTable

