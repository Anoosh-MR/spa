const express = require("express");
const { upload } = require("../config/fileHelper");
const {
  multipleFileUpload,
  getallMultipleFiles,
  removefiles,
} = require("../controller/fileController");
const authenticateJWT = require("../middleware/AuthMiddleware");

const router = express.Router();

// router.route("/").post(Fetchfiles);
// router.route("/add").post(authenticateJWT, addfiles);
router.post("/fileUpload", upload.array("files"), multipleFileUpload);
router.post("/getFiles", getallMultipleFiles);
router.post("/delete", removefiles);

module.exports = router;
