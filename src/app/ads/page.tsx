import Advertising from '@/components/MainSections/Advertising'
import React from 'react'

function Ads() {
  return (
    <div>
        <div className='mx-8'>
            <Advertising title={"  الكلية"}/>
            <Advertising title={"قسم الاعلام الالي"}/>
            <Advertising title={"قسم الرياضيات"}/>
            <Advertising title={"قسم الفيزياء "}/>
            <Advertising title={"قسم  الكيمياء"}/>
        </div>
    </div>
  )
}

export default Ads