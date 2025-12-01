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

function App() {
  const location = useLocation();
  const token = localStorage.getItem("token");

  const showNavRoutes = [
    "/",
    "/about",
    "/studentscourse",
    "/course",
    "/account",
  ];
  const currentPath = location.pathname.toLowerCase();
  const showNav = showNavRoutes.includes(currentPath);

  return (
    <div>
      {showNav && (
        <div className="w-full flex justify-center mt-10">
          <Nav />
        </div>
      )}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/register"
          element={token ? <Navigate to="/" /> : <Register />}
        />
        <Route path="/verify-otp" element={<OtpFind />} />
        <Route
          path="/login"
          element={token ? <Navigate to="/" /> : <Login />}
        />

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
        <Route path="/chats" element={<Chats/>}/>
        <Route path="/*" element={<Notapage />} />
      </Routes>
    </div>
  );
}

export default App;
