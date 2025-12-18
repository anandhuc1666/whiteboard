import User from "../../models/authSchema.js";

export const student = async (req, res) => {
  try {
    const userId =  req.user.id;
    if(!userId){
        return res.status(400).json({message:"token user not found"})
    }
    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).json({ message: "user not found" });
    }
    console.log(user);
    return res.status(200).json({ message: "user found successfully", user });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "server issue" });
  }
};

export const profileEid = async(req,res)=>{
  const profileImage = req.file ? req.file.path : "";
  try {
    const userId = req.user.id
    if(!userId){
      return res.status(400).json({message:'user not found'})
    }
    const user = await User.findById(userId)
    user.profileImage = profileImage
    user.save()
    return res.status(200).json({message:'profile update sucessfully'})
  } catch (error) {
     console.log(error);
    return res.status(500).json({ message: "server issue" });
  }
}


export const students_list = async(req,res)=>{
  try {
    const users = await User.find()
    const find_student = users.filter((i,k)=>i.role === "student")
    if(!users){
      return res.status(404).json({message:'no user exsisted now'})
    }
    res.status(200).json({message:'students list',users:find_student})
  } catch (error) {
    console.log(error)
    return res.status(500).json({ message: "server issue" });
  }
}
