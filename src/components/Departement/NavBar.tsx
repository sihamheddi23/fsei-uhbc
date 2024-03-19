"use client";
import { getClassName } from '@/utils/functions'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

function NavBar({slug}:any) {
  const pathname = usePathname()
  return (
    <div className='flex gap-4 justify-center'>
        <Link href={`/departement/${slug}`} className={getClassName("",pathname,slug)}>معلومات عن الفرع</Link>
        <Link href={"/ads/"+slug} className={getClassName("ads",pathname)}>صفحة الاعلانات</Link>
        <Link href={`/departement/${slug}/lessons/master/1/networks/os/`} className={getClassName("lessons",pathname)}>دروس و ملفات</Link>
        <Link href={`/departement/${slug}/schedule/master/1/networks/`} className={getClassName("schedule",pathname)}>جدول التوقيت</Link>
    </div>
  )
}

export default NavBar