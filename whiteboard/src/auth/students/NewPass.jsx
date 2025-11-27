import React, { useState } from "react";
import boysjumb from "../../assets/picture/demo3dpic2.png";
import logo from "../../assets/Whiteboard.png";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function NewPass() {
    const navigate = useNavigate()
  const [userData, setUserData] = useState({
    email: "",
    password: "",
    conformPassword: "",
  });
  const handlechange = (e) => {
    const { name, value } = e.target;
    setUserData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
   const handleSubmit = async (e) => {
    e.preventDefault(); // ✅ correct place

    try {
      const res = await axios.post(
        "http://localhost:5803/user/verify-password", // 👈 your backend route
        userData
      );
      console.log(res.data);
      alert(res.data.message || "Password updated successfully");
      navigate('/login')
    } catch (err) {
      console.log(err);
      alert(
        err.response?.data?.message || "Something went wrong, try again later"
      );
    }
  };
console.log(userData)
  return (
    <div className="w-full h-screen bg-[#5F48D5] flex items-center justify-center">
      <div className="w-[900px] h-[550px] bg-white rounded-2xl flex flex-col gap-20">
        <img src={logo} alt="" className="w-[50px] absolute m-3" />
        <div className="w-full text-4xl font-semibold font-Inter text-[#5F48D5] text-shadow-lg/20 flex justify-center items-center  pt-10">
          <p>verify your password</p>
        </div>
        <div className="flex p-1">
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
            <button className="w-[120px] pointer-coarse: h-[50px] bg-[#F8F8F8] shadow-lg/20 active:shadow-lg/50 active:shadow-[#5F48D5] rounded-full text-2xl text-[#5F48D5]" onClick={handleSubmit}>
              conform
            </button>
          </div>
          <div className="w-[500px] h-[300px] bg-[#F8F8F8] rounded-tl-3xl border-l-2 border-[#5F48D5] border-b-2">
            <img src={boysjumb} alt="" className="w-[400px] h-[400px]" />
          </div>
        </div>
      </div>
    </div>
  );
}
export default NewPass;
