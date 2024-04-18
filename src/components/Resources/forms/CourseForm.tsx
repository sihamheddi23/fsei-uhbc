import FileDragDropUploader from "@/components/generic/FileUploader";
import Input from "@/components/generic/Input";
import Select from "@/components/generic/Select";
import React from "react";

function CourseForm() {
  const submajors = [
    { value: 1, label: "الأخبار" },
    { value: 2, label: " اعلان خاص بالكلية" },
    { value: 3, label: " اعلان خاص بالفرع" },
  ];
  return (
    <div>
      <Input
        labelTitle=" اسم الدرس"
        type="text"
        name="name"
        id="name"
        placeholder=" العنوان"
      />
      <Select
        labelTitle=" المادة"
        id="subject"
        options={submajors}
        onChange={() => {}}
      />
      <FileDragDropUploader
        name="document"
        fileTypes={["pdf", "PDF"]}
      />
    </div>
  );
}

export default CourseForm;
