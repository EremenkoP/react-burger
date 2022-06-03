import React from "react";
import { useDispatch, useSelector } from 'react-redux';

import AppHeader from "../appHeader/AppHeader";
import BurgerIngredients from "../burgerIngredients/BurgerIngredients";
import IngredientDetails from "../ingredientDetails/IngredientDetails";
import BurgerConstructor from "../burgerConstructor/burgerConstructor";
import Modal from "../modal/Modal";
import OrderDetails from "../orderDetails/OrderDetails";

import {GET_INGREDIENTS, GET_INGREDIENT_FOR_BURGER, INGREDIENT_DETAILS, DETAILS_REMOVE, ORDER} from '../../services/actions/index'

import style from './App.module.css'

const App = () => {
  const URL = "https://norma.nomoreparties.space/api/";

  const dispatch = useDispatch();

  const [isIngredientDetailsOpened, setIsIngredientDetailsOpened] = React.useState(false);
  const [isOrderDetailsOpened, setIsOrderDetailsOpened] = React.useState(false);
  const [currentIngredient, setCurrentIngredient] = React.useState({});
  const [orderNumber, setOrderNumber] = React.useState(0);

  const ingredients = useSelector(store => store.ingredients)

  const closeModals = () => {
    setIsIngredientDetailsOpened(false);
  };

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
      .then((res) => {getResponseData(res)})
      .then((res) => dispatch({
        type: GET_INGREDIENTS,
        data: res.data
      }))
      .catch((res) => console.log(res))
  }, []);

  const handleIngredientClick = (ingredient) => {
    setCurrentIngredient(ingredient);
    setIsIngredientDetailsOpened(true);
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
      setOrderNumber(res.order.number)
      setIsOrderDetailsOpened(true)
    })
    .catch((res) => console.log(res))
  };

  return (
    <>
      <AppHeader />
      {console.log(ingredients)}
      <main className={style.main}>
        <div className={style.content}>
           <section>
            <BurgerIngredients
              openIngredientDetails={handleIngredientClick}
            />
          </section>
          <section className={'ml-10 mt-25'}>
            <BurgerConstructor handleOrder={handleOrderClick} />
          </section>
        </div>
      </main>
      {isIngredientDetailsOpened && (
        <Modal onCloseClick={closeModals} modalTitle={"Детали ингредиента"}>
          <IngredientDetails ingredient={currentIngredient} />
        </Modal>
      )}
      {isOrderDetailsOpened && (
        <Modal onCloseClick={closeModalsOrder}>
          <OrderDetails orderNumber={orderNumber}/>
        </Modal>
      )}
    </>
  );
};

export default App;
