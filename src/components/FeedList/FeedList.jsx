import { Link, useLocation } from "react-router-dom"

import ItemFeedList from "../ItemFeedList/ItemFeedList"

import style from './FeedList.module.css'

const FeedList = ({className, orders, isPersonal}) => {

  const location = useLocation()

  return(
    <ul className={`${style.ul} ${className} `}>
      {orders.map((order) => (
      <li className={'mt-2 ' + style.li} key={order._id}>
        <Link className={ style.link}
        to={{
            pathname:`${location.pathname}/${order._id}`,
            state: {background: location}
        }}
        >

        <ItemFeedList order={order} isPersonal={isPersonal}/>

        </Link> </li>
      ))}
    </ul>
  )
}

export default FeedList
