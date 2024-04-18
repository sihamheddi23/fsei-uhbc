import TeacherForm from "@/components/Resources/forms/TeacherForm";
import UserForm from "@/components/Resources/forms/userForm";
import ResourceManager from "@/components/Resources/ResourceManager";
import { teachers } from "@/utils/mockApi";


function Users() {
  const columns = [
    {
      headerName: "id",
      field: "id",
      width: "50px",
      suppressSizeToFit: true
    },
    {
      headerName: "الاسم",
      field: "first_name",
    },
    { headerName: "اللقب", field: "last_name" },
    {
      headerName: "الرتبة",
      field: "grade",
    },
    {
      headerName: "اسم المستخدم",
      field:"username",
    }
  ];

  return (
    <div>
      <ResourceManager columns={columns} data={teachers} resourceName={"أستاذ"}>
       <TeacherForm/>
      </ResourceManager>
    </div>
  );
}

export default Users;
