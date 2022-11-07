const nodemailer = require("nodemailer");
const bcrypt = require("bcrypt");
const OtpModel = require("../models/OtpVarificationModel");

let transporter = nodemailer.createTransport({
  host: "smtp.ethereal.email",
  port: 587,
  auth: {
    user: "lynn.douglas@ethereal.email",
    pass: "Vd3SKK27AnTVRgddBC",
  },
});

transporter.verify(function (error, success) {
  if (error) {
    console.log(error);
  } else {
    console.log("Server is ready to take our messages");
  }
});

const EmailVarification = async ({ id, email }, res) => {
  try {
    const otp = `${Math.floor(1000 + Math.random() * 9000)}`;

    const mailOption = {
      from: "lynn.douglas@ethereal.email",
      to: email,
      subject: "Varify your Email",
      html: `<p>Enter <b>${otp}</b>in the app</p>
          <p>This code expires in <b>15 minutes</b></p>`,
    };

    const saltRound = 10;
    const hashedOtp = await bcrypt.hash(otp, saltRound);
    const newOTPverification = await new OtpModel({
      userId: id,
      otp: hashedOtp,
      createdAt: Date.now(),
      expireDate: Date.now() + 1000000,
    });
    const NewOTP = await newOTPverification.save();

    await transporter.sendMail(mailOption);
    res.json({
      status: "PENDING",
      message: "Varification Otp email send",
      userId: id,
      email,
    });
  } catch (err) {
    res.status(500).json({
      message: err.message,
    });
  }
};
module.exports = EmailVarification;
