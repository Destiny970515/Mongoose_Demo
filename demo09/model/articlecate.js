const mongoose = require("./db");

const ArticleCateSchema = mongoose.Schema({
  title: {
    type: String,
    unique: true
  },
  description: String,
  addTime: {
    type: Date
  }
});

module.exports = mongoose.model("ArticleCate", ArticleCateSchema, "articlecate");