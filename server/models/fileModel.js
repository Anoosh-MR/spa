const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const mulitipleFileSchema = new Schema(
  {
    title: {
      type: String,
    },
    files: {
      type: Array,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("MultipleFile", mulitipleFileSchema);
