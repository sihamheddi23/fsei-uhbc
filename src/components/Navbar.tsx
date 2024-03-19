"use client";
import { getClassName } from "@/utils/functions";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

function Navbar(props:any) {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname()
  
  return (
    <div className="hidden my-11 mx-8 md:p-2 lg:p-4 md:flex md:gap-3 lg:gap-5 lg:text-[20px]">
      <Link
        href={"/"}
        className={getClassName("/",pathname)}
      >
        الصفحة الرئيسية
      </Link>
      <div
        className={getClassName("departement",pathname)+" relative"}
        onClick={() => {
          setIsOpen(!isOpen);
        }}>
        <p className="flex gap-1 align-middle cursor-pointer">
          <span>أقسام الكلية </span>
          <i className="fa fa-sort-desc"></i>
        </p>
        <span
          className={
            isOpen
              ? "text-black text-[15px] p-3 border border-gray-400 shadow-md shadow-slate-500 flex flex-col absolute top-10 justify-center w-[200px] z-40 bg-white"
              : "hidden"
          }>
          <Link href={"/departement/informatics"} className="hover:bg-blue-100 p-2">
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
        </span>
      </div>
      <Link href={"/ads"}  className={getClassName("ads",pathname) }>
        صفحة الاعلانـــــــات
      </Link>
      <Link href={"/#faculte-info"} className="hover:text-blue-400">
        {" "}
        معلومــــات عن الكلية
      </Link>
      <Link href={"/"} className="mr-auto hover:text-blue-400">
        <i className="fa fa-unlock-alt"></i>
        <span>تسجيل الدخول</span>
      </Link>
      <div className="flex gap-2 align-middle">
        <span>تغيير اللغة </span>
        <i className="fa fa-sort-desc"></i>
      </div>
    </div>
  );
}

export default Navbar;
