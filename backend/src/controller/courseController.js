import CSvideo from "../models/courseVdoSchema.js"; // Importing your existing model

export const addCourseVideo = async (req, res) => {
  try {
    const { name, tittle, discription, episode } = req.body;

    // Multer adds 'files' object for multiple uploads
    // We expect fields named 'videoFile' and 'thumbnail'
    const videoFile = req.files['videoFile'] ? req.files['videoFile'][0] : null;
    const thumbnail = req.files['thumbnail'] ? req.files['thumbnail'][0] : null;

    if (!videoFile || !thumbnail) {
      return res.status(400).json({ message: "Both video and thumbnail are required" });
    }

    const newVideo = new CSvideo({
      name: name,
      tittle: tittle,
      discription: discription,
      episode: episode,
      videoId: videoFile.path, // Cloudinary Secure URL for the video
      img: thumbnail.path      // Cloudinary Secure URL for the image
    });

    await newVideo.save();

    res.status(201).json({ message: "Course video uploaded successfully", data: newVideo });
  } catch (error) {
    console.error("Upload error:", error);
    res.status(500).json({ message: "Server Error", error: error.message });
  }
};