import mongoose, { model } from "mongoose";

const courseVdo = new mongoose.Schema(
    {
        name:{type:String},
        videoId:{type:String},
        img:{type:String},
        tittle:{type:String},
        discription:{type:String},
        episode:{type:String}
    }
)
const CSvideo = mongoose.model('courseVdo',courseVdo)
export default CSvideo