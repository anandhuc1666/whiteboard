import React from "react";
import registerImg from "../../assets/registerImg.svg";

function Login() {
  return (
    <div className="w-full h-[100vh] bg-black flex justify-between">
      <div className="w-[950px] h-[100vh] bg-[#5F48D5] flex items-center flex-col justify-end p-16 gap-20">
        <p className="font-Irish text-7xl text-white text-shadow-lg/30">
          We wish you joy in discovering and learning new things.
        </p>
        <img src={registerImg} alt="" className="w-[350px]" />
      </div>
      {/* top-right box */}
      <div className="w-[950px] h-[100vh] pt-40">
        <div className="w-full h-auto py-3 flex justify-evenly ">
          <div className="flex justify-end flex-col">
            <p className="font-IstokWeb text-[1.5em] text-white">Name:</p>
            <input
              type="text"
              className="w-[400px] h-[80px] outline-[#5F48D5] bg-[#FEFBFF] border-2 border-[#5F48D5] rounded-3xl"
            />
          </div>
          <div className="flex justify-end flex-col">
            <p className="font-IstokWeb text-[1.5em] text-white">Last Name:</p>
            <input
              type="text"
              className="w-[400px] h-[80px] outline-[#5F48D5] bg-[#FEFBFF] border-2 border-[#5F48D5] rounded-3xl"
            />
          </div>
        </div>
        <div className="w-full h-auto py-3 flex justify-evenly ">
          <div className="flex justify-end flex-col">
           <p className="font-IstokWeb text-[1.5em] text-white">Number:</p>
            <input type="number" className="w-[700px] h-[80px] outline-[#5F48D5] bg-[#FEFBFF] border-2 border-[#5F48D5] rounded-3xl"/>
          </div>
          <div className="flex justify-end flex-col">
              <p className="font-IstokWeb text-[1.5em] text-white">Age:</p>
            <input type="number" className="w-[100px] h-[80px] outline-[#5F48D5] bg-[#FEFBFF] border-2 border-[#5F48D5] rounded-3xl"/>
          </div>
        </div>
        <div className="w-full h-auto py-3 flex justify-evenly">
          <div className="flex justify-end flex-col">
            <p className="font-IstokWeb text-[1.5em] text-white">Email:</p>
           <input type="text" className="w-[830px] h-[80px] outline-[#5F48D5] bg-[#FEFBFF] border-2 border-[#5F48D5] rounded-3xl"/>
          </div>
        </div>
        <div className="w-full h-auto py-3 flex justify-evenly">
          <div className="flex justify-end flex-col">
            <p className="font-IstokWeb text-[1.5em] text-white">Password :</p>
           <input type="text" className="w-[830px] h-[80px] outline-[#5F48D5] bg-[#FEFBFF] border-2 border-[#5F48D5] rounded-3xl"/>
          </div>
        </div>
        <div className="w-full h-auto py-3 flex justify-evenly flex-col px-18 ">
      <div className="">
        <p className="font-IstokWeb text-3xl text-white">I have an account </p>
      </div>
      <div className="w-full h-auto py-3 flex justify-between">
        <button className="w-35 h-[60px] border-2 rounded-full border-white text-[18px] hover:bg-[#5F48D5] hover:text-[#fff] text-[#5F48D5]">login</button>
        <button className="w-35 h-[60px] border-2 rounded-full text-[18px] text-[#FEFBFF] bg-[#5F48D5] border-[#000000]">register</button>
      </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
