const { json } = require("express");
const Files = require("../models/fileModel");
const User = require("../models/userModel");

const addfiles = async (req, res) => {
  const { userId, images } = req.body;
  const existImages = await Files.find({ owner: userId });
  try {
    const data = {
      owner: userId,
      images,
    };
    const newImage = await Files.create({
      ...existImages,
      data,
    });
    const savedImages = await newImage.save();
    res.status(200).json({
      savedImages,
    });
  } catch (err) {
    res.status(500).json(err.message);
  }
};

module.exports = { addfiles };
