import mongoose from "mongoose";
const UserSchema = new mongoose.Schema(
    {
        name:{
            type:String
        },
        lastName:{
            type:String
        },
        age:{
            type:Number
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
const User = mongoose.model("auth",UserSchema)
export default User