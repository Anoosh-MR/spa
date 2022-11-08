const mongoose = require("mongoose");

const fileSchema = new mongoose.Schema(
  {
    owner: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    content: [{ type: String, trim: true }],
  },
  { timestamps: true }
);

const Files = mongoose.model("Files", fileSchema);

module.exports = Files;
