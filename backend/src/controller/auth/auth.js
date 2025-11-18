import User from "../../models/authSchema.js";
import bcrypt from "bcrypt";
import crypto from "crypto";
import {sendOtp} from "../../utils/sendEmail.js"

//new user register form
export const register = async (req, res) => {
  const { name, lastName, age, number, email, password } = req.body;
  try {
    if (!name || !age || !number || !email || !password) {
      return res.status(404).json({ message: "please fill the form" });
    }
    const user = await User.findOne({ email });
    if (user) {
      return res
        .status(400)
        .json({ message: `sorry!, ${email} this email already exsisted` });
    }
    const solid = await bcrypt.hash(password, 8);
    const users = await User.create({
      name: name,
      lastName: lastName,
      age: age,
      number: number,
      email: email,
      password: solid,
    });
    res.status(200).json({ message: "user is created" });
    await users.save();
  } catch (error) {
    console.log(error);
   return res.status(500).json({ message: "internel server issue" });
  }
};

export const generateOtp = async (req, res) => {
  const { email } = req.body;
  try {
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ message: "User not found" });
    }
    const otp = crypto.randomInt(100000, 999999).toString();
    user.otp = otp;
    user.otpExpires = Date.now() + 10 * 60 * 1000;
    await user.save();
    await sendOtp(email, otp);
    res.status(200).json({ message: "OTP send to email" });
  } catch (error) {
    console.log(error);
   return res.status(500).json({ message: "internel server issue" });
  }
};

export const verifyOtp = async(req,res)=>{
  const {email,otp} = req.body;
  try {
    const user = await User.findOne({email})
    if(!user){
      return res.status(400).json({message:"user email is invalide"})
    }
    if(user.otp != otp || user.otpExpires <Date.now()){
      return res.status(400).json({message:"user OTP invalide "})
    }
    user.otp = null
    user.otpExpires = null
    await user.save()
    return res.status(200).json({message:"user OTP verifyed successfully"})
  } catch (error) {
      console.log(error);
   return res.status(500).json({ message: "internel server issue" });
  }
}


//find the use and jwt genarate

export const login = async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
  }
};
