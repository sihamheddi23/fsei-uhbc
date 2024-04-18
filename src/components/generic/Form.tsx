import React from 'react'
import Submit from './Buttons/Submit'

interface FormProps{
    children: React.ReactNode,
    onSubmit: () => void
}

const Form:React.FC<FormProps> = ({children, onSubmit})=>{
  return (
    <form onSubmit={onSubmit} className='p-4 flex flex-col gap-4'>
      {children} 
      <Submit /> 
    </form>
  )
}

export default Form