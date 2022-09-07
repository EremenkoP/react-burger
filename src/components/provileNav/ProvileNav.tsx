import { FC, useCallback } from "react";
import { NavLink, useLocation, useHistory} from "react-router-dom"

import { logOut } from "../../services/actions/API";
import { refreshToken } from "../../utils/constants";
import { getCookie } from "../../utils/cookie";

import style from './ProfileNav.module.css';
import { useAppDispatch } from "../../hooks/store";

const ProfileNav: FC<{url: string}> = ({url}) =>{

  const location = useLocation();
  const history = useHistory();
  const dispatch = useAppDispatch();

  const isProfile = location.pathname === `/profile`;
  const isOrders = location.pathname.startsWith('/profile/orders');

  const signOut = useCallback(
    async () => {
      await dispatch(logOut(getCookie(refreshToken)));
      history.replace({ pathname: '/profile' });
    },
    [history, dispatch]
  );

  return (
    <div className={style.content}>
      <ul className={style.ul}>
        <li className={style.li}>
          <NavLink to={'/profile'} className={style.nav__link}>
            <span className={`${style.link} text text_type_main-medium ${!isProfile && 'text_color_inactive'}`}>Профиль</span>
          </NavLink>
        </li>
        <li className={style.li}>
          <NavLink to={'/profile/orders'} className={style.nav__link}>
            <span className={`${style.link} text text_type_main-medium ${!isOrders && 'text_color_inactive'}`}>История заказов</span>
          </NavLink>
        </li>
        <li className={style.li}>
          <p className={`${style.link} text text_type_main-medium text_color_inactive`} onClick={signOut}>Выход</p>
        </li>
      </ul>
      <p className="text text_type_main-default text_color_inactive mt-20">В этом разделе вы можете изменить свои персональные данные</p>
    </div>
  )
}

export default ProfileNav
