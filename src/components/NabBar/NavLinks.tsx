"use client";
import Link from "next/link";
import React, { useContext, useEffect, useState } from "react";
import DropDownDep from "./DropDownDep";
import { getClassName } from "@/utils/functions";
import { usePathname } from "next/navigation";
import { logout } from "@/api-fetchers/auth";
import AuthContext from "@/lib/context";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

function NavLinks() {
  const pathname = usePathname();
  const { token, role, onClear } = useContext(AuthContext);  
  const [links, setlinks] = useState<string[]>([])
  
  useEffect(() => {
    if (token && role) {
       setlinks(["panel","logout"])
    }
    else {
      setlinks(["login"])
    }
  }, [token, role])
  
  const onSignout = () => {
    if (token) {
      const data: any = logout(token);
        if (!data?.error) {
          toast.success("جاري تسجيل خروج", {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
          });
          setTimeout(() => {
           onClear();
           window.location.href = "/login";
          }, 3000);
      }
    }
    else {
        window.location.href = "/login";
    }
  };

  return (
    <div className="md:flex items-center justify-between text-[13px] lg:text-[16px] md:w-[75%] lg:w-[68%]">
      <div className="flex items-center  md:gap-1 lg:gap-3">
        <Link href={"/"} className={"mr-4 " + getClassName("/", pathname)}>
          الصفحة الرئيسية
        </Link>
        <Link href={"/#faculte-info"} className="hover:text-blue-400">
          معلومــــات عن الكلية
        </Link>
        <DropDownDep />
      </div>
      <div className="flex items-center  md:gap-3">
        { links.includes("login") && (
          <Link
            href={"/login"}
            className={"mr-auto " + getClassName("/login", pathname)}
          >
            <i className="fa fa-unlock-alt ml-1"></i>
            <span>تسجيل الدخول</span>
          </Link> )
        } 
        { links.includes("panel") && links.includes("logout") && (
          <div className="flex gap-2 items-center ">
            <button
              onClick={onSignout}
              className="bg-blue-600 text-white font-medium rounded-xl px-4 py-2 flex items-center gap-1 hover:bg-blue-500 shadow-md"
            >
              <i className="fa fa-sign-out ml-1"></i>
              <span>تسجيل الخروج</span>
            </button>
            <Link
              href={`/panel/${role}`}
              className={"mr-4 " + getClassName("/panel", pathname)}
            >
              لوحة التحكم
            </Link>
          </div> )
        }
        <div className="flex gap-2 align-middle">
          <span>تغيير اللغة </span>
          <i className="fa fa-sort-desc"></i>
         </div>
        <ToastContainer />

      </div>
    </div>
  );
}

export default NavLinks;
