var UserModel = require("./model/user");

UserModel.find({}, (err, doc) => {
  if (err) {
    console.log(err);
    return;
  }
  console.log(doc);
  console.log("查询成功！！！");
})