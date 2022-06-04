import {GET_INGREDIENTS, GET_INGREDIENT_FOR_BURGER, INGREDIENT_DETAILS, DETAILS_REMOVE, ORDER} from '../actions/index'

const initialState = {
  ingredients: [],
  ingredientsForBurger: [],
  ingredientDetail: {},
  order: {}
}

const ingridientReducer = (state = initialState, action) => {
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
        ingredientsForBurger: state.ingredientsForBurger.push(action.ingredient)
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
        ingredientDetail: {}
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
