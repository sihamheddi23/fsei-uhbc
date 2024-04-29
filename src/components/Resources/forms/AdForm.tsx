import { getDepartements } from "@/api-fetchers/departements";
import FileDragDropUploader from "@/components/generic/FileUploader";
import Input from "@/components/generic/Input";
import Select from "@/components/generic/Select";
import TextArea from "@/components/generic/TextArea";
import { ADS } from "@/utils/const";
import React, { useState } from "react";

function AdForm() {
  const types = Object.entries(ADS).map(([value, label]) => ({ value, label })) 
  const [departements, setdepartements] = useState<any>([])

  const onChangeType = (e: React.ChangeEvent<HTMLSelectElement>) => {
    
    const type = e.target.value
    if (type == "DEPARTEMENT") {
      
      getDepartements().then((data) => {
        const d = data.map((d: any) => {
          return { value: d._id, label: d.name }
        })
        setdepartements(d)
      })
    }
    else {
      setdepartements([])
    }
  }

  return (
    <div>
      <Input
        errors={[]}
        labelTitle=" العنوان"
        type="text"
        name="title"
        id="title"
        placeholder=" العنوان"
      />
      <TextArea errors={[]} labelTitle=" الوصف" name="description"
        id="description" placeholder=" الوصف" />
      <Select
        name="type"
        labelTitle=" نوع الاعلان"
        id="type"
        options={types}
        onChange={onChangeType}
      />
      {
        departements.length > 0 && (
          <Select
            name="departement_id"
            labelTitle=" الفرع"
            id="departement_id"
            options={departements}
          />
        )
      }
      <FileDragDropUploader
        name="document_pdf"
        fileTypes={["jpeg", "pdf", "png", "JPEG", "jpg", "PDF", "PNG", "JPG"]}
      />
    </div>
  );
}

export default AdForm;
