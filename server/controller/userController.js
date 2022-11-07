const generateToken = require("../config/generateToken");
const EmailVarification = require("../config/NodeMailer");
const User = require("../models/userModel");
const OtpModel = require("../models/OtpVarificationModel");
const bcrypt = require("bcrypt");

// Register User

const registerUser = async (req, res) => {
  const { firstname, lastname, email, phone, password } = req.body;
  if (!firstname || !lastname || !email || !phone || !password) {
    res.status(400);
    throw new Error("All fields are  mandatory!");
  }
  const existingUser = await User.findOne({ email });
  if (existingUser) {
    res.status(400).json("user alredy exist");
  }
  try {
    const newUser = new User({
      firstname,
      lastname,
      email,
      phone,
      password,
    });
    const user = await newUser
      .save()
      .then((data) => EmailVarification(data, res));
  } catch (err) {
    res.status(500).json(err.message);
  }
};

// login user

const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    const isMatch = await user.comparePassword(password);
    if (user && isMatch) {
      res.status(200).json({
        _id: user._id,
        firstname: user.firstname,
        lastname: user.lastname,
        email: user.email,
        phone: user.phone,
        pic: user.pic,
        token: generateToken(user._id),
      });
    }
  } catch (err) {
    res.status(500).json(err.message);
  }
};

// varifyOtp
const varifyOtp = async (req, res) => {
  try {
    let { userId, otp } = req.body;
    if (!userId || !otp) {
      throw Error("Empty OTP details");
    } else {
      const OtpRecord = await OtpModel.find({ userId });
      if (OtpRecord.length <= 0) {
        throw new Error(
          "Account record doesnot exist or has been verified alredy.Please sign up or log in!"
        );
      } else {
        const { expireDate } = OtpRecord[0];
        const hashedOTP = OtpRecord[0].otp;

        if (expireDate < Date.now()) {
          await OtpModel.deleteMany({ userId });
          throw new Error("OTP expired.please request again");
        } else {
          const validOTP = bcrypt.compare(otp, hashedOTP);
          if (!validOTP) {
            throw new Error("The OTP was in valid please check your email!");
          } else {
            await User.updateOne({ _id: userId }, { varified: true });
            await OtpModel.deleteMany({ userId });
            res.json({
              status: "VERIFIED",
              message: "User email varified successfully.",
            });
          }
        }
      }
    }
  } catch (err) {
    res.json({
      status: "FAILED!",
      message: err.message,
    });
  }
};
// resend otp
const resendOtp = async (req, res) => {
  try {
    let { userId, email } = req.body;
    if (!userId || !email) {
      throw Error("Empty OTP details");
    } else {
      await OtpModel.deleteMany({ userId });
      EmailVarification({ _id: userId, email }, res);
    }
  } catch (err) {
    res.json({
      status: "FALILED",
    });
  }
};

module.exports = { registerUser, loginUser, varifyOtp, resendOtp };
