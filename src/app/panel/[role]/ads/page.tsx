"use client";
import { getAds, create_ads, delete_ads, update_ads } from "@/api-fetchers/ads";
import { getDepartements } from "@/api-fetchers/departements";
import Alert from "@/components/generic/Alert";
import AdForm from "@/components/Resources/forms/AdForm";
import ResourceManager from "@/components/Resources/ResourceManager";
import AuthContext from "@/lib/context";
import { FACULTY_API_BASE_ENDPOINT } from "@/utils/const";
import React, { useContext, useLayoutEffect, useState } from "react";

function Ads() {
  const columns = [
    {
      headerName: "id",
      field: "id",
      width: "70px",
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
        return (<div>
          {
            props.data.document_url ?  <a
            className="text-blue-500 flex gap-1 items-center"
            href={FACULTY_API_BASE_ENDPOINT+"/"+props.data.document_url}
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fa fa-eye"></i>
             <span>عرض الملف</span>
            </a> :
            <span className="text-center">لا يوجد ملف</span>
          }
        </div>
          

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
  const [ads, setAds] = useState([])

  useLayoutEffect(() => {
    if (token) getDepartements().then((departements) => {
        setisLoading(false)
         if (departements.length > 0) {
           setenableToEdit(true)
           getAds().then((ads) => {
             const new_ads = ads.map((ad:any,index:number) => {
               return {
                 id: index + 1,
                 ...ad
               }
             })
             setAds(new_ads)
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
  else {
  return (
    <div>
      {enableToEdit === false ? <div className="mx-4 mt-5">
        <Alert text={' لا يمكنك اضافة الاعلانات  يرجى اضافة الفروع'} variants='INFO' />
      </div> :
        <ResourceManager addrow={create_ads} editRow={update_ads} deleteRow={delete_ads} columns={columns} data={ads} resourceName={"اعلان"}>
          <AdForm />
        </ResourceManager>
      }
    </div>
    );
  }
}

export default Ads;
