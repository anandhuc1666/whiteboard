import React from "react";
import logo from "../../assets/Whiteboard.png";

function Footer() {
  return (
    <div className="w-full h-[40vh] bg-[#CFC6FF] mt-5 flex justify-between px-5">
      <div className="w-[550px] bg-amber-200 h-[40vh] flex justify-between">
        <div className="flex items-center flex-col justify-center gap-10">
          <img src={logo} alt="" className="w-[100px]" />
          <p className="font-Inter text-4xl">WhiteBoard</p>
        </div>
        <div className="w-[300px] h-[40vh] bg-amber-500 border-l-3">
          <div className="w-full">
            <p>Empowering Students to Learn, Grow, and Achieve.</p>
          </div>
          <div className="w-full">
            <p>72 Spring St.Dangers, MA 01923 978-774-1050</p>
          </div>
          <div className="w-full">
            <p>CONNECT WITH AS</p>
          </div>
          <div className="w-full"></div>
        </div>
      </div>
      <div className=""></div>
    </div>
  );
}

export default Footer;
