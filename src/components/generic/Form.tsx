import React from 'react'
import Submit from './Buttons/Submit'
import Alert from './Alert'

interface FormProps{
    children: React.ReactNode,
    id?: string,
    onSubmit: (e: React.FormEvent<HTMLFormElement>) => Promise<void>,
    method: "GET" | "POST" | "PUT" | "PATCH" | "DELETE",
    errors?: string[]
}

const Form:React.FC<FormProps> = ({id="form", children, onSubmit, method, errors=[]})=>{
  return (
    <form id={id}  onSubmit={onSubmit} method={method} className='p-4 flex flex-col gap-4'>
      {errors.length > 0 && <Alert text={errors.join(", ")} variants="DANGER" />}
      {children} 
      <Submit /> 
    </form>
  )
}

export default Form