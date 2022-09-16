import { FC } from 'react';

import {BurgerIngredientItem} from '../burgerIngredientItem/burgerIngredientItem';
import { TFilterString, TIngredient } from '../../services/types/ingredient';
import  {useAppSelector} from '../../hooks/store'

import style from './burgerIngredientGroup.module.css'

const BurgerIngredientGroup:FC<TFilterString> = ({ filterType }) => {

  const ingredients = useAppSelector(store => store.ingridientReducer.ingredients)
  const ingredientsForBurger = useAppSelector(store=> store.ingridientReducer.ingredientsForBurger);
  const bun = ingredientsForBurger.bun;
  const elseIngredient = ingredientsForBurger.elseIngregients

  const count = (ingredient: TIngredient) => {
    if (ingredient.type === 'bun') {
      return (bun && bun._id === ingredient._id ? 1 : null)
    } else {
      return ( elseIngredient ? elseIngredient.filter((i: TIngredient) => i._id === ingredient._id).length : null)
    }
  }

  return (
    <>
        <ul className={' ml-4 ' + style.ul}>
          {ingredients
            .filter((ingredient: TIngredient) => ingredient.type === filterType)
            .map((ingredient: TIngredient) => (
              <li  key={ingredient._id} >
                <BurgerIngredientItem ingredient={ingredient} count={count(ingredient)}/>
              </li>
            ))}
        </ul>
    </>
  )
}

export {BurgerIngredientGroup}
