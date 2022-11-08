const express = require("express");
const { addfiles } = require("../controller/fileController");
const authenticateJWT = require("../middleware/AuthMiddleware");

const router = express.Router();

// router.route("/").post(Fetchfiles);
router.route("/add").post(authenticateJWT, addfiles);
// router.put("/delete").delete(removefiles);

module.exports = router;
