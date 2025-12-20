import Login from "./auth/students/Login";
import Register from "./auth/students/Register";
import { Route, Routes, useLocation, Navigate } from "react-router-dom";
import Nav from "./Home/Nav/Nav";
import Home from "./Home/Home";
import Aboute from "./Home/Aboute/Aboute";
import StudentsCouse from "./Course/students/StudentsCouse";
import StudentsCourse from "./Course/courseVdo/StudentsCourse";
import StudentAcc from "./Home/Account/StudentAcc";
import Page from "./staff/home/page"
import { UserContext } from "./UserContext"
import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const location = useLocation();
const [token, setToken] = useState(localStorage.getItem("token")); // Track token in state
  const [user, setUser] = useState(null);

  const handleLogout = () => {
    localStorage.removeItem("token");
    setToken(null);
    setUser(null);
  };
  const userID = `http://localhost:5803/students/student_profile`;

  const showNavRoutes = ["/", "/about", "/studentscourse", "/course", "/account", "/chats"];
  const currentPath = location.pathname.toLowerCase();
  const showNav = showNavRoutes.includes(currentPath);

  const fetchData = async () => {
    if (!token) {
      setUser(null);
      return;
    }
    try {
      const response = await axios.get(userID, {
        headers: { Authorization: `Bearer ${token}` },
        withCredentials: true,
      });
      setUser(response.data); // Backend returns { user: {...} }
    } catch (error) {
      console.log("Profile fetch error:", error);
      if (error.response?.status === 401) handleLogout();
    }
  };

  useEffect(() => {
    fetchData();
  }, [token]); // Re-fetch whenever token state changes


  return (
    // 2. Wrap the entire app in Provider so StudentAcc and Nav share the same state
    <UserContext.Provider value={{ user, setUser, token, setToken, handleLogout }}>
      <div className="p-0 m-0">
        {showNav && (
          <div className="w-full flex justify-center mt-10">
            <Nav />
          </div>
        )}

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<Aboute />} />
          
          {/* Prevent logged-in users from seeing login/register */}
          <Route 
            path="/login" 
            element={token ? <Navigate to="/" /> : <Login setToken={setToken} />} 
          />
          <Route 
          path="/Admin-Page" 
          element={token ? <Page /> : <Navigate to="/login" />} 
        />
          <Route 
            path="/register" 
            element={token ? <Navigate to="/" /> : <Register />} 
          />

          {/* Protected Routes */}
          <Route
            path="/account"
            element={token ? <StudentAcc /> : <Navigate to="/login" />}
          />
          <Route
            path="/studentscourse"
            element={token ? <StudentsCouse /> : <Navigate to="/login" />}
          />
          <Route path="/Admin-Page" element={token ? <Page /> : <Navigate to="/login" />} />
        </Routes>
      </div>
    </UserContext.Provider>
  );
}

export default App;