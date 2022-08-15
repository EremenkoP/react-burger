import { useEffect } from "react";
import { useSelector, useDispatch} from "react-redux";

import FeedList from "../../components/FeedList/FeedList";
import OrderTable from "../../components/orderTable/OrderTable";
import { WS_IS_CLOSE, WS_IS_OPEN } from "../../services/actions/WS";

import style from "./Feed.module.css";

const Feed = () => {
  const ordersData = useSelector((state) => state.wsReducerAll.data);
  const dispatch = useDispatch()

  useEffect(()=> {
    dispatch({type: WS_IS_OPEN})

    return()=> {
      dispatch({type: WS_IS_CLOSE})
    }
  })

  return (
    <div>
      {Object.keys(ordersData).length !== 0 ? (
        <div className={style.content}>
          <h2 className={"text text_type_main-large " + style.title}>
            Лента заказов
          </h2>
          <FeedList className={style.list} orders={ordersData.orders} isPersonal={false}/>
          <OrderTable data={ordersData} className={style.table} />
        </div>
      ) : (
        <h2 className={"text text_type_main-large text_color_inactive mt-20 " + style.awaitTitle}>
          Секундочку, происходит загрузка данных...
        </h2>
      )}
    </div>
  );
};

export default Feed;
