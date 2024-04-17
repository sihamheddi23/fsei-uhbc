"use client";
import AButton from "@/components/Buttons/AButton";
import ResourceModal from "@/components/ResourceModal";
import ResourceDataTable from "@/components/Tables/ResourceDataTable";
import UserForm from "@/components/forms/userForm";
import React, { useEffect, useState } from "react";

const data = [
    {
      _id: 1,
      username: "محمد",
      email: "az@example.com",
      role: "أدمين",
    },
    {
      _id: 2,
      username: "محمد",
      email: "dd@example.com",
      role: "أستاد",
    },
    {
      _id: 3,
      username: "محمد",
      email: "qT3pZ@example.com",
      role: "رئيس القسم",
    },
];
  
function Users() {
    const columns = [
      { 
      headerName:"اسم المستخدم",
      field:"username"
    },
    { headerName: "الايمايل",
      field: "email",
    },
      {
      headerName:"توع الحساب",
      field: "role",
    },
      { 
      flex: 2,
      cellRenderer: (props:any) => (
        <div className="flex justify-center gap-2">
          <AButton
            variant="UPDATE"
            onClick={() => onUpdateRow(props.rowIndex)}
          />
          <AButton variant="DELETE" onClick={() =>  onDeleteRow(props.rowIndex)} />
        </div>
      ),
    }
  ];

  const [openAdd, setOpenAdd] = useState<boolean>(false);
  const [openEdit, setOpenEdit] = useState<boolean>(false);
  const [openDelete, setOpenDelete] = useState<boolean>(false);
  const [rowSelected, setRowSelected] = useState<number>(-1)
  const [rowData, setRowData] = useState(data)
  const [columnDefs, setColumnDefs] = useState(columns)

  const onUpdateRow = (id: number) => {
    console.log("update ",id);
    
    setRowSelected(id)
    openModal("UPDATE")
  }

  const onDeleteRow = (id: number) => {
    console.log("delete ",id);
    setRowSelected(id)
    openModal("DELETE")
  }

  const openModal = (variant: "ADD" | "UPDATE" | "DELETE") => {
    document.body.style.overflow = "hidden";

    if (variant === "ADD") setOpenAdd(true);
    if (variant === "UPDATE") setOpenEdit(true);
    if (variant === "DELETE") setOpenDelete(true);

  };

  const closeModal = (variant: "ADD" | "UPDATE" | "DELETE") => {
    document.body.style.overflow = "auto";

    if (variant === "ADD") setOpenAdd(false);
    if (variant === "UPDATE") setOpenEdit(false);
    if (variant === "DELETE") setOpenDelete(false);

  };

  return (
    <div>
      {openAdd && (
        <ResourceModal title="اضافة مستخدم" closeModal={()=>closeModal("ADD")}>
          <UserForm variant="ADD" onSubmit={() => setOpenAdd(false)} />
        </ResourceModal>
      )}
      {openEdit && (
        <ResourceModal
          title="تعديل مستخدم"
          closeModal={()=>closeModal("UPDATE")}
        >
          <UserForm variant="UPDATE" onSubmit={() => setOpenEdit(false)} />
        </ResourceModal>
      )} 
       {openDelete && (
        <ResourceModal
          title="حذف مستخدم"
          closeModal={() => closeModal("DELETE")}
          needsAnswer={true}
        >
         <p className="p-3">هل تريد حذف هذا المستخدم ؟</p>
        </ResourceModal>
      )} 
      <div className="w-full h-full  px-5 py-5">
        <div className="w-full flex justify-end">
          <AButton
            resource="مستخدم"
            variant="ADD"
            onClick={() => openModal("ADD")}
          />
        </div>
        <ResourceDataTable columns={columnDefs} data={rowData} />
      </div>
    </div>
  );
}

export default Users;
