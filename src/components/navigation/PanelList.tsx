"use client";
import AuthContext from "@/lib/context";
import { getClassName } from "@/utils/functions";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useContext } from "react";

const PanelList:React.FC = (props: any) => {
  const pathname = usePathname();
  const {role} = useContext(AuthContext);

  return (
    <div className="border border-gray-200 shadow-md flex flex-col p-3 h-[90%]">
      <h3 className="text-center font-semibold text-lg">القـــــائمة</h3>
      <div className="flex flex-col items-start mx-3 mt-5 p-2 gap-2">
        {/* links in arabic */}
        {(role === "Admin" || role === "HeadDepartement") && (
            <>
              <Link
                href={`/panel/${role}/users`}
                className={getClassName("users", pathname)}
              >
                المستخدمين
              </Link>
              <Link
                href={`/panel/${role}/departements`}
                className={getClassName("departements", pathname)}
              >
                أقسام الكلية
              </Link>
              <Link
                href={`/panel/${role}/teachers`}
                className={getClassName("teachers", pathname)}
              >
                المدرسين
              </Link>
              <Link
                href={`/panel/${role}/ads`}
                className={getClassName("ads", pathname)}
              >
                الاعلانات
              </Link>
              <Link
                href={`/panel/${role}/submajors`}
                className={getClassName("submajors", pathname)}
              >
                التخصصات
              </Link>
              <Link
                href={`/panel/${role}/subjects`}
                className={getClassName("subjects", pathname)}
              >
                المقاييس المدروسة
              </Link>
              <Link
                href={`/panel/${role}/schedules`}
                className={getClassName("schedules", pathname)}
              >
                جدول التوقيت
              </Link>
            </>
          )}
        {role === "Teacher" && (
          <Link
            href={`/panel/${role}/courses`}
            className={getClassName("courses", pathname)}
          >
            الدروس و الملفات
          </Link>
        )}
      </div>
    </div>
  );
}

export default PanelList;
