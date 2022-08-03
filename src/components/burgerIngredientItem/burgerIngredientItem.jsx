import { CurrencyIcon, Counter} from "@ya.praktikum/react-developer-burger-ui-components";
import PropTypes from "prop-types";
import { useDrag } from "react-dnd";
import { useDispatch } from "react-redux";
import { Link, useLocation } from "react-router-dom";

import { ingredientPropTypes } from "../../utils/constants";
import { INGREDIENT_DETAILS} from '../../services/actions/index'

import style from './burgerIngredientItem.module.css'


const BurgerIngredientItem = ({ingredient, count}) => {

  const dispatch = useDispatch();
  const location = useLocation()

  const [{ isDrag }, dragRef] = useDrag({
    type: "ingredients",
    item: { ingredient },
    collect: (monitor) => ({
      isDrag: monitor.isDragging(),
    }),
  });

  const handleIngredientClick = () => {
    dispatch({
      type: INGREDIENT_DETAILS,
      data: ingredient
    })
  };

  return (
    <article className={`${style.li} ${isDrag && style.dragging}`} ref={dragRef} onClick={handleIngredientClick}>
      <Link className={style.link}
            to={{
                pathname:`/ingredients/${ingredient._id}`,
                state: {background: location}
            }}
      >
        <img src={ingredient.image} alt={`Изображение ${ingredient.name}`}  ></img>
        <p className={'text text_type_digits-default mt-1 mb-1 '}>
          {ingredient.price}  &nbsp;
          <CurrencyIcon type="primary" />
        </p>
        <h3 className={'text text_type_main-small ' + style.name} >{ingredient.name}</h3>
        {count > 0 && (<Counter count={count} size="default" />)}
      </Link>
    </article>
  )
}

BurgerIngredientItem.PropType = {
  ingredient: ingredientPropTypes.isRequired,
  count: PropTypes.number.isRequired,
}

export {BurgerIngredientItem}
