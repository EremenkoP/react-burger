import React, { useMemo } from "react";
import PropTypes from "prop-types";
import {ConstructorElement, DragIcon, CurrencyIcon, Button } from '@ya.praktikum/react-developer-burger-ui-components'
// import { ingredientPropTypes } from "../burgerIngredients/BurgerIngredients";
import {IngredientsContext} from "../services/allContext"

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

const BurgerConstructor = ({ handleOrder}) => {

  const ingredients = React.useContext(IngredientsContext)

  const buns = ingredients.filter((ingredient)=> ingredient.type === "bun")

  return (
    <>
    { buns[0] && (<div  key={buns[0]._id} className={" mr-4 " + style.element_top}>
      <ConstructorElement
      type="top"
      isLocked={true}
      text={`${buns[0].name} (верх)`}
      price={buns[0].price}
      thumbnail={buns[0].image_mobile}
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
      { buns[0] && (<div  key={buns[0]._id} className={" mr-4 " + style.element_buttom}>
        <ConstructorElement
          type="bottom"
          isLocked={true}
          text={`${buns[0].name} (низ)`}
          price={buns[0].price}
          thumbnail={buns[0].image_mobile}
        />
      </div>)}
      <Order data={ingredients} handleOrder={handleOrder}/>
    </>
  )
}

BurgerConstructor.propTypes = {
  handleOrder: PropTypes.func.isRequired,
};

export default BurgerConstructor;
