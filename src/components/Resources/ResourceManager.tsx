"use client";
import AButton from "@/components/generic/Buttons/AButton";
import ResourceModal from "@/components/generic/ResourceModal";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css";
import { AgGridReact } from "ag-grid-react";
import React, { useEffect, useState } from "react";
import ActionButtons from "../generic/Buttons/ActionButtons";
import Form from "../generic/Form";

interface ColumnType {
  headerName?: string;
  field?: string;
  cellRenderer?: (props: any) => any;
  flex?: number;
  width?: string;
  suppressSizeToFit?: boolean;
}

interface ResourceManagerProps {
  columns: ColumnType[];
  data: any;
  resourceName: string;
  children: React.ReactNode;
  Addrow?: (row: any) => void;
  EditRow?: (row: any) => void;
  DeleteRow?: (row: any) => void;
}

interface CellActionButtonsProps {
  rowIndex: number;
}

const ResourceManager: React.FC<ResourceManagerProps> = ({
  columns,
  data,
  resourceName,
  children
}) => {
  
  const columnAction = {
    flex: 2,
    cellRenderer: (props: CellActionButtonsProps) => (
      <ActionButtons
        onUpdateRow={() => onButtonActionClick(props.rowIndex, "UPDATE")}
        onDeleteRow={() => onButtonActionClick(props.rowIndex, "DELETE")}
      />
    ),
  };
  console.log(columns);
  
  const [openAdd, setOpenAdd] = useState<boolean>(false);
  const [openEdit, setOpenEdit] = useState<boolean>(false);
  const [openDelete, setOpenDelete] = useState<boolean>(false);
  const [rowSelectedIndex, setRowSelectedIndex] = useState<number>(-1);
  const [rowsData, setRowsData] = useState([]);
  const [columnsDefs, setColumnsDefs] = useState<ColumnType[]>([]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setColumnsDefs([...columns, columnAction]);
      setRowsData(data);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  const onButtonActionClick = (id: number, action: "UPDATE" | "DELETE") => {
    console.log(`${action} ${id}`);
    setRowSelectedIndex(id);
    openModal(action);
  };

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

  const onSubmitAdd = () => closeModal("ADD")
  const onSubmitUpdate = () => closeModal("UPDATE")
  const onSubmitDelete = () => closeModal("DELETE")

  return (
    <div>
      {openAdd && (
        <ResourceModal
        title={`اضافة ${resourceName}`}
        closeModal={() => closeModal("ADD")}>
          <Form onSubmit={onSubmitAdd}>
            {children}
          </Form>
        </ResourceModal>
      )}
      {openEdit && (
        <ResourceModal
          title={`تعديل ${resourceName}`}
          closeModal={() => closeModal("UPDATE")}
        >
          <Form onSubmit={onSubmitUpdate}>
             {children}
          </Form>
        </ResourceModal>
      )}
      {openDelete && (
        <ResourceModal
          title={`حذف ${resourceName}`}
          closeModal={() => closeModal("DELETE")}
          needsAnswer={true}
          func={onSubmitDelete}
        >
          <p className="p-3">هل تريد حذف هذا {resourceName} ؟</p>
        </ResourceModal>
      )}
      <div className="w-full h-full  px-5 py-5">
        <div className="w-full flex justify-end">
          <AButton
            resource={resourceName}
            variant="ADD"
            onClick={() => openModal("ADD")}
          />
        </div>
        <div className="ag-theme-alpine h-[500px] w-[100%] overflow-auto my-5">
          <AgGridReact rowData={rowsData} columnDefs={columnsDefs as any} enableRtl={true} />
        </div>
      </div>
    </div>
  );
};

export default ResourceManager;
