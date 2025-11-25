import React from "react";
import { BiLogoGoLang } from "react-icons/bi";

function StudentsCourse() {
  return (
    <div className="flex items-center justify-center mt-20">
      <div className="w-[85%] h-[70vh] flex justify-between">
        <div className="w-[55%] h-[70vh] bg-[#F8F8F8] p-5">
          <div className="w-full h-[65vh] flex justify-between px-5 flex-col ">
            <div className="">
              <BiLogoGoLang className="text-[#00ACD7] text-8xl drop-shadow-lg/50 " />
            </div>
            <div className="w-full h-[350px] bg-black rounded-2xl shadow-lg/20"></div>
            <div className="w-full h-[130px] bg-white rounded-2xl shadow-lg/20"></div>
          </div>
        </div>
        <div className="w-[6%] h-[70vh] bg-amber-500"></div>
        <div className="w-[40%] h-[70vh] bg-[#5F48D5] p-5">
          <div className="w-full h-[65vh] bg-white rounded-2xl overflow-y-auto no-scrollbar scroll-smooth overflow-x-hidden px-4 py-5">
            {/* all course-vdo section for maping */}
            <div className="w-full h-[100px] bg-[#D9D9D9] mb-3 shadow-lg/10 rounded-2xl flex items-center justify-between px-3">
              <div className="w-[80px] h-[80px] bg-white rounded-2xl"></div>
              <div className="w-[85%] h-auto flex flex-col items-start px-5">
                <div className=" w-[80%] h-[60px] bg-white rounded-2xl"></div>
                <div className="w-8 h-6">
                  <p>EP:1</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default StudentsCourse;
