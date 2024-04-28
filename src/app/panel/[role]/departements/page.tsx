"use client"
import { addDepartement, deleteDepartement, getDepartements, updateDepartement } from "@/api-fetchers/departements";
import { getHeadDepartmentTeachers } from "@/api-fetchers/teacher";
import ResourceManager from "@/components/Resources/ResourceManager";
import DepartementForm from "@/components/Resources/forms/DepartementForm";
import Alert from "@/components/generic/Alert";
import AuthContext from "@/lib/context";
import { Departement } from "@/utils/types";
import { useContext, useLayoutEffect, useState } from "react";

 
  
function Departements() {
 const columns = [
    {
      headerName: "اسم الفرع",
      field: "name",
    },
    { headerName: "رئيس الفرع", field: "head_departement_name" },
];

  const { token } = useContext(AuthContext)
  const [enableToEdit, setenableToEdit] = useState<Boolean>(false)
  const [isLoading, setisLoading] = useState(true)
  const [data, setdata] = useState<Departement[]>([])

  useLayoutEffect(() => {
    if (token) getHeadDepartmentTeachers().then((teachers) => {
         setisLoading(false)
         console.log(teachers);
         if (teachers.length > 0) {
            getDepartements().then((departement) => {
            setdata(departement)
            setenableToEdit(true)
          })
        }
        else {
            setenableToEdit(false)
        }
      })
  }, [])
  
  if (isLoading) {
    return (<div className="mx-4 mt-5">
    <Alert text={' يرجى الانتظار'} variants='INFO' />
  </div>)
  }
  else {
      return (
    <div>
      {enableToEdit === false ? <div className="mx-4 mt-5">
        <Alert text={' لا يمكنك اضافة الفروع  يرجى اضافة المدرسين الذين يمتلكون حساب رئيس الفرع'} variants='INFO' />
      </div> :
        <ResourceManager columns={columns} data={data} addrow={addDepartement} editRow={updateDepartement} deleteRow={deleteDepartement} resourceName={"الفرع"}>
          <DepartementForm />
        </ResourceManager>
      }
    </div>
  );
  }

}

export default Departements;
