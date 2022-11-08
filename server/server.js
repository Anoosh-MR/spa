const express = require("express");
const dotenv = require("dotenv").config();
const colors = require("colors");
var cors = require("cors");
const multer = require("multer");
const ConnectDB = require("./config/db");
const userRouter = require("./routes/userRoutes");
const postRouter = require("./routes/postRouter");

const app = express();
app.use(express.json());
app.use(cors());

ConnectDB();

// multer
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "images");
  },
  filename: (req, file, cb) => {
    cb(null, req.body.name);
  },
});

const upload = multer({ storage: storage });
app.post("/api/upload", upload.array("file"), (req, res) => {
  res.status(200).json("file has been uploaded");
});

app.use("/api/user/", userRouter);
app.use("/api/post/", postRouter);

const port = process.env.PORT;

app.listen(port, (req, res) => {
  console.log(`server is running on port:${port}`.bold.green);
});
