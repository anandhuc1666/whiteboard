import React from "react";
import logo from "../../assets/Whiteboard.png";
import { FaFacebook } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { IoLogoLinkedin } from "react-icons/io5";
import { FaXTwitter } from "react-icons/fa6";

function Footer() {
  return (
    <div className="w-full h-[40vh] bg-[#CFC6FF] mt-5 flex justify-between px-5">
      <div className="w-[550px] h-[40vh] flex justify-between">
        <div className="flex items-center flex-col justify-center gap-10">
          <img src={logo} alt="" className="w-[100px]" />
          <p className="font-Inter text-4xl">WhiteBoard</p>
        </div>
        <div className="w-[300px] h-[40vh] border-l-3 border-white flex flex-col justify-evenly px-5">
          <div className="w-full font-Inria-Serif text-[20px] opacity-50">
            <p>Empowering Students to Learn, Grow, and Achieve.</p>
          </div>
          <div className="w-full">
            <p>72 Spring St.Dangers, MA 01923 978-774-1050</p>
          </div>
          <div className="w-full font-bold">
            <p>CONNECT WITH AS</p>
          </div>
          <div className="w-full flex gap-5">
            <FaFacebook className="text-3xl"/>
            <AiFillInstagram className="text-3xl"/>
            <IoLogoLinkedin className="text-3xl"/>
            <FaXTwitter className="text-3xl"/>
          </div>
        </div>
      </div>
      <div className="w-[500px] h-[40vh] flex flex-col gap-10 justify-center">
        <div className="flex gap-3">
            <button className="w-[100px] h-[50px] text-[18px] rounded-2xl bg-[#F8F8F8] font-Inter text-[#5F48D5] shadow-lg/20">APPLY</button>
            <button className="w-[100px] h-[50px] text-[18px] rounded-2xl bg-[#F8F8F8] font-Inter text-[#5F48D5] shadow-lg/20">VISITE</button>
        </div>
        <div className="text-[18px]">
            <p className="font-IstokWeb text-2xl text-[#5F48D5]">QUICK LINKS</p>
            <p>Bookstore</p>
            <p>Employment</p>
            <p>Virtual Tour</p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
