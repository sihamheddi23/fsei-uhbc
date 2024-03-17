import Link from 'next/link'
import React from 'react'

function AdvertisingItem() {
  return (
    <div className='flex flex-col gap-4 p-4 border border-[rgba(52,52,52,0.22)]'>
        <h4 className='font-bold'>عنوان الإعلان</h4>
        <p className='text-[#ABABAB]'>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facilis maiores ...
        </p>
        <Link href={"/"} className='text-blue-500 text-left w-full font-semibold'>إقرأ المزيــد {">>"}</Link>
    </div>
  )
}

export default AdvertisingItem