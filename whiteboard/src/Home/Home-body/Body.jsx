import React from "react";
import { RiGraduationCapLine } from "react-icons/ri";

function Body() {
  return (
    <div className="w-full flex h-[100vh] bg-amber-200">
      <div className="w-[55%] h-[100vh] bg-blue-100">
        <div className="flex px-15 py-25 gap-7">
          <div className="">
            <RiGraduationCapLine className="text-9xl text-[#F5F5F5] rotate-320"/>
          </div>
          <p className="text-6xl mt-10 font-IstokWeb leading-20">
            Empower Your <span className="text-[#5F48D5]">Future Learn</span><br /> Anywhere, build Everywhere <br /> for a bright
            Career
          </p>
        </div>
      </div>
      <div className="w-[45%] h-[100vh] bg-red-100"></div>
    </div>
  );
}

export default Body;
