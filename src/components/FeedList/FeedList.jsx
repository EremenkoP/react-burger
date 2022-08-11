import { Link, useLocation } from "react-router-dom"

import ItemFeedList from "../ItemFeedList/ItemFeedList"

import style from './FeedList.module.css'

const FeedList = ({className, orders}) => {

  const location = useLocation()

  return(
    <ul className={`${style.ul} ${className} `}>
      {orders.map((order, index) => (
      <li className={'mt-2 ' + style.li} key={order._id}>
        <Link className={ style.link}
        to={{
            pathname:`${location.pathname}/${order._id}`,
            state: {background: location}
        }}
        >

            <ItemFeedList order={order} isPersonal={false}/>

        </Link> </li>
      ))}
    </ul>
  )
}

export default FeedList
