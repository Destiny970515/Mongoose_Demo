const UserModel = require("./model/user");

var userAdd = new UserModel({
  name: "黄xx",
  age: 30,
  status: 2,
  sex: "男"
});

userAdd.save((err, doc) => {
  if (err) {
    console.log(err);
    return;
  }
  console.log("添加成功！！！");
  console.log(doc);
})