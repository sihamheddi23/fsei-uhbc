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
            href={props.data.document_url}
            target="_blank"
            rel="noopener noreferrer"
          >
            {props.data.document_url}
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
        <UserForm />
      </ResourceManager>
    </div>
  );
}

export default Ads;
