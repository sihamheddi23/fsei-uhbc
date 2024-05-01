import { getSubMajors } from "@/api-fetchers/sub-majors";
import FileDragDropUploader from "@/components/generic/FileUploader";
import Input from "@/components/generic/Input";
import Select from "@/components/generic/Select";
import React, { useEffect, useState } from "react";

function ScheduleForm() {
  const [submajorsOptions, setSubmajorsOptions] = useState([])
  useEffect(() => {
   getSubMajors().then((submajors) => {
    const sb = submajors.map((submajor:any) => {
      return { value: submajor._id, label: submajor.name+" - "+submajor.level }
    })
     
    setSubmajorsOptions(sb)
   })
  }, [])
  
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
      <Select
        name="sub_major_id"
        labelTitle=" التخصص و المستوى"
        id="submajors"
        options={submajorsOptions}
      />
      <FileDragDropUploader
        name="document_pdf"
        fileTypes={["jpeg", "pdf", "png", "JPEG", "jpg", "PDF", "PNG", "JPG"]}
      />
    </div>
  );
}

export default ScheduleForm;
