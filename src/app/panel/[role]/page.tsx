import Alert from '@/components/Alert'
import React from 'react'

function Home() {
  return (
      <div className='mt-9 mx-4'>
        <Alert text={'مرحبا بك عزيزي المستخدم في لوحة التحكم الخاصة بك'} variants='INFO'/>
    </div>
  )
}

export default Home