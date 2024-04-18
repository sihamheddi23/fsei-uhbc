import Image from 'next/image'
import React from 'react'

function FseiUhbcHeader() {
  return (
    <div className='text-white items-center w-full md:flex md:justify-center md:gap-4 hidden  bg-[#0d111e] h-16 p-3'>
      <Image src={"/uhbc.svg"} width={30} height={30} alt='uhbc logo' />
      <h4>حـــــــامعة حســـيبة بن بــــــوعلي  ـ الشلف</h4>
     </div>

  )
}

export default FseiUhbcHeader