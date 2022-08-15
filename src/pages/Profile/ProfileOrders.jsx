import { useSelector } from "react-redux"

import FeedList from "../../components/FeedList/FeedList"
import ProfileNav from "../../components/provileNav/ProvileNav"

import style from './Profile.module.css'

const ProfileOrders = () => {


  const orders = useSelector(state => state.wsReducerAuth.orders)

  return (
    <div className={style.content}>
      <ProfileNav/>
      <FeedList orders={orders} isPersonal={true} className={style.feedList}/>
    </div>
  )
}

export default ProfileOrders
