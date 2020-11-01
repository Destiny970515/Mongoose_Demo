// 引入 表
const orderModel = require("./model/order");
const orderItemModel = require("./model/order_item");
const mongoose = require("./model/db");


// order表 关联 order_item表 查找当前订单下的商品
// orderModel.aggregate([
//   {
//     $lookup: {
//       from: "order_item",
//       localField: "order_id",
//       foreignField: "order_id",
//       as: "item"
//     }
//   }
// ], (err, docs) => {
//   if (err) {
//     console.log(err);
//     return;
//   }
//   console.log(JSON.stringify(docs));
// })

// order_item表 关联 order表 方法1：查找当前商品对应的订单
// orderItemModel.find({"_id": "5f9e01e3f38c6769940a3697"}, (err, docs) => {
//   if (err) {
//     console.log(err);
//     return;
//   }
//   let order_item = JSON.parse(JSON.stringify(docs));
//   // console.log(order_item);
//   var order_id = order_item[0].order_id;
//   // console.log(order_id);
//   orderModel.find({"order_id": order_id}, (err, docs) => {
//     if (err) {
//       console.log(err);
//       return;
//     }
//     order_item[0].order_info = docs[0];
//     console.log(order_item);
//   })
// })


// order_item表 关联 order表 方法2：查找当前商品对应的订单
// orderItemModel.aggregate([
//   {
//     $match: {"_id": mongoose.Types.ObjectId("5f9e01e3f38c6769940a3697")}
//   },
//   {
//     $lookup: {
//       from: "order",
//       localField: "order_id",
//       foreignField: "order_id",
//       as: "order_info"
//     }
//   }
// ], (err, docs) => {
//   if (err) {
//     console.log(err);
//     return;
//   }
//   console.log(JSON.stringify(docs));
// })
