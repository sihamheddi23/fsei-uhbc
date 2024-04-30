import { getSubMajors } from '@/api-fetchers/sub-majors'
import { getTeachers } from '@/api-fetchers/teacher'
import Input from '@/components/generic/Input'
import Select from '@/components/generic/Select'
import React, { useEffect, useState } from 'react'

function SubjectForm() {
  const [submajorsOptions, setSubmajorsOptions] = useState([])
  const [teachersOptions, setTeachersOptions] = useState([])

  useEffect(() => {
   getSubMajors().then((submajors) => {
    const sb = submajors.map((submajor:any) => {
      return { value: submajor.id, label: submajor.name+" - "+submajor.level }
    })
    setSubmajorsOptions(sb)
   })
   
   getTeachers().then((teachers) => {
    const t = teachers.map((teacher:any) => {
      return { value: teacher.id, label: teacher.first_name+" "+teacher.last_name }
    })
    setTeachersOptions(t)
   })
  }, [])
 
  return (
    <div>
      <Input
        errors={[]}
        labelTitle=" اسم مقياس"
        type="text"
        name="name"
        id="name"
        placeholder="اسم مقياس"
      />
      <Select
        name='sub_major_id'
        labelTitle=" التخصص و المستوى"
        id="submajors"
        options={submajorsOptions}
      />
      <Select
        name='teacher_id'
        labelTitle=" الاسم الكامل للاستاد "
        id="teachers"
        options={teachersOptions}
      />
    </div>
  )
}

export default SubjectForm