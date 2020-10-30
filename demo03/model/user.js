const mongoose = require("./db");

// 定义user数据表（集合）Schema
const UserSchema = mongoose.Schema({
  name: String,
  age: Number,
  status: {
    type: Number, // 指定类型
    default: 1    // 指定默认参数
  }
});

module.exports = mongoose.model("User", UserSchema, "users");