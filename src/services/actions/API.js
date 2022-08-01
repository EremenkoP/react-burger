import { GET_INGREDIENTS, ORDER, REMOVE_INGREDIENT_FOR_BURGER } from "./index";
import { GET_USER, DELETE_USER, IS_AUTH, IS_UNAUTH, TRY_RESET_PASSWORD, PASSWORD_IS_RESET} from "./auth";

import { URL, refreshToken, accessToken } from "../../utils/constants";
import { saveToken, setCookie, deleteCookie } from "../../utils/cookie";
// проверка правильности ответа
const getResponseData = (res) => {
  return res.ok ? res.json() : Promise.reject(`Ошибка: ${res.status}`);
};
// запрос ингредиентов
const getIngredients = () => {
  return async function(dispatch) {
    await fetch(`${URL}ingredients`, {
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
// отправка заказа
const pushOrder = (ingredientsForOrder, setIsOrderDetailsOpened) => {
  return async function(dispatch) {
    await fetch(`${URL}orders`, {
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
// запрос востановления пароля
const postEmailForPassword = (email) => {
  return async function(dispatch) {
     await fetch(`${URL}password-reset`, {
      method: 'POST',
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify({
        email: email
      })
    })
    .then(res => getResponseData(res))
    .then(res => {
      if(res.success) {
        dispatch({
          type: TRY_RESET_PASSWORD
        })
      }
    })
    .catch((res) => console.log(res))
  }
}
// изменение пароля
const resetPassword = (password, token) => {
  return async function(dispatch) {
    await fetch(`${URL}password-reset/reset`, {
      method: 'POST',
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify({
        password: password,
        token: token
      })
    })
    .then(res => getResponseData(res))
    .then(res => {
      if(res.success) {
        dispatch({
          type: PASSWORD_IS_RESET
        })
      }
    })
    .catch((res) => console.log(res))
  }
}

// регистрация пользователя
const registrationAuth = (email, password, name) => {
  return async function(dispatch) {
    await fetch (`${URL}auth/register`, {
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
          saveToken(refreshToken, res.refreshToken)
          setCookie(accessToken, res.accessToken)
        }
      })
      .catch((res) => {
        console.log(res)
        dispatch({
          type: DELETE_USER
        })
        dispatch ({
          type: IS_UNAUTH
        })
      })
  }
}
// авторизация
const autorizationUser = (login, password) => {
  return async function (dispatch) {
    await fetch (`${URL}auth/login`, {
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
          setCookie(refreshToken, res.refreshToken)
          saveToken(accessToken, res.accessToken)
          dispatch ({
            type: IS_AUTH
          })
        }
      })
      .catch((res) => {
        console.log(res)
        dispatch({
          type: DELETE_USER
        })
        dispatch ({
          type: IS_UNAUTH
        })
      })
  }
}
// обновление токена
const getNewToken = (token) => {
  return async function(dispatch) {
    await fetch (`${URL}auth/token`, {
      method: 'POST',
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify({
        token: token
      })
    })
      .then((res) => getResponseData(res))
      .then((res) => {
        if(res.success) {
          setCookie(refreshToken, res.refreshToken)
          saveToken(accessToken, res.accessToken)
          dispatch ({
            type: IS_AUTH
          })
        }
      })
      .catch((res) => {
        console.log(res)
        dispatch({
          type: DELETE_USER
        })
        dispatch ({
          type: IS_UNAUTH
        })
      })
  }
}
// выход пользователя из системы
const logOut =  (tok) => {
  return async function (dispatch) {
    await fetch (`${URL}auth/logout`, {
      method: 'POST',
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify({
        token: `${tok}`,
      })
    })
      .then((res) => getResponseData(res))
      .then((res) => {
        if(res.success) {
          dispatch ({
            type: DELETE_USER,
          })
          deleteCookie(refreshToken)
          deleteCookie(accessToken)
        }
      })
      .then( res => {
        dispatch ({
          type: IS_UNAUTH
        })
      })
      .catch((res) => console.log(res))
  }
}
// получение данных пользователя
const getUser = (token) => {
  return async function (dispatch) {
    await fetch (`${URL}auth/user`, {
      method: 'GET',
      headers: {
        "Content-Type": "application/json",
        authorization: 'Bearer ' + token
      }
    })
      .then((res) => getResponseData(res))
      .then((res) => {
        if(res.success) {
          dispatch ({
            type: GET_USER,
            data: res.user
          })
        }
      })
      .catch((res) => {
        console.log(res)
        dispatch({
          type: DELETE_USER
        })
        dispatch ({
          type: IS_UNAUTH
        })
      })
  }
}
// изменения данных пользователя
const renameUser = (token, email, name) => {
  return async function (dispatch) {
    await fetch (`${URL}auth/user`, {
      method: 'PATCH',
      headers: {
        Authorization: 'Bearer ' + token,
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        "email": email,
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
        }
      })
      .catch((res) => console.log(res))
  }
}


export {getIngredients, pushOrder, registrationAuth, autorizationUser, getNewToken, logOut, getUser, renameUser, postEmailForPassword, resetPassword}
