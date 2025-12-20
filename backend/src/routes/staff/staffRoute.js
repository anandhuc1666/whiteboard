import express, { Router } from "express"
import verifyUser from "../../middleware/token.js";
import { get_all_V_S, staff_List, userStaff } from "../../controller/Staff/Staff.js";

const staffRoute = Router()

 staffRoute.get('/staff_profile',verifyUser,userStaff)
 staffRoute.get('/get_all_V_S',get_all_V_S)
 staffRoute.get('/staff_lists',staff_List)

export default staffRoute