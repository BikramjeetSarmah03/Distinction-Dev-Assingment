const User = require("../models/userModel");

exports.getAllUsers = async (req, res) => {
  const users = await User.find();

  res.status(200).json({
    message: "Got All Users",
    users,
  });
};

exports.createUser = async (req, res) => {
  const user = await User.create(req.body);
  console.log(req.body);

  res.status(201).json({
    message: "User Created",
    user,
  });
};

exports.getUser = async (req, res) => {
  const user = await User.findById(req.params.id);

  if (!user) {
    return res.status(500).json({
      success: false,
      message: "Product not found",
    });
  }

  res.status(200).json({
    message: "Got User",
    user,
  });
};

exports.updateUser = async (req, res) => {
  let user = await User.findById(req.params.id);

  if (!user) {
    return res.status(500).json({
      success: false,
      message: "User not found",
    });
  }

  user = await User.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
    useFindAndModify: false,
  });

  res.status(200).json({
    message: "Updated user",
    user,
  });
};

exports.deleteUser = async (req, res) => {
  let user = await User.findById(req.params.id);

  if (!user) {
    return res.status(500).json({
      success: false,
      message: "User not found",
    });
  }

  await User.findByIdAndDelete(req.params.id);

  res.status(200).json({
    message: "Delete Working",
  });
};
