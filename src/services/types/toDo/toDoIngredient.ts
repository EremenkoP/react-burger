import {GET_INGREDIENTS, GET_INGREDIENT_FOR_BURGER, INGREDIENT_DETAILS, DETAILS_REMOVE, ORDER, GET_BUN_FOR_BURGER,
  REMOVE_INGREDIENT_FOR_BURGER} from '../../actions/index'
import { TIngredient } from '../ingredient'

type TInitialState = {
  ingredients: [],
  ingredientsForBurger: {
    bun: false,
    elseIngregients: []
  },
  ingredientDetail: {},
  order: {}
}

type TState = {
  ingredients: [] | Array<TIngredient>,
  ingredientsForBurger: {
    bun: boolean | TIngredient,
    elseIngregients: [] | Array<TIngredient>
  },
  ingredientDetail: {} | TIngredient,
  order: {} | number
}

interface IGetIngredient {
  readonly type: typeof GET_INGREDIENTS;
  readonly data: Array<TIngredient>
}

interface IGetIngredientForBurger {
  readonly type: typeof GET_INGREDIENT_FOR_BURGER;
  readonly data : Array<TIngredient>
}

interface IGetBunForBurger {
  readonly type: typeof GET_BUN_FOR_BURGER;
  readonly data: TIngredient
}

interface IRemoveIngredientForBurger {
  readonly type: typeof REMOVE_INGREDIENT_FOR_BURGER;
  readonly bun: false;
  readonly elseIngregients: [];
}

interface IIngredientDetails {
  readonly type: typeof INGREDIENT_DETAILS
  readonly data: TIngredient
}

interface IRemoveDetails {
  readonly type: typeof DETAILS_REMOVE
  readonly ingredientDetail: {};
}

interface IOrder {
  readonly type: typeof ORDER;
  readonly data: number
}

type TUnionIngredientAction = IGetIngredient | IGetIngredientForBurger | IGetBunForBurger | IRemoveIngredientForBurger| IIngredientDetails | IRemoveDetails | IOrder;

export {TInitialState, TState, TUnionIngredientAction}
