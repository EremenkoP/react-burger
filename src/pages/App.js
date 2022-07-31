import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import AppHeader from '../components/appHeader/AppHeader';
import Home from './Home/home';
import Error from './Error/error';
import Login from './Login/Login';
import Register from './Register/Register'
import ForgotPassword from './ForgotPassword/ForgotPassword'
import ResetPassword from './ResetPassword/ResetPassword'
import Profile from './Profile/Profile';

const App = () => {
  return (
    <Router>
      <AppHeader />
      <Switch>
        <Route path="/" exact={true}>
          <Home/>
        </Route>
        <Route path="/profile" exact={true}>
          <Profile />
        </Route>
        <Route path="/login" exact={true}>
          <Login/>
        </Route>
        <Route path="/register" exact={true}>
          <Register />
        </Route>
        <Route path="/forgot-password" exact={true}>
          <ForgotPassword />
        </Route>
        <Route path="/reset-password" exact={true}>
          <ResetPassword />
        </Route>
        <Route path='*'>
          <Error/>
        </Route>
      </Switch>
    </Router>
  )
}

export default App
