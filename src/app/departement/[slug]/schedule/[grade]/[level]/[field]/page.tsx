import DocumentInfo from '@/components/lessons/Chapter';
import { DEPARTEMENTS, FIELDS, GRADES, LEVELS, MODULES } from '@/utils/const'
import React from 'react'

function Page({ params }: { params: { slug: string, grade: string, level: string, field: string, module: string } }) {
  const { slug, grade, level, field, module } = params;

  return (
    <div className='m-8 '>
      <div className='text-xl '>
        <span className='text-blue-500'>{GRADES[grade]} / {LEVELS[level]} </span> / <span>  {FIELDS[field]}</span>
      </div>
      <div className='w-full flex flex-col gap-3 my-8'>
        <DocumentInfo title={" جدول التوقيت السداسي الأول"} description={""}/>
        <DocumentInfo  title={" جدول التوقيت السداسي الثاني"} description={""}/>
        <DocumentInfo  title={" جدول التوقيت  اختبارات سداسي الاول"} description={""}/>
        <DocumentInfo  title={" جدول التوقيت  الاستدراك"} description={""}/>


      </div>
    </div>
  );
}

export default Page