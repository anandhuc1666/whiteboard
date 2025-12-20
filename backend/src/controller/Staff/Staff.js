import User from "../../models/authSchema.js";
import CSvideo from "../../models/courseVdoSchema.js";
import { student } from "../students/students.js";

const GO = `https://drive.google.com/thumbnail?id=1SfSE3pUd1n7Q2H5Cv6HMdbRpnSIlt9sh&sz=s800`;
const FLUTTER = `https://drive.google.com/thumbnail?id=1NoPei2UHe_ZoX1HfmqTA-i0k4Rb561Ph&sz=s800`;
const JAVASCRIPT = `https://drive.google.com/thumbnail?id=1TDaF2PMXJnQRP5nymDrh-LegZt5Ptvt8&sz=s800`;
const PYTHON = `https://drive.google.com/thumbnail?id=1cQfwvc_gngwcC1XMVR-WxQ83EevFDIVb&sz=s800`;
const JAVA = `https://drive.google.com/thumbnail?id=1ocFqUd1EAw-xxRrjZ2DPcKi0LgeFGcGd&sz=s800`;
const userCourse = [
  { name: "GO", image: GO },
  { name: "FLUTTER", image: FLUTTER },
  { name: "JAVASCRIPT", image: JAVASCRIPT },
  { name: "PYTHON", image: PYTHON },
  { name: "JAVA", image: JAVA },
];
export const userStaff = async (req, res) => {
  try {
    const userId = req.user.id;
    if (!userId) {
      return res.status(400).json({ message: "no user _id: found" });
    }
    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).json({ message: "user not found" });
    }

    const CourseId = userCourse.find((course) => course.name === user.course);
    if (!CourseId) {
      return res.status(400).json({ message: "staff course id missing" });
    }
    return res.status(200).json({
      message: "staff data is found",
      staff: {
        _id: user._id,
        name: user.name,
        email: user.email,
        number: user.number,
        courseId: user.course,
        course: CourseId,
      },
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "internal issue" });
  }
};
export const get_all_V_S = async (req, res) => {
  try {
    const students_list = await User.find({ role: "student" });
    const get_video = await CSvideo.find();
    // students ID find all student type
    const Go_students = students_list.filter(
      (course) => course.course === "GO"
    );
    const JAVA_students = students_list.filter(
      (course) => course.course === "JAVA"
    );
    const PYTHON_students = students_list.filter(
      (course) => course.course === "PYTHON"
    );
    const JAVASCRIPT_students = students_list.filter(
      (course) => course.course === "JAVASCRIPT"
    );
    const FLUTTER_students = students_list.filter(
      (course) => course.course === "FLUTTER"
    );
    // course ID, find all course type
    const Go_videos = get_video.filter((video) => video.name === "GO");
    const JAVA_videos = get_video.filter((video) => video.name === "JAVA");
    const PYTHON_videos = get_video.filter((video) => video.name === "PYTHON");
    const JAVASCRIPT_videos = get_video.filter(
      (video) => video.name === "JAVASCRIPT"
    );
    const FLUTTER_videos = get_video.filter(
      (video) => video.name === "FLUTTER"
    );

    // find the all length of the students and course type also
    const Go_student = Go_students.length;
    const Go_video = Go_videos.length;

    const JAVA_student = JAVA_students.length;
    const JAVA_video = JAVA_videos.length;

    const PYTHON_student = PYTHON_students.length;
    const PYTHON_video = PYTHON_videos.length;

    const JAVASCRIPT_student = JAVASCRIPT_students.length;
    const JAVASCRIPT_video = JAVASCRIPT_videos.length;

    const FLUTTER_student = FLUTTER_students.length;
    const FLUTTER_video = FLUTTER_videos.length;
    return res.status(200).json({
      message: "data ready to fach",
      students: {
        GO: Go_student,
        JAVA: JAVA_student,
        PYTHON: PYTHON_student,
        JAVASCRIPT: JAVASCRIPT_student,
        FLUTTER: FLUTTER_student,
      },
      video: {
        GO: Go_video,
        JAVA: JAVA_video,
        PYTHON: PYTHON_video,
        JAVASCRIPT: JAVASCRIPT_video,
        FLUTTER: FLUTTER_video,
      },
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "internal server issue" });
  }
};

export const staff_List = async (req, res) => {
  try {
    const staffs = await User.find();
    if (!staffs) {
      return res.status(404).json({ message: "staff not found" });
    }
    const staff = staffs.filter((i) => i.role == "mentor");
    return res.status(200).json({ message: "staff lists", staff: staff });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "internal server issue" });
  }
};
