import mongoose from "mongoose";
const UserSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  lastName: {
    type: String,
  },
  age: {
    type: Number,
  },
  number: {
    type: Number,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  role:{
   type:String,
   default:"student"
  },
  payment:{
    type:Boolean,
    default:false
  },
  course:{
    type:String,
    default:"null"
  },
  otp: {
    type: String,
  }
});
const User = mongoose.model("auth", UserSchema);
export default User;
