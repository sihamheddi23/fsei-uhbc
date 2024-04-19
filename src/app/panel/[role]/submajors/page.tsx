import SubMajorForm from "@/components/Resources/forms/SubMajorForm";
import UserForm from "@/components/Resources/forms/userForm";
import ResourceManager from "@/components/Resources/ResourceManager";
import { users } from "@/utils/mockApi";
import React from "react";

function Users() {
  const columns = [
   {
      headerName: "id",
      field: "id",
      width: "50px",
      suppressSizeToFit: true,
    },
    {
      headerName: "اسم التخصص",
      field: "name",
    },
    { headerName: "المستوى", field: "level", width: "90px", suppressSizeToFit: true },
    {
      headerName: "الفرع ",
      field: "departement_name",
      width: "170px",
    },
  ];

  return (
    <div>
      <ResourceManager columns={columns} data={users} resourceName={"تخصص"}>
        <SubMajorForm />
      </ResourceManager>
    </div>
  );
}

export default Users;
