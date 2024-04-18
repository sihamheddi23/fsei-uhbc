import Input from '@/components/generic/Input'
import Select from '@/components/generic/Select'
import React from 'react'

function DepartementForm() {
    const options = [{value: 1, label: "محمد"}, {value: 2, label: "عبدالله"}]
  return (
    <div>
        <Input labelTitle="اسم الفرع" type="text" name="name" id="name" placeholder="اسم الفرع" />
        <Select labelTitle="رئيس الفرع" id="head_of_department" options={options} onChange={() => {}} />      
    </div>
  )
}

export default DepartementForm