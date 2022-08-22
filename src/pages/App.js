import { Switch, Route, useLocation } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { useCallback, useEffect } from 'react';

import AppHeader from '../components/appHeader/AppHeader';
import Home from './Home/home';
import Error from './Error/error';
import Login from './Login/Login';
import Register from './Register/Register'
import ForgotPassword from './ForgotPassword/ForgotPassword'
import ResetPassword from './ResetPassword/ResetPassword'
import Profile from './Profile/Profile';
import { ProtectedRoute } from '../components/protectedRoute';
import IngridientDetails from './IngridientDetails/IngridientDetails';
import IngredientPage from './IngredientPage/IngredientPage';
import Feed from './Feed/Feed';
import OrderDetails from './OrderDetails/OrderDetails';
import OrderPage from './OrderPage/OrderPage';
import ProfileOrders from './Profile/ProfileOrders';

import { getIngredients, getNewToken, getUser} from '../services/actions/API';
import { accessToken, refreshToken } from "../utils/constants";
import { getCookie } from "../utils/cookie";
import { WS_AUTH_START } from '../services/actions/WSauth';


const App = () => {

  const location = useLocation();
  const dispatch = useDispatch()

  const isAuth = useSelector(state => state.authReducer.isAuth)
  const resetPassword = useSelector(state => state.authReducer.resetPassword)

  const background = location.state?.background;

  const autoAuth = useCallback( async (token) => {
    await dispatch(getNewToken(token))
    await dispatch(getUser(getCookie(accessToken)))
  }, [dispatch]
  )

  useEffect(() => {
    dispatch(getIngredients());
    const token =  getCookie(refreshToken)
    if (token !== undefined) {
      autoAuth(token)
      dispatch({type: WS_AUTH_START})
    }
  }, [dispatch, autoAuth]);

  return (
    <>
      <AppHeader />
      <Switch location={background || location}>
        <Route path="/" exact={true}>
          <Home/>
        </Route>
        <Route path='/ingredients/:id'>
          <IngredientPage />
        </Route>
        <Route path='/feed' exact={true}>
          <Feed />
        </Route>
        <Route path='/feed/:id'>
          <OrderPage />
        </Route>
        <Route path='/profile/orders/:id'>
          <OrderPage />
        </Route>
        <ProtectedRoute path='/profile' logistic={isAuth}  toRedirect='/login' exact={true}>
          <Profile />
        </ProtectedRoute>
        <ProtectedRoute path='/profile/orders' logistic={isAuth}  toRedirect='/login' exact={true}>
          <ProfileOrders />
        </ProtectedRoute>
        <ProtectedRoute path="/login" logistic={!isAuth} toRedirect='/profile' exact={true}>
          <Login/>
        </ProtectedRoute>
        <ProtectedRoute path="/register" logistic={!isAuth} toRedirect='/profile' exact={true}>
          <Register />
        </ProtectedRoute>
        <ProtectedRoute path="/forgot-password" logistic={!isAuth && !resetPassword} toRedirect='/profile' exact={true}>
          <ForgotPassword />
        </ProtectedRoute>
        <ProtectedRoute path="/reset-password" logistic={!isAuth && resetPassword} toRedirect='/profile' exact={true}>
          <ResetPassword />
        </ProtectedRoute>
        <Route path='*'>
          <Error/>
        </Route>
      </Switch>
      {background && (
        <Route path='/ingredients/:id'>
          <IngridientDetails />
        </Route>
      )}
      {background && (
        <Route path='/feed/:id'>
          <OrderDetails />
        </Route>
      )}
      {background && (
        <Route path='/profile/orders/:id'>
          <OrderDetails />
        </Route>
      )}
  </>
  )
}

export default App
