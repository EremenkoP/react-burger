import {Input, PasswordInput } from '@ya.praktikum/react-developer-burger-ui-components'
import { FormEvent, useState } from 'react'
import { Link, useHistory } from 'react-router-dom'

import Form from '../../components/form/form'
import InputContainer from '../../components/inputContainer/InputContainer'
import { useAppDispatch } from '../../hooks/store'
import { registrationAuth } from '../../services/actions/API'

import style from "./Register.module.css"

const Register =  () => {

  const dispatch = useAppDispatch()
  const history = useHistory()

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const submitRegistration = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    dispatch(registrationAuth(email, password, name))
    history.replace({ pathname: '/profile' })
  }

  return (
    <div className={style.content}>
      <Form title={'Регистрация'} nameButton={'Зарегистрироваться'} onSubmit={(event) => submitRegistration(event)}>
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
          size={'default'}
          value={password}
          onChange={e => setPassword(e.target.value)}
          name='password'
        />
      </InputContainer>
      </Form>
      <p className={'text text_type_main-default text_color_inactive mt-20 '}>Уже зарегистрированы? <Link to='/login' className={style.link}>Войти</Link></p>
    </div>
  )
}

export default Register
