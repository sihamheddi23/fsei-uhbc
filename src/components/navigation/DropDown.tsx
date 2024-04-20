"use client";
import { usePathname } from "next/navigation";
import React, { useState } from "react";

interface DropDownProps {
  className?: string;
  title: string;
  children: React.ReactNode;
}

const DropDown: React.FC<DropDownProps> = ({ className, title, children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  return (
    <div
      className={className + " relative "}
      onClick={() => {
        setIsOpen(!isOpen);
      }}
    >
      <p className="flex gap-1 align-middle cursor-pointer">
        <span> {title} </span>
        <i className="fa fa-sort-desc"></i>
      </p>
      <div
        className={
          isOpen
            ? "text-black text-[15px] p-3 border border-gray-400 shadow-md shadow-gray-50 flex flex-col absolute top-10 justify-center w-[200px] z-40 bg-white"
            : "hidden"
        }
      >
        {children}
      </div>
    </div>
  );
};

export default DropDown;
