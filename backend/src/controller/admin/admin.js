import User from "../../models/authSchema.js";
import CSvideo from "../../models/courseVdoSchema.js";

export const adminData = async (req, res) => {
  try {
    const userId = req.user.id;
    if(!userId){return res.status(404).json({message:'user not found'})}
   const user = await User.findById(userId)
   if(!user){
    return res.status(400).json({message:'user not exsisted'})
   }
   if(user.role === "admin"){
    const users = await User.find()
    const videos = await CSvideo.find()
    return res.status(200).json({message:'admin is the head',users,videos})
   }
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "internal server issue" });
  }
};
