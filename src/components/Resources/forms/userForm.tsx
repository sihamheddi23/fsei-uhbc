import React from 'react'
import Input from '../../generic/Input'
import Submit from '../../generic/Buttons/Submit'

const UserForm:React.FC = () => {
    return (
        <div>
          <Input labelTitle="اسم المستخدم" type="text" name="username" id="username" placeholder="اسم المستخدم" />
          <Input labelTitle="الايمايل" type="email" name="email" id="email" placeholder="الايمايل" />
          <Input labelTitle="كلمة المرور" type="password" name="password" id="password" placeholder="كلمة المرور" />
       </div>
  )
}

export default UserForm