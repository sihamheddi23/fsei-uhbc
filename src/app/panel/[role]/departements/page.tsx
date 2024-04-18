import DepartementForm from "@/components/Resources/forms/DepartementForm";
import UserForm from "@/components/Resources/forms/userForm";
import ResourceManager from "@/components/Resources/ResourceManager";
import { departements } from "@/utils/mockApi";

function Departements() {
  const columns = [
    {
      headerName: "اسم الفرع",
      field: "name",
    },
    { headerName: "رئيس الفرع", field: "head_departement_name" },
  ];

  return (
    <div>
      <ResourceManager columns={columns} data={departements} resourceName={"فرع"}>
        <DepartementForm />
      </ResourceManager>
    </div>
  );
}

export default Departements;
