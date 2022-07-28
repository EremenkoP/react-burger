import { Input } from '@ya.praktikum/react-developer-burger-ui-components'
import InputContainer from '../inputContainer/InputContainer'

import style from './ProfileForm.module.css'

const ProfileForm = () => {
  return (
    <div className={style.content}>
      <InputContainer>
        <Input
          type='text'
          placeholder='Имя'
          size={"default"}
          value={'Name'}
          icon={'EditIcon'}
        />
      </InputContainer>
      <InputContainer>
        <Input
          type='text'
          placeholder='Логин'
          size={"default"}
          value={'Логин'}
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
