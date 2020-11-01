const mongoose = require("./db");

const OrderItemSchema = mongoose.Schema({
  order_id: String,
  title: String,
  price: Number,
  num: Number
});

module.exports = mongoose.model("OrderItem", OrderItemSchema, "order_item");