import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { FaStar } from "react-icons/fa6";
import { Link} from "react-router-dom";

function StudentAcc() {
  const [user, setUser] = useState(null);
  try {
    useEffect(() => {
      const token = localStorage.getItem("token");
      if(!token){
        return setUser(null)
      }
      axios
        .get(`http://localhost:5803/students/student_profile`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
          withCredentials: true,
        })
        .then((ress) => setUser(ress.data.user))
        .catch((err) => console.log(err));
    }, []);
  } catch (error) {
    console.log(error);

    setUser(null)
  }
  let userNm = user?.name

  const handleOut = () => {
    localStorage.removeItem("token");
    setUser(null);          
  };
  return (
    <div className="w-full h-auto flex justify-between px-[145px] py-[30px]">
      <div className="w-[26%] h-[100vh] bg-[#5F48D5] rounded-2xl">
        <div className="w-full h-[400px]">
          <div className="w-full h-[350px] flex ">
            <div className="w-[100px] h-[350px] flex justify-evenly items-end flex-col">
              {/* star section */}
              <FaStar className="mr-12 text-[#FFFF8D]" />
              <FaStar className="text-[#FFFF8D]" />
              <FaStar className="mr-10 text-[#FDD835]" />
            </div>
            <div className="flex flex-col">
              <div className="w-[320px] h-[250px] flex items-center pl-5">
                {/* profile image section */}
                <FaStar className="mt-32 text-[#FDD835]" />
                <div className="border-5 rounded-full border-[#A57C00]">
                  <div className="w-[150px] h-[150px] bg-white rounded-full"></div>
                </div>
                <FaStar className="mt-56 text-[#FFFF8D]" />
              </div>
              <div className=" w-[320px] h-[100px] flex items-center pl-10">
                <button className="w-[130px] h-12 bg-white rounded-full text-[#5F48D5] font-Inter text-2xl font-bold" onClick={user ? handleOut : undefined}>
                    {user ? "logout" : <Link to="/login">login</Link>}
                </button>
              </div>
            </div>
          </div>
          <div className="w-full h-[50px] bg-white rounded-2xl flex items-center pl-10">
            {/* user status section */}
            <p className="text-2xl text-[#9BEF4C] font-Inter font-semibold">
              ACTIVE
            </p>
          </div>
          {/* user id section email and number + extra data they needed its add on there */}
          <div className="w-full h-[520px] p-5">
            <div className="w-full h-[480px] bg-white rounded-2xl">
              <div className=" w-full font-Inter p-5 text-[15px] flex flex-col gap-5">
                <p>Email: {user?user.email:''}</p>
                <p>Phone: {user?user.number:''}</p>
              </div>
              <div className="w-full h-0.5 bg-[#5F48D5]"></div>
            </div>
          </div>
        </div>
      </div>
      {/* rigt side container */}
      <div className="w-[72%] h-[100vh] flex flex-col gap-8">
        {/* header section */}
        <div className="w-full h-[350px] bg-[#5F48D5] rounded-2xl flex items-end py-10">
          {/* user name welcome section */}
          <div className="w-full text-5xl text-white font-Inter font-semibold h-30 px-20 flex flex-col justify-between">
            <p>Welcome back, { userNm}{user?user.lastName:''}</p>
            <p className="font-medium text-2xl">
              Always stay updated in your students portel
            </p>
          </div>
        </div>
        <div className="w-full h-[550px] flex justify-between">
          <div className="w-[350px] h-550px">
            <div className="w-full h-[150px] font-Inter text-2xl flex items-center">
              <div className="">
                <p>Upcoming new program’s</p>
                <p>view course</p>
              </div>
            </div>
            {/* upcomming courses list */}
            <div className="w-full h-[350px] flex flex-col justify-between">
              <div className="w-full flex justify-between">
                <div className="w-[150px] h-[150px] bg-[#F8F8F8] rounded-2xl"></div>
                <div className="w-[150px] h-[150px] bg-[#F8F8F8] rounded-2xl"></div>
              </div>
              <div className="w-full flex justify-between">
                <div className="w-[150px] h-[150px] bg-[#F8F8F8] rounded-2xl"></div>
                <div className="w-[150px] h-[150px] bg-[#F8F8F8] rounded-2xl"></div>
              </div>
            </div>
          </div>
          <div className="w-[500px] h-[550px] bg-[#5F48D5] rounded-2xl flex flex-col gap-2 py-3">
            <div className="w-full h-[100px] pl-2.5 text-3xl flex items-center font-medium font-Inter text-white">
              <p>course instructor</p>
            </div>
            <div className="w-full h-[100px] bg-white"></div>
            <div className="w-full h-[250px] flex flex-col gap-5 p-5">
              <p className="text-2xl font-semibold text-white">Daily notice </p>
              <div className="w-full h-auto text-[12px] px-2 py-3 bg-white rounded-2xl">
                <p>
                  create a dedicated study space, use effective time management
                  by scheduling study times and setting goals, and actively
                  engage with the material through note-taking and participation
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default StudentAcc;
