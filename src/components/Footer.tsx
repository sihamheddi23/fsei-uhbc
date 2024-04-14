import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

function Footer() {
  return (
    <div className='w-full text-white bg-[#031420]'>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-1'>
            <div className='flex flex-col md:flex-row justify-center md:justify-start items-center gap-4 py-4 px-2'>
                <Image src={"/fsei.svg"} width={100} height={100} alt='fsei logo'/>
                <div className='flex flex-col'>
                    <h4 className='text-[15px]'>كلية العلوم الدقيقة و الاعلام الآلي</h4>
                    <h4 className='text-[15px]'>حـــــــامعة حســـيبة بن بــــــوعلي  ـ الشلف</h4>
                </div>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-3'>
                <div className='flex items-center flex-col gap-1 md:mt-8'>
                    <Link href={"/"}>الصفحة الرئيسية</Link>
                    <Link href={"/"}>معلومات عن الكلية </Link>
                    <Link href={"/"}>تسجيل الدخول</Link>
                </div>
                <div className='flex items-center my-4 flex-col gap-1'>
                    <h4 className='font-semibold'>أقسام الكلية</h4>
                    <Link href={"/"}>قسم الاعلام الآلي</Link>
                    <Link href={"/"}>قسم الرياضيات</Link>
                    <Link href={"/"}>قسم الفيزياء</Link>
                    <Link href={"/"}>قسم الكيمياء</Link>
                </div>
                <div className='flex items-center my-4 flex-col gap-1'>
                    <div className='flex gap-4 my-3'>
                        <Image src={"/linkedin.png"} width={35} height={35} alt={"linkedin"}/>
                        <Image src={"/fb.png"} width={35} height={35} alt={"fb"}/>
                    </div>
                    <div className='flex flex-col items-center'>
                        <h1 className='font-semibold'>تغيير اللغة</h1>
                        <div className='flex gap-3'>
                            <span className='font-thin'>AR</span>
                            <span className='font-thin'>EN</span>
                            <span className='font-thin'>FR</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer