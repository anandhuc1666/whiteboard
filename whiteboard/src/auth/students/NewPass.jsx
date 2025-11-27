import React from "react";
import boysjumb from "../../assets/picture/demo3dpic2.png"
import logo from "../../assets/Whiteboard.png";

function NewPass() {
  return (
    <div className="w-full h-screen bg-[#5F48D5] flex items-center justify-center">
      <div className="w-[900px] h-[550px] bg-white rounded-2xl flex flex-col gap-20">
        <img src={logo} alt="" className="w-[50px] absolute m-3"/>
        <div className="w-full text-4xl font-semibold font-Inter text-[#5F48D5] text-shadow-lg/20 flex justify-center items-center  pt-10">
          <p>verify your password</p>
        </div>
        <div className="flex p-1">
          <div className="w-full pl-10 flex flex-col gap-10">
            <p className="pl-10">
              Heyy! you just create a new password for your email😁
            </p>
            <input
              className="w-[500px] h-16 rounded-3xl bg-[#5F48D5] pl-3 outline-none text-2xl text-white font-light hover:shadow-lg/30"
              type="text"
              placeholder="New password"
            />
            <input
              className="w-[500px] h-16 rounded-3xl bg-[#5F48D5] pl-3 outline-none text-2xl text-white font-light hover:shadow-lg/30"
              type="text"
              placeholder="Conform password"
            />
            <button className="w-[120px] pointer-coarse: h-[50px] bg-[#F8F8F8] shadow-lg/20 active:shadow-lg/50 active:shadow-[#5F48D5] rounded-full text-2xl text-[#5F48D5]">
              conform
            </button>
          </div>
          <div className="w-[500px] h-[300px] bg-[#F8F8F8] rounded-tl-3xl border-l-2 border-[#5F48D5] border-b-2"><img src={boysjumb} alt="" className="w-[400px] h-[400px]"/></div>
        </div>
      </div>
    </div>
  );
}
export default NewPass;
