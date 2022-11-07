const mongoose = require("mongoose");
const colors = require("colors");

const dotenv = require("dotenv").config();

const connectDB = async () => {
  try {
    const con = await mongoose.connect(process.env.MONGO_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log(
      `MongoDB connected to ${con.connection.host}`.underline.bgGreen
    );
  } catch (err) {
    console.log(`Error:${err.message}`);
    process.exit();
  }
};
module.exports = connectDB;
