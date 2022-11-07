const express = require("express");
const dotenv = require("dotenv").config();
const colors = require("colors");
const ConnectDB = require("./config/db");
const userRouter = require("./routes/userRoutes");

const app = express();
app.use(express.json());

ConnectDB();

app.use("/api/user/", userRouter);

const port = process.env.PORT;

app.listen(port, (req, res) => {
  console.log(`server is running on port:${port}`.bold.green);
});
