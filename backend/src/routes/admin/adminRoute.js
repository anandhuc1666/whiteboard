import express, { Router } from "express"
import { adminData } from "../../controller/admin/admin.js"
import verifyUser from "../../middleware/token.js"

const routeAdmin = Router()

routeAdmin.get('/admin_id/admin',verifyUser,adminData)

export default routeAdmin