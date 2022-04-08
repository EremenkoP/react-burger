import React from "react";
import {ConstructorElement, DragIcon, CurrencyIcon, Button } from '@ya.praktikum/react-developer-burger-ui-components'

import style from "./burgerConstructor.module.css"

const BurgerConstructor = ({ingredients}) => {
  return (
    <>
      <div className={" pr-2 "+style.container}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
          <div  key={ingredients[0]._id} className={style.element}>
            <ConstructorElement
              type="top"
              isLocked={true}
              text={ingredients[0].name}
              price={ingredients[0].price}
              thumbnail={ingredients[0].image_mobile}
          />
           </div>
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
          <div  key={ingredients[0]._id} className={style.element}>
            <ConstructorElement
              type="bottom"
              isLocked={true}
              text={ingredients[0].name}
              price={ingredients[0].price}
              thumbnail={ingredients[0].image_mobile}
          />
           </div>
        </div>
      </div>
      <div className={" mt-10 " + style.price}>
        <p className="mr-10 text text_type_digits-medium">
          <CurrencyIcon type="primary" />
        </p>
        <Button type="primary" size="large">
          Оформить заказ
        </Button>
      </div>
    </>
  )
}

export default BurgerConstructor;
