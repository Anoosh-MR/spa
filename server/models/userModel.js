const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const userSchema = mongoose.Schema(
  {
    firstname: {
      type: String,
      trim: true,
      required: [true, "Firstname is requires"],
    },
    lastname: {
      type: String,
      trim: true,
      required: [true, "Lastname is requires"],
    },
    email: {
      type: String,
      required: true,
      unique: true,
      required: [true, "Lastname is requires"],
    },
    phone: {
      type: Number,
      required: [true, "Number is requires"],
    },
    password: {
      type: String,
      required: [true, "Password is requires"],
    },
    Varified: {
      type: Boolean,
      default: false,
    },
    AcceptTerms: {
      type: Boolean,
      default: true,
    },
  },
  { timestamps: true }
);

// hashing
userSchema.pre("save", async function (next) {
  if (!this.isModified) {
    next();
  }

  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
});

// compare password
userSchema.methods.comparePassword = async function (pass) {
  return await bcrypt.compare(pass, this.password);
};

const User = mongoose.model("User", userSchema);
module.exports = User;
