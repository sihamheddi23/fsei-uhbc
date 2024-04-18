"use client";
import ScheduleForm from "@/components/Resources/forms/ScheduleForm";
import UserForm from "@/components/Resources/forms/userForm";
import ResourceManager from "@/components/Resources/ResourceManager";
import { submajors, users } from "@/utils/mockApi";
import React from "react";

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

  return (
    <div>
      <ResourceManager columns={columns} data={submajors} resourceName={"جدول التوقيت"}>
        <ScheduleForm />
      </ResourceManager>
    </div>
  );
}

export default Schedules;
