"use client";
import { createSchedule, deleteSchedule, getSchedules, updateSchedule } from "@/api-fetchers/schedules";
import { getSubMajors } from "@/api-fetchers/sub-majors";
import Alert from "@/components/generic/Alert";
import ShowFile from "@/components/generic/ShowFile";
import ScheduleForm from "@/components/Resources/forms/ScheduleForm";
import ResourceManager from "@/components/Resources/ResourceManager";
import AuthContext from "@/lib/context";
import { submajors } from "@/utils/mockApi";
import React, { useContext, useLayoutEffect, useState } from "react";

function Schedules() {
  const columns = [
    {
      headerName: "id",
      field: "id",
      width: "50px",
      suppressSizeToFit: true,
    },
    {
      headerName: "العنوان ",
      field: "title",
    },
    {
      headerName: "التخصص",
      field: "sub_major_name",
    },
    {
      headerName: "المستوى ",
      field: "level",
    },
    {
      headerName: "رؤية الملف المرفق",
      field: "document_url",
      cellRenderer: ShowFile
    },
  ];
  
  const { token } = useContext(AuthContext)
  const [enableToEdit, setenableToEdit] = useState<Boolean>(false)
  const [isLoading, setisLoading] = useState(true)
  const [schedules, setSchedules] = useState([])

  useLayoutEffect(() => {
    if (token) getSubMajors().then((submajors) => {
        setisLoading(false)
         if (submajors.length > 0) {
           setenableToEdit(true)
           getSchedules().then((schedules) => {
              const s = schedules.map((schedule: any, index: number) => {
                return {
                  ...schedule,
                  index: index + 1
                }
              })
              setSchedules(s)
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
        <Alert text={' لا يمكنك اضافة جدول التوقيت  يرجى اضافة التخصصات'} variants='INFO' />
      </div> :
        <ResourceManager columns={columns} data={schedules} addrow={createSchedule}
          editRow={updateSchedule} deleteRow={deleteSchedule}
          resourceName={"جدول التوقيت"}>
          <ScheduleForm />
        </ResourceManager>}
    </div>
  );
}

export default Schedules;
