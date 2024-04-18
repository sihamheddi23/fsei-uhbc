"use client";
import AdForm from "@/components/Resources/forms/AdForm";
import UserForm from "@/components/Resources/forms/userForm";
import ResourceManager from "@/components/Resources/ResourceManager";
import { ads, users } from "@/utils/mockApi";
import React from "react";

function Ads() {
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
      headerName: "نوع الاعلان",
      field: "type",
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
    {
      headerName: "اسم الفرع",
      field: "departement_name",
      
    },
  ];

  return (
    <div>
      <ResourceManager columns={columns} data={ads} resourceName={"اعلان"}>
        <AdForm />
      </ResourceManager>
    </div>
  );
}

export default Ads;
