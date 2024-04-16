import { ROLES } from '@/utils/const'
import Link from 'next/link'

function layout(props) {
  return (
    <div className='h-screen my-7 p-3 '>
          <h1 className='text-center font-bold text-2xl'>لوحة التحكم - {ROLES[props.params.role]}</h1>
          <div className='grid grid-cols-4 h-full'>
              <div className='border border-gray-200 shadow-md flex flex-col p-3 h-[90%]'>
                  <h3 className='text-center font-semibold text-lg'>القـــــائمة</h3>
                  <div className='flex flex-col items-start mx-3 mt-5 p-2 gap-2'>
                      {/* links in arabic */}
                      <Link href={`/panel/${props.params.role}/users`}> المستخدمين </Link>
                      <Link href={`/panel/${props.params.role}/departemts`}> أقسام الكلية</Link>
                      <Link href={`/panel/${props.params.role}/teachers`}> المدرسين </Link>
                       <Link href={`/panel/${props.params.role}/ads`}>  الاعلانات </Link>
                       <Link href={`/panel/${props.params.role}/submajors`}>  التخصصات </Link>
                       <Link href={`/panel/${props.params.role}/subjects`}>  الدروس و الملفات </Link>
                       <Link href={`/panel/${props.params.role}/schedules`}>  جدول التوقيت </Link>
                  </div>
              </div>
              <div className='col-span-3'>
                  {props.children}
              </div>
          </div>
    </div>
  )
}

export default layout