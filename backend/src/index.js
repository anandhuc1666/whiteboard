import express from "express"
import mongoose from "mongoose"
import cors from "cors"
import dotenv from "dotenv"

const app = express()
app.use(express.json())
app.use(cors())
dotenv.config()

mongoose.connect(process.env.MONGO_DB)
.then(()=>console.log('mongoDB conected'))
.catch((err)=>console.log('mongoDB not connected'))

const PORT = process.env.PORT || 3001

app.listen(PORT,()=>console.log(`server is running on ${PORT}`))