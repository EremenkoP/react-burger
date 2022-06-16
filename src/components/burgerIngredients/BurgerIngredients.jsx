import React, {useRef, useEffect} from "react";
import { useSelector } from 'react-redux'
import { Tab } from "@ya.praktikum/react-developer-burger-ui-components";
import PropTypes from "prop-types";

import { BurgerIngredientGroup } from "../burgerIngredientGroup/burgerIngredientGroup";

import style from './BurgerIngredients.module.css'

import {useInView} from '../../hooks/useInView'
import {BUN, SAUCE, MAIN, INGREDIENT_GROUPS} from '../../utils/constants'

const BurgerIngredients = ({ openIngredientDetails }) => {

  const ingredients = useSelector(store => store.ingridientReducer.ingredients)

  const [current, setCurrent] = React.useState('bun')

  const bunRef = useRef();
  const sauceRef = useRef();
  const mainRef = useRef();

  const bunInView = useInView(bunRef)
  const sauceInView = useInView(sauceRef)
  const mainInView = useInView(mainRef)

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
      setCurrent('bun')
    } else if (sauceInView) {
      setCurrent('sauce')
    } else {
      setCurrent('main')
    }
  }, [bunInView, sauceInView, mainInView])

  return (
    <section>
      <h1 className={'text text_type_main-large mt-10 mb-5'}>Соберите бургер</h1>

      <ul className={style.ul}>
        {INGREDIENT_GROUPS.map(g => (<li key={g.key}><Tab value={g.key} active={current === g.key} onClick={setCurrentTab}>{g.value}</Tab></li>))}
      </ul>

      { ingredients !== undefined ? (
      <div className={" pr-3 "+style.ingredients}>
        <h2 className={'text text_type_main-medium mt-10 mb-6'} ref={bunRef}>Булки</h2>
        <BurgerIngredientGroup filterType={'bun'} openIngredientDetails={openIngredientDetails}/>
        <h2 className={'text text_type_main-medium mt-10 mb-6'} ref={sauceRef}>Соусы</h2>
        <BurgerIngredientGroup filterType={'sauce'} openIngredientDetails={openIngredientDetails}/>
        <h2 className={'text text_type_main-medium mt-10 mb-6'} ref={mainRef}>Начинки</h2>
        <BurgerIngredientGroup filterType={'main'} openIngredientDetails={openIngredientDetails}/>
      </div>) : ( <>
          {console.log(ingredients, 'ingredients')}
        <p className={'text text_type_main-large text_color_inactive mt-15'}>Секундочку, ингредиенты еще не&nbsp;разгрузили...</p> </>
      )}

    </section>
  );
};

BurgerIngredients.propTypes = {
  openIngredientDetails: PropTypes.func.isRequired
};

export default BurgerIngredients;
