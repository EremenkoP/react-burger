import React, { useEffect } from "react";
import PropTypes from "prop-types";
import {ConstructorElement, DragIcon, CurrencyIcon, Button } from '@ya.praktikum/react-developer-burger-ui-components'

import style from "./burgerConstructor.module.css"

const Order = ({data, handleOrder}) => {
  const [endPrice, setEndPrice] = React.useState(0);

  useEffect(()=> {
    let summ = data.reduce(
      (total, data) =>  total + data.price, 0
    )
    setEndPrice(summ)
  })

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
      <div className={" pr-2 "+style.container}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
          <div  key={'sdfn2kckfwsd7'} className={style.element}>
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
          <div  key={"sdfgs34b68gv534"} className={style.element}>
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
      <Order data={ingredients} handleOrder={handleOrder}/>
    </>
  )
}

BurgerConstructor.propTypes = {
  ingredients: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default BurgerConstructor;
