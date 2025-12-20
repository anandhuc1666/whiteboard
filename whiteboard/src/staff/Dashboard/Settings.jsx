import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Settings() {
  const [staff, setStaff] = useState([]);
  const navigate = useNavigate()
  const token = localStorage.getItem("token");

  const staff_Data = async () => {
    try {
      const responce = await axios.get(
        `http://localhost:5803/api/staff/staff_profile`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
          withCredentials: true,
        }
      );
      console.log(responce.data.message);
      setStaff(responce.data.staff);
    } catch (error) {
      console.log(error);
    }
  };
  const handleRemove = () => {
    localStorage.removeItem("token");
    navigate('/login')
  };

  useEffect(() => {
    staff_Data();
  }, []);
  return (
    <div className="w-[1150px] h-screen flex flex-col gap-5">
      <div className="flex gap-10">
        <div className="w-[250px] h-[250px] rounded-full bg-cover bg-white shadow-lg/20" style={{ backgroundImage: `URL(${staff.profileImage})` }}>
        <img src="" alt="" /></div>
        <div className="py-10 flex flex-col gap-3">
          <p className="flex gap-6 items-center text-[19px]">
            <span className="text-2xl font-Inter font-semibold">Name:</span>
            {staff.name}
          </p>
          <p className="flex gap-6 items-center text-[19px]">
            <span className="text-2xl font-Inter font-semibold">Email:</span>
            {staff.email}
          </p>
          <p className="flex gap-6 items-center text-[19px]">
            <span className="text-2xl font-Inter font-semibold">Phone:</span>
            {staff.number}
          </p>
          <p className="flex gap-6 items-center text-[19px]">
            <span className="text-2xl font-Inter font-semibold">Mentor:</span>
            {staff?.course?.name}
          </p>
        </div>
      </div>
      <Link to={'/login'}>
        <div className="w-full h-[100px] flex items-center pl-[30px]">
          <button
            className="w-[220px] h-20 bg-[#5F48D5] shadow-lg/20 text-2xl rounded-full text-white"
            onClick={handleRemove}
          >User Page</button>
        </div>
      </Link>
    </div>
  );
}

export default Settings;
