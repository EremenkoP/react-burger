import { Button } from '@ya.praktikum/react-developer-burger-ui-components'

import style from "./form.module.css"

const Form = ({title, nameButton, children}) => {
  return (
    <form className={'mt-6 mb-28 '+ style.form}>
      <h2 className="text text_type_main-medium">{title}</h2>
      {children}
      <div className={"mt-6 "+style.button}> <Button type="primary" size="medium" > {nameButton} </Button></div>
    </form>
  )
}

export default Form
