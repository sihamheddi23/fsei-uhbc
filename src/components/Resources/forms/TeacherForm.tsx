import Input from '@/components/generic/Input'
import Select from '@/components/generic/Select'
import React from 'react'

function TeacherForm() {
  const grades = [{value: 1, label: "MCA"}, {value: 2, label: "MAA"}]
  const usernames = [{value: 1, label: "MCA"}, {value: 2, label: "MAA"}]

  return (
    <div>
          <Input labelTitle="الاسم" type="text" name="first_name" id="first_name" placeholder="الاسم " />
          <Input labelTitle="اللقب " type="text" name="last_name" id="last_name" placeholder=" اللقب" />
          <Select labelTitle="اسم المستخدم " id="username" options={usernames} onChange={() => {}} />  
          <Select labelTitle="رتبة " id="grade" options={grades} onChange={() => {}} />      
    </div>
  )
}

export default TeacherForm