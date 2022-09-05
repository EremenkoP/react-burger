import { TIngredient } from "./ingredient"

type TOrderDetail ={
  _id:string;
  ingredients: Array<TIngredient>;
  status: "done" | "created" | "pending" | "cancel";
  name: string;
  createdAt: string;
  updatedAt: string;
  number: number
}

export {TOrderDetail}
