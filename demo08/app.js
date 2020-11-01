const ArticleCateModel = require("./model/articlecate");
const UserModel = require("./model/user");
const ArticleModel = require("./model/article");

// 分类的增加
// const cate = new ArticleCateModel({
//   title: "国内新闻",
//   description: "国内新闻"
// });
// cate.save();

// 增加用户
// var user = new UserModel({
//   username: "lisi",
//   password: "123456",
//   name: "李四",
//   age: 24,
//   sex: "女",
//   phone: 13812356821,
// })
// user.save();

// 增加文章
// const article = new ArticleModel({
//   title: "这是一条国内新闻！！！",
//   cid: "5f9e6e71abf7a21e441c4aad",
//   author_name: "张三",
//   author_id: "5f9e6f3b0a5aa81090336ecc",
//   descripton: "这是一条国内新闻！！！此处省略300字。",
//   content: "这是一条国内新闻！！！此处省略1000字。"
// })
// article.save();

// 查询文章信息
// ArticleModel.find({}, (err, docs) => {
//   console.log(docs);
// })

// 查询文章信息 并且显示 文章的分类 以及 文章的作者信息
// 两个表关联查询 (只实现了关联文章分类)
// ArticleModel.aggregate([
//   {
//     $lookup: {
//       from: "articlecate",
//       localField: "cid",
//       foreignField: "_id",
//       as: "cate"
//     }
//   }
// ], (err, docs) => {
//   console.log(JSON.stringify(docs));
// })

// 三个表关联查询  (实现了关联文章分类 以及 关联文章的作者信息)
// 如果使用 aggregate 来实现多个表关联，那么引入 ArticleModel 这个 model 就行了
ArticleModel.aggregate([
  {
    $lookup: {
      from: "articlecate",
      localField: "cid",
      foreignField: "_id",
      as: "cate"
    }
  },
  {
    $lookup: {
      from: "user",
      localField: "author_id",
      foreignField: "_id",
      as: "user"
    }
  }
], (err, docs) => {
  console.log(JSON.stringify(docs));
})

