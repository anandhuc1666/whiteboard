import React from 'react'

function ListVdo() {
  return (
          <div className="w-full h-[65vh] bg-white rounded-2xl overflow-y-auto no-scrollbar scroll-smooth overflow-x-hidden px-4 py-5">
            {/* all course-vdo section for maping */}
            <div className="w-full h-[100px] bg-[#D9D9D9] mb-3 shadow-lg/10 rounded-2xl flex items-center justify-between px-3">
              <div className="w-[80px] h-[80px] bg-white rounded-2xl"></div>
              <div className="w-[85%] h-auto flex flex-col items-start px-5">
                <div className=" w-[80%] h-[60px] bg-white rounded-2xl"></div>
                <div className="w-8 h-6">
                  <p>EP:1</p>
                </div>
              </div>
            </div>
          </div>
  )
}

export default ListVdo