import { Input } from '@ya.praktikum/react-developer-burger-ui-components'
import { useSelector } from 'react-redux';
import InputContainer from '../inputContainer/InputContainer'

import style from './ProfileForm.module.css'

const ProfileForm = () => {
  const user = useSelector(store=> store.authReducer.user);

  return (
    <div className={style.content}>
      <InputContainer>
        <Input
          type='text'
          placeholder='Имя'
          size={"default"}
          value={user.name}
          icon={'EditIcon'}
        />
      </InputContainer>
      <InputContainer>
        <Input
          type='text'
          placeholder='Логин'
          size={"default"}
          value={user.email }
          icon={'EditIcon'}
        />
      </InputContainer>
      <InputContainer>
        <Input
          type='password'
          placeholder='Пароль'
          size={"default"}
          value={'password'}
          icon={'EditIcon'}
        />
      </InputContainer>
    </div>
  )
}

export default ProfileForm
