"use client";
import { getDepartements } from "@/api-fetchers/departements";
import { createSubmajor, deleteSubmajor, getSubMajors, updateSubmajor } from "@/api-fetchers/sub-majors";
import Alert from "@/components/generic/Alert";
import SubMajorForm from "@/components/Resources/forms/SubMajorForm";
import ResourceManager from "@/components/Resources/ResourceManager";
import AuthContext from "@/lib/context";
import React, { useContext, useLayoutEffect, useState } from "react";

function SubMajors() {
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

  const { token } = useContext(AuthContext)
  const [enableToEdit, setenableToEdit] = useState<Boolean>(false)
  const [isLoading, setisLoading] = useState(true)
  const [submajors, setSubmajors] = useState([])

  useLayoutEffect(() => {
    if (token) getDepartements().then((departement) => {
        setisLoading(false)
         if (departement.length > 0) {
           setenableToEdit(true)
           getSubMajors().then((submajors) => {
             const data = submajors.map((submajor: any, index: number) => {
               return {
                 id: index + 1,
                 ...submajor
               }
             })
             setSubmajors(data)
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
        {
          enableToEdit === false ? <div className="mx-4 mt-5">
            <Alert text={' لا يمكنك اضافة التخصصات  يرجى اضافة الفروع'} variants='INFO' />
          </div> :
          <ResourceManager columns={columns} data={submajors} resourceName={"تخصص"} addrow={createSubmajor}
            editRow={updateSubmajor} deleteRow={deleteSubmajor}>
            <SubMajorForm />
          </ResourceManager>
        }
      </div>
    );
  }
}

export default SubMajors;
