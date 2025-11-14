import express, { Router } from "express"
import { register } from "../../controller/auth/auth.js"

const route = Router()
route.post("/register",register)
export default route