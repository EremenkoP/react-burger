import { TUser } from "../services/types/auth";
import { TIngredient } from "../services/types/ingredient";
import { TOrder } from "../services/types/ordersDetail";
import { TOrdersData } from "../services/types/toDo/toDoWsReducer";

const BUN = {key: 'bun', value : 'Булки'};
const SAUCE = {key: 'sauce', value : 'Соусы'};
const MAIN = {key: 'main', value : 'Начинки'};

const INGREDIENT_GROUPS = [BUN, SAUCE, MAIN];

const URL = "https://norma.nomoreparties.space/api/";
const WSS = 'wss://norma.nomoreparties.space/orders'

const refreshToken = 'refreshToken'
const accessToken = 'accessToken'

const statusCreated = {key: 'created', name: 'Создан', value: 'Ваш заказ начали готовить'}
const statusPending = {key: 'pending', name: 'Готовится', value: 'Ваш заказ готовится'}
const statusDone = {key: 'done', name: 'Выполнен', value: 'Ваш заказ готов'}
const statusCancel = {key: 'cancel', name: 'Отменен', value: 'Ваш заказ отменен'}
const statusNone = {key: 'none', name: 'Протозаказ', value: 'Ваш заказ не может существовать'}
const statusMap = {
  'created': statusCreated,
  'pending': statusPending,
  'done'   : statusDone,
  'cancel' : statusCancel,
  'none': statusNone
}

const noneIngredient: TIngredient = {
  _id: '',
  name: '',
  type: 'none',
  proteins: 0,
  fat: 0,
  carbohydrates: 0,
  calories: 0,
  price: 0,
  image: '',
  image_mobile: '',
  image_large: '',
  __v: 0
}

const noneUser: TUser = {
  name: '',
  email: ''
}

const noneOrder : TOrder = {
  _id: '',
  ingredients: [],
  status: 'none',
  name: '',
  createdAt: '',
  updatedAt: '',
  number: 0
}

const noneOrders: TOrdersData = {
  orders: [noneOrder],
  success: false,
  total: 0,
  totalToday: 0
}


export {noneOrders, BUN, SAUCE, MAIN, INGREDIENT_GROUPS, URL, refreshToken, accessToken, WSS, statusMap, statusCancel, statusDone, statusPending, statusCreated, noneIngredient, noneUser, noneOrder}
