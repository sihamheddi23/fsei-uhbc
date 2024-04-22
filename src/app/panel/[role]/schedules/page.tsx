"use client";
import { getSubMajors } from "@/api-fetchers/sub-majors";
import Alert from "@/components/generic/Alert";
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
      cellRenderer: (props: any) => {
        return (
          <a
            className="text-blue-500 flex gap-1 items-center"
            href={props.data.document_url}
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fa fa-eye"></i>
             <span>عرض الملف</span>
          </a>
        );
      }
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
        <Alert text={' لا يمكنك اضافة جدول التوقيت  يرجى اضافة التخصصات'} variants='INFO' />
      </div> :
        <ResourceManager columns={columns} data={submajors} resourceName={"جدول التوقيت"}>
          <ScheduleForm />
        </ResourceManager>}
    </div>
  );
}

export default Schedules;
