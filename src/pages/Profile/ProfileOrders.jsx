import { useEffect } from "react"
import { useSelector,useDispatch } from "react-redux"

import FeedList from "../../components/FeedList/FeedList"
import ProfileNav from "../../components/provileNav/ProvileNav"
import { WS_AUTH_IS_CLOSE, WS_AUTH_IS_OPEN } from "../../services/actions/WSauth"

import style from './Profile.module.css'

const ProfileOrders = () => {

  const orders = useSelector(state => state.wsReducerAuth.orders)
  const dispatch = useDispatch()

  useEffect(()=> {
    dispatch({type: WS_AUTH_IS_OPEN})

    return()=> {
      dispatch({type: WS_AUTH_IS_CLOSE})
    }
  })

  return (
    <div className={style.content}>
      <ProfileNav/>
      <FeedList orders={orders} isPersonal={true} className={style.feedList}/>
    </div>
  )
}

export default ProfileOrders
