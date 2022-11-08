const Files = require("../models/fileModel");
const User = require("../models/userModel");

const addfiles = async (req, res) => {
  const { userId, fileData } = req.body;
  try {
    const existFile = await Files.find({ owner: userId });

    var newFile = {
      sender: req.user._id,
      content: [...existFile, fileData],
    };
    const SavedFiles = new Files.create(newFile);
    SavedFiles = await User.populate("owner");
    res.json(SavedFiles);
  } catch (err) {
    throw new Error(error.messages);
  }
};

module.exports = { addfiles };
