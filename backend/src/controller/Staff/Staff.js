import User from "../../models/authSchema.js";

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
        email:user.email,
        number: user.number,
        courseId:user.course,
        course: CourseId
      },
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "internal issue" });
  }
};
