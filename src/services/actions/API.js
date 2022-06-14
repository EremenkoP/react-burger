import { GET_INGREDIENTS, ORDER, REMOVE_INGREDIENT_FOR_BURGER } from "./index";

const URL = "https://norma.nomoreparties.space/api/";

const getResponseData = (res) => {
  return res.ok ? res.json() : Promise.reject(`Ошибка: ${res.status}`);
};

const getIngredients = () => {
  return function(dispatch) {
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
  }
}

const pushOrder = (ingredientsForOrder, setIsOrderDetailsOpened) => {
  return function(dispatch) {
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
    .then(
      dispatch ({
        type: REMOVE_INGREDIENT_FOR_BURGER
      })
    )
    .catch((res) => console.log(res))
  }
}

export {getIngredients, pushOrder}
