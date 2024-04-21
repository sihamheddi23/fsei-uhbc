"use client";
import { addUser, deleteUser, getUser, updateUser } from "@/api-fetchers/auth";
import UserForm from "@/components/Resources/forms/userForm";
import ResourceManager from "@/components/Resources/ResourceManager";
import AuthContext from "@/lib/context";
import { ROLES } from "@/utils/const";
import { User } from "@/utils/types";
import { useContext, useEffect, useState } from "react";


function Users() {
  const columns = [
    {
      headerName: "اسم المستخدم",
      field: "username",
    },
    {
      headerName: "الايمايل",
      field: "email",
      width: "205px",
    },
    {
      headerName: "توع الحساب",
      field: "role",
    },
  ];
  const {token} = useContext(AuthContext)
  const [data, setdata] = useState<User[]>([])
  useEffect(() => {
    if (token) {
      getUser(token).then((users) => {
        const entries = users.map((user:User) => {
          return {
            ...user,
            role: ROLES[user.role]
          };
        })
        setdata(entries)
      });
    }
  }, [])  

  return (
    <div>
      <ResourceManager columns={columns} data={data} addrow={addUser}
         editRow={updateUser} deleteRow={deleteUser} resourceName={"مستخدم"}>
        <UserForm />
      </ResourceManager>
    </div>
  );
}

export default Users;
