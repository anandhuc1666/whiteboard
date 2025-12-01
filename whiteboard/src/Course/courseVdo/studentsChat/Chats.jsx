import React from "react";
import chatting from "../../../assets/picture/chatting.svg";
import user from "../../../assets/picture/demo3dpic2.png";
import { IoSend } from "react-icons/io5";

function Chats() {
  return (
    <div className="w-full h-auto flex justify-center">
      <div className="w-[85%] h-[80vh] flex justify-between">
        <div className="w-[750px] h-[70vh]">
          <div className="w-full flex p-15">
            <img src={chatting} alt="" className="w-[250px]" />
            <div className="flex items-end text-4xl pr-12 font-Inter font-bold">
              <p>Group marker</p>
            </div>
          </div>
          <div className="w-full h-auto flex flex-col gap-3 justify-center px-10">
            <div className="w-fit h-[100px] bg-[#F8F8F8] rounded-2xl p-5 text-[16px] font-semibold">
              <p>
                while a group discussion is a more structured, in-person or
                virtual conversation where a group of people exchange ideas and
                opinions on a specific topic
              </p>
            </div>
            <div className="w-fit h-[100px] bg-[#F8F8F8] rounded-2xl p-5 text-[16px] font-semibold">
              <p>
                Group discussions aim to assess skills like communication,
                critical thinking, and collaboration, whereas group chats focus
                on efficient, everyday information exchange.
              </p>
            </div>
          </div>
        </div>
        <div className="w-[850px] h-[80vh] px-10 flex items-end">
          <div className="w-full h-[75vh] bg-[#5F48D5] rounded-2xl p-5">
            <div className="flex gap-5 flex-col">
              <div className="w-full h-[70px] rounded-2xl bg-white">
                {/* user token base profile show */}
              </div>
              <div className="w-full h-[51vh] bg-white rounded-2xl flex flex-col justify-end gap-2.5 px-5 overflow-auto pb-3 shadow-[inset_0_-5px_12px_rgba(0,0,0,0.3)]">
                {/* user message section with identify the token and course */}


                <div className="w-fill h-auto">
                  <div className="w-fit h-auto bg-[#5F48D5] text-[18px] font-Inter p-2 px-3 rounded-tl-2xl rounded-tr-2xl rounded-br-2xl shadow-lg/20">
                    <div className="min-w-[150px] flex justify-between text-[12px]">
                      <div className="flex text-white text-[15px] gap-2">
                        <img
                          src={user}
                          alt=""
                          className="w-[20px] h-[20px] bg-white rounded-full"
                        />
                        <p>User1</p>
                      </div>
                      <p>12:00</p>
                    </div>
                    <p>hello man </p>
                  </div>
                </div>
                {/* msg:2 */}
               
    {/* right side message */}
                <div className="w-fill h-auto flex justify-end">
                  <div className="w-fit h-auto max-w-[300px] bg-[#5F48D5] text-[18px] font-Inter p-2 px-3 rounded-tl-2xl rounded-tr-2xl rounded-bl-2xl shadow-lg/20">
                    <div className="min-w-[150px] flex justify-between text-[12px]">
                      <div className="flex text-white text-[15px] gap-2">
                        <img
                          src={user}
                          alt=""
                          className="w-[20px] h-[20px] bg-white rounded-full"
                        />
                        <p>User1</p>
                      </div>
                      <p>12:00</p>
                    </div>
                    <p>
                      hello man while a group discussion is a more structured,
                      in-person or virtual conversation where a group of people
                      exchange ideas and opinions on a specific topic
                    </p>
                  </div>
                </div>



              </div>
              <div className="w-full h-[70px] rounded-2xl bg-white flex items-center p-2 ">
                <input
                  type="text"
                  placeholder="typing..."
                  className="w-full h-[50px] p-2 font-Inter border-none outline-none text-[20px]"
                />
                <IoSend className="bg-[#F8F8F8] text-[#5F48D5] text-5xl p-2 rounded-full" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Chats;
