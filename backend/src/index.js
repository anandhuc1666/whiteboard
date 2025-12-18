import express from "express"
import mongoose from "mongoose"
import cors from "cors"
import dotenv from "dotenv"
import route from "./routes/userRoute/userRoute.js"
import cookieParser from "cookie-parser"
import studentRoute from "./routes/users/studentRoute.js"
import courseRoute from "./routes/course/courseRoute.js"
import staff_profile from "./routes/staff/staffRoute.js"

const app = express()
app.use(express.json())
app.use(cors({
  origin: "http://localhost:5173",
  credentials: true               
}))
dotenv.config()
app.use(cookieParser()) 
mongoose.connect(process.env.MONGO_DB)
.then(()=>console.log('mongoDB conected'))
.catch((err)=>console.log('mongoDB not connected'))

app.use("/user",route)
app.use("/students",studentRoute)
app.use("/api/course", courseRoute);
app.use("/api/staff",staff_profile)

const PORT = process.env.PORT || 3001

app.listen(PORT,()=>console.log(`server is running on ${PORT}`))