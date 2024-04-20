import UserForm from "@/components/Resources/forms/userForm";
import ResourceManager from "@/components/Resources/ResourceManager";
import { users } from "@/utils/mockApi";

function Users() {
  const columns = [
    {
      headerName: "اسم المستخدم",
      field: "username",
    },
    { headerName: "الايمايل", field: "email" },
    {
      headerName: "توع الحساب",
      field: "role",
    },
  ];

  const Addrow = (row: any) => {
    
  }

  return (
    <div>
      <ResourceManager columns={columns} data={users} resourceName={"مستخدم"}>
        <UserForm />
      </ResourceManager>
    </div>
  );
}

export default Users;
