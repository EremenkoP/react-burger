import React from "react";
import { CurrencyIcon, Tab, Counter} from "@ya.praktikum/react-developer-burger-ui-components";
import PropTypes from "prop-types";
import {IngredientsContext} from "../services/allContext"

import style from './BurgerIngredients.module.css'

const Tabs = () => {
  const [current, setCurrent] = React.useState('one')
  return (
    <div style={{ display: 'flex' }}>
      <Tab value="one" active={current === 'one'} onClick={setCurrent}>
      Булки
      </Tab>
      <Tab value="two" active={current === 'two'} onClick={setCurrent}>
      Соусы
      </Tab>
      <Tab value="three" active={current === 'three'} onClick={setCurrent}>
      Начинки
      </Tab>
    </div>
  )
}

const BurgerIngredients = ({ openIngredientDetails }) => {

  const ingredients = React.useContext(IngredientsContext)

  return (
    <>
      <h1 className={'text text_type_main-large mt-10 mb-5'}>Соберите бургер</h1>
      <Tabs />
      <div className={style.ingredients}>
        <h2 className={'text text_type_main-medium mt-10 mb-6'}>Булки</h2>
        <ul className={' ml-4 ' + style.ul}>
          {ingredients
            .filter((ingredient) => ingredient.type === "bun")
            .map((ingredient) => (
              <li  key={ingredient._id} onClick={() => openIngredientDetails(ingredient)}>
                <article className={style.li}>
                  <img src={ingredient.image} alt={`Изображение ${ingredient.name}`}  ></img>
                  <p className={'text text_type_digits-default mt-1 mb-1 '}>
                    {ingredient.price}  &nbsp;
                    <CurrencyIcon type="primary" />
                  </p>
                  <h3 className={'text text_type_main-small ' + style.name} >{ingredient.name}</h3>
                  <Counter count={1} size="default" />
                </article>
              </li>
            ))}
        </ul>
        <h2 className={'text text_type_main-medium mt-10 mb-6'}>Соусы</h2>
        <ul className={' ml-4 ' + style.ul}>
          {ingredients
            .filter((ingredient) => ingredient.type === "sauce")
            .map((ingredient) => (
              <li key={ingredient._id}>
                <article className={style.li} onClick={() => openIngredientDetails(ingredient)}>
                  <img src={ingredient.image} alt={`Изображение ${ingredient.name}`}  ></img>
                  <p className={'text text_type_digits-default mt-1 mb-1 '}>
                    {ingredient.price} &nbsp;
                    <CurrencyIcon type="primary" />
                  </p>
                  <h3 className={'text text_type_main-small ' + style.name} >{ingredient.name}</h3>
                  <Counter count={1} size="default" />
                </article>
              </li>
            ))}
        </ul>
        <h2 className={'text text_type_main-medium mt-10 mb-6'}>Начинки</h2>
        <ul className={' ml-4 ' + style.ul}>
          {ingredients
            .filter((ingredient) => ingredient.type === "main")
            .map((ingredient) => (
              <li key={ingredient._id}>
                <article className={style.li} onClick={() => openIngredientDetails(ingredient)}>
                  <img src={ingredient.image} alt={`Изображение ${ingredient.name}`}  ></img>
                  <p className={'text text_type_digits-default mt-1 mb-1 '}>
                    {ingredient.price} &nbsp;
                    <CurrencyIcon type="primary" />
                  </p>
                  <h3 className={'text text_type_main-small ' + style.name} >{ingredient.name}</h3>
                  <Counter count={1} size="default" />
                </article>
              </li>
            ))}
        </ul>
      </div>
    </>
  );
};

// const ingredientPropTypes = PropTypes.shape({
//   _id: PropTypes.string.isRequired,
//   name:PropTypes.string.isRequired,
//   type:PropTypes.oneOf(['bun', 'main', 'sauce']).isRequired,
//   proteins:PropTypes.number.isRequired,
//   fat:PropTypes.number.isRequired,
//   carbohydrates:PropTypes.number.isRequired,
//   calories:PropTypes.number.isRequired,
//   price:PropTypes.number.isRequired,
//   image:PropTypes.string.isRequired,
//   image_mobile:PropTypes.string.isRequired,
//   image_large:PropTypes.string.isRequired,
// })

BurgerIngredients.propTypes = {
  openIngredientDetails: PropTypes.func.isRequired
};

export default BurgerIngredients;


