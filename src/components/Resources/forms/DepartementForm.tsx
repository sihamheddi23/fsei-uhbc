"use client";
import { getHeadDepartmentTeachers } from '@/api-fetchers/teacher'
import Input from '@/components/generic/Input'
import Select from '@/components/generic/Select'
import React, { useEffect, useState } from 'react'

function DepartementForm() {
  const [headDepartments, setHeadDepartmenst] = useState([])
  const init = () => {
       getHeadDepartmentTeachers().then((data) => {
         const head_departments_options = data.map((d:any) => {
           return {
             value: d?._id as number,
             label: d.first_name + " " + d.last_name
           }
         })
        setHeadDepartmenst(head_departments_options)
      })
      
  }

  useEffect(() => {
    init()
  }, [])

  return (
    <div>
        <Input  errors={[]} labelTitle="اسم الفرع" type="text" name="name" id="name" placeholder="اسم الفرع" />
        <Select  name="head_departement_id" labelTitle="رئيس الفرع" id="head_of_department" options={headDepartments} />      
    </div>
  )
}

export default DepartementForm