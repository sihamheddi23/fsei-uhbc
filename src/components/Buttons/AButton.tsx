import React from 'react'

interface AButtonProps {
    resource?: string,
    onClick: () => void,
    variant: "ADD" | "UPDATE" | "DELETE"

}

const AButton:React.FC<AButtonProps> = ({ resource, variant, onClick }) =>{
  return (
      <div>
          {
              variant === "ADD" &&
              <button className='bg-blue-500 text-white px-4 py-2 rounded-lg ' onClick={onClick}>
                  اضافة {resource} جديد
              </button>
          }
          {
              variant === "UPDATE" &&
              <button className='bg-green-800 text-white px-4 py-2 rounded-lg ' onClick={onClick}>
                  تعديل 
              </button>
          }
          {
              variant === "DELETE" &&
              <button className='bg-red-500 text-white px-4 py-2 rounded-lg ' onClick={onClick}>
                  حذف 
              </button>
          }
             
      </div>
  )
}

export default AButton