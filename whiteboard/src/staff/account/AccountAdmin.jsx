import React, { useEffect, useState } from "react";
import studentslist from "../../assets/photo/studentslistDashboard.svg";
import axios from "axios";

function AccountAdmin() {
  const [students, setStudents] = useState([]);
  const fatch_Data = async () => {
    try {
      const responce = await axios.get(
        `http://localhost:5803/students/student_list`
      );
      setStudents(responce.data.users);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fatch_Data();
  }, []);
  console.log(students);
  return (
    <div className="w-full h-screen bg-[#5F48D5] p-3 flex flex-col justify-between">
      <div className="w-full h-[300px] bg-white rounded-2xl flex flex-col items-center justify-evenly">
        <div className="w-full">
          <div className="w-[250px] h-[85px] border-t-2 border-r-2 border-b-2 rounded-tr-2xl rounded-br-2xl border-[#5F48D5]"></div>
        </div>
        <div className="w-[300px] h-[140px] border-2 border-[#5F48D5] rounded-2xl"></div>
      </div>
      <div className="w-full h-[580px] bg-white rounded-2xl p-2 flex flex-col justify-between text-[#5F48D5] font-Inter">
        <div className="w-full h-[100px] bg-[#F8F8F8] rounded-2xl flex items-center text-2xl">
          <img src={studentslist} alt="" className="w-[180px] mt-8" />
          <p>Students List</p>
        </div>
        <div className="w-full h-[450px] overflow-auto">
          {/* student section all student data show there */}
          {students.map((i, k) => (
            <div
              key={k}
              className="w-full h-[85px] bg-[#F8F8F8] mt-3 rounded-2xl gap-1 flex items-center justify-evenly text-[15px] px-2"
            >
              <div
                className={`w-[60px] h-[60px] border-2 rounded-full border-[#5F48D5] bg-cover`}
                style={{ backgroundImage: `URL(${i.profileImage})` }}
              ></div>
              <div className="w-[230px] h-[85px] flex flex-col justify-center font-Inter font-semibold text-black">
                <p className="font-light">
                  <span className="font-semibold">Name:</span> {i.name}
                </p>
                <p className="font-light">
                  <span className="font-semibold">Student_Ph:</span> {i.number}
                </p>
                <div className="font-light"><span className="font-semibold">Payment:</span>{i.payment === true? (<div>Completed</div>):(<></>)}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default AccountAdmin;
