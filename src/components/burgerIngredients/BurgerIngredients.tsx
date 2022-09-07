import React, {useRef, useEffect, MutableRefObject} from "react";
import { Tab } from "@ya.praktikum/react-developer-burger-ui-components";

import { BurgerIngredientGroup } from "../burgerIngredientGroup/burgerIngredientGroup";

import {useInView} from '../../hooks/useInView'
import { useAppSelector } from "../../hooks/store";
import {BUN, SAUCE, MAIN, INGREDIENT_GROUPS} from '../../utils/constants'

import style from './BurgerIngredients.module.css'


const BurgerIngredients = () => {

  const ingredients = useAppSelector(store => store.ingridientReducer.ingredients)

  const [current, setCurrent] = React.useState<{key: string, value: string}>(BUN)

  const bunRef: MutableRefObject<HTMLHeadingElement | null> = useRef<HTMLHeadingElement>(null);
  const sauceRef: MutableRefObject<HTMLHeadingElement | null> = useRef<HTMLHeadingElement>(null);
  const mainRef: MutableRefObject<HTMLHeadingElement | null> = useRef<HTMLHeadingElement>(null);

  const bunInView = useInView(bunRef as MutableRefObject<HTMLHeadingElement>)
  const sauceInView = useInView(sauceRef as MutableRefObject<HTMLHeadingElement>)
  const mainInView = useInView(mainRef as MutableRefObject<HTMLHeadingElement>)

  const refs: {[x: string]: MutableRefObject<HTMLHeadingElement | null>} = {
    [BUN.key]: bunRef,
    [SAUCE.key]: sauceRef,
    [MAIN.key]: mainRef,
  }

  const setCurrentTab = (key: string) => {
    setCurrent(INGREDIENT_GROUPS.filter(g => g.key === key)[0]);
    const currentRef = refs[key]
    if (currentRef.current) {
      currentRef.current.scrollIntoView({ block: "start", behavior: 'smooth' });
    }
  }

  useEffect(() => {
    if (bunInView) {
      setCurrent(BUN)
    } else if (sauceInView) {
      setCurrent(SAUCE)
    } else {
      setCurrent(MAIN)
    }
  }, [bunInView, sauceInView, mainInView])

  return (
    <section>
      <h1 className={'text text_type_main-large mt-10 mb-5'}>Соберите бургер</h1>

      <ul className={style.ul}>
        {INGREDIENT_GROUPS.map(g => (<li key={g.key}><Tab value={g.key} active={current.key === g.key} onClick={setCurrentTab}>{g.value}</Tab></li>))}
      </ul>

      { ingredients !== undefined ? (
      <div className={" pr-3 "+style.ingredients}>
        <h2 className={'text text_type_main-medium mt-10 mb-6'} ref={bunRef}>Булки</h2>
        <BurgerIngredientGroup filterType={'bun'} />
        <h2 className={'text text_type_main-medium mt-10 mb-6'} ref={sauceRef}>Соусы</h2>
        <BurgerIngredientGroup filterType={'sauce'} />
        <h2 className={'text text_type_main-medium mt-10 mb-6'} ref={mainRef}>Начинки</h2>
        <BurgerIngredientGroup filterType={'main'} />
      </div>) : ( <>
        <p className={'text text_type_main-large text_color_inactive mt-15'}>Секундочку, ингредиенты еще не&nbsp;разгрузили...</p> </>
      )}

    </section>
  );
};

export default BurgerIngredients;
