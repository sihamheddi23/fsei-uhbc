"use client";
import Link from "next/link";
import { useState } from "react";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="hidden my-11 mx-8 md:p-2 lg:p-4 md:flex md:gap-3 lg:gap-5 lg:text-[20px]">
      <Link
        href={"/"}
        className="border-b-2 border-b-blue-500 hover:text-blue-400"
      >
        الصفحة الرئيسية
      </Link>
      <div
        className="relative"
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
              ? "text-[15px] p-3 border border-gray-400 shadow-md shadow-slate-500 flex flex-col absolute top-10 justify-center w-[200px] z-40 bg-white"
              : "hidden"
          }>
          <Link href={"/"} className="hover:bg-blue-100 p-2">
            قسم الاعلام الآلي
          </Link>
          <Link href={"/"} className="hover:bg-blue-100 p-2">
            قسم الرياضيات
          </Link>
          <Link href={"/"} className="hover:bg-blue-100 p-2">
            قسم الفيزياء
          </Link>
          <Link href={"/"} className="hover:bg-blue-100 p-2">
            قسم الكيمياء
          </Link>
        </span>
      </div>
      <Link href={"/"} className="hover:text-blue-400">
        صفحة الاعلانـــــــات
      </Link>
      <Link href={"/"} className="hover:text-blue-400">
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
