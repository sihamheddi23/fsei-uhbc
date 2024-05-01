import { getSubMajors } from "@/api-fetchers/sub-majors";
import { getSubjectsByTeacher } from "@/api-fetchers/subjects";
import FileDragDropUploader from "@/components/generic/FileUploader";
import Input from "@/components/generic/Input";
import Select from "@/components/generic/Select";
import TextArea from "@/components/generic/TextArea";
import AuthContext from "@/lib/context";
import React, { useContext, useEffect, useState } from "react";

function CourseForm() {
  const [subjectsOptions, setSubjectsOptions] = useState([]);
  const { token } = useContext(AuthContext);

  useEffect(() => {
     if (token) {
       getSubjectsByTeacher(token).then((data) => {
         const subjectsOptions = data.map((subject: any) => {
           return {
             value: subject._id,
             label: subject.name
           }
         })

         setSubjectsOptions(subjectsOptions)
      })
     }
  }, [])
  
  return (
    <div>
      <Input
        errors={[]}
        labelTitle=" اسم الدرس"
        type="text"
        name="name"
        id="name"
        placeholder=" العنوان"
      />
      <TextArea errors={[]} labelTitle=" الوصف" name="description" id="description" placeholder=" الوصف" />
      <Select
        name="subject_id"
        labelTitle=" المادة"
        id="subject"
        options={subjectsOptions}
      />
      <FileDragDropUploader
        name="document_pdf"
        fileTypes={["pdf", "PDF"]}
      />
    </div>
  );
}

export default CourseForm;
