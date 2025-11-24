import Login from "./auth/students/Login";
import Register from "./auth/students/Register";
import { Route, Routes, useLocation } from "react-router-dom";
import Notapage from "./auth/students/Notapage";
import OtpFind from "./auth/students/OtpFind";
import Nav from "./Home/Nav/Nav";
import Home from "./Home/Home";
import Aboute from "./Home/Aboute/Aboute";
import StudentsCouse from "./Course/students/StudentsCouse";

function App() {
  const location = useLocation();
  const hideNavRoutes = ["/login", "/register", "/Login", "/Register"];
  const hideNav = hideNavRoutes.includes(location.pathname);

  return (
    <div>
      {!hideNav && (
        <div className="w-full flex justify-center mt-10">
          <Nav />
        </div>
      )}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/verify-OTP" element={<OtpFind />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/nav" element={<Nav />} />
        <Route path="/About" element={<Aboute />} />
        <Route path="*" element={<Notapage />} />
        <Route path="/StudentsCourse" element={<StudentsCouse/>}/>
      </Routes>
    </div>
  );
}

export default App;
