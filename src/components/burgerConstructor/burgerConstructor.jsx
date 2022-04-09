import React from "react";
import PropTypes from "prop-types";
import {ConstructorElement, DragIcon, CurrencyIcon, Button } from '@ya.praktikum/react-developer-burger-ui-components'

import style from "./burgerConstructor.module.css"

const Order = ({data}) => {
  return (
    <div className={" mt-10 " + style.price}>
    <p className="mr-10 text text_type_digits-medium">
      <CurrencyIcon type="primary" />
    </p>
    <Button type="primary" size="large">
      Оформить заказ
    </Button>
  </div>
  )
}

const BurgerConstructor = ({ingredients}) => {

  return (
    <>
      <div className={" pr-2 "+style.container}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
          <div  key={'1'} className={style.element}>
            <ConstructorElement
              type="top"
              isLocked={true}
              text="Краторная булка N-200i (верх)"
              price={200}
              thumbnail="https://code.s3.yandex.net/react/code/bun-02-mobile.png"
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
          <div  key={"2"} className={style.element}>
            <ConstructorElement
              type="bottom"
              isLocked={true}
              text="Краторная булка N-200i (низ)"
              price={200}
              thumbnail="https://code.s3.yandex.net/react/code/bun-02-mobile.png"
          />
           </div>
        </div>
      </div>
      <Order data={ingredients}/>
    </>
  )
}

BurgerConstructor.propTypes = {
  ingredients: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default BurgerConstructor;
