import PropTypes from "prop-types";

const BUN = {key: 'bun', value : 'Булки'};
const SAUCE = {key: 'sauce', value : 'Соусы'};
const MAIN = {key: 'main', value : 'Начинки'};

const INGREDIENT_GROUPS = [BUN, SAUCE, MAIN];

const URL = "https://norma.nomoreparties.space/api/";

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


export {BUN, SAUCE, MAIN, INGREDIENT_GROUPS, ingredientPropTypes, URL}
