import React, { useState } from "react";
import logo from "../../assets/Whiteboard.png";
import studentslogin from "../../assets/studentslogin.svg";
import teacherlogin from "../../assets/teacherlogin.svg";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import Swal from "sweetalert2";

function Login({ setToken }) {
  const [shift, setShift] = useState(false);
  const [studentLogin, setStudentLogin] = useState({ email: "", password: "" });
  const [staff, setStaff] = useState({ email: "", password: "" });
  const navigate = useNavigate();
  const toggleShift = () => {
    setShift(!shift);
  };

  const handleStudents = (e) => {
    e.preventDefault();
    setStudentLogin({ ...studentLogin, [e.target.name]: e.target.value });
  };
 const handleSend = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(`http://localhost:5803/user/user-login`, studentLogin);
      
      localStorage.setItem("token", response.data.token);
      setToken(response.data.token); // Update parent state immediately

      await Swal.fire({
        title: "Success",
        text: response.data?.message || "Login Successful",
        icon: "success",
      });
      navigate("/");
    } catch (error) {
      const message =
        error?.response?.data?.message ||
        error?.response?.data ||
        error?.message ||
        "Something went wrong";

      Swal.fire({
        title: "Error",
        text: message,
        icon: "error",
      });
    }
  };

  const handlestaff = (e) => {
    e.preventDefault();
    setStaff({ ...staff, [e.target.name]: e.target.value });
  };
  const handleSendstaff = async () => {
    try {
      const response = await axios.post(`http://localhost:5803/user/staff_login`, staff);
      
      localStorage.setItem("token", response.data.token);
      setToken(response.data.token); 

      await Swal.fire({
        title: "Success",
        text: response.data?.message || "Staff Login Successful",
        icon: "success",
      });
      navigate("/dashboard");
    } catch (error) {
      const message =
        error?.response?.data?.message ||
        error?.response?.data ||
        error?.message ||
        "Something went wrong";

      Swal.fire({
        title: "Error",
        text: message,
        icon: "error",
      });
      console.log(error);
    }
  };
  const clickMove = () => {
    navigate("/verify-password");
  };

  return (
    <div className="w-full min-h-screen bg-[#1E1C1C] flex items-center justify-center p-4">
      {/* outer box: responsive: column on small screens, row on md+ */}
      <div className="bg-[#1E1C1C] flex flex-col md:flex-row items-stretch justify-center rounded-4xl w-full max-w-[1200px]">
        {/* Left (form) - responsive width */}
        <div className="w-full md:w-[900px] h-auto md:h-[90vh] bg-[#1E1C1C] rounded-4xl flex flex-col p-4">
          <div className="flex w-full justify-between items-start">
            <div className="w-full md:w-[500px] h-48 p-2">
              <img src={logo} alt="" className="w-[60px]" />
              <div className="w-full h-auto flex items-center justify-between px-4 md:px-10 mt-6 md:mt-10">
                <p className="font-medium ont-Irish text-4xl md:text-6xl text-white">
                  Login
                </p>
                <div
                  className={`w-[180px] h-[60px] bg-[#D9D9D9] rounded-full border-3 border-[#5F48D5] flex items-center inset-shadow-sm inset-shadow-black ${
                    shift === false ? "justify-start" : "justify-end"
                  }`}
                  onClick={toggleShift}
                >
                  <div className="w-[100px] h-[53px] bg-white rounded-full shadow-xl/20 flex items-center justify-center font-medium mt-[-1px] text-sm md:text-base">
                    {shift !== false ? "teacher’s " : "student"}
                  </div>
                </div>
              </div>
            </div>
            {/* Decorative circles: hidden on small screens (smartphones) */}
            <div className="hidden sm:flex flex-col gap-5">
              <div className="w-[150px] h-[150px] bg-white opacity-40 rounded-full"></div>
              <div className="w-[60px] h-[60px] rounded-full opacity-70 ml-[-50px] bg-white"></div>
            </div>
          </div>

          {/* find the shift is true or false then change its teachers or students */}
          {/* first teacher login page */}
          {shift !== false ? (
            <div className="w-full">
              <div className="w-full h-auto md:h-[50vh] px-4 md:px-10 gap-6 flex flex-col justify-center">
                <div className="w-full flex justify-end">
                  <div className="w-[40px] h-[40px] rounded-full bg-white"></div>
                </div>
                <input
                  type="email"
                  placeholder="Your email"
                  className="w-full h-[60px] md:h-[80px] border-3 border-[#5F48D5] rounded-full pl-6 bg-white font-IstokWeb text-lg md:text-2xl"
                  name="email"
                  value={staff.email}
                  onChange={handlestaff}
                />
                <input
                  type="password"
                  placeholder="Your password"
                  className="w-full h-[60px] md:h-[80px] border-3 border-[#5F48D5] rounded-full pl-6 bg-white font-IstokWeb text-lg md:text-2xl"
                  name="password"
                  value={staff.password}
                  onChange={handlestaff}
                />
                <button
                  className="w-full h-[60px] md:h-[80px] border-3 border-black text-white rounded-full bg-[#5F48D5] font-IstokWeb text-xl md:text-3xl text-shadow-lg/50 hover:bg-[#5442af]"
                  onClick={handleSendstaff}
                >
                  Login
                </button>
              </div>
            </div>
          ) : (
            //  then students login page register/login
            <div className="w-full">
              <div className="w-full h-auto md:h-[50vh] px-4 md:px-10 gap-6 flex flex-col justify-center">
                <div className="w-full flex justify-end">
                  <div className="w-[40px] h-[40px] rounded-full bg-white"></div>
                </div>
                <input
                  type="email"
                  name="email"
                  value={studentLogin.email}
                  placeholder="Your email"
                  className="w-full h-[60px] md:h-[80px] border-3 border-[#5F48D5] rounded-full pl-6 bg-white font-IstokWeb text-lg md:text-2xl"
                  onChange={handleStudents}
                />
                <input
                  type="password"
                  name="password"
                  value={studentLogin.password}
                  placeholder="Your password"
                  className="w-full h-[60px] md:h-[80px] border-3 border-[#5F48D5] rounded-full pl-6 bg-white font-IstokWeb text-lg md:text-2xl"
                  onChange={handleStudents}
                />
                <button
                  className="w-full h-[60px] md:h-[80px] border-3 border-black text-white rounded-full bg-[#5F48D5] font-IstokWeb text-xl md:text-3xl text-shadow-lg/50 hover:bg-[#5442af]"
                  onClick={handleSend}
                >
                  Login
                </button>
              </div>
              <div className="w-full h-auto flex flex-col md:flex-row items-center md:items-start justify-between px-4 md:px-10 py-4 gap-4">
                <div className="flex items-center gap-5">
                  <p className="font-medium text-white">don’t have a account ?</p>
                  <Link to={"/register"}>
                    <button className="w-[150px] h-[60px] rounded-full text-[#5F48D5] font-light inset-shadow-xs inset-shadow-indigo-500/50 text-shadow-lg/20 text-[18px] md:text-[25px] hover:bg-[#D9D9D9] hover:text-white shadow-lg bg-white">
                      register
                    </button>
                  </Link>
                </div>
                <div
                  className="text-[#eee] text-[16px] hover:text-[red] cursor-pointer"
                  onClick={clickMove}
                >
                  <p>forget password</p>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Right (visual) - responsive width */}
        <div className="w-full md:w-[900px] h-auto md:h-[90vh] bg-[#5F48D5] rounded-4xl flex flex-col">
          <div className="flex">
            <div className="w-full md:w-[900px] h-[450px] flex items-center font-Irish px-4 md:px-8">
              <div className="hidden sm:flex w-[150px] h-[450px] flex-col justify-evenly items-center">
                <div className="w-[75px] h-[75px] rounded-full bg-white opacity-35 shadow-lg/50"></div>
                <div className="w-[40px] h-[40px] rounded-full mt-[100px] ml-[-100px] shadow-lg/20 opacity-50 bg-white"></div>
              </div>
              <div className="w-full md:w-[500px] flex flex-col gap-2 md:gap-5 mt-8 md:mt-20">
                <div className="w-full">
                  <p className="text-white font-light text-4xl md:text-6xl">Welcome to </p>
                </div>
                <div className="w-full flex justify-center items-center">
                  {shift !== false ? (
                    <p className="text-white font-light text-4xl md:text-6xl">
                      teachers
                    </p>
                  ) : (
                    <p className="text-white font-light text-4xl md:text-6xl">
                      student's
                    </p>
                  )}
                </div>
                <div className="w-full flex items-center justify-end">
                  <p className="text-white font-light text-4xl md:text-6xl">portal</p>
                </div>
              </div>
            </div>
            <div className="hidden sm:flex w-[300px] justify-end pr-6">
              <div className="w-[200px] h-[200px] bg-white rounded-full shadow-lg/50"></div>
            </div>
          </div>
          <div className="flex items-center justify-center w-full py-4">
            {shift !== false ? (
              <img src={teacherlogin} alt="" className="w-[300px] md:w-[350px] ml-0 md:ml-[-100px]" />
            ) : (
              <img src={studentslogin} alt="" className="w-[260px] md:w-[500px]" />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
