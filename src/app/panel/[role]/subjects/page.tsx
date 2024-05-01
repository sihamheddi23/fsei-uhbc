"use client";
import { getSubMajors } from "@/api-fetchers/sub-majors";
import { createSubject, deleteSubject, getSubjects, updateSubject } from "@/api-fetchers/subjects";
import Alert from "@/components/generic/Alert";
import SubjectForm from "@/components/Resources/forms/SubjectForm";
import ResourceManager from "@/components/Resources/ResourceManager";
import AuthContext from "@/lib/context";
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
      field: "full_name_teacher",
    },
  ];
  const { token } = useContext(AuthContext)
  const [enableToEdit, setenableToEdit] = useState<Boolean>(false)
  const [isLoading, setisLoading] = useState(true)
  const [subjects, setsubjects] = useState([])

  useLayoutEffect(() => {
    if (token) getSubMajors().then((submajors) => {
        setisLoading(false)
         if (submajors.length > 0) {   
           setenableToEdit(true)
           getSubjects().then((subjects) => {
             const s = subjects.map((subject:any,index:number) => {
               return {
                 id: index + 1,
                 ...subject,
                }
             })
             setsubjects(s)
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
  return (
    <div>
      {enableToEdit === false ? <div className="mx-4 mt-5">
        <Alert text={' لا يمكنك اضافة المقاييس المدروسة  يرجى اضافة التخصصات'} variants='INFO' />
      </div> :
        <ResourceManager columns={columns} data={subjects} addrow={createSubject}
          editRow={updateSubject} deleteRow={deleteSubject} resourceName={"مقياس"}>
          <SubjectForm />
        </ResourceManager>}
    </div>
  );
}

export default Subject;
