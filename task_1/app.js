const express = require("express");
const { getNumber } = require("./getNumber");

const app = express();

app.use(express.json());

// Route
app.get("/task-1", getNumber);

app.listen(4000, () => {
  console.log("Server running on http://localhost:4000");
});
