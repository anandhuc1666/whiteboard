import axios from "axios";
import React, { useEffect, useState } from "react";

function Course() {
  const [data, setData] = useState([]);
  const [list,setListGo]=useState(false)
  const [listPy,setListPy]=useState(false)
  const fatch = async () => {
    try {
      const responce = await axios.get(
        `http://localhost:5803/api/staff/staff_lists`
      );
      setData(responce.data.staff);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fatch();
  }, []);

const handlePass =(i)=>{
setListGo(i)
}
const handlePassPy=(i)=>{
setListPy(i)
}
  const GO = data.filter((staffdata) => staffdata.course == "GO");
  const Python = data.filter((staffdata)=>staffdata.course == "PYTHON")
  return (
    //class router set
    <div className="w-[1150px] h-screen flex flex-col">
      <div className="w-full h-[200px] flex items-center">
        <img
          src="https://drive.google.com/thumbnail?id=1SfSE3pUd1n7Q2H5Cv6HMdbRpnSIlt9sh&sz=s800"
          alt="GO"
          className="w-[100px]"
        />
        <div className="w-[700px] h-40 flex justify-evenly items-center gap-5">
          <div className="flex flex-col gap-7">
            <p className="text-[18px] font-Inter">Name:</p>
            <p>{list? `${list.name}` :'select staff'}</p>
          </div>
          <div className="flex flex-col gap-7">
            <p className="text-[18px] font-Inter">Email:</p>
            <p>{list? `${list.email}` :'--'}</p>
          </div>
          <div className="flex flex-col gap-7">
            <p className="text-[18px] font-Inter">Number:</p>
            <p>{list? `${list.number}` :'--'}</p>
          </div>
        </div>
        <div className="w-[400px] h-40 overflow-y-auto">
          {Python?.map((i, k) => (
            <div
              key={k}
              className="w-full h-20 bg-[#5F48D5] text-white mt-1 rounded-2xl flex items-center gap-3 text-[18px]" onClick={()=>handlePass(i)}
            >
              <img src={i.profileImage} alt="Profile" className="w-[60px] h-[60px] rounded-full bg-cover" />
              <p>Roll: {i.role}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="w-full h-2 bg-[#eee]"></div>
     <div className="w-full h-[200px] flex items-center">
        <img
          src="https://drive.google.com/thumbnail?id=1cQfwvc_gngwcC1XMVR-WxQ83EevFDIVb&sz=s800"
          alt="PYTHON"
          className="w-[100px]"
        />
        <div className="w-[700px] h-40 flex justify-evenly items-center gap-5">
          <div className="flex flex-col gap-7">
            <p className="text-[18px] font-Inter">Name:</p>
            <p>{listPy? `${listPy.name}` :'select staff'}</p>
          </div>
          <div className="flex flex-col gap-7">
            <p className="text-[18px] font-Inter">Email:</p>
            <p>{listPy? `${listPy.email}` :'--'}</p>
          </div>
          <div className="flex flex-col gap-7">
            <p className="text-[18px] font-Inter">Number:</p>
            <p>{listPy? `${listPy.number}` :'--'}</p>
          </div>
        </div>
        <div className="w-[400px] h-40 overflow-y-auto">
          {GO?.map((i, k) => (
            <div
              key={k}
              className="w-full h-20 bg-[#5F48D5] text-white mt-1 rounded-2xl flex items-center gap-3 text-[18px]" onClick={()=>handlePassPy(i)}
            >
              <img src={i.profileImage} alt="Profile" className="w-[60px] h-[60px] rounded-full bg-cover" />
              <p>Roll: {i.role}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Course;
