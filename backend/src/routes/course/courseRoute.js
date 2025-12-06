import express from "express";
import { addCourseVideo, deltVdo, getVdo_GO } from "../../controller/courseController.js";
import courseUpload from "../../middleware/courseUpload.js";

const route = express.Router();

// 'videoFile' and 'thumbnail' are the keys you must use in the frontend
const uploadFields = courseUpload.fields([
  { name: 'videoFile', maxCount: 1 },
  { name: 'thumbnail', maxCount: 1 }
]);

route.post("/add-video", uploadFields, addCourseVideo);
route.get('/find_GO',getVdo_GO)
route.delete('/delete_GO',deltVdo)

export default route;