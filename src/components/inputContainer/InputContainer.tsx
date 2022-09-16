import { FC } from 'react'
import style from './InputContainer.module.css'

const InputContainer: FC = ({children}) =>{
  return (
    <div className={'mt-6 '+style.input__container} >
      {children}
    </div>
  )
}

export default InputContainer
