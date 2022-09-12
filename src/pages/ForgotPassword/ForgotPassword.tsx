import {Input} from '@ya.praktikum/react-developer-burger-ui-components'
import { useState } from 'react'
import { Link, useHistory } from 'react-router-dom'

import Form from '../../components/form/form'
import InputContainer from '../../components/inputContainer/InputContainer'
import { postEmailForPassword } from '../../services/actions/API'
import { useAppDispatch } from '../../hooks/store'

import style from "./ForgotPassword.module.css"


const ForgotPassword =  () => {

  const history = useHistory()
  const dispatch = useAppDispatch();

  const [email, setEmail] = useState('')

  const submitEmail = async (event: Event): Promise<void> => {
    event.preventDefault();
    await dispatch(postEmailForPassword(email));
    history.push('/reset-password')
  }

  return (
    <div className={style.content}>
      <Form title={'Восстановление пароля'} nameButton={'Восстановить'} onClick={()=>submitEmail}>
      <InputContainer>
        <Input
          type='email'
          placeholder='Укажите e-mail'
          size={"default"}
          value={email}
          onChange={e => setEmail(e.target.value)}
        />
      </InputContainer>
      </Form>
      <p className={'text text_type_main-default text_color_inactive mt-20 '}>Вспомнили пароль? <Link to='/login' className={style.link}>Войти</Link></p>
    </div>
  )
}

export default ForgotPassword
