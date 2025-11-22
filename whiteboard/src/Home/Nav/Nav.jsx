import logo from "../../assets/Whiteboard.png";
import { IoMdSearch } from "react-icons/io";


function Nav() {

  return (
    <div className="w-[85%] h-[120px] bg-[#F8F8F8] rounded-2xl flex items-center justify-between">
      <div className="px-4 mt-0 py-0 items-center flex">
        <img src={logo} alt="" className="w-[100px] mt-[-20px]" />
        <p className="font-Inria-Serif text-3xl">whiteboard </p>
      </div>
      <div className="flex">
        <ul className="flex gap-15 font-medium font-Inria-Serif text-2xl">
           <li className="hover:text-[#5F48D5] hover:font-bold ">Home</li>
          <li className="hover:text-[#5F48D5] hover:font-bold">About</li>
          <li className="hover:text-[#5F48D5] hover:font-bold">Course </li>
          <li className="hover:text-[#5F48D5] hover:font-bold">Blogs</li>
        </ul>
      </div>
      <div className=" flex items-center gap-10 px-3">
        <div className="border-2 border-[#5F48D5] px-3 rounded-2xl flex items-center w-[250px] justify-between shadow-lg/20">
          <input
            type="text"
            placeholder="search for couse"
            className="outline-none border-none w-full"
          />
          <IoMdSearch className="text-5xl text-[#CAD3F5]" />
        </div>
        <div className="w-[120px] h-[50px] bg-[#D9D9D9] border-2 border-[#5F48D5] rounded-full flex items-center px-0 shadow-lg/20">
          <div className="w-[50px] h-[50px] bg-[#5F48D5] rounded-full flex items-center justify-center">
            <p className="text-white">Login</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Nav;
