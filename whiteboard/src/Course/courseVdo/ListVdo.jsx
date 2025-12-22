import axios from "axios";
import React, { useEffect, useState } from "react";

function ListVdo({setFile}) {
  //http://localhost:5803/api/course/trail_fatch ---->students demo class
  const [data, setData] = useState([]);
  const token = localStorage.getItem("token");
  
  const fashData = async () => {
    const responce = await axios.get(
      `http://localhost:5803/api/course/find_GO`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
        withCredentials: true,
      }
    );
    setData(responce.data.course);
  };
  useEffect(() => {
    fashData();
  }, []);
  const handleSend = async(id)=>{
    try {
      const responce = await axios.get(`http://localhost:5803/api/course/select?videoId=${id}`)
      console.log(responce.data.message)
      setFile(responce.data.video)
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <div className="w-full h-[65vh] bg-white rounded-2xl overflow-y-auto no-scrollbar scroll-smooth overflow-x-hidden px-2  py-2">
      {/* all course-vdo section for maping */}
      {Array.isArray(data) &&
        data.map((item, index) => (
          <div
            key={index}
            className="w-full h-[100px] bg-[#D9D9D9] mb-3 shadow-lg/10 rounded-2xl flex items-center gap-2 justify-between px-3"
          >
            <img
              src={`${item.img}`}
              alt=""
              className="w-[80px] h-[80px] bg-white rounded-2xl"
            />
            <div className="w-[85%] h-[100px] flex flex-col items-start px-2 py-5">
              <span className="flex gap-2 font-Inter">Tittle: <p className="font-light">{item.tittle}</p></span>
              <span className="flex gap-2 font-Inter">Ep:p <p className="font-light">{item.episode}</p></span>
            </div>
            <button className="w-[150px] h-[65px] bg-[#5F48D5] rounded-3xl font-Inter text-2xl text-white" onClick={()=>handleSend(item._id)}>Play</button>
          </div>
        ))}
    </div>
  );
}

export default ListVdo;
