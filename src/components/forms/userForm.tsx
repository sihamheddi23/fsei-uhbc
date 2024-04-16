import React from 'react'

interface UserFormProps {
    variant: "ADD" | "UPDATE",
    onSubmit: () => void
}
const UserForm:React.FC<UserFormProps> = ({ variant, onSubmit}) => {
    return (
        <div>
           hello im form
       </div>
  )
}

export default UserForm