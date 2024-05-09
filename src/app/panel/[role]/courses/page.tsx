"use client";
import { createCourse, deleteCourse, getCoursesByAuthTeacher, updateCourse } from "@/api-fetchers/course";
import ShowFile from "@/components/generic/ShowFile";
import CourseForm from "@/components/Resources/forms/CourseForm";
import ResourceManager from "@/components/Resources/ResourceManager";
import AuthContext from "@/lib/context";
import React, { useContext, useEffect, useState } from "react";

function Schedules() {
  const columns = [
    {
      headerName: "id",
      field: "id",
      width: "50px",
      suppressSizeToFit: true,
    },
    {
      headerName: "الاسم ",
      field: "name",
    },
    {
      headerName: "المادة",
      field: "subject_name",
    },
    {
      headerName: "رؤية الملف المرفق",
      field: "document_url",
      cellRenderer: ShowFile
    },
  ];
  const [courses, setCourses] = useState()
  const { token } = useContext(AuthContext)
  
  useEffect(() => {
     if (token) {
       getCoursesByAuthTeacher(token).then((courses) => {
            console.log(courses);
            
            setCourses(courses)
        })
     }
  }, [])
  

  return (
    <div>
      <ResourceManager columns={columns} data={courses} addrow={createCourse} editRow={updateCourse} deleteRow={deleteCourse} resourceName={" الدرس"}>
        <CourseForm />
      </ResourceManager>
    </div>
  );
}

export default Schedules;
