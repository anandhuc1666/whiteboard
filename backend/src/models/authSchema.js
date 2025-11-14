import mongoose from "mongoose";
const UserSchema = new mongoose.Schema(
    {
        name:{
            type:String
        },
        number:{
            type:Number
        },
        email:{
            type:String,
            require:true
        },
        password:{
            type:String,
            require:true
        }
    }
)
const User = mongoose.model("Users",UserSchema)
export default User