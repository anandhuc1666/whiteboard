import React from 'react'
import staffIMG from "../../assets/photo/AdminHeader.svg"

function Head() {
  return (
    <div className='w-[1150px] h-[300px] bg-[#5F48D5] rounded-2xl flex justify-between p-0 shadow-lg/30'>
        <div className="flex justify-center items-center pl-20"><p className='text-white text-5xl font-semibold'>Welcome Arun</p></div>
        <div className=""><img src={staffIMG } alt="" className='w-[400px] mr-4'/></div>
    </div>
  )
}

export default Head