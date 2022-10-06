const axios = require("axios");
const fs = require("fs");

exports.getAllUsers = async (req, res) => {
  const result = await axios.get(process.env.BASE_URL);

  res.send(result.data.data);
  const users = result.data.data;

  fs.writeFile(
    `${process.cwd()}\\Data\\users.json`,
    JSON.stringify(users, null, 2),
    function (err) {
      if (err) {
        return console.log(err);
      }
      console.log("The file was saved!");
    }
  );
};

exports.getUser = async (req, res) => {
  const { id } = req.params;

  const result = await axios(`${process.env.BASE_URL}/${id}`);

  res.send(result.data.data);
};

exports.updateUser = async (req, res) => {
  const { id } = req.params;

  const result = await axios.put(`${process.env.BASE_URL}/${id}`, {
    job: "Boss",
  });

  res.send(result.data);
};

exports.deleteUser = async (req, res) => {
  const { id } = req.params;

  await axios.delete(`${process.env.BASE_URL}/${id}`);

  res.json({ message: "User Deleted" });
};
