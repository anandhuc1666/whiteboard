import React from "react";
import { Route, Routes } from "react-router-dom";
import AdminNav from "../Nav/AdminNav";
import Head from "../head/Head";
import Dash from "../Dashboard/Dash";
import AccountAdmin from "../account/AccountAdmin";
import Explore from "../Dashboard/Explore";
import Class from "../Dashboard/Class/Class";
import Course from "../Dashboard/Course";
import Schedule from "../Dashboard/Schedule";
import Settings from "../Dashboard/Settings";
import Go from "../Dashboard/Class/SetClass/Go";
import Python from "../Dashboard/Class/SetClass/Python";

function Page() {
  // const location = useLocation();

  return (
    <div className="w-full h-screen bg-[#F8F8F8] flex m-0 p-0 box-border">
      {/* If we are in /dashboard, always show this layout */}
      <div className="w-full flex justify-center mt-0">
        <AdminNav /> {/* Sidebar */}
        <div className="flex flex-col gap-5 pt-5 px-5 w-full">
          <Head /> {/* Topbar */}
          <Routes>
            {/* Paths are relative to "/dashboard" */}
            <Route path="/" element={<Dash />} /> 
            <Route path="/explore" element={<Explore />} />
            <Route path="/class" element={<Class />} />
            <Route path="/course" element={<Course />} />
            <Route path="/schedule" element={<Schedule />} />
            <Route path="/setting" element={<Settings />} />
            <Route path="/class/go" element={<Go/>}/>
            <Route path="/class/python" element={<Python/>}/>
          </Routes>
        </div>
        <AccountAdmin /> {/* Right Sidebar */}
      </div>
    </div>
  );
}

export default Page;