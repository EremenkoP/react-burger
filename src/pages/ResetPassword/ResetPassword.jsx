import {Input } from '@ya.praktikum/react-developer-burger-ui-components'
import { useState } from 'react'
import { Link } from 'react-router-dom'

import Form from '../../components/form/form'
import InputContainer from '../../components/inputContainer/InputContainer'

import style from "./ResetPassword.module.css"

const ResetPassword =  () => {
  const [secret, setSecret] = useState(true)
  return (
    <div className={style.content}>
      <Form title={'Восстановление пароля'} nameButton={'Сохранить'}>
      <InputContainer>
        <Input
          type={secret ? 'password' : 'text'}
          placeholder='Введите новый пароль'
          icon= {!secret ? 'HideIcon' : 'ShowIcon'}
          size={"default"}
          onIconClick= {() => {setSecret(!secret)}}
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