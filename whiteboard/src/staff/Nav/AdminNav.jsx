import React, { useState } from "react";
import logo from "../../assets/Whiteboard.png";
import { BiSolidDashboard } from "react-icons/bi";
import { MdExplore } from "react-icons/md";
import { PiGraduationCapFill } from "react-icons/pi";
import { GrSchedulePlay } from "react-icons/gr";
import { SiGoogleclassroom } from "react-icons/si";
import { IoSettingsOutline } from "react-icons/io5";
import { Link } from "react-router-dom";

function AdminNav() {
  const [active1, setActive1] = useState(false);
  const [active2, setActive2] = useState(false);
  const [active3, setActive3] = useState(false);
  const [active4, setActive4] = useState(false);
  const [active5, setActive5] = useState(false);
  const [active6, setActive6] = useState(false);
  const handleActive1 = () => {
    setActive1(true);
    setActive2(false);
    setActive3(false);
    setActive4(false);
    setActive5(false);
    setActive6(false);
  };
  const handleActive2 = () => {
    setActive1(false);
    setActive2(true);
    setActive3(false);
    setActive4(false);
    setActive5(false);
    setActive6(false);
  };
  const handleActive3 = () => {
    setActive1(false);
    setActive2(false);
    setActive3(true);
    setActive4(false);
    setActive5(false);
    setActive6(false);
  };
  const handleActive4 = () => {
    setActive1(false);
    setActive2(false);
    setActive3(false);
    setActive4(true);
    setActive5(false);
    setActive6(false);
  };
  const handleActive5 = () => {
    setActive1(false);
    setActive2(false);
    setActive3(false);
    setActive4(false);
    setActive5(true);
    setActive6(false);
  };
  const handleActive6 = () => {
    setActive1(false);
    setActive2(false);
    setActive3(false);
    setActive4(false);
    setActive5(false);
    setActive6(true);
  };
  return (
    <div className="w-[400px] h-screen bg-white flex flex-col">
      <div className="w-[350px] h-[200px] bg-[#F8F8F8] flex justify-center items-start">
        <img src={logo} alt="" className="h-[120px]" />
        <p className="font-Inter text-3xl mt-20 font-semibold">WhiteBoard</p>
      </div>
      <div className="w-full flex flex-col gap-10 pl-15 mt-10">
        <Link to={"/Dashboard"}>
          <div
            className={` w-full  h-[60px] flex items-center pl-2 rounded-tl-2xl rounded-bl-2xl hover:bg-[#F8F8F8] hover:text-[#5F48D5] ${
              active1 === true ? "bg-[#F8F8F8]" : ""
            }`}
            onClick={handleActive1}
          >
            <BiSolidDashboard
              className={`text-4xl hover:text-[#5F48D5] ${
                active1 == true ? "text-[#5F48D5]" : "text-4xl"
              }`}
            />
            <p
              className={`ml-20  ${
                active1 == true ? "text-[#5F48D5] text-2xl" : "text-[20px]"
              } hover:text-[#5F48D5]`}
            >
              Dashboard
            </p>
          </div>
        </Link>
        <Link to={"/explore"}>
          <div
            className={` w-full  h-[60px] flex items-center pl-2 rounded-tl-2xl rounded-bl-2xl hover:bg-[#F8F8F8] hover:text-[#5F48D5] ${
              active2 === true ? "bg-[#F8F8F8]" : ""
            }`}
            onClick={handleActive2}
          >
            <MdExplore
              className={`text-4xl hover:text-[#5F48D5] ${
                active2 == true ? "text-[#5F48D5]" : "text-4xl"
              }`}
            />
            <p
              className={`ml-20  ${
                active2 == true ? "text-[#5F48D5] text-2xl" : "text-[20px]"
              } hover:text-[#5F48D5]`}
            >
              Explore
            </p>
          </div>
        </Link>
        <Link to={"/course"}>
          <div
            className={` w-full  h-[60px] flex items-center pl-2 rounded-tl-2xl rounded-bl-2xl hover:bg-[#F8F8F8] hover:text-[#5F48D5] ${
              active3 === true ? "bg-[#F8F8F8]" : ""
            }`}
            onClick={handleActive3}
          >
            {" "}
            <PiGraduationCapFill
              className={`text-4xl hover:text-[#5F48D5] ${
                active3 == true ? "text-[#5F48D5]" : "text-4xl"
              }`}
            />
            <p
              className={`ml-20  ${
                active3 == true ? "text-[#5F48D5] text-2xl" : "text-[20px]"
              } hover:text-[#5F48D5]`}
            >
              Course's
            </p>
          </div>
        </Link>
        <Link to={"/schedule"}>
          <div
            className={` w-full  h-[60px] flex items-center pl-2 rounded-tl-2xl rounded-bl-2xl hover:bg-[#F8F8F8] hover:text-[#5F48D5] ${
              active4 === true ? "bg-[#F8F8F8]" : ""
            }`}
            onClick={handleActive4}
          >
            {" "}
            <GrSchedulePlay
              className={`text-4xl hover:text-[#5F48D5] ${
                active4 == true ? "text-[#5F48D5]" : "text-4xl"
              }`}
            />
            <p
              className={`ml-20  ${
                active4 == true ? "text-[#5F48D5] text-2xl" : "text-[20px]"
              } hover:text-[#5F48D5]`}
            >
              Schedule
            </p>
          </div>
        </Link>
        <Link to={"/class"}>
          <div
            className={` w-full  h-[60px] flex items-center pl-2 rounded-tl-2xl rounded-bl-2xl hover:bg-[#F8F8F8] hover:text-[#5F48D5] ${
              active5 === true ? "bg-[#F8F8F8]" : ""
            }`}
            onClick={handleActive5}
          >
            {" "}
            <SiGoogleclassroom
              className={`text-4xl hover:text-[#5F48D5] ${
                active5 == true ? "text-[#5F48D5]" : "text-4xl"
              }`}
            />
            <p
              className={`ml-20  ${
                active5 == true ? "text-[#5F48D5] text-2xl" : "text-[20px]"
              } hover:text-[#5F48D5]`}
            >
              Class
            </p>
          </div>
        </Link>
        <Link to={"/setting"}>
          <div
            className={` w-full  h-[60px] flex items-center pl-2 rounded-tl-2xl rounded-bl-2xl hover:bg-[#F8F8F8] hover:text-[#5F48D5] ${
              active6 === true ? "bg-[#F8F8F8]" : ""
            }`}
            onClick={handleActive6}
          >
            {" "}
            <IoSettingsOutline
              className={`text-4xl hover:text-[#5F48D5] ${
                active6 == true ? "text-[#5F48D5]" : "text-4xl"
              }`}
            />
            <p
              className={`ml-20  ${
                active6 == true ? "text-[#5F48D5] text-2xl" : "text-[20px]"
              } hover:text-[#5F48D5]`}
            >
              Settings
            </p>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default AdminNav;
