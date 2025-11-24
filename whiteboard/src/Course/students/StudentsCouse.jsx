import React from "react";
import demoIMG from "../.../../../assets/picture/demoIMG.png";
import { BsPen } from "react-icons/bs";
import { SiBookstack } from "react-icons/si";
import { IoVideocamOutline } from "react-icons/io5";
import mini_sm1 from "../../assets/one.jpg";
import mini_sm2 from "../../assets/two.jpg";
import mini_sm3 from "../../assets/three.jpg";
function StudentsCouse() {
  return (
    <div className="w-full h-[100vh] mt-10">
      <div className="w-full flex">
        <div className="w-[800px] h-auto flex flex-col">
          <div className="absolute left-[30%] mt-25">
            <BsPen className="text-5xl text-black opacity-18 animate-wiggle" />
          </div>
          <div className="">
            <SiBookstack className="text-7xl text-black opacity-18 absolute mt-[250px] ml-[100px]" />
          </div>
          <div className="w-[400px] h-[400px] bg-[#D0C7FF] rounded-full flex items-center justify-center shadow-lg/20 ml-36 mt-10">
            <div className="w-[350px] h-[350px] bg-[#EAF3FB] rounded-full flex items-center justify-center">
              <div className="w-[300px] h-[300px] bg-[#D0C7FF] rounded-full flex items-center justify-center">
                <div className="w-[250px] h-[250px] bg-[#C0E1FF] rounded-full flex items-center justify-center">
                  <div className="w-[200px] h-[200px] bg-[#EAF3FB] rounded-full">
                    <img
                      src={demoIMG}
                      alt=""
                      className="w-[400px] absolute ml-[-150px] drop-shadow-xl/50"
                    />
                    <div className="w-[200px] h-[130px] shadow-lg/50 rounded-3xl mt-[250px] ml-[120px] absolute bg-[#FAFAFA] animate-up-down">
                      <div className=" flex gap-2 items-center mt-2 ml-2">
                        <div className="w-[50px] h-[50px] bg-[#F0DF20] flex items-center justify-center rounded-full">
                          <IoVideocamOutline className="text-4xl font-bold text-white" />
                        </div>
                        <p className="font-bold text-2xl">10K</p>
                      </div>
                      <div className="ml-4 mt-1 font-IstokWeb">
                        <p>Online student's </p>
                      </div>
                      <div className="w-full flex pl-5 mt-1">
                        <div className="flex">
                          <div
                            className="w-[35px] h-[35px] rounded-full bg-cover bg-center shadow-lg/50 absolute"
                            style={{ backgroundImage: `url(${mini_sm2})` }}
                          ></div>
                          <div
                            className="w-[35px] h-[35px] rounded-full bg-cover bg-center shadow-lg/50 absolute ml-7"
                            style={{ backgroundImage: `url(${mini_sm1})` }}
                          ></div>
                          <div
                            className="w-[35px] h-[35px] rounded-full bg-cover bg-center shadow-lg/50 absolute ml-12"
                            style={{ backgroundImage: `url(${mini_sm3})` }}
                          ></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full mt-10 h-[180px] flex items-end justify-start pl-32">
            <div className="font-Inter text-4xl leading-13">
              <p>
                Learn anywhere anytime <br /> empower your future
              </p>
            </div>
          </div>
        </div>
        <div className="w-[1000px] h-[70vh] flex items-center justify-center">
            <div className="w-[800px] h-[50vh] flex flex-col gap-10">
                <div className="flex gap-20">
                   <div className="w-[180px] h-[200px] bg-[#C0F3B8] rounded-2xl shadow-lg/20"></div>
                   <div className="w-[180px] h-[200px] bg-[#EAF3FB] rounded-2xl shadow-lg/20"></div>
                   <div className="w-[180px] h-[200px] bg-[#FFEBBC] rounded-2xl shadow-lg/20"></div>
                </div>
                <div className="flex gap-20">
                   <div className="w-[180px] h-[200px] bg-[#CFC6FF] rounded-2xl shadow-lg/20"></div>
                   <div className="w-[180px] h-[200px] bg-[#F8F8F8] rounded-2xl shadow-lg/20"></div>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
}

export default StudentsCouse;
