"use client"
import { getUser } from '@/api-fetchers/auth'
import Input from '@/components/generic/Input'
import Select from '@/components/generic/Select'
import AuthContext from '@/lib/context'
import { GRADES_TEACHER } from '@/utils/const'
import { User } from '@/utils/types'
import React, { useContext, useEffect, useState } from 'react'

function TeacherForm() {
  const { token } = useContext(AuthContext)
  const grades = Object.entries(GRADES_TEACHER).map(([value, label]) => ({ value, label })) 
  const [usernames, setUsernames] = useState([])
  
  const init = () => {
    if (token) {
      getUser(token, 100).then((users) => {
         const usersOptions = users.map((user:User) => {
           return {
             value: user?._id as number,
             label: user.username
           }
         })
        setUsernames(usersOptions)
      })
      .catch((err) => {
        console.log(err)
      })
    }
  }

  useEffect(() => {
    init()
  }, [])
  
  return (
    <div>
          <Input required errors={[]} labelTitle="الاسم" type="text" name="first_name" id="first_name" placeholder="الاسم " />
          <Input required errors={[]}  labelTitle="اللقب " type="text" name="last_name" id="last_name" placeholder=" اللقب" />
          <Select name='grade' labelTitle="رتبة " id="grade" options={grades} />  
          <Select name='user_id' labelTitle="اسم المستخدم " id="username" options={usernames}  />      
    </div>
  )
}

export default TeacherForm