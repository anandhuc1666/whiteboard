import { useState } from "react";
import registerImg from "../../assets/registerImg.svg";
import axios from "axios";
import logo from "../../assets/Whiteboard.png";

function Register() {
  const [register, setRegister] = useState({
    name: "",
    lastName: "",
    age: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    e.preventDefault();
    setRegister({ ...register, [e.target.name]: e.target.value });
  };

  const handleSend = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:5803/user/register",
        register
      );
      console.log("Server response:", response.data);
      alert(response.data.message);
    } catch (error) {
      console.error("Registration error:", error);
      alert(error.response?.data || error.message);
    }
  };
  return (
    <div className="w-full h-[100vh] bg-[#1E1C1C] flex justify-between">
      <div className="w-[150px] absolute h-[150px] rounded-full mt-[-20px] ml-[-20px] shadow-lg/30 bg-amber-50"></div>
      <div className="w-[950px] h-[100vh] bg-[#5F48D5] flex items-center rounded-br-4xl rounded-tr-4xl flex-col justify-end px-10 gap-11">
        <div className="w-[120px] h-[120px] bg-white p-0 rounded-full ml-220 mt-[-20px] opacity-50"></div>
        <div className="w-[85px] h-[85px] bg-white p-0 rounded-full"></div>
        <p className="font-Irish text-7xl text-white text-shadow-lg/30">
          We wish you joy in discovering and learning new things.
        </p>
        <img src={registerImg} alt="" className="w-[350px]" />
      </div>
      {/* top-right box */}
      <div className="w-[950px] h-[100vh]">
        <img src={logo} alt="" className="w-[100px] h-[100px] ml-4" />
        <p className="text-[#5F48D5] font-bold font-Irish text-6xl flex justify-center-safe">
          Register
        </p>
        <br />
        <br />
        <br />
        <div className="w-full h-auto py-3 flex justify-evenly ">
          <div className="flex justify-end flex-col">
            <p className="font-IstokWeb text-[1.5em] text-white">Name:</p>
            <input
              type="text"
              className="w-[400px] px-3 text-2xl font-medium h-[70px] outline-[#5F48D5] text-[#5F48D5] bg-[#FEFBFF] border-2 border-[#5F48D5] rounded-3xl"
              onChange={handleChange}
              value={register.name}
              name="name"
            />
          </div>
          <div className="flex justify-end flex-col">
            <p className="font-IstokWeb text-[1.5em] text-white">Last Name:</p>
            <input
              type="text"
              className="w-[400px] h-[70px] px-3 text-2xl font-medium outline-[#5F48D5] text-[#5F48D5] bg-[#FEFBFF] border-2 border-[#5F48D5] rounded-3xl"
              onChange={handleChange}
              value={register.lastName}
              name="lastName"
            />
          </div>
        </div>
        <div className="w-full h-auto py-3 flex justify-evenly ">
          <div className="flex justify-end flex-col">
            <p className="font-IstokWeb text-[1.5em] text-white">Number:</p>
            <input
              type="number"
              className="w-[700px] h-[70px] px-3 text-2xl font-medium outline-[#5F48D5] text-[#5F48D5] bg-[#FEFBFF] border-2 border-[#5F48D5] rounded-3xl"
              onChange={handleChange}
              value={register.number}
              name="number"
            />
          </div>
          <div className="flex justify-end flex-col">
            <p className="font-IstokWeb text-[1.5em] text-white">Age:</p>
            <input
              type="number"
              className="w-[100px] h-[70px] px-3 text-2xl font-medium text-[#5F48D5] outline-[#5F48D5] bg-[#FEFBFF] border-2 border-[#5F48D5] rounded-3xl"
              onChange={handleChange}
              value={register.age}
              name="age"
            />
          </div>
        </div>
        <div className="w-full h-auto py-3 flex justify-evenly">
          <div className="flex justify-end flex-col">
            <p className="font-IstokWeb text-[1.5em] text-white">Email:</p>
            <input
              type="text"
              className="w-[830px] h-[70px] px-3 text-2xl font-medium outline-[#5F48D5] text-[#5F48D5] bg-[#FEFBFF] border-2 border-[#5F48D5] rounded-3xl"
              onChange={handleChange}
              value={register.email}
              name="email"
            />
          </div>
        </div>
        <div className="w-full h-auto py-3 flex justify-evenly">
          <div className="flex justify-end flex-col">
            <p className="font-IstokWeb text-[1.5em] text-white">Password :</p>
            <input
              type="password"
              className="w-[830px] h-[70px] px-3 text-2xl font-medium outline-[#5F48D5] text-[#5F48D5] bg-[#FEFBFF] border-2 border-[#5F48D5] rounded-3xl"
              onChange={handleChange}
              value={register.password}
              name="password"
            />
          </div>
        </div>
        <div className="w-full h-auto py-3 flex justify-evenly flex-col px-18 ">
          <div className="">
            <p className="font-IstokWeb text-3xl text-white">
              I have an account{" "}
            </p>
          </div>
          <div className="w-full h-auto py-3 flex justify-between">
            <button className="w-35 h-[60px] border-2 rounded-full border-white transition duration-700 ease-in-out text-[18px] hover:bg-[#5F48D5] hover:text-[#fff] text-[#5F48D5]">
              login
            </button>
            <button
              onClick={handleSend}
              className="w-35 h-[60px] border-2 rounded-full text-[18px] hover:d transition duration-700 ease-in-out text-[#FEFBFF] hover:bg-linear-to-bl from-violet-500 to-fuchsia-500 hover:text-black bg-[#5F48D5] border-[#000000]"
            >
              register
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;
