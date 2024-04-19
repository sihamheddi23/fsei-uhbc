import Input from '@/components/generic/Input'
import Select from '@/components/generic/Select'
import React from 'react'

function SubjectForm() {
  const submajors = [
    { value: 1, label: 'الأخبار' },
    { value: 2, label: 'اعلان خاص بالكلية' },
    { value: 3, label: 'اعلان خاص بالفرع' },
  ]
  return (
    <div>
      <Input
        labelTitle=" اسم مقياس"
        type="text"
        name="name"
        id="name"
        placeholder="اسم مقياس"
      />
      <Select
        labelTitle=" التخصص و المستوى"
        id="submajors"
        options={submajors}
        onChange={() => {}}
      />
      <Select
        labelTitle=" الاسم الكامل للاستاد "
        id="submajors"
        options={submajors}
        onChange={() => {}}
      />
    </div>
  )
}

export default SubjectForm