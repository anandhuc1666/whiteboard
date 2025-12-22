import express from "express";
import {
  addCourseVideo,
  deltVdo,
  getVdo_GO,
  getVdo_python,
  singleVdo,
  testVideo,
} from "../../controller/courseController.js";
import courseUpload from "../../middleware/courseUpload.js";
import verifyUser from "../../middleware/token.js";

const route = express.Router();

// 'videoFile' and 'thumbnail' are the keys you must use in the frontend
const uploadFields = courseUpload.fields([
  { name: "videoFile", maxCount: 1 },
  { name: "thumbnail", maxCount: 1 },
]);
// added all CRUD opperations on their
route.post("/add-video", uploadFields, addCourseVideo);
route.get("/find_GO", verifyUser, getVdo_GO);
route.delete("/delete_GO", deltVdo);
route.get("/select", singleVdo);
//python
route.get("/find_PYTHON", verifyUser, getVdo_python);
// train version for the new student's
route.get("/trail_fatch", verifyUser, testVideo);
export default route;
