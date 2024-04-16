import React from 'react'

interface AddButtonProps{
    resource:string
}

const AddButton:React.FC<AddButtonProps> = ({ resource }) =>{
  return (
      <div className='w-full flex justify-end'>
              <button className='bg-blue-500 text-white px-4 py-2 rounded-lg '>
                  اضافة {resource} جديد
              </button>
      </div>
  )
}

export default AddButton