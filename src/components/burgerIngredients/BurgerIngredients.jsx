import React from "react";
import { CurrencyIcon, Tab} from "@ya.praktikum/react-developer-burger-ui-components";
import PropTypes from "prop-types";

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

const BurgerIngredients = ({ ingredients, onClick2 }) => {
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
              <li  key={ingredient._id}>
                <article className={style.li}>
                  <img src={ingredient.image} alt={`Изображение ${ingredient.name}`}  ></img>
                  <p className={'text text_type_digits-default mt-1 mb-1 '}>
                    {ingredient.price}  &nbsp;
                    <CurrencyIcon type="primary" />
                  </p>
                  <h3 className={'text text_type_main-small ' + style.name} onClick={() => onClick2(ingredient)}>{ingredient.name}</h3>
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
                <article className={style.li}>
                  <img src={ingredient.image} alt={`Изображение ${ingredient.name}`}  ></img>
                  <p className={'text text_type_digits-default mt-1 mb-1 '}>
                    {ingredient.price} &nbsp;
                    <CurrencyIcon type="primary" />
                  </p>
                  <h3 className={'text text_type_main-small ' + style.name} onClick={() => onClick2(ingredient)}>{ingredient.name}</h3>
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
                <article className={style.li}>
                  <img src={ingredient.image} alt={`Изображение ${ingredient.name}`}  ></img>
                  <p className={'text text_type_digits-default mt-1 mb-1 '}>
                    {ingredient.price} &nbsp;
                    <CurrencyIcon type="primary" />
                  </p>
                  <h3 className={'text text_type_main-small ' + style.name} onClick={() => onClick2(ingredient)}>{ingredient.name}</h3>
                </article>
              </li>
            ))}
        </ul>
      </div>
    </>
  );
};

BurgerIngredients.propTypes = {
  ingredients: PropTypes.arrayOf(PropTypes.object).isRequired,
  onClick: PropTypes.func
};

export default BurgerIngredients;
