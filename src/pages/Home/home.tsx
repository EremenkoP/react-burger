import React, {useEffect} from "react";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { useHistory } from "react-router-dom"

import BurgerIngredients from "../../components/burgerIngredients/BurgerIngredients";
import BurgerConstructor from "../../components/burgerConstructor/burgerConstructor";
import Modal from "../../components/modal/Modal";
import OrderDetails from "../../components/orderDetails/OrderDetails";

import { pushOrder, getNewToken } from "../../services/actions/API";
import { accessToken, refreshToken } from "../../utils/constants";
import { getCookie } from "../../utils/cookie";
import { useAppDispatch, useAppSelector } from "../../hooks/store";

import style from './home.module.css'


const Home = () => {
    const dispatch = useAppDispatch();
    const history = useHistory()

    const [isOrderDetailsOpened, setIsOrderDetailsOpened] = React.useState(false);

    const ingredients = useAppSelector(store => store.ingridientReducer.ingredients)
    const ingredientsForOrder = useAppSelector(store => store.ingridientReducer.ingredientsForBurger)
    const isAuth = useAppSelector(store => store.authReducer.isAuth)

    const closeModalsOrder = () => {
      setIsOrderDetailsOpened(false);
    };

    useEffect(() => {
      const token =  getCookie(refreshToken)
      if (token !== undefined) {
        dispatch(getNewToken(token))
        setInterval(getNewToken(token), 72000000)
      }
    }, [dispatch]);

    const handleOrderClick = async () => {
      if(isAuth){
        const ingredientsOrder = ingredientsForOrder.elseIngregients.map((ingredient) => ingredient._id)
        ingredientsOrder.unshift(ingredientsForOrder.bun._id)
        await dispatch(pushOrder(ingredientsOrder, getCookie(accessToken)))
        setIsOrderDetailsOpened(true)
      } else {
        history.push('/login')
      }
      };

    return (
      <>
        <main className={style.main}>
        <DndProvider backend={HTML5Backend}>
          { ingredients.length !== 0 ? (
            <div className={style.content}>

                <BurgerIngredients />

                <BurgerConstructor handleOrder={handleOrderClick} />

            </div>
            ) : (
              <p className={'text text_type_main-large text_color_inactive mt-15'}>Минуточку, мы стыкуемся...</p>
            )
          }
        </DndProvider>
        </main>

        {isOrderDetailsOpened && (
          <Modal onCloseClick={()=>closeModalsOrder()}>
            <OrderDetails />
          </Modal>
        )}
      </>
    );
}

export default Home
