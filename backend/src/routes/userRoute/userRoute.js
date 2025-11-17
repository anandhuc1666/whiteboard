import express, { Router } from "express"
import { register,generateOtp, verifyOtp } from "../../controller/auth/auth.js"

const route = Router()
route.post("/register",register)
route.post('/generateOtp',generateOtp)
route.post('/verifyOtp',verifyOtp)
export default route