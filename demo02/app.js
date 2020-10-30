const mongoose = require("mongoose");
// useNewUrlParser 这个属性会在url里识别验证用户所需的db, 未升级前是不需要指定的，升级后一定要指定。
mongoose.connect("mongodb://127.0.0.1:27017/shop", { useNewUrlParser: true }, (err) => {
  if (err) {
    console.log(err)
    return;
  }
  console.log("连接数据库成功！！！");
});

// 定义user数据表（集合）Schema
const UserSchema = mongoose.Schema({
  name: String,
  age: Number,
  status: {
    type: Number, // 指定类型
    default: 1    // 指定默认参数
  }
});

// 定义 model 操作数据库
var UserModel = mongoose.model("User", UserSchema, "users");

var userAdd = new UserModel({
  name: "李四",
  age: 40,
});
userAdd.save((err) => {
  if (err) {
    console.log(err)
    return;
  }
  console.log("增加数据成功！！！");
});