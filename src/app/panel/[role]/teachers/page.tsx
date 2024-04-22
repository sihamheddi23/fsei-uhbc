"use client"
import { getUser } from "@/api-fetchers/auth";
import { addTeacher, deleteTeacher, getTeachers, updateTeacher } from "@/api-fetchers/teacher";
import Alert from "@/components/generic/Alert";
import TeacherForm from "@/components/Resources/forms/TeacherForm";

import ResourceManager from "@/components/Resources/ResourceManager";
import AuthContext from "@/lib/context";
import { GRADES_TEACHER } from "@/utils/const";
import { Teacher } from "@/utils/types";
import { useContext, useEffect, useLayoutEffect, useState } from "react";


function Teachers() {
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

  const { token } = useContext(AuthContext)
  const [enableToEdit, setenableToEdit] = useState<Boolean>(false)
  const [isLoading, setisLoading] = useState(true)
  const [teachers, setTeachers] = useState([])

  useLayoutEffect(() => {
    if (token) {
      getUser(token,100).then((users) => {
        setisLoading(false)
         if (users.length > 0) {
           setenableToEdit(true)
           getTeachers(100).then((teachers) => {
             const teachersData = teachers.map((teacher: Teacher, id: number) => {
               return {
                id: id + 1,
                ...teacher,
                grade: GRADES_TEACHER[teacher.grade as keyof typeof GRADES_TEACHER],
              }
            })
            setTeachers(teachersData)
           })
        }
         else {
            setenableToEdit(false)
        }
      })

    }
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
        <Alert text={' لا يمكنك اضافة المدرسين  يرجى اضافة المستخدمين'} variants='INFO' />
      </div> :
        <ResourceManager columns={columns} data={teachers} addrow={addTeacher} editRow={updateTeacher} deleteRow={deleteTeacher} resourceName={"أستاذ"}>
          <TeacherForm />
        </ResourceManager>
      }
    </div>
  );
  }

}

export default Teachers;
