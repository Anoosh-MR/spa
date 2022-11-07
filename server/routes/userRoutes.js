const express = require("express");
const {
  registerUser,
  loginUser,
  varifyOtp,
  resendOtp,
} = require("../controller/userController");

const router = express.Router();

router.route("/").post(registerUser);
router.route("/login").post(loginUser);
// varify email
router.route("/varifyOtp").post(varifyOtp);
router.route("/resendOtp").post(resendOtp);

module.exports = router;
