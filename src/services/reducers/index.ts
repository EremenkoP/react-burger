import { noneIngredient } from '../../utils/constants'
import {GET_INGREDIENTS, GET_INGREDIENT_FOR_BURGER, INGREDIENT_DETAILS, DETAILS_REMOVE, ORDER, GET_BUN_FOR_BURGER,
  REMOVE_INGREDIENT_FOR_BURGER} from '../actions/index'
import { TState, TUnionIngredientAction } from '../types/toDo/toDoIngredient'

const initialState: TState = {
  ingredients: [],
  ingredientsForBurger: {
    bun: noneIngredient,
    elseIngregients: []
  },
  ingredientDetail: noneIngredient,
  order: {}
}

const ingridientReducer = (state = initialState, action: TUnionIngredientAction): TState => {
  switch (action.type) {
    case GET_INGREDIENTS: {
      return {
        ...state,
        ingredients: action.data
      }
    }
    case GET_INGREDIENT_FOR_BURGER: {
      return {
        ...state,
        ingredientsForBurger: {
          ...state.ingredientsForBurger,
          elseIngregients: action.data
        }
      }
    }
    case GET_BUN_FOR_BURGER: {
      return {
        ...state,
        ingredientsForBurger: {
          ...state.ingredientsForBurger,
          bun: action.data
        }
      }
    }
    case REMOVE_INGREDIENT_FOR_BURGER: {
      return {
        ...state,
        ingredientsForBurger: {
          ...state.ingredientsForBurger,
          bun: noneIngredient,
          elseIngregients: []
        }
      }
    }
    case INGREDIENT_DETAILS:{
      return {
        ...state,
        ingredientDetail: action.data
      }
    }
    case DETAILS_REMOVE:{
      return {
        ...state,
        ingredientDetail: noneIngredient
      }
    }
    case ORDER:{
      return {
        ...state,
        order: action.data
      }
    }
    default: {
      return state
    }
  }
}

export {ingridientReducer}
