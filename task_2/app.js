const express = require("express");
const app = express();
const {
  getAllUsers,
  updateUser,
  getUser,
  deleteUser,
} = require("./controller/userController");
const dotenv = require("dotenv");

dotenv.config({ path: "config.env" });
app.use(express.json());

// Route
app.get("/users", getAllUsers);
app
  .get("/user/:id", getUser)
  .put("/user/:id", updateUser)
  .delete("/user/:id", deleteUser);

app.listen(process.env.PORT, () => {
  console.log(`Server running on http://localhost:${process.env.PORT}`);
});
