import { Input, Button } from '@ya.praktikum/react-developer-burger-ui-components'
import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import InputContainer from '../inputContainer/InputContainer'

import { getUser, renameUser } from '../../services/actions/API';
import { accessToken } from '../../utils/constants';
import { getCookie } from '../../utils/cookie';


import style from './ProfileForm.module.css'

const ProfileForm = () => {

  const dispatch= useDispatch()

  const user = useSelector(store=> store.authReducer.user);

  const [name, setName] = useState(user.name)
  const [disName, setDisName] = useState(true)
  const [email, setEmail] = useState(user.email)
  const [disEmail, setDisEmail] = useState(true)
  const [password, setPassword] = useState('P@ssw0rd')
  const [disPassword, setDisPassword] = useState(true)

  const isChange = (!disName || !disEmail || !disPassword) && (name !== user.name || email !== user.email || password !== 'Password')

  useEffect ( ()=> {
      dispatch(getUser(getCookie(accessToken)))
    }, [dispatch]
  )

  const cancelChange = () => {
    setName(user.name);
    setDisName(true);
    setEmail(user.email);
    setDisEmail(true);
    setPassword('P@ssw0rd');
    setDisPassword(true);
  }

  const submitUserData = () => {
    dispatch(renameUser(getCookie(accessToken), email, name))
    setDisName(true);
    setDisEmail(true);
    setDisPassword(true);
  }

  return (
    <div className={style.content}>
      <InputContainer>
        <Input
          type='text'
          placeholder='Имя'
          size={"default"}
          value={name}
          disabled={disName}
          onIconClick={()=>setDisName(!disName)}
          onChange={e => setName(e.target.value)}
          icon={'EditIcon'}
        />
      </InputContainer>
      <InputContainer>
        <Input
          type='text'
          placeholder='Логин'
          size={"default"}
          value={email }
          icon={'EditIcon'}
          disabled={disEmail}
          onIconClick={()=>setDisEmail(!disEmail)}
          onChange={e => setEmail(e.target.value)}
        />
      </InputContainer>
      <InputContainer>
        <Input
          type='password'
          placeholder='Пароль'
          size={"default"}
          value={password}
          icon={'EditIcon'}
          disabled={disPassword}
          onIconClick={()=>setDisPassword(!disPassword)}
          onChange={e => setPassword(e.target.value)}
        />
      </InputContainer>
      {isChange && <div className= {"mt-10 " + style.button_box}>
        <Button type="secondary" size="medium" onClick={cancelChange}>
          Отмена
        </Button>
        <Button type="primary" size="medium" onClick={submitUserData}>
          Сохранить
        </Button>
      </div>}
    </div>
  )
}

export default ProfileForm
