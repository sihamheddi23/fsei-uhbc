import DocumentInfo from '@/components/lessons/Chapter';
import { DEPARTEMENTS, FIELDS, GRADES, LEVELS, MODULES } from '@/utils/const'
import React from 'react'

function Page({ params }: { params: { slug: string, grade: string, level: string, field: string, module: string } }) {
  const { slug, grade, level, field, module } = params;

  return (
    <div className='m-8 '>
      <div className='text-xl '>
        <span className='text-blue-500'>{DEPARTEMENTS[slug as keyof typeof DEPARTEMENTS]} / {GRADES[grade as keyof typeof GRADES]} / {LEVELS[level as keyof typeof LEVELS]} /  {FIELDS[field as keyof typeof FIELDS]} </span> / <span>{MODULES[module as keyof typeof MODULES]}</span>
      </div>
      <div className='w-full flex flex-col gap-3 my-8'>
        <DocumentInfo title={"المحاضرة الاولى"} description={"هذا النص هو مثال لنص يمكن ان يستبدل في نفس المساحة"}/>
        <DocumentInfo title={"المحاضرة الاولى"} description={"هذا النص هو مثال لنص يمكن ان يستبدل في نفس المساحة"}/>
        <DocumentInfo title={"المحاضرة الاولى"} description={"هذا النص هو مثال لنص يمكن ان يستبدل في نفس المساحة"}/>
        <DocumentInfo title={"المحاضرة الاولى"} description={"هذا النص هو مثال لنص يمكن ان يستبدل في نفس المساحة"}/>


      </div>
    </div>
  );
}

export default Page