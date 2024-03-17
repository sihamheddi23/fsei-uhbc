import Image from 'next/image'
import React from 'react'
import FseiHeaderContent from './FseiHeaderContent'

function FseiHeader() {
  return (
    <div className='mt-5 md:hidden'>
        <div>
            <Image src={"/space.jpg"} width={100} height={100} alt='fsei space' className='w-full h-[200px]'  />
        </div>
        <div className='w-full h-[204px] bg-[rgba(24,23,23,0.57)] absolute top-[119px]'></div>
        <div className='text-white flex gap-2  justify-center items-center absolute top-[164px] w-full p-2'>
             <FseiHeaderContent/>
            <Image src={"/fsei.svg"} width={100} height={100} alt='fsei logo'/>
        </div>
    </div>
  )
}

export default FseiHeader