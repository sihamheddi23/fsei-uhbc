import React from 'react'

interface Option {
    value: any
    label: string
}

interface SelectProps {
    labelTitle: string
    id: string
    onChange?: (event: React.ChangeEvent<HTMLSelectElement>) => void
    options: Option[]
    name: string
}

const Select:React.FC<SelectProps> = ({name, labelTitle, id, onChange, options})=>{
  return (
      <div className='my-2 flex flex-col gap-4 w-full'>
          <label htmlFor={id}> {labelTitle} </label>
          <select name={name} onChange={onChange} className="border border-gray-300 rounded-xl p-2 outline-none">
              {
                options.map((option, index)=>{
                  return (
                    <option key={index} value={option.value}>{option.label}</option>
                  )
                })
              }
          </select>
    </div>
  )
}

export default Select