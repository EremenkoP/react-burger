import { useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';

import style from './IngredientDetails.module.css';

const IngredientDetails = () => {

  let ingredient = useSelector(store => store.ingridientReducer.ingredientDetail);
  const ingredients = useSelector(store => store.ingridientReducer.ingredients);

  const local = useLocation();

  if(Object.keys(ingredient).length === 0) {
    const id =  local.pathname.split('/ingredients/')[1]
    ingredients.forEach(el => {
      if (el._id === id) {
        ingredient = el
      }
    })
  }

  return (
    <>
      <img src={ingredient.image_large} alt={ingredient.name} />
      <h3 className={"mt-4 text text_type_main-medium " + style.title}>{ingredient.name}</h3>
      <div className={style.box }>
        <p className="text text_type_main-default text_color_inactive">Калории,ккал</p>
        <p className="text text_type_main-default text_color_inactive">Белки, г</p>
        <p className="text text_type_main-default text_color_inactive">Жиры, г</p>
        <p className="text text_type_main-default text_color_inactive">Углеводы, г</p>
        <p className={"text text_type_digits-default text_color_inactive " + style.digital}>{ingredient.calories}</p>
        <p className={"text text_type_digits-default text_color_inactive " + style.digital}>{ingredient.proteins}</p>
        <p className={"text text_type_digits-default text_color_inactive " + style.digital}>{ingredient.fat}</p>
        <p className={"text text_type_digits-default text_color_inactive " + style.digital}>{ingredient.carbohydrates}</p>
      </div>
    </>
  )
};

export default IngredientDetails;
