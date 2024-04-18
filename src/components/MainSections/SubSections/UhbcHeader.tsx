import Image from 'next/image'
import React from 'react'

function UhbcHeader() {
  return (
    <div className='p-4 flex justify-center text-center gap-2 items-center md:hidden'>
        <div className="flex  flex-col gap-3">
            <h4 className='text-[12px]'>حـــــــامعة حســـيبة بن بــــــوعلي  ـ الشلف</h4>
            <div className='border-t border-t-black'></div>
            <h4 className='text-[12px]'>Universite Hassiba Benbouali de Chlef - UHBC</h4>
        </div>
        <Image src="/logo-uhbc.jpg" alt="logo uhbc university" width={74} height={74}/>
    </div>
  )
}

export default UhbcHeader