const express = require("express");
const router = express.Router();
const UserController = require('../Controllers/user')
const Authentication = require('../Authentication/auth')


router.post('/register',UserController.register);
router.post('/login',UserController.login)
router.post('/send-otp',UserController.sendOtp);
router.post('/verify-otp',UserController.verifyOtp);
router.post('/reset-password',UserController.resetPassword);

router.put('/update-student/:id',Authentication.adminFacultyAuth,UserController.updateStudentById);

//get particular student by his roll number
router.get("/get-student-by-roll/:roll",Authentication.adminFacultyAuth,UserController.getStudentByRollNo);

//Register Student frist time by any staff
router.post("/registerStudentByStaff",Authentication.adminFacultyAuth,UserController.registerStudentByStaff)
module.exports = router;