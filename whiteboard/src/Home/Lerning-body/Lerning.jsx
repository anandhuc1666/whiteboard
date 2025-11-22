import React from "react";
import { TbTools } from "react-icons/tb";
import { FaUserGraduate } from "react-icons/fa";
import { FaPeopleGroup } from "react-icons/fa6";
import { IoAnalyticsSharp } from "react-icons/io5";
import { SiBookstack } from "react-icons/si";
import { FaCirclePlay } from "react-icons/fa6";
import { FaPlay } from "react-icons/fa";
import { IoDocumentText } from "react-icons/io5";

function Lerning() {
  return (
    <div className="w-full h-[120vh]">
      <div className="w-full h-[35vh] bg-[#FAFAFA] flex items-center justify-evenly">
        <div className="w-[250px] h-[30vh] bg-[#FFB6B6] rounded-2xl flex flex-col gap-5 hover:shadow-lg/50 hover:shadow-[#5F48D5]  hover:duration-700 hover:border-1 hover:border-[#5F48D5]">
          <div className="flex w-full justify-center mt-7">
            <TbTools className="text-6xl text-[#FAFAFA] animate-wiggle" />
          </div>
          <div className="">
            <p className="font-IstokWeb text-2xl font-bold ml-5 text-[#5F48D5] text-shadow-lg/20">
              Study Tools
            </p>
          </div>
          <div className="">
            <p className="font-IstokWeb text-2xl text-white ml-5">
              learning for scratch
            </p>
          </div>
        </div>
        <div className="w-[250px] h-[30vh] bg-[#C0F3B8] rounded-2xl flex flex-col gap-5 hover:shadow-lg/50 hover:shadow-[#5F48D5]  hover:duration-700 hover:border-1 hover:border-[#5F48D5]">
          <div className="flex w-full justify-center mt-7">
            <FaUserGraduate className="text-6xl text-[#5F48D5] animate-wiggle" />
          </div>
          <div className="">
            <p className="font-IstokWeb text-2xl font-bold ml-5 text-[#5F48D5] text-shadow-lg/20">
              Course
            </p>
          </div>
          <div className="">
            <p className="font-IstokWeb text-2xl text-white ml-5">
              collection of study course
            </p>
          </div>
        </div>
        <div className="w-[250px] h-[30vh] bg-[#B6ACEC] rounded-2xl flex flex-col gap-5 hover:shadow-lg/50 hover:shadow-[#5F48D5]  hover:duration-700 hover:border-1 hover:border-[#5F48D5]">
          <div className="flex w-full justify-center mt-7">
            <FaPeopleGroup className="text-6xl text-[#5F48D5] animate-wiggle" />
          </div>
          <div className="">
            <p className="font-IstokWeb text-2xl font-bold ml-5 text-[#5F48D5] text-shadow-lg/20">
              Class group
            </p>
          </div>
          <div className="">
            <p className="font-IstokWeb text-2xl text-white ml-5">
              student's can chat’s and discuss on ideas{" "}
            </p>
          </div>
        </div>
        <div className="w-[250px] h-[30vh] bg-[#FFB6B6] rounded-2xl flex flex-col gap-5 hover:shadow-lg/50 hover:shadow-[#5F48D5]  hover:duration-700 hover:border-1 hover:border-[#5F48D5]">
          <div className="flex w-full justify-center mt-7">
            <IoAnalyticsSharp className="text-6xl text-[#FAFAFA] animate-wiggle" />
          </div>
          <div className="">
            <p className="font-IstokWeb text-2xl font-bold ml-5 text-[#5F48D5] text-shadow-lg/20">
              Your mark's{" "}
            </p>
          </div>
          <div className="">
            <p className="font-IstokWeb text-2xl text-white ml-5">
              your smart score and total lead
            </p>
          </div>
        </div>
      </div>
      <div className="w-full h-[85vh]">
        <div className="w-full h-[35vh] flex justify-between">
          <div className="w-[300px] h-[35vh] flex items-end">
            <div className="">
              <div className="w-[350px] h-[160px] flex items-center flex-col rotate-320">
                <div className="w-[50px] h-[50px] rounded-full bg-[#FAFAFA]"></div>
                <div className="w-[80px] h-[80px] rounded-full bg-[#FAFAFA] shadow-sm/15 ml-50 animate-pulse"></div>
                <div className="w-[25px] h-[25px] rounded-full bg-[#FAFAFA] shadow-sm/10"></div>
              </div>
            </div>
          </div>
          <div className="w-[40%] h-[35vh] flex items-center justify-center leading-20">
            <div className=" flex items-center justify-center flex-col">
              <p className="font-IstokWeb text-2xl text-black opacity-50">
                WHY CHOOSE US
              </p>
              <p className="font-light text-6xl">Our Values</p>
            </div>
            <div className="pl-35">
              <SiBookstack className="text-9xl text-black opacity-18" />
            </div>
          </div>
          <div className="w-[100px]"></div>
        </div>
        <div className="w-full h-auto flex justify-center ">
          <div className="w-[80%] h-[50vh] flex justify-between">
            <div className="w-[350px] h-[50vh] flex flex-col items-center shadow-lg/20 duration-700 hover:shadow-none">
              <div className="w-[200px] h-[200px] bg-[#EAF3FB] rounded-3xl flex items-center justify-center shadow-lg/20">
                <div className="flex items-center justify-center">
                  <div className="w-[50px] h-[50px] bg-[#D3EAFF] rounded-full"></div>
                  <FaCirclePlay className="text-[#95CCFF] text-5xl absolute mt-3 ml-3 animate-pulse" />
                </div>
              </div>
              <div className="w-full">
                <p className="w-full flex items-center justify-center py-5 text-4xl">
                  speaking clubs
                </p>
              </div>
              <div className="w-[250px] text-justify py-5">
                <p>
                  In our school you will practice your speaking skills and just
                  get a lot of positive emotions
                </p>
              </div>
            </div>
            <div className="w-[350px] h-[50vh] flex flex-col items-center shadow-lg/20 duration-700 hover:shadow-none">
              <div className="w-[200px] h-[200px] bg-[#FFF3D8] rounded-3xl flex items-center justify-center shadow-lg/20">
                <div className="flex items-center justify-center rotate-400">
                  <FaPlay className="text-5xl text-[#FFEABB]" />
                  <FaPlay className="text-5xl absolute mt-4 ml-6 text-[#ffd57b] animate-pulse" />
                </div>
              </div>
              <div className="">
                <p className="w-full flex items-center justify-center py-5 text-4xl">
                  Quality control
                </p>
              </div>
              <div className="w-[250px] text-justify py-5">
                <p>
                  A huge work has been done with the teachers and their work has
                  been monitored thoroughly
                </p>
              </div>
            </div>
            <div className="w-[350px] h-[50vh] flex flex-col items-center shadow-lg/20 duration-700 hover:shadow-none">
              <div className="w-[200px] h-[200px] bg-[#CFC6FF] rounded-3xl flex items-center justify-center shadow-lg/20">
                <div className="w-[35px] h-[40px] bg-radial from-[#5F48D5] from-40% to-[#B2A6F1] rounded-[10px]"></div>
                <IoDocumentText className="text-5xl text-[#5F48D5] absolute mt-3 ml-3 animate-pulse" />
              </div>
              <div className="">
                <p className="w-full flex items-center justify-center py-5 text-4xl">
                  Progress analysis
                </p>
              </div>
              <div className="w-[250px] text-justify py-5">
                <p>
                  The CEF of reference has been used at our school.It allows to
                  control our students,success in studying.
                </p>
              </div>
            </div>
            <div className="absolute right-0 mr-10 mt-32">
              <div className="">
                <div className="w-[200px] h-[160px] flex items-center flex-col">
                  <div className="w-[50px] h-[50px] rounded-full bg-[#FAFAFA] shadow-lg/20 animate-pulse"></div>
                  <div className="w-[80px] h-[80px] rounded-full bg-[#FAFAFA] shadow-sm/15 ml-50"></div>
                  <div className="w-[25px] h-[25px] rounded-full bg-[#FAFAFA] shadow-sm/10"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Lerning;
