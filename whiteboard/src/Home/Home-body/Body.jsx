import React from "react";
import { RiGraduationCapLine } from "react-icons/ri";
import { SiBookstack } from "react-icons/si";
import { BsPen } from "react-icons/bs";
import { GrYoutube } from "react-icons/gr";
import pic1study from "../../assets/pic1study-girl.png";
import pic1boy from "../../assets/pic1study-body.png";
import google_meet_icon from "../../assets/Google_Meet_icon_(2020).svg.png";
import { GiPlainArrow } from "react-icons/gi";
import study_group from "../../assets/study-group.jpg";
import { IoVideocamOutline } from "react-icons/io5";
import mini_sm1 from "../../assets/one.jpg"
import mini_sm2 from "../../assets/two.jpg"
import mini_sm3 from "../../assets/three.jpg"

function Body() {
  return (
    <div className="w-full flex h-[100vh]">
      <div className="w-[55%] h-[100vh] gap-0">
        <div className="flex px-15 py-25 gap-7">
            {/* animation section---- */}
          <div className="animate-wiggle">
            <RiGraduationCapLine className="text-8xl text-black opacity-18 rotate-320" />
          </div>
          <p className="text-6xl mt-10 font-IstokWeb leading-20">
            Empower Your <span className="text-[#5F48D5]">Future Learn</span>
            <br /> Anywhere, build Everywhere <br /> for a bright Career
          </p>
        </div>
        <div className="w-full flex justify-end mt-[-50px]">
          <SiBookstack className="text-7xl text-black opacity-18" />
        </div>
        <div className="font-Indie-Flower text-3xl px-52 leading-13 text-[#F5F5F5]">
          <p className=" text-black opacity-50">
            We wish you joy in discovering <br />
            <span className="pl-36">and learning new things.</span>
          </p>
          <div className=" flex gap-10 mt-5">
            <button className="px-3 py-3 text-2xl font-IstokWeb rounded-2xl bg-[#5F48D5] text-white border-none hover:text-[#5F48D5] hover:bg-[#F5F5F5] duration-500 shadow-sm/15">
              get started
            </button>
            <button className="px-3 py-3 text-2xl border-2 font-IstokWeb rounded-2xl text-[#5F48D5] border-[#5F48D5]">
              read more
            </button>
          </div>
        </div>
      </div>
      <div className="w-[45%] h-[100vh] py-20">
        <div className=" flex flex-col pr-40 items-center">
          <BsPen className="text-5xl text-black opacity-18 animate-wiggle"/>
          <div className=" flex justify-center pl-[350px] w-full">
            <div className="w-[50px] flex items-center justify-center animate-wiggle rounded-full h-[50px] bg-[#FAFAFA]">
              <GrYoutube className="text-4xl text-red-700 ml" />
            </div>
          </div>
        </div>
        <div className=" flex gap-7  pl-50 items-center justify-center">
          <div
            className="w-[160px] h-[190px] bg-cover bg-center rounded-xl shadow-lg/20"
            style={{ backgroundImage: `url(${pic1study})` }}
          ></div>
          <div
            className="w-[240px] h-[200px] ml-[50px] mt-8 bg-cover bg-center shadow-lg"
            style={{
              backgroundImage: `url(${pic1boy})`,
              clipPath: "polygon(50% 0%, 0% 100%, 100% 100%)",
            }}
          ></div> 
          {/* animation section ---- */}
          <div className=" w-[65px] ml-[-100px] mb-20 h-[65px] rounded-full bg-[#FAFAFA] flex items-center justify-center animate-wiggle">
            <img src={google_meet_icon} alt="" className="w-[36px]" />
          </div>
        </div>
        <div className=" flex justify-center">
          <div className=" flex items-center">
            {/* animation section------*/}
            <div className="w-[200px] h-[130px] shadow-lg/50 rounded-3xl mt-36 ml-[-170px] absolute bg-[#FAFAFA] animate-up-down">
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

            <div
              className="w-[170px] h-[170px] rounded-full bg-cover bg-center shadow-lg/50"
              style={{ backgroundImage: `url(${study_group})` }}
            ></div>
            <div className="w-[150px] h-[80px] shadow-lg/20 rounded-3xl gap-2 flex bg-[#FAFAFA]">
              <div className="w-[30px] h-[30px] bg-[#5F48D5] rounded-full mt-2 ml-2 flex items-center justify-center">
                <GiPlainArrow className=" rotate-230 text-white" />
              </div>
              <div className="mt-5 ">
                <p>Available </p>
                <div className="flex">
                  <p className="font-bold">80+</p>
                  <p className="text-[#5F48D5]">course</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full flex justify-end px-20 py-10">
            <div className="w-[350px] h-[160px] flex items-center flex-col">
                <div className="w-[50px] h-[50px] rounded-full bg-[#FAFAFA]"></div>
                <div className="w-[80px] h-[80px] rounded-full bg-[#FAFAFA] shadow-sm/15 ml-50"></div>
                <div className="w-[25px] h-[25px] rounded-full bg-[#FAFAFA] shadow-sm/5"></div>
            </div>
        </div>
      </div>
    </div>
  );
}

export default Body;
