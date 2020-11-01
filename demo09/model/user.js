const mongoose = require("./db");

const UserSchema = mongoose.Schema({
  username: {
    type: String,
    unique: true
  },
  password: String,
  name: String,
  age: Number,
  sex: String,
  phone: Number,
  status: {
    type: Number,
    default: 1
  }
});

module.exports = mongoose.model("User", UserSchema, "user");