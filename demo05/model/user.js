const mongoose = require("./db");

// 定义user数据表（集合）Schema
const UserSchema = mongoose.Schema({
  name: String,
  age: Number,
  status: {
    type: Number, // 指定类型
    default: 1    // 指定默认参数
  },
  sex: {
    type: String,
  }
});
// 静态方法
UserSchema.statics.findName = function(name, cb) {
  // 通过 find 方法获取 name 的数据。
  // this 关键字获取当前的model
  this.find({"name": name}, (err, doc) =>{
    cb(err, doc);
  })
}

// 实例方法 (基本不用)
UserSchema.methods.print = function() {
  console.log("我是实例方法！！！")
  console.log(this);
}

module.exports = mongoose.model("User", UserSchema, "user");