import Nodemailer from "nodemailer"
import dotenv from "dotenv"

dotenv.config()

const transporter = Nodemailer.createTransport({
    service: 'gmail',
    auth:{
        user:process.env.EMAIL_USER,
        pass:process.env.EMAIL_PASSWORD 
    }
})

export const sendOtp = async(email,otp)=>{
    const mailOptions = {
        from:process.env.EMAIL_USER,
        to:email,
        subject:`your OTP code`,
        text:`Your OTP Code is ${otp}`
    }
    try {
        await transporter.sendMail(mailOptions)
        console.log(`otp send to the email successfully`)
    } catch (error) {
        console.log(`error sending OTP email:`,error)
        throw new Error(`failed to send OTP email`)
    }
}