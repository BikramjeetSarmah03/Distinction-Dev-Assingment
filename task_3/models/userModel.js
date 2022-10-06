const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please Enter Name"],
  },
  role: {
    type: String,
    required: [true, "Please Enter Role"],
  },
  email: {
    type: String,
    unique: true,
    required: [true, "Please Enter Email"],
  },
});

module.exports = mongoose.model("User", userSchema);
