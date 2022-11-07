const mongoose = require("mongoose");

const OTPschema = mongoose.Schema(
  {
    UserId: {
      type: String,
    },
    otp: {
      type: String,
    },
    createdAt: {
      type: Date,
    },
    expireDate: {
      type: Date,
    },
  },
  { timestamps: true }
);

const OtpModel = mongoose.model("OTP", OTPschema);
module.exports = OtpModel;
