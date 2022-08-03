import { Route, Switch, useLocation } from "react-router-dom"
import ProfileForm from "../../components/profileForm/ProfileForm"
import ProfileNav from "../../components/provileNav/ProvileNav"

import style from './Profile.module.css'

const Profile = () => {

  const location = useLocation()

  return (
    <div className={style.content}>
      <ProfileNav />
      <Switch>
        <Route to='/'>
          <ProfileForm />
        </Route>
        <Route to={`${location.pathname}/orders`}>

        </Route>
      </Switch>
    </div>
  )
}

export default Profile
