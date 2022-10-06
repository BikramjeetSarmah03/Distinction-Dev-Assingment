const express = require("express");
const app = express();
const {
  getAllUsers,
  getUserUpdateDelete,
  // updateUser,
  // getUser,
  // deleteUser,
} = require("./controller/userController");

// -----------------------dot env-----------------------
const dotenv = require("dotenv");
dotenv.config({ path: "config.env" });

app.use(express.json());

// ---------------------- Route -----------------------
app.get("/users", getAllUsers);
app.get("/users/rud", getUserUpdateDelete);
// app
//   .get("/user/:id", getUser)
//   .put("/user/:id", updateUser)
//   .delete("/user/:id", deleteUser);

// --------------------------listining ---------------------------
app.listen(process.env.PORT, () => {
  console.log(`Server running on http://localhost:${process.env.PORT}`);
});
