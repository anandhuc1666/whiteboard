import express, { Router } from "express"
import { register,generateOtp, verifyOtp,student_login, staff_login, genaratePass } from "../../controller/auth/auth.js"
import upload from "../../middleware/upload.js"

const route = Router()
route.post("/register", (req, res, next) => {
    upload.single("profileImage")(req, res, (err) => {
        if (err) {
            console.error("Upload Error:", err);
            return res.status(500).json({ message: "Image Upload Failed", error: err.message });
        }
        next();
    });
}, register);
route.post('/generateOtp',generateOtp)
route.post('/verifyOtp',verifyOtp)
route.post('/user-login',student_login)
route.post('/verify-password',genaratePass)
//staff section
route.post('/staff_login',staff_login)
export default route