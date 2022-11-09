const express = require("express");
const dotenv = require("dotenv").config();
const colors = require("colors");
var cors = require("cors");
const path = require("path");

const ConnectDB = require("./config/db");
const userRouter = require("./routes/userRoutes");
const postRouter = require("./routes/postRouter");

const app = express();
app.use(express.json());
app.use(cors());

ConnectDB();

// multer
app.use("/uploads", express.static(path.join(__dirname, "/uploads")));

app.use("/api/user/", userRouter);
app.use("/api/post/", postRouter);

const port = process.env.PORT;

app.listen(port, (req, res) => {
  console.log(`server is running on port:${port}`.bold.green);
});
