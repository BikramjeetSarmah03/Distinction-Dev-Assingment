const express = require("express");
const {
  getAllUsers,
  createUser,
  getUser,
  deleteUser,
  updateUser,
} = require("./controller/userController");
const app = express();

app.use(express.json());

// Route
app.get("/users", getAllUsers).post("/user/create", createUser);
app.get("/user/:id", getUser);
app.delete("/user/:id", deleteUser);
app.put("/user/:id", updateUser);

module.exports = app;
