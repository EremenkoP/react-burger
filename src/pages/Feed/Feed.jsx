import { useSelector } from "react-redux";

import FeedList from "../../components/FeedList/FeedList";
import OrderTable from "../../components/orderTable/OrderTable";

import style from "./Feed.module.css";

const Feed = () => {
  const ordersData = useSelector((state) => state.wsReducerAll.data);

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
