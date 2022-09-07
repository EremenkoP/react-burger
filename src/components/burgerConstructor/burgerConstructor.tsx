import { FC } from 'react';
import {ConstructorElement, CurrencyIcon, Button } from '@ya.praktikum/react-developer-burger-ui-components'
import { v4 as uuid } from 'uuid'
import { useDrop, DropTargetMonitor } from "react-dnd";

import { ConstructorItem } from '../constructorItem/constructorItem';
import {GET_INGREDIENT_FOR_BURGER, GET_BUN_FOR_BURGER} from '../../services/actions/index'

import { useAppSelector, useAppDispatch } from '../../hooks/store';

import style from "./burgerConstructor.module.css"

import { TBurgerItem, TIngredient } from '../../services/types/ingredient';

type TOrder = {
  bun: TIngredient;
  elseIngredients: Array<TIngredient>;
  handleOrder: (() => void) | undefined;
}

const Order: FC<TOrder> = ({bun, elseIngredients, handleOrder}) => {

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

type TBurgerConstructor = {
  handleOrder: (() => void) | undefined;
}

const BurgerConstructor: FC<TBurgerConstructor> = ({ handleOrder }) => {

  const dispatch = useAppDispatch()

  const ingredients = useAppSelector(store=> store.ingridientReducer.ingredientsForBurger);

  const bun = ingredients.bun;
  const elseIngredients = ingredients.elseIngregients

  const addElseIngredients = (data: TIngredient) => {
    const ingr = {...data, 'uuid' : uuid()}
    elseIngredients.splice(elseIngredients.length, 0 ,ingr);
    dispatch({
      type: GET_INGREDIENT_FOR_BURGER,
      data: elseIngredients
    })
  }

  const [{isHover}, dropTarget] = useDrop ({
    accept: "ingredients",
    collect: (monitor: DropTargetMonitor) => ({
      isHover: monitor.isOver()
    }),
    drop(dropIngredient: TBurgerItem) {
      if (dropIngredient.ingredient.type === 'bun' ) {
        dispatch({
          type: GET_BUN_FOR_BURGER,
          data: dropIngredient.ingredient
        })
      } else {
        addElseIngredients(dropIngredient.ingredient)
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
      {elseIngredients.length !== 0 ?
        (<div className={" pr-2 "+style.container}>
          <ul className={style.ul}>
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

export default BurgerConstructor;
