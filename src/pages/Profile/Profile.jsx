import { useSelector } from "react-redux"
import { Route, Switch, useRouteMatch} from "react-router-dom"

import FeedList from "../../components/FeedList/FeedList"
import ProfileForm from "../../components/profileForm/ProfileForm"
import ProfileNav from "../../components/provileNav/ProvileNav"

import style from './Profile.module.css'

const Profile = () => {

  const { url, path } = useRouteMatch()

  const orders = useSelector(state => state.wsReducerAuth.orders)

  return (
    <div className={style.content}>
      <ProfileNav url={url}/>
      <Switch>
        <Route to={path} exact={true}>
          <ProfileForm />
        </Route>
        <Route to={`${path}/orders`} exact={true}>
          <FeedList orders={orders} isPersonal={true} className={style.feedList}/>
        </Route>
      </Switch>
    </div>
  )
}

export default Profile
