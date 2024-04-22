"use client"
import { getTeachers } from "@/api-fetchers/teacher";
import ResourceManager from "@/components/Resources/ResourceManager";
import TeacherForm from "@/components/Resources/forms/TeacherForm";
import Alert from "@/components/generic/Alert";
import AuthContext from "@/lib/context";
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

  useLayoutEffect(() => {
    if (token) getTeachers().then((teachers) => {
        setisLoading(false)
         if (teachers.length > 0) {
            setenableToEdit(true)
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
        <Alert text={' لا يمكنك اضافة الفروع  يرجى اضافة المدرسين'} variants='INFO' />
      </div> :
        <ResourceManager columns={columns} data={teachers} resourceName={"أستاذ"}>
          <TeacherForm />
        </ResourceManager>
      }
    </div>
  );
  }

}

export default Departements;
