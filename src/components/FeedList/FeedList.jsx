import ItemFeedList from "../ItemFeedList/ItemFeedList"

import style from './FeedList.module.css'

const FeedList = ({className, orders}) => {
  return(
    <ul className={`${style.ul} ${className} `}>
      {orders.map(order => (
        <li key={order.number} className={'mt-5 '+ style.li}>
          <ItemFeedList order={order} isPersonal={false}/>
        </li>
      ))}
    </ul>
  )
}

export default FeedList
