import { Link} from "react-router-dom"

import style from './error.module.css'

const Error = () => {

  return(
    <div className={"p-6 "+style.content}>
      <h2 className="text text_type_digits-large">404</h2>
      <p className={"text text_type_main-large " + style.text}>Извините но мы не знаем вашей планеты (космической станции) и не можем там приземлиться </p>
      <p className="text text_type_main-default text_color_inactive"> Не пугайтесь, вы просто ввели неправильный адресс или попытались попасть на страницу которой не существует</p>
       <Link className="text text_type_main-default" to={'/'}>На главную</Link>
    </div>
  )
}

export default Error
