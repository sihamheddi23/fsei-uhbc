"use client";
import { getTeachers } from "@/api-fetchers/teacher";
import Alert from "@/components/generic/Alert";
import DepartementForm from "@/components/Resources/forms/DepartementForm";
import ResourceManager from "@/components/Resources/ResourceManager";
import { departements } from "@/utils/mockApi";
import { useEffect, useState } from "react";

function Departements() {
  const columns = [
    {
      headerName: "اسم الفرع",
      field: "name",
    },
    { headerName: "رئيس الفرع", field: "head_departement_name" },
  ];
  const [enableToEdit, setenableToEdit] = useState(false)

  useEffect(() => {
    getTeachers().then((teachers) => {
      if(teachers.length > 0){
        setenableToEdit(true)
      }
    })
  }, []);

  return (
    <div>
      {!enableToEdit ? <div className="mx-4 mt-5">
         <Alert text={' لا يمكنك اضافة فرع للكلية يرجى اضافة المدرسين'} variants='INFO'/>
      </div> :
      <ResourceManager columns={columns} data={departements} resourceName={"فرع"}>
        <DepartementForm />
        </ResourceManager>
       }
    </div>
  );
}

export default Departements;
