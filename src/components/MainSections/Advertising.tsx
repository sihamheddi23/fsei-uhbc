import Link from 'next/link'
import React from 'react'
import AdvertisingItem from './SubSections/AdvertisingItem'
import MainSectionHeader from '../Headers/MainSectionHeader'

function Advertising(props:any) {
  return (
    <div className='my-10'>
        <MainSectionHeader title={props.title} />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 my-4 mx-3">
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

export default Advertising