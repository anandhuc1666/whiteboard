import express, { Router } from "express"
import { register,generateOtp, verifyOtp, login } from "../../controller/auth/auth.js"

const route = Router()
route.post("/register",register)
route.post('/generateOtp',generateOtp)
route.post('/verifyOtp',verifyOtp)
route.post('/user-login',login)
export default route