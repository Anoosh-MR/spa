const MultipleFile = require("../models/fileModel");

const multipleFileUpload = async (req, res) => {
  console.log(req.body);
  try {
    // let filesArray = [];
    // req.files.forEach((element) => {
    //   const file = {
    //     fileName: element.originalname,
    //     filePath: element.path,
    //     fileType: element.mimetype,
    //     fileSize: fileSizeFormatter(element.size, 2),
    //   };
    //   filesArray.push(file);
    // });
    // console.log(req.files);
    const multipleFiles = new MultipleFile({
      title: req.body.title,
      files: req.files,
    });
    await multipleFiles.save();
    res.status(201).send("Files Uploaded Successfully");
  } catch (error) {
    res.status(500).send(error.message);
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
  const { title } = req.body;
  try {
    const files = await MultipleFile.find(title);

    res.status(200).send(files);
  } catch (error) {
    res.status(400).send(error.message);
  }
};

module.exports = {
  multipleFileUpload,
  getallMultipleFiles,
};
