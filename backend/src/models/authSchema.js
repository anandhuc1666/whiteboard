import mongoose from "mongoose";
import { type } from "os";
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
  otp: {
    type: String,
  }
});
const User = mongoose.model("auth", UserSchema);
export default User;
