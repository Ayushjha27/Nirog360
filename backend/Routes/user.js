const express = require("express");
const router = express.Router();
const UserController = require('../Controllers/user')
const Authentication = require('../Authentication/auth')


router.post('/register',UserController.register);
router.post('/login',UserController.login)
router.post('/logout',Authentication.studentAuth,UserController.logout)
router.post('/send-otp',UserController.sendOtp);
router.post('/verify-otp',UserController.verifyOtp);
router.post('/reset-password',UserController.resetPassword);

router.put('/update-student/:id',Authentication.adminFacultyAuth,UserController.updateStudentById);

//get particular student by his roll number
router.get("/get-student-by-roll/:roll",Authentication.adminFacultyAuth,UserController.getStudentByRollNo);

//Register Student frist time by any staff
router.post("/registerStudentByStaff",Authentication.adminFacultyAuth,UserController.registerStudentByStaff)

//to add staff
router.post('/add-staff',Authentication.adminFacultyAuth,UserController.addStaffsByAdmin);

//update staff by admin 
router.put("/update-staff/:id",Authentication.adminFacultyAuth,UserController.updateStaffById);
//get list of staff
router.get("/get-staff",UserController.getAllStaffs)
//delete any staff by admin
router.delete("/delete-staff/:id",Authentication.adminFacultyAuth,UserController.deleteStaff);
module.exports = router;