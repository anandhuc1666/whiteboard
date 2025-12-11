import User from "../models/authSchema.js";
import CSvideo from "../models/courseVdoSchema.js"; // Importing your existing model

export const addCourseVideo = async (req, res) => {
  try {
    const { name, tittle, discription, episode } = req.body;
    const videoFile = req.files["videoFile"] ? req.files["videoFile"][0] : null;
    const thumbnail = req.files["thumbnail"] ? req.files["thumbnail"][0] : null;

    if (!videoFile || !thumbnail) {
      return res
        .status(400)
        .json({ message: "Both video and thumbnail are required" });
    }

    const newVideo = new CSvideo({
      name: name,
      tittle: tittle,
      discription: discription,
      episode: episode,
      videoId: videoFile.path, // Cloudinary Secure URL for the video
      img: thumbnail.path, // Cloudinary Secure URL for the image
    });

    await newVideo.save();

    res
      .status(201)
      .json({ message: "Course video uploaded successfully", data: newVideo });
  } catch (error) {
    console.error("Upload error:", error);
    res.status(500).json({ message: "Server Error", error: error.message });
  }
};

//get all video if mendor they get all course related vedio may if they are student they only get the course base vedio

export const getVdo_GO = async (req, res) => {
  try {
    const userId = req.user.id;
    console.log(userId);
    const user = await User.findById(userId);
    if (!user) {
      return res.status(400).json({ message: "no user login" });
    }
    if (user.role == "student") {
      const getVdo = await CSvideo.find({ name: `${user.course}` });
      if (!getVdo) {
        return res.status(400).json({ message: "course not available" });
      }
      res.status(200).json({ message: "send course", course: getVdo });
    }
    if (user.role == "mentor") {
      const getVdo = await CSvideo.find({ name: "GO" });
      if (!getVdo) {
        return res.status(400).json({ message: "course not available" });
      }
      res.status(200).json({ message: "send course", course: getVdo });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "server issue" });
  }
};

//delete video by id base

export const deltVdo = async (req, res) => {
  try {
    const dltID = req.query.videoId;
    if (!dltID) {
      return res.status(400).json({ message: "_id: not found" });
    }
    console.log(dltID);
    const getVdo = await CSvideo.findOneAndDelete({ _id: dltID });
    console.log(getVdo);
    if (!getVdo) {
      return res.status(404).json({ message: "no file are exsisted now" });
    }
    res.status(200).json({ message: "selected video deleted successfully" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "server issue" });
  }
};

//select single 

export const singleVdo =async(req,res)=>{
  try {
    const vdoId = req.query.videoId
    if(!vdoId){
      return res.status(400).json({message:"no video found"})
    }
    const vedio_list = await CSvideo.findById({_id:vdoId})
    if(!vedio_list){
      return res.status(400).json({message:"no video is found on this id"})
    }
    res.status(200).json({message:'seleted video', video:vedio_list})
  } catch (error) {
    console.log(error)
  }
}