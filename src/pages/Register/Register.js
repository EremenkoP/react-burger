import {Input, PasswordInput } from '@ya.praktikum/react-developer-burger-ui-components'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { Link, useHistory } from 'react-router-dom'

import Form from '../../components/form/form'
import InputContainer from '../../components/inputContainer/InputContainer'
import { registrationAuth } from '../../services/actions/API'

import style from "./Register.module.css"

const Register =  () => {

  const dispatch = useDispatch()
  const history = useHistory()

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const submitRegistration = (event) => {
    event.preventDefault();
    dispatch(registrationAuth(email, password, name))
    .then(history.replace({ pathname: '/profile' }))
  }

  return (
    <div className={style.content}>
      <Form title={'Регистрация'} nameButton={'Зарегистрироваться'} onClick={submitRegistration}>
      <InputContainer>
        <Input
          type='text'
          placeholder='Имя'
          size={"default"}
          value={name}
          onChange={e => setName(e.target.value)}
        />
      </InputContainer>
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
          size={'large'}
          value={password}
          onChange={e => setPassword(e.target.value)}
        />
      </InputContainer>
      </Form>
      <p className={'text text_type_main-default text_color_inactive mt-20 '}>Уже зарегистрированы? <Link to='/login' className={style.link}>Войти</Link></p>
    </div>
  )
}

export default Register
