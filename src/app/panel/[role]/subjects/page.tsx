"use client";
import { getSubMajors } from "@/api-fetchers/sub-majors";
import Alert from "@/components/generic/Alert";
import SubjectForm from "@/components/Resources/forms/SubjectForm";
import ResourceManager from "@/components/Resources/ResourceManager";
import AuthContext from "@/lib/context";
import { teachers } from "@/utils/mockApi";
import { useContext, useLayoutEffect, useState } from "react";

function Subject() {
  const columns = [
    {
      headerName: "id",
      field: "id",
      width: "50px",
      suppressSizeToFit: true,
    },
    {
      headerName: "اسم مقياس",
      field: "name",
    },
    {
      headerName: "التخصص",
      field: "sub_major_name",
    },
    {
      headerName: "المستوى ",
      field: "level",
      width: "90px",
      suppressSizeToFit: true,
    },
    {
      headerName: "الاسم الكامل للاستاد ",
      field: "full_name",
    },
  ];
  const { token } = useContext(AuthContext)
  const [enableToEdit, setenableToEdit] = useState<Boolean>(false)
  const [isLoading, setisLoading] = useState(true)

  useLayoutEffect(() => {
    if (token) getSubMajors().then((submajors) => {
        setisLoading(false)
         if (submajors.length > 0) {
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
  return (
    <div>
      {enableToEdit === false ? <div className="mx-4 mt-5">
        <Alert text={' لا يمكنك اضافة المقاييس المدروسة  يرجى اضافة التخصصات'} variants='INFO' />
      </div> :
        <ResourceManager columns={columns} data={teachers} resourceName={"مقياس"}>
          <SubjectForm />
        </ResourceManager>}
    </div>
  );
}

export default Subject;
