import {Input } from '@ya.praktikum/react-developer-burger-ui-components'
import { Link } from 'react-router-dom'

import Form from '../../components/form/form'
import InputContainer from '../../components/inputContainer/InputContainer'

import style from "./ResetPassword.module.css"

const ResetPassword =  () => {
  return (
    <div className={style.content}>
      <Form title={'Восстановление пароля'} nameButton={'Сохранить'}>
      <InputContainer>
        <Input
          type='password'
          placeholder='Введите новый пароль'
          icon= "ShowIcon"
          size={"default"}
        />
      </InputContainer >
      <InputContainer>
        <Input
          type='text'
          placeholder='Введите код из письма'
          size={"default"}
        />
      </InputContainer>
      </Form>
      <p className={'text text_type_main-default text_color_inactive mt-20 '}>Вспомнили пароль? <Link to='/login' className={style.link}>Войти</Link></p>
    </div>
  )
}

export default ResetPassword
