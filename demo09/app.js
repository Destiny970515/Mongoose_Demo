// 注意使用 populate 需要引入用到的 model
// 虽然 ArticleCateModel 和 UserModel 引入了但是没有使用。如果不引入，是查询不到数据的。要注意（坑）！！！
const ArticleCateModel = require("./model/articlecate");
const UserModel = require("./model/user");
const ArticleModel = require("./model/article");

// 文章表和分类表的关联查询
// ArticleModel.find({}).populate("cid").exec((err, docs) => {
//   console.log(docs);
// });

// 三个表关联
ArticleModel.find({}).populate("cid").populate("author_id").exec((err, docs) => {
  console.log(JSON.stringify(docs));
});