const mongoose = require("./db");

// 定义user数据表（集合）Schema
const UserSchema = mongoose.Schema({
  name: {
    type: String,
    trim: true // 使用了预定义修饰符 trim
  },
  age: Number,
  status: {
    type: Number, // 指定类型
    default: 1    // 指定默认参数
  },
  sex: {
    type: String,
    default: "男"
  },
  blog: {
    type: String,
    set(params) { // 增加数据的时候对当前字段进行处理
      console.log(params)
      if (!params) {
        return ""
      } else {
        if (params.indexOf("http://") !== 0) {
          return "http://" + params;
        }
        return params;
      }
    }
  }
});

module.exports = mongoose.model("User", UserSchema, "users");