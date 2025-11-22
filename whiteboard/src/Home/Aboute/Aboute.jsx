import React from "react";
import aboutLogo from "../../assets/picture/about.svg"
import { HiMiniClipboardDocumentList } from "react-icons/hi2";
import { FaGraduationCap } from "react-icons/fa6";

function Aboute() {
  return (
    <div className="w-full h-[90vh] pl-[145px] pt-24">
      <div className="w-[75%] h-[70vh] bg-[#F8F8F8] rounded-2xl flex flex-col justify-center items-center">
        <div className="w-full flex flex-col">
          <p className="w-full px-36 text-4xl font-medium font-Inter text-[#5F48D5] mt-10 text-shadow-lg/20">About WhiteBoard</p>
        </div>
        <div className="w-full px-36 flex justify-center items-end text-justify gap-5 font-Inter mt-5 text-[18px]">
          <p>
            Whiteboard is an online learning platform designed to help students
            learn, grow, and achieve their goals.Our mission is to make quality
            education accessible to everyone by providing clear explanations,
            practical lessons, and real-time learning experiences. At
            Whiteboard, we believe that learning should be simple, engaging, and
            meaningful. Whether you’re just getting started or looking to
            improve your skills, we’re here to guide you every step of the way.
          </p>
          <div className="">
            <HiMiniClipboardDocumentList className="text-8xl text-white"/>
          </div>
        </div>
        <FaGraduationCap className="text-8xl text-white"/>
        <div className="w-full flex justify-end px-36">
            <img src={aboutLogo} alt="" className="w-[500px]"/>
        </div>
      </div>
    </div>
  );
}

export default Aboute;
