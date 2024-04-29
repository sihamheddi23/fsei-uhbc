import { getDepartements } from "@/api-fetchers/departements";
import Input from "@/components/generic/Input";
import Select from "@/components/generic/Select";
import React, { useEffect, useState } from "react";

function SubMajorForm() {
  const levels = [
    { value: "L1", label: "السنة الاولى ليسانس" },
    { value: "L2", label: "السنة الثانية ليسانس" },
    { value: "L3", label: "السنة الثالثة ليسانس" },
    { value: "M1", label: "ماستر الاول" },
    { value: "M2", label: "ماستر الثاني" },
  ];
  const [departements, setdepartements] = useState<any>([])
  useEffect(() => {
    getDepartements().then((data) => {
      const d = data.map((d: any) => {
        return { value: d._id, label: d.name }
      })
      setdepartements(d)
    })
  }, [])
  

  return (
    <div>
      <Input
        errors={[]}
        labelTitle="اسم "
        type="text"
        name="name"
        id="name"
        placeholder="اسم "
      />
      <Select
        multiple={true}
        name={"levels"}
        labelTitle=" المستوى"
        id="levels"
        options={levels}
      />
      <Select
        name="departement_id"
        labelTitle=" اسم الفرع"
        id="departement_id"
        options={departements}
      />
    </div>
  );
}

export default SubMajorForm;
