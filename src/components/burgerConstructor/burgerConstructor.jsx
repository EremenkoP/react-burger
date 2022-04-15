import React, { useMemo } from "react";
import PropTypes from "prop-types";
import {ConstructorElement, DragIcon, CurrencyIcon, Button } from '@ya.praktikum/react-developer-burger-ui-components'

import style from "./burgerConstructor.module.css"
import { ingredientPropTypes } from "../burgerIngredients/BurgerIngredients";

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

const BurgerConstructor = ({ingredients, handleOrder}) => {

  return (
    <>
    { ingredients[0] && (<div  key={ingredients[0]._id} className={" mr-4 " + style.element_top}>
      <ConstructorElement
      type="top"
      isLocked={true}
      text={`${ingredients[0].name} (верх)`}
      price={ingredients[0].price}
      thumbnail={ingredients[0].image_mobile}
      />
    </div> )}
      <div className={" pr-2 "+style.container}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
          {ingredients
            .filter((ingredient) => ingredient.type !== "bun")
            .map((ingredient) => (
              <>
                <div  key={ingredient._id} className={style.element}>
                  <DragIcon type="primary" />
                  <ConstructorElement
                    text={ingredient.name}
                    price={ingredient.price}
                    thumbnail={ingredient.image_mobile}
                  />
                </div>
              </>
          ))}
        </div>
      </div>
      { ingredients[0] && (<div  key={ingredients[0]._id} className={" mr-4 " + style.element_buttom}>
        <ConstructorElement
          type="bottom"
          isLocked={true}
          text={`${ingredients[0].name} (низ)`}
          price={ingredients[0].price}
          thumbnail={ingredients[0].image_mobile}
        />
      </div>)}
      <Order data={ingredients} handleOrder={handleOrder}/>
    </>
  )
}

BurgerConstructor.propTypes = {
  ingredients: PropTypes.arrayOf(ingredientPropTypes).isRequired,
  handleOrder: PropTypes.func.isRequired,
};

export default BurgerConstructor;
