import {Input, PasswordInput } from '@ya.praktikum/react-developer-burger-ui-components'
import { FormEvent, useState } from 'react'
import { Link, useHistory } from 'react-router-dom'

import Form from '../../components/form/form'
import InputContainer from '../../components/inputContainer/InputContainer'
import { useAppDispatch } from '../../hooks/store'
import { autorizationUser } from '../../services/actions/API'

import style from "./login.module.css"

const Login =  () => {

  const dispatch = useAppDispatch();
  const history = useHistory()

  const [password, setPassword] = useState('')
  const [email, setEmail] = useState('')

  const submitAutorization = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    await dispatch(autorizationUser(email, password))
    history.push('/')
  }

  return (
    <div className={style.content}>
    <Form title={'Вход'} nameButton={'Войти'} onClick={(event)=>submitAutorization(event)}>
      <InputContainer>
        <Input
          type='email'
          placeholder='E-mail'
          size={"default"}
          value={email}
          onChange={e => setEmail(e.target.value)}
        />
      </InputContainer>
      <InputContainer>
        <PasswordInput
          size={'default'}
          value={password}
          onChange={e => setPassword(e.target.value)}
          name='password'
        />
      </InputContainer>
    </Form>
      <p className={'text text_type_main-default text_color_inactive mt-30 '}>Вы — новый пользователь? <Link to='/register' className={style.link}>Зарегистрироваться</Link></p>
      <p className={'text text_type_main-default text_color_inactive mt-4 '}>Забыли пароль? <Link to='/forgot-password' className={style.link}>Восстановить пароль</Link></p>
    </div>
  )
}

export default Login
