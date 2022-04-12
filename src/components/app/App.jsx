import React from "react";
import AppHeader from "../appHeader/AppHeader";
import BurgerIngredients from "../burgerIngredients/BurgerIngredients";
import IngredientDetails from "../ingredientDetails/IngredientDetails";
import BurgerConstructor from "../burgerConstructor/burgerConstructor";
import Modal from "../modal/Modal";
import OrderDetails from "../orderDetails/OrderDetails";

import style from './App.module.css'

const App = () => {
  const URL = "https://norma.nomoreparties.space/api/ingredients";
  const [
    isIngredientDetailsOpened,
    setIsIngredientDetailsOpened
  ] = React.useState(false);

  const [
    isOrderDetailsOpened,
    setIsOrderDetailsOpened
  ] = React.useState(false);
  const [ingredients, setIngredients] = React.useState([]);
  const [currentIngredient, setCurrentIngredient] = React.useState({});

  const closeModals = () => {
    setIsIngredientDetailsOpened(false);
  };

  const closeModalsOrder = () => {
    setIsOrderDetailsOpened(false);
  };

  const handleEscKeydown = (event) => {
    event.key === "Escape" && closeModals();
  };

  React.useEffect(() => {
    fetch(`${URL}`, {
      headers: {
        "Content-Type": "application/json"
      }
    })
      .then((res) => res.json())
      .then((res) => setIngredients(res.data))
      .then((res) => console.log(res))
  }, []);

  const handleIngredientClick = (ingredient) => {
    setCurrentIngredient(ingredient);
    setIsIngredientDetailsOpened(true);
  };

  const handleOrderClick = () => {
    setIsOrderDetailsOpened(true);
  };

  return (
    <>
      <AppHeader />
      <main className={style.main}>
        <div className={style.content}>
        <section>
          <BurgerIngredients
            ingredients={ingredients}
            onClick2={handleIngredientClick}
          />
        </section>
        <section className={'ml-10 mt-25'}>
          <BurgerConstructor ingredients={ingredients} handleOrder={handleOrderClick}/>
        </section>
        </div>
      </main>
      {isIngredientDetailsOpened && (
        <Modal onCloseClick={closeModals} onEscKeydown={handleEscKeydown}>
          <IngredientDetails ingredient={currentIngredient} handleOrder={handleOrderClick}/>
        </Modal>
      )}
      {isOrderDetailsOpened && (
        <Modal onCloseClick={closeModalsOrder} onEscKeydown={handleEscKeydown}>
          <OrderDetails />
        </Modal>
      )}
    </>
  );
};

export default App;
