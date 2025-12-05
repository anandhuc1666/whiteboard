import React from "react";
import AdminNav from "../Nav/AdminNav";
import Head from "../head/Head";
import Dash from "../Dashboard/Dash";
import AccountAdmin from "../account/AccountAdmin";
import { Route, Routes, useLocation } from "react-router-dom";
import Explore from "../Dashboard/Explore";
import Class from "../Dashboard/Class";
import Course from "../Dashboard/Course";
import Schedule from "../Dashboard/Schedule";
import Settings from "../Dashboard/Settings";

function Page() {
  const location = useLocation();
  const currentPath = location.pathname.toLowerCase();
  const showNavRoutes = ["/dashboard", "/explore", "/class","/course","/schedule","/setting"];
  const showNav = showNavRoutes.includes(currentPath);

  return (
    <div className="w-full h-screen bg-[#F8F8F8] flex m-0 p-0 box-border">
      {showNav && (
        <div className="w-full flex justify-center mt-0">
          <AdminNav />
          <div className="flex flex-col gap-5 pt-5 px-5 w-full">
            <Head />
            <Routes>
              <Route path="/dashboard" element={<Dash />} />
              <Route path="/explore" element={<Explore />} />
              <Route path="/class" element={<Class />} />
              <Route path="/course" element={<Course/>} />
              <Route path="/schedule" element={<Schedule />} />
              <Route path="/setting" element={<Settings />} />
            </Routes>
          </div>

          <AccountAdmin />
        </div>
      )}
    </div>
  );
}

export default Page;
