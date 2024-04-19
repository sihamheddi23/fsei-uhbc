import Input from '@/components/generic/Input'
import Select from '@/components/generic/Select'
import React from 'react'

function SubMajorForm() {
    const levels = [{value: 1, label: "محمد"}, {value: 2, label: "عبدالله"}]
  return (
    <div>
        <Input labelTitle="اسم " type="text" name="name" id="name" placeholder="اسم " />
        <Select
        labelTitle=" المستوى"
        id="level"
        options={levels}
        onChange={() => {}}
        />
        <Select
        labelTitle=" اسم الفرع"
        id="level"
        options={levels}
        onChange={() => {}}
      />
    </div>
  )
}

export default SubMajorForm