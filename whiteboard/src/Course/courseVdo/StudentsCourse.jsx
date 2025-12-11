import { BiLogoGoLang } from "react-icons/bi";
import { AiOutlineMessage } from "react-icons/ai";
import ListVdo from "./ListVdo";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

function StudentsCourse() {
  const navigate = useNavigate();
  const [data, setData] = useState([]);
  const [clike, setClike] = useState(null);
  if (clike == true) {
    navigate("/chats");
  }
  const handleData = (d) => {
    setData(d);
  };
  return (
    <div className="flex items-center justify-center mt-20">
      <div className="w-[85%] h-[70vh] flex justify-between">
        <div className="w-[55%] h-[70vh] bg-[#F8F8F8] p-5">
          <div className="w-full h-[65vh] flex justify-between px-5 flex-col ">
            {/* <div className="">
              <BiLogoGoLang className="text-[#00ACD7] text-8xl drop-shadow-lg/50 " />
            </div> */}
            <div className="w-full h-[450px] rounded-2xl shadow-lg/20">
              <video
                src={`${data.videoId}`}
                className="w-full h-[450px] rounded-2xl"
                autoPlay
                controls
              ></video>
            </div>
            <div className="w-full h-[130px] bg-white rounded-2xl shadow-lg/20 p-3 flex flex-col gap-5">
              <div className=" flex gap-10">
                <span className="flex gap-3 font-Inter">
                  Tittle: <p className="font-light">{data.tittle}</p>
                </span>
                <span className="flex gap-3 font-Inter">
                  EP: <p className="font-light">{data.episode}</p>
                </span>
              </div>
              <span className="flex gap-3 font-Inter">
                Discription: <p className="font-light">{data.discription}</p>
              </span>
            </div>
          </div>
        </div>
        <div className="w-[6%] flex items-center h-[70vh]">
          <AiOutlineMessage
            className="text-7xl text-white bg-[#5F48D5] rounded-full p-0.5"
            onClick={() => setClike(true)}
          />
        </div>
        <div className="w-[40%] h-[70vh] bg-[#5F48D5] p-5">
          {/* list of course video section's */}
          <ListVdo setFile={handleData} />
        </div>
      </div>
    </div>
  );
}

export default StudentsCourse;
