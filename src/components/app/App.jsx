import React from "react";
import { useDispatch, useSelector } from 'react-redux';
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

import AppHeader from "../appHeader/AppHeader";
import BurgerIngredients from "../burgerIngredients/BurgerIngredients";
import IngredientDetails from "../ingredientDetails/IngredientDetails";
import BurgerConstructor from "../burgerConstructor/burgerConstructor";
import Modal from "../modal/Modal";
import OrderDetails from "../orderDetails/OrderDetails";

import { INGREDIENT_DETAILS, DETAILS_REMOVE } from '../../services/actions/index'
import { getIngredients, pushOrder } from "../../services/actions/API";

import style from './App.module.css'

const App = () => {

  const dispatch = useDispatch();

  const [isIngredientDetailsOpened, setIsIngredientDetailsOpened] = React.useState(false);
  const [isOrderDetailsOpened, setIsOrderDetailsOpened] = React.useState(false);

  const ingredients = useSelector(store => store.ingridientReducer.ingredients)
  const ingredientsForOrder = useSelector(store => store.ingridientReducer.ingredientsForBurger)

  const closeModalsOrder = () => {
    setIsOrderDetailsOpened(false);
  };

  React.useEffect(() => {
    dispatch(getIngredients())
  }, [dispatch]);

  const handleIngredientClick = (ingredient) => {
    dispatch({
      type: INGREDIENT_DETAILS,
      data: ingredient
    })
    setIsIngredientDetailsOpened(true);
  };

  const closeModals = () => {
    setIsIngredientDetailsOpened(false);
    dispatch({type: DETAILS_REMOVE})
  };

  const handleOrderClick = () => {
    const ingredientsOrder = ingredientsForOrder.elseIngregients.map((ingredient) => ingredient._id)
    ingredientsOrder.unshift(ingredientsForOrder.bun._id)
    dispatch(pushOrder(ingredientsOrder, setIsOrderDetailsOpened))
    };

  return (
    <>
      <AppHeader />
      <main className={style.main}>
      <DndProvider backend={HTML5Backend}>
        { ingredients.length !== 0 ? (
          <div className={style.content}>

              <BurgerIngredients openIngredientDetails={handleIngredientClick}/>

              <BurgerConstructor handleOrder={handleOrderClick} />

          </div>
          ) : (
            <p className={'text text_type_main-large text_color_inactive mt-15'}>Минуточку, мы стыкуемся...</p>
          )
        }
      </DndProvider>
      </main>
      {isIngredientDetailsOpened && (
        <Modal onCloseClick={closeModals} modalTitle={"Детали ингредиента"}>
          <IngredientDetails />
        </Modal>
      )}
      {isOrderDetailsOpened && (
        <Modal onCloseClick={closeModalsOrder}>
          <OrderDetails />
        </Modal>
      )}
    </>
  );
};

export default App;
