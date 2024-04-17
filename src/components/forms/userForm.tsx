import React from 'react'
import Input from '../Input'
import Submit from '../Buttons/Submit'

interface UserFormProps {
    variant: "ADD" | "UPDATE"
    onSubmit: () => void
}
const UserForm:React.FC<UserFormProps> = ({ variant, onSubmit}) => {
    return (
        <div className='p-4'>
          <form  method="post" className='flex flex-col gap-4'>
                <Input labelTitle="اسم المستخدم" type="text" name="username" id="username" placeholder="اسم المستخدم" />
                <Input labelTitle="الايمايل" type="email" name="email" id="email" placeholder="الايمايل" />
                <Input labelTitle="كلمة المرور" type="password" name="password" id="password" placeholder="كلمة المرور" />
                <Submit /> 
          </form>
       </div>
  )
}

export default UserForm