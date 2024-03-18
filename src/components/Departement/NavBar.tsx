import Link from 'next/link'
import React from 'react'

function NavBar() {
  return (
    <div className='flex gap-4 justify-center'>
        <Link href={'/'} className='border-b-2 border-b-blue-500'>معلومات عن الفرع</Link>
        <Link href={"/"} className='hover:text-blue-500'>صفحة الاعلانات</Link>
        <Link href={"/"} className='hover:text-blue-500'>دروس و ملفات</Link>
        <Link href={"/"} className='hover:text-blue-500'>جدول التوقيت</Link>
    </div>
  )
}

export default NavBar