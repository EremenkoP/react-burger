import { GET_INGREDIENTS, ORDER, REMOVE_INGREDIENT_FOR_BURGER } from "./index";
import { GET_USER, DELETE_USER, IS_AUTH } from "./auth";

import { URL } from "../../utils/constants";
import { saveToken, setCookie } from "../../utils/cookie";

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

const registrationAuth = (email, password, name) => {
  return function(dispatch) {
    fetch (`${URL}auth/register`, {
      method: 'POST',
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify({
        "email": email,
        "password": password,
        "name": name
      })
    })
      .then((res) => getResponseData(res))
      .then((res) => {
        if(res.success) {
          dispatch ({
            type: GET_USER,
            data: res.user
          })
          saveToken('refreshToken', res.refreshToken)
          setCookie('accessToken', res.accessToken)
        }
      })
      .catch((res) => console.log(res))
  }
}

const autorizationUser = (login, password) => {
  return function (dispatch) {
    fetch (`${URL}auth/login`, {
      method: 'POST',
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify({
        "email": login,
        "password": password,
      })
    })
      .then((res) => getResponseData(res))
      .then((res) => {
        if(res.success) {
          dispatch ({
            type: GET_USER,
            data: res.user
          })
          setCookie('refreshToken', res.refreshToken)
          saveToken('accessToken', res.accessToken)
        }
      })
      .then(
      dispatch ({
        type: IS_AUTH
      }))
      .catch((res) => console.log(res))
  }
}

export {getIngredients, pushOrder, registrationAuth, autorizationUser}
