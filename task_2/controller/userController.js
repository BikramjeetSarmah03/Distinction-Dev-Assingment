const axios = require("axios");
const fs = require("fs");

exports.getAllUsers = async (req, res) => {
  const result = await axios.get(process.env.BASE_URL);

  res.send(result.data.data);
  const users = result.data.data;

  try {
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
  } catch (err) {
    res.json({
      message: err,
    });
  }
};

exports.getUserUpdateDelete = async (req, res) => {
  const { letter } = req.query;
  console.log(letter);

  let users;
  try {
    users = JSON.parse(
      fs.readFileSync(`${process.cwd()}\\Data\\users.json`, "utf-8")
    );
  } catch (err) {
    console.log(err);
  }

  let user = users.filter(function (data) {
    var reg = new RegExp(`^${letter}`, "gi");

    return data.first_name.match(reg);
  });

  user = { ...user[0], job: "Boss" };

  fs.writeFile(
    `${process.cwd()}\\Data\\users.json`,
    JSON.stringify(user, null, 2),
    function (err) {
      if (err) {
        return console.log(err);
      }
      console.log("File Updated");
    }
  );

  res.send(user);
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
