import express, { Router } from "express"
import { register,generateOtp, verifyOtp,student_login, staff_login, genaratePass } from "../../controller/auth/auth.js"
import verifyUser from "../../middleware/token.js"

const route = Router()
route.post("/register",register)
route.post('/generateOtp',generateOtp)
route.post('/verifyOtp',verifyOtp)
route.post('/user-login',student_login)
route.post('/verify-password',genaratePass)
//staff section
route.post('/staff_login',staff_login)
export default route