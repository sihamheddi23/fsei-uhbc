"use client";
import { getClassName } from "@/utils/functions";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

interface PanelListProps {
    role: string;
}

const PanelList:React.FC<PanelListProps> = (props) => {
    const pathname = usePathname();
    
  return (
    <div className="border border-gray-200 shadow-md flex flex-col p-3 h-[90%]">
      <h3 className="text-center font-semibold text-lg">القـــــائمة</h3>
      <div className="flex flex-col items-start mx-3 mt-5 p-2 gap-2">
        {/* links in arabic */}
        <Link
          href={`/panel/${props.role}/users`}
          className={getClassName("users", pathname)}
        >
          {" "}
          المستخدمين{" "}
        </Link>
        <Link
          href={`/panel/${props.role}/departements`}
          className={getClassName("departements", pathname)}
        >
          {" "}
          أقسام الكلية
        </Link>
        <Link
          href={`/panel/${props.role}/teachers`}
          className={getClassName("teachers", pathname)}
        >
          {" "}
          المدرسين{" "}
        </Link>
        <Link
          href={`/panel/${props.role}/ads`}
          className={getClassName("ads", pathname)}
        >
          {" "}
          الاعلانات{" "}
        </Link>
        <Link
          href={`/panel/${props.role}/submajors`}
          className={getClassName("submajors", pathname)}
        >
          {" "}
          التخصصات{" "}
        </Link>
        <Link
          href={`/panel/${props.role}/subjects`}
          className={getClassName("subjects", pathname)}
        >
          {" "}
          الدروس و الملفات{" "}
        </Link>
        <Link
          href={`/panel/${props.role}/schedules`}
          className={getClassName("schedules", pathname)}
        >
          {" "}
          جدول التوقيت{" "}
        </Link>
      </div>
    </div>
  );
}

export default PanelList;
