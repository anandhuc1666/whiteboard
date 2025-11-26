import User from "../../models/authSchema.js";

export const student = async (req, res) => {
  try {
    const userId =  req.user.id;
    console.log(userId);
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
