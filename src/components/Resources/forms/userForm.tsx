import React from 'react'
import Input from '../../generic/Input'
import Select from '@/components/generic/Select'
import { ROLES } from '@/utils/const'

const UserForm: React.FC = () => {
  const rolesOptions = Object.entries(ROLES).map(([value, label]) => ({ value, label }))

  return (
        <div>
          <Input labelTitle="اسم المستخدم" type="text" name="username" id="username" placeholder="اسم المستخدم" errors={[]} required  />
          <Input labelTitle="الايمايل" type="email" name="email" id="email" placeholder="الايمايل" errors={[]} required />
          <Select name='role' labelTitle="نوع المستخدم" id="role" options={rolesOptions} onChange={() => {}}  />
          <Input labelTitle="كلمة المرور" type="password" name="password" id="password" placeholder="كلمة المرور"  errors={[]} required />
       </div>
  )
}

export default UserForm