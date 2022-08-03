import style from './InputContainer.module.css'

const InputContainer = ({children}) =>{
  return (
    <div className={'mt-6 '+style.input__container} >
      {children}
    </div>
  )
}

export default InputContainer
