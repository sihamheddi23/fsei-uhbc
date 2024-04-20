"use client"
import DropDown from "../navigation/DropDown";
import Link from "next/link";
import { getClassName } from "@/utils/functions";
import { usePathname } from "next/navigation";

function DropDownDep() {
  const pathname = usePathname();

  return (
    <div>
      <DropDown
        className={getClassName("departement", pathname)}
        title="فروع الكلية"
      >
        <Link
          href={"/departement/informatics"}
          className="hover:bg-blue-100 p-2"
        >
          قسم الاعلام الآلي
        </Link>
        <Link href={"/departement/maths"} className="hover:bg-blue-100 p-2">
          قسم الرياضيات
        </Link>
        <Link href={"/departement/physics"} className="hover:bg-blue-100 p-2">
          قسم الفيزياء
        </Link>
        <Link href={"/departement/chimics"} className="hover:bg-blue-100 p-2">
          قسم الكيمياء
        </Link>
      </DropDown>
    </div>
  );
}

export default DropDownDep;
