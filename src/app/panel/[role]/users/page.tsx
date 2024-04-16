"use client";
import AButton from "@/components/Buttons/AButton";
import ResourceModal from "@/components/ResourceModal";
import DataTable from "@/components/Tables/ResourceDataTable";
import UserForm from "@/components/forms/userForm";
import React, { useState } from "react";

function Users() {
  const [openAdd, setOpenAdd] = useState(false);
  const [openEdit, setOpenEdit] = useState(false);

  const columns = [
    {
      name: "اسم المستخدم",
      selector: (row: any) => row.username,
      sortable: true,
    },
    {
      name: "البريد الالكتروني",
      selector: (row: any) => row.email,
      sortable: true,
    },
    {
      name: "نوع الحساب",
      selector: (row: any) => row.role,
      sortable: true,
    },
    {
      cell: (row: any) => (
        <div className="flex justify-center gap-2">
          <AButton
            variant="UPDATE"
            onClick={() => console.log(`clicked ${row._id}`)}
          />
          <AButton variant="DELETE" onClick={() => console.log(`clicked`)} />
        </div>
      ),
    },
  ];

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
  console.log(openAdd);

  return (
    <div>
      <ResourceModal open={openAdd} setOpen={setOpenAdd}>
        <UserForm variant="ADD" onSubmit={() => setOpenAdd(false)} />
      </ResourceModal>
      <ResourceModal open={openEdit} setOpen={setOpenEdit}>
        <UserForm variant="UPDATE" onSubmit={() => setOpenEdit(false)} />
      </ResourceModal>
      <div className="w-full h-full  px-5 py-5 border border-black">
        <div className="w-full flex justify-end">
          <AButton
            resource="مستخدم"
            variant="ADD"
            onClick={() => setOpenAdd(true)}
          />
        </div>
        <DataTable columns={columns} data={data} />
      </div>
    </div>
  );
}

export default Users;
