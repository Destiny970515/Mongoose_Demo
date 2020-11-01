const mongoose = require("./db");
const Schema = mongoose.Schema;

const ArticleSchema = mongoose.Schema({
  title: {
    type: String,
    unique: true
  },
  cid: { // 分类id
    type: Schema.Types.ObjectId,
    ref: "ArticleCate" // cid 和 文章分类 articlecate表 建立关系 值为：model
  },
  author_name: {
    type: String,
  },
  author_id: { // 用户id
    type: Schema.Types.ObjectId,
    ref: "User" // author_id 和 用户信息 user表 建立关系 值为：User
  },
  descripton: String,
  content: String
});

module.exports = mongoose.model("Article", ArticleSchema, "article");