import { TIngredient } from "./ingredient"

type TOwner = {
  createdAt: string
  email: string
  name: string
  updatedAt: string
}

type TOrder = {
  createdAt: string
  ingredients: Array<TIngredient>
  name: string
  number: number
  owner: TOwner
  price: number
  status: string
  updatedAt: string
  _id: string
}

type TOrderRes = {
  success: boolean
  name: string
  order: TOrder
}

type TDefaultRes = {
  success: boolean;
  message: string;
};

type TUser = {
  readonly name: string;
  readonly email: string;
};

type TUserRes = {
  success: boolean
  accessToken: string
  refreshToken: string
  user: TUser
}

type TGetUser = {
  success: boolean
  user: TUser
}

type TRefreshTokenRes = {
  success: boolean;
  accessToken: string;
  refreshToken: string;
};

type TIngredientUniqueId = TIngredient & { id: string };

type TIngredientsRes= {
  data: TIngredientUniqueId[];
  success: boolean;
}

export {TOrderRes, TDefaultRes, TUser, TUserRes, TGetUser, TRefreshTokenRes, TIngredientsRes}
