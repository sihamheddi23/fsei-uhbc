import React from 'react'

interface InputProps {
    labelTitle: string
    type: "text" | "email" | "password" | "number"
    name: string
    id: string
    placeholder: string
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void
    value?: string
    required?: boolean
}

const Input:React.FC<InputProps> = ({ labelTitle, type, name, id, placeholder }) => {
  return (
      <div className='flex flex-col gap-4'>
          <label htmlFor="username"> {labelTitle} </label>
          <input
            type={type}
            name={name}
            id={id}
            className="border border-gray-300 rounded-xl p-2 outline-none"
            placeholder={placeholder}
          />
      </div>
  )
}

export default Input