import {Input } from '@ya.praktikum/react-developer-burger-ui-components'
import { useState } from 'react'
import { Link } from 'react-router-dom'

import { useAppDispatch } from '../../hooks/store'

import Form from '../../components/form/form'
import InputContainer from '../../components/inputContainer/InputContainer'
import { resetPassword } from '../../services/actions/API'

import style from "./ResetPassword.module.css"

const ResetPassword =  () => {

  const dispatch = useAppDispatch();

  const [secret, setSecret] = useState(true)
  const [password, setPassword] = useState('')
  const [token, setToken] = useState('')

  const submitResetPassword = async (event:Event) =>{
    event.preventDefault();
    await dispatch(resetPassword(password, token));
    setPassword('');
    setToken('');
  }

  return (
    <div className={style.content}>
      <Form title={'Восстановление пароля'} nameButton={'Сохранить'} onClick={()=>submitResetPassword}>
      <InputContainer>
        <Input
          type={secret ? 'password' : 'text'}
          placeholder='Введите новый пароль'
          icon= {!secret ? 'HideIcon' : 'ShowIcon'}
          size={"default"}
          onIconClick= {() => {setSecret(!secret)}}
          value={password}
          onChange={e => setPassword(e.target.value)}
        />
      </InputContainer >
      <InputContainer>
        <Input
          type='text'
          placeholder='Введите код из письма'
          size={"default"}
          value={token}
          onChange={e => setToken(e.target.value)}
        />
      </InputContainer>
      </Form>
      <p className={'text text_type_main-default text_color_inactive mt-20 '}>Вспомнили пароль? <Link to='/login' className={style.link}>Войти</Link></p>
    </div>
  )
}

export default ResetPassword
