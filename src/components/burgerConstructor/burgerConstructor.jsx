import React, { useMemo } from "react";
import { useSelector } from 'react-redux'
import PropTypes from "prop-types";
import {ConstructorElement, DragIcon, CurrencyIcon, Button } from '@ya.praktikum/react-developer-burger-ui-components'

import { ingredientPropTypes } from "../burgerIngredients/BurgerIngredients";

import style from "./burgerConstructor.module.css"


const Order = ({data, handleOrder}) => {
  const endPrice  = useMemo(() => data.reduce(
    (total, data) => total + data.price, 0), [data]
  )


  return (
    <div className={" mt-10 " + style.price}>
    <p className="mr-10 text text_type_digits-medium">
      {endPrice}
      <CurrencyIcon type="primary" />
    </p>
    <Button type="primary" size="large" onClick={handleOrder}>
      Оформить заказ
    </Button>
  </div>
  )
}



const BurgerConstructor = ({ handleOrder }) => {

  const ingredients = useSelector(store=> store.ingredientsForBurger)
  //проверить чтобы работало правильно сортировка
  const buns = (ingredients !== undefined && ingredients.includes(ingredients.type("bun"))) ? ingredients.filter((ingredient)=> ingredient.type === "bun") : false
  const elseIngredients = ingredients !== undefined ?  ingredients.filter((ingredient) => ingredient.type !== 'bun') : false

   return (
    <>
    { buns ?
      (<div className={" mr-4 " + style.element_top}>
        <ConstructorElement
        type="top"
        isLocked={true}
        text={`${buns.name} (верх)`}
        price={buns.price}
        thumbnail={buns.image_mobile}
        />
      </div> )
    :
      (
        <div className= { style.empty_buns__top}>
          <p>Сделай выбор булочки</p>
        </div>
      )
    }

      {elseIngredients ?
        (<div className={" pr-2 "+style.container}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
            {elseIngredients
              .filter((ingredient) => ingredient.type !== "bun")
              .map((ingredient) => (
                <div  key={ingredient._id} className={style.element}>
                  <DragIcon type="primary" />
                  <ConstructorElement
                    text={ingredient.name}
                    price={ingredient.price}
                    thumbnail={ingredient.image_mobile}
                  />
                </div>))}
          </div>
        </div>)
      :
      (
        <div className={"mt-3 mb-3 "+style.empty_elseIngredient}>
          <p>Сделай выбор начинки </p>
        </div>
      )
      }

      { buns ?
       (<div className={" mr-4 " + style.element_buttom}>
         <ConstructorElement
          type="bottom"
          isLocked={true}
          text={`${buns.name} (низ)`}
          price={buns.price}
          thumbnail={buns.image_mobile}
        />
      </div>)
      :
        (
          <div className= { style.empty_buns__buttom}>
            <p>Сделай выбор булочки</p>
          </div>
        )
      }
      {ingredients && (<Order data={ingredients} handleOrder={handleOrder}/>)}
    </>
  )
}

BurgerConstructor.propTypes = {
  handleOrder: PropTypes.func.isRequired,
};

Order.PropType = {
  data: PropTypes.arrayOf(ingredientPropTypes).isRequired,
  handleOrders: PropTypes.func.isRequired
}

export default BurgerConstructor;
