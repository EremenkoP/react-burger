import { Logo, BurgerIcon, ListIcon, ProfileIcon} from "@ya.praktikum/react-developer-burger-ui-components";
import style from './AppHeader.module.css'

const AppHeader = () => {
  return (
    <>
      <header className={style.header + ' pt-4 pb-4'}>
        <nav className={style.header__nav}>
          <ul className={style.header__ul}>
            <li className={style.header__li}>
              <BurgerIcon type="primary" />
              <p className={'text text_type_main-small ml-2'}> Конструктор </p>
            </li>
            <li className={style.header__li}>
              <ListIcon type="secondary" />
              <p className={'text text_type_main-small ml-2 text_color_inactive'}> Лента заказов </p>
            </li>
            <li className={style.header__logo}>
              <Logo />
            </li>
            <li className={style.header__li}>
              <ProfileIcon type="secondary" />
              <p className={'text text_type_main-small ml-2 text_color_inactive'}> Личный кабинет </p>

            </li>
          </ul>
          </nav>
      </header>
    </>
  )
};

export default AppHeader;
