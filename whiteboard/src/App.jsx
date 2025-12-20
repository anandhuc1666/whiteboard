import Login from "./auth/students/Login";
import Register from "./auth/students/Register";
import { Route, Routes, useLocation, Navigate } from "react-router-dom";
import Notapage from "./auth/students/Notapage";
import OtpFind from "./auth/students/OtpFind";
import Nav from "./Home/Nav/Nav";
import Home from "./Home/Home";
import Aboute from "./Home/Aboute/Aboute";
import StudentsCouse from "./Course/students/StudentsCouse";
import StudentsCourse from "./Course/courseVdo/StudentsCourse";
import StudentAcc from "./Home/Account/StudentAcc";
import NewPass from "./auth/students/NewPass";
import Chats from "./Course/courseVdo/studentsChat/Chats";
import Payment from "./Home/payment/Payment";
import Page from "././staff/home/page";
import { UserContext } from "./UserContext"
import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const location = useLocation();
  const token = localStorage.getItem("token");
  const [user, setUser] = useState([]);
  const userID = `http://localhost:5803/students/student_profile`;
  const showNavRoutes = [
    "/",
    "/about",
    "/studentscourse",
    "/course",
    "/account",
    "/chats",
  ];
  const currentPath = location.pathname.toLowerCase();
  const showNav = showNavRoutes.includes(currentPath);
  const fatchData = async () => {
    try {
      const responce = await axios.get(userID, {
        headers: {
          Authorization: `Bearer ${token}`, // Use stored token
        },
        withCredentials: true,
      });
      setUser(responce.data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fatchData();
  }, []);
  return (
    <div className="p-0 m-0">
      {showNav && (
        <div className="w-full flex justify-center mt-10">
          <UserContext.Provider value={user}>
            <Nav />
          </UserContext.Provider>
        </div>
      )}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/register"
          element={token ? <Navigate to="/" /> : <Register />}
        />
        <Route path="/verify-otp" element={<OtpFind />} />
        <Route path="/login" element={<Login />} />

        <Route path="/about" element={<Aboute />} />

        <Route
          path="/studentscourse"
          element={token ? <StudentsCouse /> : <Navigate to="/login" />}
        />
        <Route
          path="/course"
          element={token ? <StudentsCourse /> : <Navigate to="/login" />}
        />
        <Route
          path="/account"
          element={token ? <StudentAcc /> : <Navigate to="/login" />}
        />
        <Route path="/verify-password" element={<NewPass />} />
        <Route path="/chats" element={<Chats />} />
        <Route path="/payment" element={<Payment />} />
        {/* <Route path="/*" element={<Notapage />} /> */}
        <Route path="/Admin-Page" element={<Page />} />
      </Routes>
    </div>
  );
}

export default App;
