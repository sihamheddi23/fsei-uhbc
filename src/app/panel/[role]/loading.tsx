import Image from "next/image";
import React from "react";

function loading() {
  return (
    <div className="flex flex-col justify-center h-[50%] items-center">
      <div>
         <Image src={"/loading.svg"} width={200} height={200} alt="loading" />
      </div>
    </div>
  );
}

export default loading;
