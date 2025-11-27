import axios from "axios";
import React, { useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function OtpFind() {

  const [emailsend, setEmail] = useState({ email: "" });
  const [sending, setSending] = useState(false);
  const [verifying, setVerifying] = useState(false);
  const [sentOnce, setSentOnce] = useState(false);
  const [message, setMessage] = useState(null); // {type:'error'|'success', text: string}
  const navigate = useNavigate();

  // OTP as an array (easier to work with than six separate states)
  const OTP_LENGTH = 6;
  const [otp, setOtp] = useState(Array(OTP_LENGTH).fill(""));
  const inputsRef = useRef([]);
  const BACKEND_URL =`http://localhost:5803/user`
  const generateOtpUrl = `${BACKEND_URL}/generateOtp`;
  const verifyOtpUrl = `${BACKEND_URL}/verifyOtp`;

  // email input handler
  const handleChange = (e) => {
    setEmail({ ...emailsend, [e.target.name]: e.target.value });
  };

  // Send OTP: send { email: "..." } to backend
  const otpSend = async (e) => {
    e?.preventDefault();
    setMessage(null);

    if (
      !emailsend.email ||
      !/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(emailsend.email)
    ) {
      setMessage({ type: "error", text: "Please enter a valid email." });
      return;
    }

    try {
      setSending(true);
      // backend expects { email: "..." }
      const response = await axios.post(generateOtpUrl, {
        email: emailsend.email,
      });
      console.log("generateOtp response:", response.data);

      // adapt to your backend shape:
      if (response.data?.status === "success" || response.status === 200) {
        setSentOnce(true);
        setMessage({ type: "success", text: "OTP sent. Check your email." });
        // focus first input
        inputsRef.current[0]?.focus();
      } else {
        setMessage({
          type: "error",
          text: response.data?.message || "Failed to send OTP",
        });
      }
    } catch (err) {
      console.error("Error sending OTP:", err);
      setMessage({ type: "error", text: "Error sending OTP. Check server." });
    } finally {
      setSending(false);
    }
  };

  // OTP input handlers
  const handleOtpChange = (e, idx) => {
    const val = e.target.value.replace(/[^0-9]/g, "").slice(0, 1);
    const newOtp = [...otp];
    newOtp[idx] = val;
    setOtp(newOtp);

    if (val && idx < OTP_LENGTH - 1) {
      inputsRef.current[idx + 1]?.focus();
    }
  };

  const handleOtpKeyDown = (e, idx) => {
    if (e.key === "Backspace") {
      if (otp[idx]) {
        const newOtp = [...otp];
        newOtp[idx] = "";
        setOtp(newOtp);
      } else if (idx > 0) {
        inputsRef.current[idx - 1]?.focus();
      }
    } else if (e.key === "ArrowLeft" && idx > 0) {
      inputsRef.current[idx - 1]?.focus();
    } else if (e.key === "ArrowRight" && idx < OTP_LENGTH - 1) {
      inputsRef.current[idx + 1]?.focus();
    }
  };

  const handlePaste = (e) => {
    const paste = (e.clipboardData || window.clipboardData)
      .getData("text")
      .trim();
    if (!/^\d{4,}$/.test(paste)) return;
    const chars = paste.split("").slice(0, OTP_LENGTH);
    const newOtp = Array(OTP_LENGTH).fill("");
    chars.forEach((c, i) => (newOtp[i] = c));
    setOtp(newOtp);
    const last = Math.min(chars.length - 1, OTP_LENGTH - 1);
    inputsRef.current[last]?.focus();
  };

  // Verify: send { email, otp: "123456" } to backend
  const verifySend = async () => {
    setMessage(null);

    if (!sentOnce) {
      setMessage({ type: "error", text: "Request a code first." });
      return;
    }

    const code = otp.join("");
    if (code.length !== OTP_LENGTH) {
      setMessage({ type: "error", text: "Please enter full OTP." });
      return;
    }

    try {
      setVerifying(true);
      const response = await axios.post(verifyOtpUrl, {
        email: emailsend.email,
        otp: code,
      });
      console.log("verify response:", response.data);

      if (response.data?.status === "success" || response.status === 200) {
        setMessage({
          type: "success",
          text: response.data?.message || "Verified!",
        });
        navigate("/Login");
      } else {
        setMessage({
          type: "error",
          text: response.data?.message || "Invalid OTP",
        });
      }
    } catch (err) {
      console.error("Error verifying OTP:", err);
      setMessage({ type: "error", text: "Verification failed. Check server." });
    } finally {
      setVerifying(false);
    }
  };

  const clearOtp = () => {
    setOtp(Array(OTP_LENGTH).fill(""));
    inputsRef.current[0]?.focus();
  };
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#5F48D5] p-6">
      <div className="w-full max-w-md bg-white shadow-xl rounded-2xl p-8">
        <h2 className="text-2xl font-bold text-gray-800 text-center mb-2">
          Verify Your Email
        </h2>
        <p className="text-gray-500 text-center mb-6">
          Enter the code we sent to your email
        </p>

        <form onSubmit={otpSend} className="mb-6">
          <label className="text-sm font-medium text-gray-700">Email</label>
          <div className="flex gap-3 mt-2">
            <input
              type="email"
              name="email"
              placeholder="your@example.com"
              value={emailsend.email}
              onChange={handleChange}
              className="flex-1 px-4 py-3 border rounded-lg focus:ring-2 focus:ring-indigo-400 focus:outline-none"
              required
            />
            <button
              type="button"
              onClick={otpSend}
              disabled={sending}
              className={`px-4 py-2 rounded-lg text-white ${
                sending ? "bg-gray-600" : "bg-indigo-600 hover:bg-indigo-700"
              }`}
            >
              {sending ? "Sending..." : "Send"}
            </button>
          </div>
        </form>

        <div onPaste={handlePaste}>
          <p className="text-sm text-gray-600 mb-3">Enter 6-digit code</p>
          <div className="flex items-center justify-between gap-2">
            {otp.map((digit, i) => (
              <input
                key={i}
                ref={(el) => (inputsRef.current[i] = el)}
                value={digit}
                onChange={(e) => handleOtpChange(e, i)}
                onKeyDown={(e) => handleOtpKeyDown(e, i)}
                type="text"
                inputMode="numeric"
                maxLength="1"
                className="w-12 h-12 text-center border rounded-lg shadow-sm focus:ring-2 focus:ring-[#5F48D5] focus:outline-none text-lg"
                disabled={!sentOnce}
                aria-label={`OTP digit ${i + 1}`}
              />
            ))}
          </div>
        </div>

        <div className="mt-6 flex justify-between items-center">
          <button
            onClick={verifySend}
            disabled={otp.join("").length !== OTP_LENGTH || verifying}
            className={`px-5 py-2 rounded-lg font-medium text-white ${
              otp.join("").length === OTP_LENGTH && !verifying
                ? "bg-[#48d569]"
                : "bg-indigo-600 opacity-70 cursor-not-allowed"
            }`}
          >
            {verifying ? "Verifying..." : "Verify"}
          </button>

          <div className="flex items-center gap-3">
            <button
              onClick={clearOtp}
              type="button"
              className="text-sm text-indigo-600 underline"
            >
              Clear
            </button>

            <button
              onClick={otpSend}
              disabled={sending}
              type="button"
              className={`text-sm ${
                sending ? "text-gray-400" : "text-indigo-600 underline"
              }`}
            >
              Resend
            </button>
          </div>
        </div>

        {message && (
          <div
            className={`mt-4 p-3 rounded-md ${
              message.type === "error"
                ? "bg-red-50 text-red-700"
                : "bg-green-50 text-green-700"
            }`}
            role="alert"
          >
            {message.text}
          </div>
        )}
      </div>
    </div>
  );
}

export default OtpFind;
