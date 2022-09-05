type TIngredient = {
  readonly _id: string;
  readonly name: string;
  readonly type: 'bun' | 'sauce' | 'main';
  readonly proteins: number;
  readonly fat: number;
  readonly carbohydrates: number;
  readonly calories: number;
  readonly price: number;
  readonly image: string;
  readonly image_mobile: string;
  readonly image_large: string;
  readonly __v: number;
  readonly uuid?: string;
}

type TBurgerItem = {
  ingredient: TIngredient
}

type TIngredientItem = TBurgerItem & {count: number | null;}

type TFilterString = {
  readonly filterType: string
}

export {TIngredient, TIngredientItem, TFilterString}
