import { useState } from "react";
import registerImg from "../../assets/registerImg.svg";
import axios from "axios";
import logo from "../../assets/Whiteboard.png";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function Register() {
  const [file, setFile] = useState(null);
  const REGISTER_URL = `http://localhost:5803/user`;
  const navigate = useNavigate();
  const [register, setRegister] = useState({
    name: "",
    lastName: "",
    number: "",
    age: "",
    email: "",
    password: "",
  });

  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setRegister((prev) => ({ ...prev, [name]: value }));
  };

  const handleSend = async (e) => {
    e.preventDefault();
    const { name, number, age, email, password } = register;
    if (!name || !number || !age || !email || !password) {
      return Swal.fire({
        title: "Missing fields",
        text: "Please fill all required fields.",
        icon: "warning",
      });
    }
    const formData = new FormData();
    formData.append("name", register.name);
    formData.append("lastName", register.lastName);
    formData.append("number", register.number);
    formData.append("age", register.age);
    formData.append("email", register.email);
    formData.append("password", register.password);
    if (file) {
      formData.append("profileImage", file); // Key must match backend: upload.single("profileImage")
    }
    setIsLoading(true);
    try {
      const response = await axios.post(`${REGISTER_URL}/register`, formData, {
        headers: { "Content-Type": "multipart/form-data" },
        timeout: 10000,
      });

      console.log("Server response:", response.data);

      await Swal.fire({
        title: "Success",
        text: response.data?.message || "User created",
        icon: "success",
      });

      // reset form
      setRegister({
        name: "",
        lastName: "",
        number: "",
        age: "",
        email: "",
        password: "",
      });
      navigate("/verify-OTP");
    } catch (error) {
      console.error("Registration error:", error);

      const message =
        error?.response?.data?.message ||
        error?.response?.data ||
        error?.message ||
        "Something went wrong";

      Swal.fire({
        title: "Error",
        text: message,
        icon: "error",
      });
    } finally {
      setIsLoading(false);
    }
  };
  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };
  return (
    <div className="w-full h-[100vh] bg-[#1E1C1C] flex justify-between">
      <div className="w-[150px] absolute h-[150px] rounded-full mt-[-20px] ml-[-20px] shadow-lg/30 bg-amber-50"></div>
      <div className="w-[950px] h-[100vh] bg-[#5F48D5] flex items-center rounded-br-4xl rounded-tr-4xl flex-col justify-start">
        {/* blue under dev box  */}
        <div className="w-full mt-0 flex justify-between">
          <p className="font-Irish text-5xl text-white text-shadow-lg/30 ml-11 mt-50 leading-15">
            We wish you joy in <br /> discovering and learning <br />
            new things.
          </p>
          <div className="w-[300px] h-[500px]">
            <div className="w-[120px] h-[120px] rounded-full ml-[190px] mt-[-10px] shadow-lg/30 opacity-85 bg-white"></div>
            <div className="w-[80px] h-[80px] rounded-full bg-white shadow-lg/30  opacity-60 ml-[250px] mt-10"></div>
            <div className="w-[80px] h-[80px] rounded-full bg-white shadow-lg/30  opacity-85 ml-[120px]"></div>
            <div className="w-[30px] h-[30px] rounded-full bg-white shadow-lg/30  ml-[230px]"></div>
          </div>
        </div>

        <img src={registerImg} alt="" className="w-[350px]" />
      </div>
      {/* top-right box */}
      <div className="w-[1000px] h-[100vh]">
        <img src={logo} alt="" className="w-[100px] h-[100px] ml-5" />
        <p className="text-[#5F48D5] font-bold font-Irish text-6xl flex justify-center-safe">
          Register
        </p>
        <div className="flex justify-end flex-col ml-15">
          <p className="font-IstokWeb text-[1.5em] text-white">
            Profile Picture:
          </p>
          <input
            type="file"
            accept="image/*"
            onChange={handleFileChange}
            className="w-[200px] px-3 py-2 text-xl font-medium bg-[#FEFBFF] border-2 border-[#5F48D5] rounded-3xl"
          />
        </div>
        <div className="w-full h-auto py-3 flex justify-evenly ">
          <div className="flex justify-end flex-col">
            <p className="font-IstokWeb text-[1.5em] text-white">Name:</p>
            <input
              type="text"
              className="w-[400px] px-3 text-2xl font-medium h-[70px] outline-[#5F48D5] text-[#5F48D5] bg-[#FEFBFF] border-2 border-[#5F48D5] rounded-3xl"
              onChange={handleChange}
              value={register.name}
              name="name"
            />
          </div>
          <div className="flex justify-end flex-col">
            <p className="font-IstokWeb text-[1.5em] text-white">Last Name:</p>
            <input
              type="text"
              className="w-[400px] h-[70px] px-3 text-2xl font-medium outline-[#5F48D5] text-[#5F48D5] bg-[#FEFBFF] border-2 border-[#5F48D5] rounded-3xl"
              onChange={handleChange}
              value={register.lastName}
              name="lastName"
            />
          </div>
        </div>

        <div className="w-full h-auto py-3 flex justify-evenly ">
          <div className="flex justify-end flex-col">
            <p className="font-IstokWeb text-[1.5em] text-white">Number:</p>
            <input
              type="number"
              className="w-[700px] h-[70px] px-3 text-2xl font-medium outline-[#5F48D5] text-[#5F48D5] bg-[#FEFBFF] border-2 border-[#5F48D5] rounded-3xl"
              onChange={handleChange}
              value={register.number}
              name="number"
            />
          </div>
          <div className="flex justify-end flex-col">
            <p className="font-IstokWeb text-[1.5em] text-white">Age:</p>
            <input
              type="number"
              className="w-[100px] h-[70px] px-3 text-2xl font-medium text-[#5F48D5] outline-[#5F48D5] bg-[#FEFBFF] border-2 border-[#5F48D5] rounded-3xl"
              onChange={handleChange}
              value={register.age}
              name="age"
            />
          </div>
        </div>

        <div className="w-full h-auto py-3 flex justify-evenly">
          <div className="flex justify-end flex-col">
            <p className="font-IstokWeb text-[1.5em] text-white">Email:</p>
            <input
              type="email"
              className="w-[830px] h-[70px] px-3 text-2xl font-medium outline-[#5F48D5] text-[#5F48D5] bg-[#FEFBFF] border-2 border-[#5F48D5] rounded-3xl"
              onChange={handleChange}
              value={register.email}
              name="email"
            />
          </div>
        </div>

        <div className="w-full h-auto py-3 flex justify-evenly">
          <div className="flex justify-end flex-col">
            <p className="font-IstokWeb text-[1.5em] text-white">Password :</p>
            <input
              type="password"
              className="w-[830px] h-[70px] px-3 text-2xl font-medium outline-[#5F48D5] text-[#5F48D5] bg-[#FEFBFF] border-2 border-[#5F48D5] rounded-3xl"
              onChange={handleChange}
              value={register.password}
              name="password"
            />
          </div>
        </div>

        <div className="w-full h-auto py-3 flex justify-evenly flex-col px-18 ">
          <div className="">
            <p className="font-IstokWeb text-3xl text-white">
              I have an account{" "}
            </p>
          </div>
          <div className="w-full h-auto py-3 flex justify-between">
            <Link to={"/Login"}>
              <button
                className="w-35 h-[60px] border-2 rounded-full border-white transition duration-700 ease-in-out text-[18px] hover:bg-[#5F48D5] hover:text-[#fff] text-[#5F48D5]"
                // implement login navigation if needed
              >
                login
              </button>
            </Link>
            <button
              onClick={handleSend}
              disabled={isLoading}
              className={`w-35 h-[60px] border-2 rounded-full text-[18px] transition duration-700 ease-in-out text-[#FEFBFF] hover:bg-linear-to-bl from-violet-500 to-fuchsia-500 hover:text-black bg-[#5F48D5] border-[#000000] ${
                isLoading ? "opacity-60 cursor-not-allowed" : ""
              }`}
            >
              {isLoading ? "Registering..." : "register"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;
