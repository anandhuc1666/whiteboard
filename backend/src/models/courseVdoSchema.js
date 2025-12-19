import mongoose from "mongoose";

const courseVdo = new mongoose.Schema(
    {
        name:{type:String},
        status:{type:String,default:"true"},
        videoId:{type:String},
        img:{type:String},
        tittle:{type:String},
        discription:{type:String},
        episode:{type:String}
    }
)
const CSvideo = mongoose.model('courseVdo',courseVdo)
export default CSvideo