const mongoose = require("mongoose");

const fileSchema = new mongoose.Schema(
  {
    owner: { type: String, required: true },
    images: { type: Array },
  },
  { timestamps: true }
);

const Files = mongoose.model("Files", fileSchema);

module.exports = Files;
