import React, { useState } from "react";
import boysjumb from "../../assets/picture/demo3dpic2.png";
import logo from "../../assets/Whiteboard.png";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

function NewPass() {
  const navigate = useNavigate();
  const [account, setAccount] = useState(false);
  const [active, setActive] = useState(false);
  const [email, setEmail] = useState({
    email: "",
    otp: "",
  });
  //http://localhost:5803/user/generateOtp
  useEffect(() => {}, []);
  const [userData, setUserData] = useState({
    email: "",
    password: "",
    conformPassword: "",
  });
  const handlechange = (e) => {
    if (account === true) {
      const { name, value } = e.target;
      setUserData((prev) => ({
        ...prev,
        [name]: value,
      }));
    } else {
      const { name, value } = e.target;
      setEmail((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (account === true) {
      try {
        const res = await axios.post(
          "http://localhost:5803/user/verify-password",
          userData
        );
        console.log(res.data);
        alert(res.data.message || "Password updated successfully");
        navigate("/login");
      } catch (err) {
        console.log(err);
        alert(
          err.response?.data?.message || "Something went wrong, try again later"
        );
      }
    } else {
      try {
        const res = await axios.post(
          `http://localhost:5803/user/generateOtp`,
          email
        );
        console.log(res.data);
         alert(res.data.message || "Password updated successfully");
        if (res.data.status == "success") {
          setActive(true);
        }
      } catch (err) {
        console.log(err);
        alert(
          err.response?.data?.message || "Something went wrong, try again later"
        );
      }
    }
  };
  const handleOtp = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(`http://localhost:5803/user/verifyOtp`,email);
      console.log(res.data);
       alert(res.data.message || "Password updated successfully");
      if(res.data.status == "success"){
        setAccount(true)
      }
    } catch (err) {
      console.log(err);
      alert(
        err.response?.data?.message || "Something went wrong, try again later"
      );
    }
  };
  console.log(email);
  return (
    <div className="w-full h-screen bg-[#5F48D5] flex items-center justify-center">
      <div className="w-[900px] h-[550px] bg-white rounded-2xl flex flex-col gap-20">
        <img src={logo} alt="" className="w-[50px] absolute m-3" />
        <div className="w-full text-4xl font-semibold font-Inter text-[#5F48D5] text-shadow-lg/20 flex justify-center items-center  pt-10">
          <p>verify your password</p>
        </div>
        <div className="flex p-1">
          {/* shift the user opt is null or number */}
          {account === false ? (
            <div className="w-full pl-10 flex flex-col gap-5">
              <p className="pl-10">
                Heyy! you just create a new password for your email😁
              </p>
              <input
                className="w-[500px] h-16 rounded-3xl bg-[#5F48D5] pl-3 outline-none text-2xl text-white font-light hover:shadow-lg/30"
                type="text"
                placeholder="your email"
                name="email"
                value={email.email}
                onChange={handlechange}
              />
              <input
                className={`w-[300px] h-16 rounded-3xl ${active===true?'bg-[#E8F0FE] text-black':'bg-[#F8F8F8]  text-black'} pl-3 outline-none text-2xl font-light hover:shadow-lg/30`}
                type="text"
                placeholder="enter your OTP"
                name={active===true?'otp':''}
                value={email.otp}
                onChange={handlechange}
              />
              <button
                className={`w-[120px] pointer-coarse: h-[50px] ${active===true?'bg-[#F8F8F8] text-[#5F48D5]':'bg-[lightgreen] text-white'} shadow-lg/20 active:shadow-lg/50 active:shadow-[#5F48D5] rounded-full text-2xl`}
                onClick={active === false ? handleSubmit : handleOtp}
              >
                {active === false ? "send" : "conform"}
              </button>
            </div>
          ) : (
            <div className="w-full pl-10 flex flex-col gap-5">
              <p className="pl-10">
                Heyy! you just create a new password for your email😁
              </p>
              <input
                className="w-[500px] h-16 rounded-3xl bg-[#5F48D5] pl-3 outline-none text-2xl text-white font-light hover:shadow-lg/30"
                type="text"
                placeholder="Your email"
                name="email"
                value={userData.email}
                onChange={handlechange}
              />
              <div className="w-full flex flex-col gap-5">
                <input
                  className="w-[500px] h-16 rounded-3xl bg-[#5F48D5] pl-3 outline-none text-2xl text-white font-light hover:shadow-lg/30"
                  type="text"
                  placeholder="New password"
                  name="password"
                  value={userData.password}
                  onChange={handlechange}
                />
                <input
                  className="w-[500px] h-16 rounded-3xl bg-[#5F48D5] pl-3 outline-none text-2xl text-white font-light hover:shadow-lg/30"
                  type="text"
                  placeholder="Conform password"
                  name="conformPassword"
                  value={userData.conformPassword}
                  onChange={handlechange}
                />
              </div>

              <button
                className="w-[120px] pointer-coarse: h-[50px] bg-[#F8F8F8] shadow-lg/20 active:shadow-lg/50 active:shadow-[#5F48D5] rounded-full text-2xl text-[#5F48D5]"
                onClick={handleSubmit}
              >
                conform
              </button>
            </div>
          )}

          <div className="w-[500px] h-[300px] bg-[#F8F8F8] rounded-tl-3xl border-l-2 border-[#5F48D5] border-b-2">
            <img src={boysjumb} alt="" className="w-[400px] h-[400px]" />
          </div>
        </div>
      </div>
    </div>
  );
}
export default NewPass;
