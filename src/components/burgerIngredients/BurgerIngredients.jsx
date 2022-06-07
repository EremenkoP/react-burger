import React, {useRef, useEffect} from "react";
import { useSelector } from 'react-redux'
import { CurrencyIcon, Tab, Counter} from "@ya.praktikum/react-developer-burger-ui-components";
import PropTypes from "prop-types";

import style from './BurgerIngredients.module.css'

import {useInView} from '../../hooks/useInView'



const Tabs = ({current,setCurrent}) => {

  return (
    <div style={{ display: 'flex' }}>
      <a href="#buns" className={style.link}>
        <Tab value="one" active={current === 'one'} onClick={setCurrent}>
          Булки
        </Tab>
      </a>
      <a href="#souse" className={style.link}>
        <Tab value="two" active={current === 'two'} onClick={setCurrent}>
          Соусы
        </Tab>
      </a>
      <a href="#main" className={style.link}>
        <Tab value="three" active={current === 'three'} onClick={setCurrent}>
          Начинки
        </Tab>
      </a>
    </div>
  )
}

const BurgerIngredients = ({ openIngredientDetails }) => {

  const ingredients = useSelector(store => store.ingridientReducer.ingredients)

  const [current, setCurrent] = React.useState('one')


  const bunRef = useRef();
  const sauceRef = useRef();
  const mainRef = useRef();
  const bunInView = useInView(bunRef)
  const sauceInView = useInView(sauceRef)
  const mainInView = useInView(mainRef)
  const BUN = {key: 'one', value : 'Булки'};
  const SAUCE = {key: 'two', value : 'Соусы'};
  const MAIN = {key: 'three', value : 'Начинки'};
  const INGREDIENT_GROUPS = [BUN, SAUCE, MAIN];
  const refs = {
    [BUN.key]: bunRef,
    [SAUCE.key]: sauceRef,
    [MAIN.key]: mainRef,
  }

  const setCurrentTab = (key) => {
    setCurrent(INGREDIENT_GROUPS.filter(g => g.key === key)[0]);
    refs[key].current.scrollIntoView({ block: "start", behavior: 'smooth' });
  }

  useEffect(() => {
    if (bunInView) {
      setCurrent('one')
    } else if (sauceInView) {
      setCurrent('two')
    } else {
      setCurrent('three')
    }
  }, [bunInView, sauceInView, mainInView])

  return (
    <>
      <h1 className={'text text_type_main-large mt-10 mb-5'}>Соберите бургер</h1>

      <Tabs current={current} setCurrent={setCurrentTab} />

      { ingredients !== undefined ? (
      <div className={" pr-3 "+style.ingredients}>
        <h2 className={'text text_type_main-medium mt-10 mb-6'} ref={bunRef}>Булки</h2>
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
        <h2 className={'text text_type_main-medium mt-10 mb-6'} ref={sauceRef}>Соусы</h2>
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
        <h2 className={'text text_type_main-medium mt-10 mb-6'} ref={mainRef}>Начинки</h2>
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
      </div>) : ( <>
          {console.log(ingredients, 'ingredients')}
        <p className={'text text_type_main-large text_color_inactive mt-15'}>Секундочку, ингредиенты еще не&nbsp;разгрузили...</p> </>
      )}
    </>
  );
};

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

BurgerIngredients.propTypes = {
  openIngredientDetails: PropTypes.func.isRequired
};

export default BurgerIngredients;

export {ingredientPropTypes};
