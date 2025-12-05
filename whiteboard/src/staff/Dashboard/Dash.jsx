import React from "react";
import { RiAccountCircleLine } from "react-icons/ri";
import congrats from "../../assets/photo/congrasDash.svg";
import { AiTwotoneDollarCircle } from "react-icons/ai";
import { MdPendingActions } from "react-icons/md";

function Dash() {
  return (
    <div className="w-[1150px] h-screen flex flex-col items-center gap-5">
      <div className="flex gap-5 font-Inter">
        <div className="w-[300px] h-[300px] bg-white rounded-2xl flex flex-col gap-3 py-3 text-[#5F48D5]">
          <div className="w-[220px] h-[70px] bg-[#F8F8F8] rounded-tr-2xl rounded-br-2xl flex items-center justify-center text-2xl font-semibold font-Inter">
            <p>Student’s</p>
          </div>
          <div className="flex pl-12 gap-5 w-[220px] ">
            <RiAccountCircleLine className="text-5xl" />{" "}
            <p className="text-black text-3xl">Status</p>
          </div>
          <div className="w-full flex justify-center">
            {/* Active user list fach into the section */}
            <div className="w-[250px] h-[60px] bg-[#F8F8F8] rounded-2xl border-2 border-[#5F48D5] flex items-center pl-2 text-[20px] font-semibold text-black justify-between">
              <p>Active</p>
              <div className="w-[100px] h-[39px] bg-[#5F48D5] rounded-tl-[5px] rounded-bl-[5px] flex items-center justify-center text-white text-2xl">
                <p>1503</p>
              </div>
            </div>
          </div>
          <div className="w-full flex justify-center">
            {/* Bloack user list fach into the section */}
            <div className="w-[250px] h-[60px] bg-[#F8F8F8] rounded-2xl border-2 border-[#5F48D5] flex items-center pl-2 text-[20px] font-semibold text-black justify-between">
              <p>Block</p>
              <div className="w-[100px] h-[39px] bg-[#5F48D5] rounded-tl-[5px] rounded-bl-[5px] flex items-center justify-center text-white text-2xl">
                <p>12</p>
              </div>
            </div>
          </div>
        </div>
        <div className="w-[800px] h-[300px] bg-white  rounded-2xl flex">
          {/* all data user and payment */}
          <div className="w-[450px] h-[300px] flex flex-col justify-evenly py-3">
            <div className=" w-full text-4xl font-semibold pl-15 font-Inter">
              <p>Payment</p>
            </div>
            <div className="flex gap-5">
              <div className="w-[190px] h-[70px] bg-[#F8F8F8] rounded-tr-2xl border-2 border-[#5F48D5] flex items-center px-5 gap-3 text-[#5F48D5]">
                <AiTwotoneDollarCircle className="text-4xl" />{" "}
                <p className="font-Inter font-semibold">completed</p>
              </div>
              <div className="w-[190px] h-[70px] bg-[#F8F8F8] rounded-tr-2xl border-2 border-[#5F48D5] flex items-center px-5 gap-3  text-[#5F48D5]">
                <MdPendingActions className="text-4xl" />{" "}
                <p className="font-Inter font-semibold text-black">Pending</p>
              </div>
            </div>
            <div className="text-[20px] opacity-50 max-w-[400px] pl-5">
              <p>
                To find the payment completed user and non payment user list
              </p>
            </div>
          </div>
          <div className="w-[350px] h-[300px] rounded-[45%_0%_0%_49%/31%_0%_0%_83%] bg-[#5F48D5] rounded-tr-2xl rounded-br-2xl flex items-end justify-center">
            <img src={congrats} alt="" className="w-[180px]" />
          </div>
        </div>
      </div>
      <div className="flex gap-5">
        <div className="w-[800px] h-[300px] bg-white  rounded-2xl"></div>
        <div className="w-[300px] h-[300px] bg-white  rounded-2xl"></div>
      </div>
    </div>
  );
}

export default Dash;
