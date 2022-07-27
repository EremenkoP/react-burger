import {Input, PasswordInput } from '@ya.praktikum/react-developer-burger-ui-components'
import { Link } from 'react-router-dom'

import Form from '../../components/form/form'
import InputContainer from '../../components/inputContainer/InputContainer'

import style from "./Register.module.css"

const Register =  () => {
  return (
    <div className={style.content}>
      <Form title={'Регистрация'} nameButton={'Зарегистрироваться'}>
      <InputContainer>
        <Input
          type='text'
          placeholder='Имя'
          size={"default"}
        />
      </InputContainer>
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
      <p className={'text text_type_main-default text_color_inactive mt-20 '}>Уже зарегистрированы? <Link to='/login' className={style.link}>Войти</Link></p>
    </div>
  )
}

export default Register
