import FileDragDropUploader from "@/components/generic/FileUploader";
import Input from "@/components/generic/Input";
import Select from "@/components/generic/Select";
import React from "react";

function ScheduleForm() {
  const submajors = [
    { value: 1, label: "الأخبار" },
    { value: 2, label: " اعلان خاص بالكلية" },
    { value: 3, label: " اعلان خاص بالفرع" },
  ];
  return (
    <div>
      <Input
        labelTitle=" العنوان"
        type="text"
        name="title"
        id="title"
        placeholder=" العنوان"
      />
      <Select
        labelTitle=" التخصص و المستوى"
        id="submajors"
        options={submajors}
        onChange={() => {}}
      />
      <FileDragDropUploader
        name="document"
        fileTypes={["jpeg", "pdf", "png", "JPEG", "jpg", "PDF", "PNG", "JPG"]}
      />
    </div>
  );
}

export default ScheduleForm;
