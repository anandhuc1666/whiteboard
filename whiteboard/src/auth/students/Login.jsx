import React, { useState } from "react";
import logo from "../../assets/Whiteboard.png";
import studentslogin from "../../assets/studentslogin.svg";

function Login() {
  const [shift, setShift] = useState(false);

  const toggleShift = () => {
    setShift(!shift);
  };

  return (
    <div className="w-full h-[100vh] bg-white flex items-center justify-center">
      <div className="bg-[#1E1C1C] flex items-center justify-center rounded-4xl">
        <div className="w-[900px] h-[90vh] bg-[#1E1C1C] rounded-4xl flex flex-col">
          <div className=" flex w-full justify-between">
            <div className="w-[500px] h-48 p-2">
              <img src={logo} alt="" className="w-[60px]" />
              <div className="w-full h-auto flex items-center  justify-between px-10 mt-10">
                <p className="font-medium ont-Irish text-6xl text-white">
                  Login
                </p>
                <div
                  className={`w-[180px] h-[60px] bg-[#D9D9D9] rounded-full border-3 border-[#5F48D5] flex items-center inset-shadow-sm inset-shadow-black  ${
                    shift === false ? "justify-start" : "justify-end"
                  }`}
                  onClick={toggleShift}
                >
                  <div className="w-[100px] h-[53px] bg-white rounded-full shadow-xl/20 flex items-center justify-center font-medium mt-[-1px]">
                    {shift === false ? "teacher’s " : "student"}
                  </div>
                </div>
              </div>
            </div>
            <div className=" flex flex-col gap-5">
              <div className="w-[150px] h-[150px] bg-white opacity-40 rounded-full"></div>
              <div className="w-[60px] h-[60px] rounded-full opacity-70 ml-[-50px] bg-white"></div>
            </div>
          </div>
          <div className="w-full h-[50vh] bg-amber-300 px-10 gap-10 flex flex-col justify-center">
            <div className="w-full flex justify-end">
              <div className="w-[40px] h-[40px] rounded-full bg-white"></div>
            </div>
            <input
              type="text"
              placeholder="Your email"
              className="w-full h-[80px] border-3 border-[#5F48D5] rounded-full pl-6 bg-white font-IstokWeb text-2xl"
            />
            <input
              type="text"
              placeholder="Your email"
              className="w-full h-[80px] border-3 border-[#5F48D5] rounded-full pl-6 bg-white font-IstokWeb text-2xl"
            />
            <button className="w-full h-[80px] border-3 border-black text-white rounded-full bg-[#5F48D5] font-IstokWeb text-3xl text-shadow-lg/50 hover:bg-[#5442af]">
              Login
            </button>
          </div>
          <div className="w-full bg-amber-300 h-[200px]">
            <div className="flex items-center gap-5 ml-15 mt-5">
              <p className="font-medium text-white">don’t have a account ?</p>
              <button className="w-[150px] h-[60px] rounded-full text-[#5F48D5] font-light inset-shadow-xs inset-shadow-indigo-500/50 text-shadow-lg/20 text-[25px] hover:bg-[#D9D9D9] hover:text-white shadow-lg bg-white">
                register
              </button>
            </div>
          </div>
        </div>
        {/* blue section design on the inside the section */}
        <div className="w-[900px] h-[90vh] bg-[#5F48D5] rounded-4xl ">
          <div className=" flex">
            <div className="w-[900px] h-[450px] flex items-center font-Irish">
              <div className="w-[150px] h-[450px] flex flex-col justify-evenly items-center">
                <div className="w-[75px] h-[75px] rounded-full bg-white opacity-35 shadow-lg/50"></div>
                <div className="w-[40px] h-[40px] rounded-full mt-[100px] ml-[-100px] shadow-lg/20 opacity-50 bg-white"></div>
              </div>
              <div className="w-[500px] flex flex-col gap-5 mt-20">
                <div className="w-full">
                  {" "}
                  <p className="text-white font-light text-6xl">Welcome to </p>
                </div>
                <div className="w-full flex justify-center items-center">
                  <p className="text-white font-light text-6xl">student's</p>
                </div>
                <div className="w-full flex items-center justify-end">
                  <p className="text-white font-light text-6xl">portal</p>
                </div>
              </div>
            </div>
            <div className="w-[300px] flex justify-end">
              <div className="w-[200px] h-[200px] bg-white rounded-full shadow-lg/50"></div>
            </div>
          </div>
          <div className="flex items-center justify-center w-full">
            <img src={studentslogin} alt="" className="w-[500px]" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
