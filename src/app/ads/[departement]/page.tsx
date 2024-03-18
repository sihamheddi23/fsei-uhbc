import AdvertisingItem from '@/components/MainSections/SubSections/AdvertisingItem'
import React from 'react'

function page() {
  return (
    <div className='mx-20'>
        <h1 className='text-2xl font-bold'>قسم الاعلام الالي</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 my-7 ">
            <AdvertisingItem/>
            <AdvertisingItem/>
            <AdvertisingItem/>
            <AdvertisingItem/>
            <AdvertisingItem/>
            <AdvertisingItem/>
            <AdvertisingItem/>
            <AdvertisingItem/>
            <AdvertisingItem/>
            <AdvertisingItem/>
            <AdvertisingItem/>
            <AdvertisingItem/>
            <AdvertisingItem/>
            <AdvertisingItem/>
            <AdvertisingItem/>
            <AdvertisingItem/>
            <AdvertisingItem/>
            <AdvertisingItem/>
        </div>
    </div>
  )
}

export default page