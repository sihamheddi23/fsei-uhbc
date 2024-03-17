import Link from "next/link";
import React from "react";

function MainSectionHeader(props) {
  return (
    <div className=" bg-[#131212] border-b-cyan-600 border-b-4 text-white p-3 flex justify-between">
      <h4 className="font-bold">{props.title}</h4>
      <Link href={"/"}>إقرأ المزيــد {">>"}</Link>
    </div>
  );
}

export default MainSectionHeader;
