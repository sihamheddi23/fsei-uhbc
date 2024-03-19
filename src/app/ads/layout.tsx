import React from 'react'

function layout({children}: any) {
  return (
    <div>
        <h1 className='text-center font-bold text-4xl my-10'>
            صفحة الاعلانات
        </h1>
        {children}
    </div>
  )
}

export default layout