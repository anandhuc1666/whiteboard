import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Class() {
  const [data, setData] = useState([]);
  const fatch_Data = async () => {
    try {
      const responce = await axios.get(
        `http://localhost:5803/api/staff/get_all_V_S`
      );
      setData(responce.data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fatch_Data();
  }, []);
  return (
    <div className="w-[1150px] h-screen flex">
      <div className="w-full h-auto p-10 flex flex-col gap-15 font-Inter">
        <div className="w-full flex justify-between">
          <Link to={"/dashboard/class/go"}>
            <div className="w-[250px] h-[250px] flex flex-col justify-evenly items-center bg-white rounded-2xl">
              <img
                src="https://drive.google.com/thumbnail?id=1SfSE3pUd1n7Q2H5Cv6HMdbRpnSIlt9sh&sz=s800"
                alt="GO"
                className="w-[85px]"
              />
              <div className="w-full">
                <div className="w-[200px] h-[100px] rounded-tr-2xl rounded-br-2xl border-t-2 border-r-2 border-b-2 border-[#5F48D5] bg-[#F8F8F8] flex flex-col gap-2 justify-center pl-2">
                  <p>Total video: <span className="font-Inter font-semibold"> {data?.video?.GO}</span></p>
                  <p>Total students: <span className="font-Inter font-semibold"> {data?.students?.GO}</span></p>
                </div>
              </div>
            </div>
          </Link>

          <div className="w-[250px] h-[250px] flex flex-col justify-evenly items-center bg-white rounded-2xl">
            <img
              src="https://drive.google.com/thumbnail?id=1NoPei2UHe_ZoX1HfmqTA-i0k4Rb561Ph&sz=s800"
              alt="FLUTTER"
              className="w-[85px]"
            />
            <div className="w-full">
              <div className="w-[200px] h-[100px] rounded-tr-2xl rounded-br-2xl border-t-2 border-r-2 border-b-2 border-[#5F48D5] bg-[#F8F8F8] flex flex-col gap-2 justify-center pl-2">
                <p>Total video: <span className="font-Inter font-semibold"> {data?.video?.FLUTTER}</span></p>
                <p>Total students: <span className="font-Inter font-semibold"> {data?.students?.FLUTTER}</span></p>
              </div>
            </div>
          </div>
          <div className="w-[250px] h-[250px] flex flex-col justify-evenly items-center bg-white rounded-2xl">
            <img
              src="https://drive.google.com/thumbnail?id=1TDaF2PMXJnQRP5nymDrh-LegZt5Ptvt8&sz=s800"
              alt="JAVASCRIPT"
              className="w-[85px]"
            />
            <div className="w-full">
              <div className="w-[200px] h-[100px] rounded-tr-2xl rounded-br-2xl border-t-2 border-r-2 border-b-2 border-[#5F48D5] bg-[#F8F8F8] flex flex-col gap-2 justify-center pl-2">
                <p>Total video: <span className="font-Inter font-semibold"> {data?.video?.JAVASCRIPT}</span></p>
                <p>Total students: <span className="font-Inter font-semibold"> {data?.students?.JAVASCRIPT}</span></p>
              </div>
            </div>
          </div>
          <div className="w-[250px] h-[250px] flex flex-col justify-evenly items-center bg-white rounded-2xl">
            <img
              src="https://drive.google.com/thumbnail?id=1cQfwvc_gngwcC1XMVR-WxQ83EevFDIVb&sz=s800"
              alt="PYTHON"
              className="w-[85px]"
            />
            <div className="w-full">
              <div className="w-[200px] h-[100px] rounded-tr-2xl rounded-br-2xl border-t-2 border-r-2 border-b-2 border-[#5F48D5] bg-[#F8F8F8] flex flex-col gap-2 justify-center pl-2">
                <p>Total video: <span className="font-Inter font-semibold"> {data?.video?.PYTHON}</span></p>
                <p>Total students: <span className="font-Inter font-semibold"> {data?.students?.PYTHON}</span></p>
              </div>
            </div>
          </div>
        </div>
        <div className="JAVA">
          <div className="w-[250px] h-[250px] flex flex-col justify-evenly items-center bg-white rounded-2xl">
            <img
              src="https://drive.google.com/thumbnail?id=1ocFqUd1EAw-xxRrjZ2DPcKi0LgeFGcGd&sz=s800"
              alt=""
              className="w-[85px]"
            />
            <div className="w-full">
              <div className="w-[200px] h-[100px] rounded-tr-2xl rounded-br-2xl border-t-2 border-r-2 border-b-2 border-[#5F48D5] bg-[#F8F8F8] flex flex-col gap-2 justify-center pl-2">
                <p>Total video: <span className="font-Inter font-semibold"> {data?.video?.JAVA}</span></p>
                <p>Total students: <span className="font-Inter font-semibold"> {data?.students?.JAVA}</span></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Class;
