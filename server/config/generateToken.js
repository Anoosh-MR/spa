const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");

const generateToken = (id, username) => {
  return jwt.sign({ id, username }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT__EXPIRE,
  });
};

module.exports = generateToken;
