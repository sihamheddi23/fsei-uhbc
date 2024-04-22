"use client";
import { getDepartements } from "@/api-fetchers/departements";
import { getSubMajors } from "@/api-fetchers/sub-majors";
import Alert from "@/components/generic/Alert";
import SubMajorForm from "@/components/Resources/forms/SubMajorForm";
import ResourceManager from "@/components/Resources/ResourceManager";
import AuthContext from "@/lib/context";
import { users } from "@/utils/mockApi";
import React, { useContext, useLayoutEffect, useState } from "react";

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

  const { token } = useContext(AuthContext)
  const [enableToEdit, setenableToEdit] = useState<Boolean>(false)
  const [isLoading, setisLoading] = useState(true)

  useLayoutEffect(() => {
    if (token) getDepartements().then((departement) => {
        setisLoading(false)
         if (departement.length > 0) {
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
          <Alert text={' لا يمكنك اضافة التخصصات  يرجى اضافة الفروع'} variants='INFO' />
        </div> :
          <ResourceManager columns={columns} data={users} resourceName={"تخصص"}>
            <SubMajorForm />
          </ResourceManager>}
      </div>
    );
  }
}

export default Users;
