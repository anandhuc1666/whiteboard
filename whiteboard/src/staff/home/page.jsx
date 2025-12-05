import React from "react";
import AdminNav from "../Nav/AdminNav";
import Head from "../head/Head";
import Dash from "../Dashboard/Dash";
import AccountAdmin from "../account/AccountAdmin";
import { Route, Routes, useLocation } from "react-router-dom";
import Explore from "../Dashboard/Explore";
import Class from "../Dashboard/Class/Class";
import Course from "../Dashboard/Course";
import Schedule from "../Dashboard/Schedule";
import Settings from "../Dashboard/Settings";
import Adim_page from "../Dashboard/Adim-page";
import Go from "../Dashboard/Class/SetClass/Go";

function Page() {
  const location = useLocation();
  const currentPath = location.pathname.toLowerCase();
  const showNavRoutes = [
    "/dashboard",
    "/dashboard/explore",
    "/dashboard/class",
    "/dashboard/course",
    "/dashboard/schedule",
    "/dashboard/setting",
    "/dashboard/class/go",
  ];
  const showNav = showNavRoutes.includes(currentPath);

  return (
    <div className="w-full h-screen bg-[#F8F8F8] flex m-0 p-0 box-border">
      {showNav && (
        <div className="w-full flex justify-center mt-0">
          <AdminNav />
          <div className="flex flex-col gap-5 pt-5 px-5 w-full">
            <Head />
            {!showNav && <Adim_page />}
            <Routes>
              <Route path="/dashboard" element={<Dash />} />
              <Route path="/dashboard/explore" element={<Explore />} />
              <Route path="/dashboard/class" element={<Class />} />
              <Route path="/dashboard/course" element={<Course />} />
              <Route path="/dashboard/schedule" element={<Schedule />} />
              <Route path="/dashboard/setting" element={<Settings />} />
              <Route path="/dashboard/class/go" element={<Go/>}/>
            </Routes>
          </div>

          <AccountAdmin />
        </div>
      )}
    </div>
  );
}

export default Page;
