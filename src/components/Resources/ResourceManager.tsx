"use client";
import AButton from "@/components/generic/Buttons/AButton";
import ResourceModal from "@/components/generic/ResourceModal";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css";
import { AgGridReact } from "ag-grid-react";
import React, { useContext, useEffect, useState } from "react";
import ActionButtons from "../generic/Buttons/ActionButtons";
import Form from "../generic/Form";
import AuthContext from "@/lib/context";
import { toast } from "react-toastify";

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
  addrow: (row: any, token: string) => Promise<any>;
  editRow: (token: string,row: any,id: string | number) => Promise<any>;
  deleteRow: (token: string, row: any, id: string | number) => Promise<any>;
}

interface CellActionButtonsProps {
  rowIndex: number;
}

const ResourceManager: React.FC<ResourceManagerProps> = ({
  columns,
  data,
  resourceName,
  children,
  addrow,
  editRow,
  deleteRow,
}) => {
  
  const columnAction = {
    width: "656px",
    cellRenderer: (props: CellActionButtonsProps) => (
      <ActionButtons
        onUpdateRow={() => onButtonActionClick(props.rowIndex, "UPDATE")}
        onDeleteRow={() => onButtonActionClick(props.rowIndex, "DELETE")}
      />
    ),
  };

  const [openAdd, setOpenAdd] = useState<boolean>(false);
  const [openEdit, setOpenEdit] = useState<boolean>(false);
  const [openDelete, setOpenDelete] = useState<boolean>(false);
  const [rowsData, setRowsData] = useState([]);
  const [columnsDefs, setColumnsDefs] = useState<ColumnType[]>([]);
  const { token } = useContext(AuthContext);
  const [inputs, setInputs] = useState<HTMLDivElement | null>(null)
  const [rowIndexSelected, setrowIndexSelected] = useState(-1)

  useEffect(() => {
    setColumnsDefs([...columns, columnAction]);
    setRowsData(data);
  }, [data]);
  
  useEffect(() => {
    if (inputs) {
      const items: any = inputs.childNodes.item(0)
      const inputList = items.querySelectorAll("input")
      const selectList = items.querySelectorAll("select")
      const elements = [...inputList, ...selectList]
      elements[0].value = "skssks"
      for (let i = 0; i < elements.length; i++) {
        if (elements[i].nodeName === "SELECT") {
           
        }
        
      }
    }
  }, [inputs]);

  const onButtonActionClick = (id: number, action: "UPDATE" | "DELETE") => {
    openModal(action, id);
  };

  const openModal = (variant: "ADD" | "UPDATE" | "DELETE", rowIndex: number = -1) => {
    document.body.style.overflow = "hidden";

    if (variant === "ADD") setOpenAdd(true);
    if (variant === "UPDATE") {
          setrowIndexSelected(rowIndex)
          setOpenEdit(true);
    }
    if (variant === "DELETE") setOpenDelete(true);
  };

  const closeModal = (variant: "ADD" | "UPDATE" | "DELETE") => {
    document.body.style.overflow = "auto";

    if (variant === "ADD") setOpenAdd(false);
    if (variant === "UPDATE") setOpenEdit(false);
    if (variant === "DELETE") setOpenDelete(false);
  };

  const onSubmitAdd = async (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      if (!token) {
        window.location.href = "/login";
      } else {
        let formData: { [name: string]: { value: any } } = {};
        const form: any = e.currentTarget.childNodes.item(0).childNodes;
        form.forEach((item: any) => {
          const name: string = item.childNodes.item(1).name;
          const value: any = item.childNodes.item(1).value;
          formData[name] = value;
        });
        const result = await addrow(formData, token);
        console.log(result.error);
        
        if (result.error) {
            console.log(result?.message);
            toast.error(result?.message, {
              position: "top-right",
              autoClose: 5000,
              hideProgressBar: true,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: false,
              progress: undefined,
              theme: "colored",
          });
        }
        else {
            closeModal("ADD");
            toast.success("لقد تمت العملية بنجاح", {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: false,
            progress: undefined,
            theme: "colored",
            });
          window.location.reload();
        }
      }

  }

  const onSubmitUpdate = async () => {closeModal("UPDATE")}
  const onSubmitDelete = async () => {closeModal("DELETE")}
  
  return (
    <div>
      {openAdd && (
        <ResourceModal
        title={`اضافة ${resourceName}`}
        closeModal={() => closeModal("ADD")}>
          <Form method="POST" onSubmit={onSubmitAdd}>
            {children}
          </Form>
        </ResourceModal>
      )}
      {openEdit && (
        <ResourceModal
          title={`تعديل ${resourceName}`}
          closeModal={() => closeModal("UPDATE")}
        >
          <Form method="PUT" onSubmit={onSubmitUpdate}>
              <div ref={(node)=>setInputs(node)}>
                {children}
              </div>
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
