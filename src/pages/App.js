import { Switch, Route, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';

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

const App = () => {

  const location = useLocation();

  const isAuth = useSelector(state => state.authReducer.isAuth)
  const resetPassword = useSelector(state => state.authReducer.resetPassword)

  const background = location.state?.background;

  return (
    <>
      <AppHeader />
      <Switch location={background || location}>
        <Route path="/" exact={true}>
          <Home/>
        </Route>
        <ProtectedRoute path='/profile' logistic={isAuth}  toRedirect='/login' exact={true}>
          <Profile />
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
  </>
  )
}

export default App
