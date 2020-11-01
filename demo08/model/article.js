const mongoose = require("./db");
const Schema = mongoose.Schema;

const ArticleSchema = mongoose.Schema({
  title: {
    type: String,
    unique: true
  },
  cid: { // 分类id
    type: Schema.Types.ObjectId
  },
  author_name: {
    type: String,
  },
  author_id: { // 用户id
    type: Schema.Types.ObjectId
  },
  descripton: String,
  content: String
});

module.exports = mongoose.model("Article", ArticleSchema, "article");
