import { Logo, BurgerIcon, ListIcon, ProfileIcon} from "@ya.praktikum/react-developer-burger-ui-components";
import { NavLink, useLocation } from "react-router-dom";

import style from './AppHeader.module.css'

const AppHeader = () => {

  const location = useLocation()

  const isHome = location.pathname === `/`
  const isOrders = location.pathname.startsWith(`/feed`)
  const isProfile = location.pathname.startsWith(`/profile`)

  return (
      <header className={style.header + ' pt-4 pb-4'}>
        <nav className={style.header__nav}>
          <ul className={style.header__ul}>
            <li className={style.header__li}>
              <NavLink to='/' className={style.nav__link}>
                <BurgerIcon type={isHome ? "primary" : "secondary"} />
                <span className={`${style.link}text text_type_main-small ml-2 ${!isHome && 'text_color_inactive'}`}> Конструктор</span>
              </NavLink>
            </li>
            <li className={style.header__li}>
              <NavLink to='/feed' className={style.nav__link}>
                <ListIcon type={isOrders ? "primary" : "secondary"} />
                <span className={`${style.link}text text_type_main-small ml-2 ${!isOrders && 'text_color_inactive'}`}> Лента заказов</span>
              </NavLink>
            </li>
            <li className={style.header__logo}>
              <Logo />
            </li>
            <li className={style.header__li}>
              <NavLink to='/profile' className={style.nav__link}>
                <ProfileIcon type={isProfile ? "primary" : "secondary"} />
                <span className={`${style.link}text text_type_main-small ml-2 ${!isProfile && 'text_color_inactive'}`}> Личный кабинет</span>
              </NavLink>
            </li>
          </ul>
          </nav>
      </header>
  )
};

export default AppHeader;
