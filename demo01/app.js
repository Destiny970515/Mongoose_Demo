// 1、引入mongoose
const mongoose = require("mongoose");

// 2、建立数据库连接
mongoose.connect("mongodb://127.0.0.1:27017/shop");

/** 
 * 3、操作表(集合）需要定义一个 Schema
 * Schema里面的对象和数据库表（集合）里面的字段需要一一对应。
*/
const userSchema = mongoose.Schema({
  name: String,
  age: Number,
  status: Number
});

/**
 * 4、定义数据模型
 * model 第一个参数 要注意：
 * 1、首字母大写
 * 2、要和数据库表（集合）名称对应
 * 这个模型会和模型名称相同的“复数”的数据库表（集合）建立连接
 * 例如：
 * 模型名称为 User, 那么匹配数据库表（集合）中对应的数据库表（集合）中的表名就是 users (复数) 表（集合）
 * model 第二个参数
 * 指定 Schema
 * model 第三个参数
 * 指定 要映射的数据库表（集合），即可以忽视第一个参数“复数”的规则
 */
const Users = mongoose.model("User", userSchema); // 默认会操作 users 数据库表（集合）
// const Users = mongoose.model("User", userSchema, 'user'); // 默认会操作第三个参数所指定的数据库表（集合）

// 5、查询 users 表的数据
// Users.find({}, (err, doc) => {
//   if (err) {
//     console.log(err);
//     return;
//   }
//   console.log(doc);
// })

/** 
 * 6、增加 users 表的数据
 * 6.1 实例化 Model 通过实例化 User Model 创建增加的数据
 * 6.2 实例.save()
*/
// let uAdd = new Users({
//   name: "李四",
//   age: 20,
//   status: 0
// });
// uAdd.save((err) => {
//   if (err) {
//     console.log(err)
//     return;
//   }
//   console.log("新增数据成功！")
// })

/** 
 * 7、修改 users 表的数据
*/

// Users.updateOne({"_id": "5f9a389c6b06469d04eca58e"}, {"name": "hh"}, (err, doc) => {
//   if (err) {
//     console.log(err);
//     return;
//   }
//   console.log("更新数据成功！！");
//   console.log(doc);
// })

/** 
 * 8、删除 users 表的数据
*/

Users.deleteOne({"_id": "5f9a389c6b06469d04eca58e"}, (err, doc) => {
  if (err) {
    console.log(err);
    return;
  }
  console.log("删除数据成功！！");
  console.log(doc);
})
