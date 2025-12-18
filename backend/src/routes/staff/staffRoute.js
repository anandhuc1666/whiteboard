import express, { Router } from "express"
import verifyUser from "../../middleware/token.js";
import { userStaff } from "../../controller/Staff/Staff.js";

const staffRoute = Router()

 staffRoute.get('/staff_profile',verifyUser,userStaff)

export default staffRoute