import React from 'react'
import Submit from './Buttons/Submit'
import Alert from './Alert'

interface FormProps{
    children: React.ReactNode,
    onSubmit: (e: React.FormEvent<HTMLFormElement>) => Promise<void>,
    method: "GET" | "POST" | "PUT" | "PATCH" | "DELETE",
    errors?: string[]
}

const Form:React.FC<FormProps> = ({children, onSubmit, method, errors=[]})=>{
  return (
    <form onSubmit={onSubmit} method={method} className='p-4 flex flex-col gap-4'>
      {errors.length > 0 && <Alert text={errors.join(", ")} variants="DANGER" />}
      {children} 
      <Submit /> 
    </form>
  )
}

export default Form