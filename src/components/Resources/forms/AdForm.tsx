import FileDragDropUploader from "@/components/generic/FileUploader";
import Input from "@/components/generic/Input";
import Select from "@/components/generic/Select";
import React from "react";

function AdForm() {
  const types = [
    { value: 1, label: "الأخبار" },
    { value: 2, label: " اعلان خاص بالكلية" },
    { value: 3, label: " اعلان خاص بالفرع" },
  ];
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
        labelTitle=" نوع الاعلان"
        id="type"
        options={types}
        onChange={() => {}}
      />
      <FileDragDropUploader
        name="document"
        fileTypes={["jpeg", "pdf", "png", "JPEG", "jpg", "PDF", "PNG", "JPG"]}
      />
    </div>
  );
}

export default AdForm;
