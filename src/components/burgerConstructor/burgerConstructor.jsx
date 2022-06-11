import React from "react";
import { useDispatch, useSelector } from 'react-redux'
import PropTypes from "prop-types";
import {ConstructorElement, CurrencyIcon, Button } from '@ya.praktikum/react-developer-burger-ui-components'
import { v4 as uuid } from 'uuid'
import { useDrop } from "react-dnd";

import { ingredientPropTypes } from "../burgerIngredients/BurgerIngredients";
import { ConstructorItem } from '../constructorItem/constructorItem';
import {GET_INGREDIENT_FOR_BURGER, GET_BUN_FOR_BURGER, GET_FIRTH_INGREDIENT_FOR_BURGER} from '../../services/actions/index'

import style from "./burgerConstructor.module.css"

const Order = ({bun, elseIngredients, handleOrder}) => {

  const endPrice  =  bun.price*2 + elseIngredients.reduce((accumulator, currentValue) => accumulator + currentValue.price,0);

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

  const dispatch = useDispatch()

  const ingredients = useSelector(store=> store.ingridientReducer.ingredientsForBurger);

  const bun = ingredients.bun;
  const elseIngredients = ingredients.elseIngregients

  const addElseIngredients = (data) => {
    const ingr = {...data.ingredient, 'uuid' : uuid()}
    if (elseIngredients) {
    elseIngredients.push(ingr);
    dispatch({
      type: GET_INGREDIENT_FOR_BURGER,
      data: elseIngredients
    })
    } else {
      dispatch({
        type: GET_FIRTH_INGREDIENT_FOR_BURGER,
        data: [ingr]
      })
    }
  }

  const [ {isHover }, dropTarget] = useDrop ({
    accept: "ingredients",
    collect: monitor => ({
      isHover: monitor.isOver()
    }),
    drop(dropIngredient) {
      if (dropIngredient.ingredient.type === 'bun' ) {
        dispatch({
          type: GET_BUN_FOR_BURGER,
          data: dropIngredient.ingredient
        })
      } else {
        addElseIngredients(dropIngredient)
      }
  }})

   return (
    <section className={`ml-10 mt-25 ${isHover && style.droppable}`}  ref={dropTarget}>
      { bun ?
        (<div className={" mr-4 " + style.element_top}>
          <ConstructorElement
          type="top"
          isLocked={true}
          text={`${bun.name} (верх)`}
          price={bun.price}
          thumbnail={bun.image_mobile}
          />
        </div> )
      :
        (
          <div className= { "mb-3 " + style.empty_buns__top}>
            <p>Сделайте выбор булочки</p>
          </div>
        )
      }
      {elseIngredients ?
        (<div className={" pr-2 "+style.container}>
          <ul style={{ display: 'flex', flexDirection: 'column', gap: '10px',  margin: 0, padding: 0 }}>
            {elseIngredients
              .map((ingredient, index) => (
                <ConstructorItem ingredient={ingredient} index={index} key={ingredient.uuid}/>
                ))}
          </ul>
        </div>)
      :
        (
          <div className={style.empty_elseIngredient}>
            <p>Сделайте выбор начинки </p>
          </div>
        )
      }

      { bun ?
        (<div className={" mr-4 " + style.element_buttom}>
          <ConstructorElement
            type="bottom"
            isLocked={true}
            text={`${bun.name} (низ)`}
            price={bun.price}
            thumbnail={bun.image_mobile}
          />
        </div>)
      :
        (
          <div className= {"mt-3 " + style.empty_buns__buttom}>
            <p>Сделайте выбор булочки</p>
          </div>
        )
      }
        {bun && elseIngredients && (<Order elseIngredients={elseIngredients}  bun={bun} handleOrder={handleOrder}/>)}
    </section>
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
