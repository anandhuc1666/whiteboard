import { useState } from "react";
import registerImg from "../../assets/registerImg.svg";
import axios from "axios";
import logo from "../../assets/Whiteboard.png";
import Swal from "sweetalert2";
import { Link, useNavigate } from "react-router-dom";

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
    <div className="w-full min-h-screen bg-[#1E1C1C] flex items-center justify-center p-4">
      <div className="w-full max-w-[1500px] flex flex-col md:flex-row bg-transparent rounded-2xl overflow-hidden">
        {/* Left blue panel (visual) */}
        <div className="w-full md:w-1/2 bg-[#5F48D5] flex flex-col items-center rounded-2xl p-6 md:p-10">
          {/* Decorative circles — hidden on small screens (phones) */}
          <div className="hidden sm:block self-start relative w-full mb-4">
            <div className="absolute top-0 left-0 w-[150px] h-[150px] rounded-full -translate-y-4 -translate-x-4 shadow-lg/30  opacity-90" />
            <div className="absolute top-0 right-6 w-[120px] h-[120px] rounded-full shadow-lg/30 bg-white opacity-85" />
            <div className="absolute top-36 right-10 w-[80px] h-[80px] rounded-full bg-white shadow-lg/30 opacity-60" />
            <div className="absolute top-54 left-24 w-[80px] h-[80px] rounded-full bg-white shadow-lg/30 opacity-85" />
            <div className="absolute top-80 right-20 w-[30px] h-[30px] rounded-full bg-white shadow-lg/30" />
          </div>

          <div className="text-left w-full">
            <p className="font-Irish text-2xl md:text-4xl text-white leading-tight">
              We wish you joy in <br /> discovering and learning <br /> new things.
            </p>
          </div>

          <img
            src={registerImg}
            alt="register"
            className="w-[220px] md:w-[350px] mt-6 md:mt-10"
          />
        </div>

        {/* Right form panel */}
        <div className="w-full md:w-1/2 bg-[#1E1C1C] p-6 md:p-10 flex flex-col gap-4 rounded-2xl">
          <div className="flex items-center justify-between">
            <img src={logo} alt="logo" className="w-16 h-16" />
            <p className="text-[#5F48D5] font-bold font-Irish text-3xl md:text-5xl">
              Register
            </p>
          </div>

          <div className="flex flex-col gap-3">
            <label className="font-IstokWeb text-lg md:text-xl text-white">
              Profile Picture:
            </label>
            <input
              type="file"
              accept="image/*"
              onChange={handleFileChange}
              className="w-full md:w-3/4 px-3 py-2 text-base md:text-lg font-medium bg-[#FEFBFF] border-2 border-[#5F48D5] rounded-3xl"
            />
          </div>

          <form className="w-full flex flex-col gap-4" onSubmit={handleSend}>
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1 flex flex-col gap-1">
                <label className="font-IstokWeb text-lg text-white">Name:</label>
                <input
                  type="text"
                  className="w-full px-3 text-lg md:text-2xl h-[56px] md:h-[70px] font-medium outline-[#5F48D5] text-[#5F48D5] bg-[#FEFBFF] border-2 border-[#5F48D5] rounded-3xl"
                  onChange={handleChange}
                  value={register.name}
                  name="name"
                />
              </div>
              <div className="flex-1 flex flex-col gap-1">
                <label className="font-IstokWeb text-lg text-white">Last Name:</label>
                <input
                  type="text"
                  className="w-full px-3 text-lg md:text-2xl h-[56px] md:h-[70px] font-medium outline-[#5F48D5] text-[#5F48D5] bg-[#FEFBFF] border-2 border-[#5F48D5] rounded-3xl"
                  onChange={handleChange}
                  value={register.lastName}
                  name="lastName"
                />
              </div>
            </div>

            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1 flex flex-col gap-1">
                <label className="font-IstokWeb text-lg text-white">Number:</label>
                <input
                  type="number"
                  className="w-full px-3 text-lg md:text-2xl h-[56px] md:h-[70px] font-medium outline-[#5F48D5] text-[#5F48D5] bg-[#FEFBFF] border-2 border-[#5F48D5] rounded-3xl"
                  onChange={handleChange}
                  value={register.number}
                  name="number"
                />
              </div>
              <div className="w-[120px] flex flex-col gap-1">
                <label className="font-IstokWeb text-lg text-white">Age:</label>
                <input
                  type="number"
                  className="w-full px-3 text-lg md:text-2xl h-[56px] md:h-[70px] font-medium text-[#5F48D5] outline-[#5F48D5] bg-[#FEFBFF] border-2 border-[#5F48D5] rounded-3xl"
                  onChange={handleChange}
                  value={register.age}
                  name="age"
                />
              </div>
            </div>

            <div className="flex flex-col gap-1">
              <label className="font-IstokWeb text-lg text-white">Email:</label>
              <input
                type="email"
                className="w-full px-3 text-lg md:text-2xl h-[56px] md:h-[70px] font-medium outline-[#5F48D5] text-[#5F48D5] bg-[#FEFBFF] border-2 border-[#5F48D5] rounded-3xl"
                onChange={handleChange}
                value={register.email}
                name="email"
              />
            </div>

            <div className="flex flex-col gap-1">
              <label className="font-IstokWeb text-lg text-white">Password :</label>
              <input
                type="password"
                className="w-full px-3 text-lg md:text-2xl h-[56px] md:h-[70px] font-medium outline-[#5F48D5] text-[#5F48D5] bg-[#FEFBFF] border-2 border-[#5F48D5] rounded-3xl"
                onChange={handleChange}
                value={register.password}
                name="password"
              />
            </div>

            <div className="flex flex-col md:flex-row items-center justify-between gap-4 mt-2">
              <div className="text-white">
                <p className="font-IstokWeb text-lg">I have an account</p>
              </div>

              <div className="flex gap-4">
                <Link to={"/Login"}>
                  <button
                    type="button"
                    className="px-6 h-[48px] md:h-[60px] rounded-full border-2 border-white transition duration-300 ease-in-out text-sm md:text-base hover:bg-[#5F48D5] hover:text-white text-[#5F48D5]"
                  >
                    login
                  </button>
                </Link>
                <button
                  type="submit"
                  disabled={isLoading}
                  className={`px-6 h-[48px] md:h-[60px] rounded-full text-sm md:text-base transition duration-300 ease-in-out text-[#FEFBFF] bg-[#5F48D5] border-[#000000] ${
                    isLoading ? "opacity-60 cursor-not-allowed" : ""
                  }`}
                >
                  {isLoading ? "Registering..." : "register"}
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Register;
