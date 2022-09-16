import { TIngredient } from "../services/types/ingredient";

const makeUniq = (arr: Array<TIngredient>):Array<TIngredient> => {
  const uniqSet = new Set(arr);
  return [...uniqSet];
}

export {makeUniq}
