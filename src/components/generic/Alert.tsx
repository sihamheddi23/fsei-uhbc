import React from 'react'

interface AlertProps {
  text: string
  variants: "DANGER" | "SUCCESS" | "INFO" | "WARNING"
}

const Alert: React.FC<AlertProps> = ({ text, variants }) => {
   const getColor = (variants:string) => {
     switch (variants) {
      case "DANGER":
         return "text-[#721c24] bg-[#f8d7da] border border-[#f5c6cb]"
      case "SUCCESS":
         return "text-[#155724] bg-[#d4edda] border border-[#c3e6cb]"
      case "INFO":
         return "text-[#004085] bg-[#cce5ff] border border-[#b8daff]"
      case "WARNING":
         return "text-[#856404] bg-[#fff3cd] border border-[#ffeeba]"
     }
   }

  return (
    <div className={getColor(variants) + "rounded-full w-full"}>
      <p className='p-3'>{text}</p>
    </div>
  )
}

export default Alert