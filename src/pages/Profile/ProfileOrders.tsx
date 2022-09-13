import { useEffect } from "react"

import FeedList from "../../components/FeedList/FeedList"
import { Loading } from "../../components/Loading/Loading"
import ProfileNav from "../../components/provileNav/ProvileNav"
import { useAppDispatch, useAppSelector } from "../../hooks/store"
import { WS_AUTH_IS_CLOSE, WS_AUTH_IS_OPEN, WS_AUTH_START } from "../../services/actions/WSauth"
import { accessToken } from "../../utils/constants"
import { getCookie } from "../../utils/cookie"

import style from './Profile.module.css'

const ProfileOrders = () => {

  const orders = useAppSelector(state => state.wsReducerAuth.orders)
  const dispatch = useAppDispatch()

  useEffect(()=> {
    if(!orders.success) {
      dispatch({
        type: WS_AUTH_START,
        data: `?token=${getCookie(accessToken)}`
      })
      dispatch({type: WS_AUTH_IS_OPEN})
    }

    return()=> {
      dispatch({type: WS_AUTH_IS_CLOSE})
    }
  })

  return (
    <div className={style.content}>
      <ProfileNav/>
      <FeedList orders={orders.orders} isPersonal={true} className={style.feedList}/>
      {!orders.success && <Loading />}
    </div>
  )
}

export default ProfileOrders
