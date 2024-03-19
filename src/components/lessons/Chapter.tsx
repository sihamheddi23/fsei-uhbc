import Image from 'next/image'
import React from 'react'

function DocumentInfo(props:any) {
  return (
    <div className='w-full flex items-center gap-3 border border-gray-300 p-4'>
        <div className='border flex justify-center border-gray-300 w-[80px] p-2 h-[80px]'>
            <Image src={"/pdf.png"} width={100} height={100} alt={"pdf"}/>
        </div>
        <div className='flex flex-col'>
            <h3 className='font-bold text-lg text-blue-500'>{props.title} </h3>
            <p className='text-gray-500'>{props.description}</p>
        </div>
        <div className='flex gap-3 mr-auto'>
            <div className="cursor-pointer flex flex-col justify-center items-center p-2 border border-gray-300">
                <Image src={"/eye.png"} width={20} height={20} alt={"show file icon"}/>
                <p className='text-center text-blue-500'>عرض محتوى الملف</p>
            </div>
            <div className="cursor-pointer flex flex-col justify-center items-center p-2 border border-gray-300">
                <Image src={"/download.png"} width={20} height={20} alt={"show file icon"}/>
                <p className='text-center  text-blue-500'>تحميل  الملف</p>
            </div>

        </div>
    </div>
  )
}

export default DocumentInfo