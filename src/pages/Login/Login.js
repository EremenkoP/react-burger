import {Input, PasswordInput } from '@ya.praktikum/react-developer-burger-ui-components'
import { Link } from 'react-router-dom'

import Form from '../../components/form/form'
import InputContainer from '../../components/inputContainer/InputContainer'

import style from "./login.module.css"

const Login =  () => {
  return (
    <div className={style.content}>
    <Form title={'Вход'} nameButton={'Войти'}>
      <InputContainer>
        <Input
          type='email'
          placeholder='E-mail'
          size={"default"}
        />
      </InputContainer>
      <InputContainer>
        <PasswordInput
          size={'large'}
        />
      </InputContainer>
    </Form>
      <p className={'text text_type_main-default text_color_inactive mt-30 '}>Вы — новый пользователь? <Link to='/register' className={style.link}>Зарегистрироваться</Link></p>
      <p className={'text text_type_main-default text_color_inactive mt-4 '}>Забыли пароль? <Link to='/forgot-password' className={style.link}>Восстановить пароль</Link></p>
    </div>
  )
}

export default Login
