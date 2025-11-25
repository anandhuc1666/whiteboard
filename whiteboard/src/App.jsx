import Login from "./auth/students/Login";
import Register from "./auth/students/Register";
import { Route, Routes, useLocation } from "react-router-dom";
import Notapage from "./auth/students/Notapage";
import OtpFind from "./auth/students/OtpFind";
import Nav from "./Home/Nav/Nav";
import Home from "./Home/Home";
import Aboute from "./Home/Aboute/Aboute";
import StudentsCouse from "./Course/students/StudentsCouse";
import StudentsCourse from "./Course/courseVdo/StudentsCourse";


function App() {
  const location = useLocation();

  const showNavRoutes = ["/", "/about", "/studentscourse","/course"];
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
        <Route path="/register" element={<Register />} />
        <Route path="/verify-otp" element={<OtpFind />} />
        <Route path="/login" element={<Login />} />
        <Route path="/about" element={<Aboute />} />
        <Route path="/studentscourse" element={<StudentsCouse />} />
         <Route path="/course" element={<StudentsCourse/>}/>
        <Route path="/*" element={<Notapage />} />
       
      </Routes>
    </div>
  );
}

export default App;
