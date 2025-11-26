import express, { Router } from "express"
import { student } from "../../controller/students/students.js"
import verifyUser from "../../middleware/token.js"

const studentRoute = Router()
studentRoute.get('/student_profile',verifyUser,student)
export default studentRoute