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

import {GET_INGREDIENTS, INGREDIENT_DETAILS, DETAILS_REMOVE, ORDER} from '../../services/actions/index'

import style from './App.module.css'

const App = () => {
  const URL = "https://norma.nomoreparties.space/api/";

  const dispatch = useDispatch();

  const [isIngredientDetailsOpened, setIsIngredientDetailsOpened] = React.useState(false);
  const [isOrderDetailsOpened, setIsOrderDetailsOpened] = React.useState(false);

  const ingredients = useSelector(store => store.ingridientReducer.ingredients)

  const closeModalsOrder = () => {
    setIsOrderDetailsOpened(false);
  };

  const getResponseData = (res) => {
    return res.ok ? res.json() : Promise.reject(`Ошибка: ${res.status}`);
  };

  React.useEffect(() => {
    fetch(`${URL}ingredients`, {
      headers: {
        "Content-Type": "application/json"
      }
    })
      .then((res) => getResponseData(res))
      .then((res) => dispatch({
        type: GET_INGREDIENTS,
        data: res.data
      }))
      .catch((res) => console.log(res))
  }, []);

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
    const ingredientsForOrder = ingredients.map((ingredient) => ingredient._id)
     fetch(`${URL}orders`, {
      method: 'POST',
      headers: { "Content-Type": "application/json"},
       body: JSON.stringify({
        ingredients: ingredientsForOrder,
      })
    })
    .then((res) => getResponseData(res))
    .then((res) => {
      dispatch ({
        type: ORDER,
        data: res.order.number
      })
      setIsOrderDetailsOpened(true)
    })
    .catch((res) => console.log(res))
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
