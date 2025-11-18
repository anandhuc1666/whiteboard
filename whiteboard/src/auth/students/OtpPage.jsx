import axios from "axios";
import React, { useState } from "react";

function OtpPage() {
 const [emailsend, setEmail] = useState({ email: "" });
 const [otpsend,setotpSend]=useState(false)
  const handleChange = (e) => {
    setEmail({ ...emailsend, [e.target.name]: e.target.value });
  };
  const generateOtpUrl = "http://localhost:5803/user/generateOtp";

  const otpSend = async (e) => {
    e.preventDefault();
    setotpSend(true)
    if(!emailsend){
        return 
    }
    try {
      const responseOtp = await axios.post(generateOtpUrl, emailsend);
      console.log("OTP sent:", responseOtp.data);
      const data = await responseOtp.data
      alert(data.message)
      if(data.status == "success"){
        return setotpSend(false)
      }
      
    } catch (error) {
      console.error("Error sending OTP:", error);
    }
  };
  console.log(emailsend);
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-6">
      <div className="w-full max-w-md bg-white shadow-xl rounded-2xl p-8">
        {/* <!-- Heading --> */}
        <h2 className="text-2xl font-bold text-gray-800 text-center mb-2">
          Verify Your Email
        </h2>
        <p className="text-gray-500 text-center mb-6">
          Enter the code we sent to your email
        </p>

        {/* <!-- Email input --> */}
        <div className="mb-6">
          <label className="text-sm font-medium text-gray-700">Email</label>
          <div className="flex gap-3 mt-2">
            <input
              type="email"
              name="email"
              placeholder="your@example.com"
              value={emailsend.email}
              className="flex-1 px-4 py-3 border rounded-lg focus:ring-2 focus:ring-indigo-400 focus:outline-none"
              onChange={handleChange}
            />
            {otpsend === true?(<button className="px-4 py-2 bg-gray-700 text-white rounded-lg "onClick={otpSend}>sending...</button>):
            (<button className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700"onClick={otpSend}>send</button>)}
            
          </div>
        </div>
        {/* 
    <!-- OTP Inputs --> */}
        <div>
          <p className="text-sm text-gray-600 mb-3">Enter 6-digit code</p>
          <div className="flex items-center justify-between gap-2">
            <input
              type="text"
              maxLength="1"
              className="w-12 h-12 text-center border rounded-lg shadow-sm focus:ring-2 focus:ring-[#5F48D5] focus:outline-none text-lg"
            />
            <input
              type="text"
              maxLength="1"
              className="w-12 h-12 text-center border rounded-lg shadow-sm focus:ring-2 focus:ring-[#5F48D5] focus:outline-none text-lg"
            />
            <input
              type="text"
              maxLength="1"
              className="w-12 h-12 text-center border rounded-lg shadow-sm focus:ring-2 focus:ring-[#5F48D5] focus:outline-none text-lg"
            />
            <input
              type="text"
              maxLength="1"
              className="w-12 h-12 text-center border rounded-lg shadow-sm focus:ring-2 focus:ring-[#5F48D5] focus:outline-none text-lg"
            />
            <input
              type="text"
              maxLength="1"
              className="w-12 h-12 text-center border rounded-lg shadow-sm focus:ring-2 focus:ring-[#5F48D5] focus:outline-none text-lg"
            />
            <input
              type="text"
              maxLength="1"
              className="w-12 h-12 text-center border rounded-lg shadow-sm focus:ring-2 focus:ring-[#5F48D5] focus:outline-none text-lg"
            />
          </div>
        </div>

        <div className="mt-6 flex justify-between items-center">
          <button className="px-5 py-2 bg-indigo-600 text-white rounded-lg hover:bg-[#48d569]">
            Verify
          </button>
        </div>
      </div>
    </div>
  );
}

export default OtpPage;
