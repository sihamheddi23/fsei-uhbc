import Link from 'next/link'
import React from 'react'

function Navbar() {
  return (
    <div className='hidden my-11 mx-8 md:p-2 lg:p-4 md:flex md:gap-3 lg:gap-5 lg:text-[20px]'>
        <Link href={'/'} className='border-b-2 border-b-blue-500'> الصفحة الرئيسية</Link>
        <Link href={'/'}>أقسام الكلية</Link>
        <Link href={'/'}>صفحة الاعلانـــــــات</Link>
        <Link href={'/'}> معلومــــات عن الكلية</Link>
        <Link href={'/'} className='mr-auto'>تسجيل الدخول</Link>
        <div>
            تغيير اللغة
        </div>
    </div>
  )
}

export default Navbar