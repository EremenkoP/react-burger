import PropTypes from "prop-types";
import style from './IngredientDetails.module.css';

const IngredientDetails = ({ ingredient }) => {
  return (
    <>
      <h2 className="mt-10 ml-10 text text_type_main-large">Детали ингредиента</h2>
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

IngredientDetails.propTypes = {
  ingredient: PropTypes.object.isRequired
};

export default IngredientDetails;
