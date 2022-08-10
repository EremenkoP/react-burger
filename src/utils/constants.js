import PropTypes from "prop-types";

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
const statusMap = {
  'created': statusCreated,
  'pending': statusPending,
  'done'   : statusDone,
  'cancel' : statusCancel
}

const ingredientPropTypes = PropTypes.shape({
  _id: PropTypes.string.isRequired,
  name:PropTypes.string.isRequired,
  type:PropTypes.oneOf(['bun', 'main', 'sauce']).isRequired,
  proteins:PropTypes.number.isRequired,
  fat:PropTypes.number.isRequired,
  carbohydrates:PropTypes.number.isRequired,
  calories:PropTypes.number.isRequired,
  price:PropTypes.number.isRequired,
  image:PropTypes.string.isRequired,
  image_mobile:PropTypes.string.isRequired,
  image_large:PropTypes.string.isRequired,
})


export {BUN, SAUCE, MAIN, INGREDIENT_GROUPS, ingredientPropTypes, URL, refreshToken, accessToken, WSS, statusMap, statusCancel, statusDone, statusPending, statusCreated}