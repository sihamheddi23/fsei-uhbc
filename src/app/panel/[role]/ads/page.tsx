"use client";
import { getDepartements } from "@/api-fetchers/departements";
import Alert from "@/components/generic/Alert";
import AdForm from "@/components/Resources/forms/AdForm";
import ResourceManager from "@/components/Resources/ResourceManager";
import AuthContext from "@/lib/context";
import { ads, users } from "@/utils/mockApi";
import React, { useContext, useLayoutEffect, useState } from "react";

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
  const { token } = useContext(AuthContext)
  const [enableToEdit, setenableToEdit] = useState<Boolean>(false)
  const [isLoading, setisLoading] = useState(true)

  useLayoutEffect(() => {
    if (token) getDepartements().then((departements) => {
        setisLoading(false)
         if (departements.length > 0) {
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
        <Alert text={' لا يمكنك اضافة الاعلانات  يرجى اضافة الفروع'} variants='INFO' />
      </div> :
        <ResourceManager columns={columns} data={ads} resourceName={"اعلان"}>
          <AdForm />
        </ResourceManager>
      }
    </div>
    );
  }
}

export default Ads;
