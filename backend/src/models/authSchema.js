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
  otp: {
    type: String,
  },
  otpExpires: {
    type: Date,
  },
});
const User = mongoose.model("auth", UserSchema);
export default User;
