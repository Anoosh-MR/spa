const jwt = require("jsonwebtoken");
const dotenv = require(dotenv).config();
const User = require("../models/userModel");

const authenticateJWT = (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (authHeader) {
    const token = authHeader.split(" ")[1];

    jwt.verify(token, process.env.JWT_TOKEN, async (err, decoded) => {
      if (err) {
        return res.sendStatus(403);
      }

      req.user = await User.findById(decoded.id).select("-password");
      next();
    });
  } else {
    res.sendStatus(401);
    throw new Error("Not authorized, token failed");
  }
};
