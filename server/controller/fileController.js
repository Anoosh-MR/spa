const MultipleFile = require("../models/fileModel");

const multipleFileUpload = async (req, res) => {
  try {
    let filesArray = [];
    req.files.forEach((element) => {
      const file = {
        fileName: element.originalname,
        filePath: element.path,
        fileType: element.mimetype,
        title: req.body.title,
        fileSize: fileSizeFormatter(element.size, 2),
      };
      filesArray.push(file);
    });
    const multipleFiles = new MultipleFile({
      title: req.body.title,
      files: filesArray,
    });
    await multipleFiles.save();
    res.status(201).send("Files Uploaded Successfully");
  } catch (error) {
    res.status(400).send(error.message);
  }
};

const fileSizeFormatter = (bytes, decimal) => {
  if (bytes === 0) {
    return "0 Bytes";
  }
  const dm = decimal || 2;
  const sizes = ["Bytes", "KB", "MB", "GB", "TB", "PB", "EB", "YB", "ZB"];
  const index = Math.floor(Math.log(bytes) / Math.log(1000));
  return (
    parseFloat((bytes / Math.pow(1000, index)).toFixed(dm)) + " " + sizes[index]
  );
};

const getallMultipleFiles = async (req, res) => {
  const title = req.body.title;
  try {
    const files = await MultipleFile.find({
      title: title,
    });

    res.status(200).send(files);
  } catch (error) {
    res.status(400).send(error.message);
  }
};

const removefiles = async (req, res) => {
  try {
    await MultipleFile.updateOne(
      { files: req.body },
      { $pull: { files: req.body } }
    );

    res.status(200).json({ message: "delete successfull" });
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  multipleFileUpload,
  getallMultipleFiles,
  removefiles,
};
