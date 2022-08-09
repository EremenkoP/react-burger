import { CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';

import style from './ItemFeedList.module.css'

const ItemFeedList = ({numder, data, name, ingredients, cost}) => {
  return (
    <article  className={'p-6 ' + style.box}>
      <div className={style.number__box}>
        <span className={'text text_type_digits-default'}>{numder}</span>
        <span className={'text text_type_digits-default text_color_inactive'}>{data}</span>
      </div>
      <h3 className={'mt-6 text text_type_main-medium ' + style.name}>{name}</h3>
      <div className={'mt-6 ' + style.order__box}>
        <div>
          {ingredients.map(ingredient => {
            <img src={ingredient.image_mobile} alt={"Миниатюра" + ingredient.name} />
          })}
        </div>
        <div className="text text_type_main-medium">
          {cost} <CurrencyIcon type="primary" />
        </div>
      </div>
    </article>
  )
}

export default ItemFeedList;
