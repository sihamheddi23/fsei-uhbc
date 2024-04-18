"use client";
import { getClassName } from "@/utils/functions";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

function Navbar(props:any) {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname()
  
  return (
    <div className="hidden md:shadow-md md:mb-8  md:px-6 md:p-3  md:flex items-center md:gap-3 lg:gap-5 lg:text-[18px]">
      <div className="hidden md:flex md:gap-3 md:items-center">
        <Image src={"/fsei.svg"} alt="logo" width={50} height={50} className="w-[40px] h-[40px] lg:w-[50px] lg:h-[50px]" />
        <h4 className="font-bold text-[12px] lg:text-[18px]">كلية العلوم الدقيقة و الاعلام الآلي</h4>
      </div>
      <Link
        href={"/"}
        className={"mr-4 " + getClassName("/",pathname)}
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
      <Link href={"/#faculte-info"} className="hover:text-blue-400">
        {" "}
        معلومــــات عن الكلية
      </Link>
      <Link href={"/login"} className={"mr-auto " + getClassName("/login",pathname)}>
        <i className="fa fa-unlock-alt ml-1"></i>
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
