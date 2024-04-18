import React from "react";
import MainSectionHeader from "./SubSections/MainSectionHeader";

function AboutUs() {
  return (
    <div>
      <MainSectionHeader title={"معلومــــات عن الكلية"} />
      <div className="w-[95%] mx-4 flex flex-col md:flex-row-reverse md:gap-4 items-center">
        <div className="w-full  my-5">
          <iframe
            className="w-full h-[400px]"
            src="https://api.maptiler.com/maps/streets-v2/?key=VDHk3el77cNt6inC56oR#1.0/0.00000/0.00000"
          ></iframe>
        </div>
        <div className="w-full md:h-[400px]  border border-[rgba(52,52,52,0.22)]">
          <ul className="p-4 flex flex-col gap-4 flex-end">
            <li>عنوان حي السلام</li>
            <li> الهاتف +213 27 72 17 94 </li>
            <li>الايمايل doyen.ft@univ-chlef.dz & c.fares@univ-chlef.dz </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
