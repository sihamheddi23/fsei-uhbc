import SubjectForm from "@/components/Resources/forms/SubjectForm";
import TeacherForm from "@/components/Resources/forms/TeacherForm";
import ResourceManager from "@/components/Resources/ResourceManager";
import { teachers } from "@/utils/mockApi";

function Subject() {
  const columns = [
    {
      headerName: "id",
      field: "id",
      width: "50px",
      suppressSizeToFit: true,
    },
    {
      headerName: "اسم مقياس",
      field: "name",
    },
    {
      headerName: "التخصص",
      field: "sub_major_name",
    },
    {
      headerName: "المستوى ",
      field: "level",
      width: "90px",
      suppressSizeToFit: true,
    },
    {
      headerName: "الاسم الكامل للاستاد ",
      field: "full_name",
    },
  ];

  return (
    <div>
      <ResourceManager columns={columns} data={teachers} resourceName={"مقياس"}>
        <SubjectForm />
      </ResourceManager>
    </div>
  );
}

export default Subject;
