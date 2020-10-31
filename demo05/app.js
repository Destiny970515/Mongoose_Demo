const UserModel = require("./model/user");

let userAdd = new UserModel({
  name: "小花",
  age: 22,
  status: 1,
  sex: "女"
});
// userAdd.save((err, doc) => {
//   if (err) {
//     console.log(err);
//     return;
//   }
//   console.log("添加数据成功！！！");
//   console.log(doc);
// });
userAdd.print();
// 调用静态方法
// UserModel.findName("小黄", (err, doc) => {
//   if (err) {
//     console.log(err);
//     return;
//   }
//   console.log("查找数据成功！！！");
//   console.log(doc);
// })