"use client";
import AButton from "@/components/generic/Buttons/AButton";
import ResourceModal from "@/components/generic/ResourceModal";
import UserForm from "@/components/Resources/forms/userForm";
import ResourceManager from "@/components/Resources/ResourceManager";
import { users } from "@/utils/mockApi";
import React, { useState } from "react";

function Users() {
  const columns = [
    {
      headerName: "اسم المستخدم",
      field: "username",
    },
    { headerName: "الايمايل", field: "email" },
    {
      headerName: "توع الحساب",
      field: "role",
    },
  ];

  return (
    <div>
      <ResourceManager columns={columns} data={users} resourceName={"مستخدم"}>
        <UserForm />
      </ResourceManager>
    </div>
  );
}

export default Users;
