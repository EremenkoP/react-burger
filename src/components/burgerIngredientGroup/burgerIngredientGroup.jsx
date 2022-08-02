import { useSelector } from 'react-redux'
import PropTypes from "prop-types";

import {BurgerIngredientItem} from '../burgerIngredientItem/burgerIngredientItem'

import style from './burgerIngredientGroup.module.css'

const BurgerIngredientGroup = ({ filterType }) => {

  const ingredients = useSelector(store => store.ingridientReducer.ingredients)
  const ingredientsForBurger = useSelector(store=> store.ingridientReducer.ingredientsForBurger);
  const bun = ingredientsForBurger.bun;
  const elseIngredient = ingredientsForBurger.elseIngregients

  const count = (ingredient) => {
    if (ingredient.type === 'bun') {
      return (bun && bun._id === ingredient._id ? 1 : null)
    } else {
      return ( elseIngredient ? elseIngredient.filter(i => i._id === ingredient._id).length : null)
    }
  }

  return (
    <>
        <ul className={' ml-4 ' + style.ul}>
          {ingredients
            .filter((ingredient) => ingredient.type === filterType)
            .map((ingredient) => (
              <li  key={ingredient._id} >
                <BurgerIngredientItem ingredient={ingredient} count={count(ingredient)}/>
              </li>
            ))}
        </ul>
    </>
  )
}


BurgerIngredientGroup.propTypes = {
  filterType: PropTypes.oneOf(['bun', 'main', 'sauce']).isRequired,
};

export {BurgerIngredientGroup}
