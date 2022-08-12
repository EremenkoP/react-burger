import { useSelector } from "react-redux"
import { Route, Switch, useLocation } from "react-router-dom"

import FeedList from "../../components/FeedList/FeedList"
import ProfileForm from "../../components/profileForm/ProfileForm"
import ProfileNav from "../../components/provileNav/ProvileNav"

import style from './Profile.module.css'

const Profile = () => {

  const location = useLocation()
  const orders = useSelector(state => state.wsReducerAuth.orders)

  return (
    <div className={style.content}>
      <ProfileNav />
        <Switch>
          <Route to='/' exact={true}>
            <ProfileForm />
          </Route>
          <Route to={`/profile/orders`}  exact={true}>
            <FeedList orders={orders} isPersonal={true} className={style.feedList}/>
          </Route>
        </Switch>
    </div>
  )
}

export default Profile
