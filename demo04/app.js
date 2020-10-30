var UserModel = require("./model/user");

var UserAdd = new UserModel({
  name: "  小花  ",
  age: 20,
  sex: "女",
  blog: "www.huangzechang.top"
})

UserAdd.save((err, doc) => {
  if (err) {
    console.log(err)
    return;
  }
  console.log("新增数据成功！！！");
  console.log(doc)
})
