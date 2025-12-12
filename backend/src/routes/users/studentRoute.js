import express, { Router } from "express";
import { profileEid, student } from "../../controller/students/students.js";
import verifyUser from "../../middleware/token.js";
import upload from "../../middleware/upload.js";

const studentRoute = Router();
studentRoute.get("/student_profile",verifyUser,student);
studentRoute.post('/profile_edit',verifyUser,(req, res, next) => {
    upload.single("profileImage")(req, res, (err) => {
        if (err) {
            console.error("Upload Error:", err);
            return res.status(500).json({ message: "Image Upload Failed", error: err.message });
        }
        next();
    });
},profileEid)

export default studentRoute;
