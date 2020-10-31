const mongoose = require("./db");

// 定义user数据表（集合）Schema
const UserSchema = mongoose.Schema({
  name: {
    type: String,
    required: true // 必须传入
  },
  age: {
    type: Number,
    max: 120, // 用于 Number 类型数据，最大值
    min: 0    // 用于 Number 类型数据，最小值
  },
  status: {
    type: Number,                // 指定类型
    default: "success",          // 指定默认参数
    enum: ["success", "error"]   // 枚举类型校验
  },
  sex: {
    type: String,
    validate: function(desc) {
      if (!desc) {
        return false
      }
    }
  },
  sn: {
    type: Number,
    maxlength: 16,  // 最大长度
    minlength: 8,   // 最小长度
    match: /^sn_[0-9]+$/ // 正则校验
  }
});

module.exports = mongoose.model("User", UserSchema, "user");