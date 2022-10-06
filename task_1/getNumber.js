const NodeCache = require("node-cache");

const myCache = new NodeCache({ stdTTL: 10 });

exports.getNumber = async (req, res) => {
  const numbers = [];
  var i = 1;

  const { number } = req.query;

  for (i; i <= number; i++) {
    var temp = i;

    temp = check(temp);
    numbers.push(temp);
  }

  if (myCache.get(number) == number) {
    console.log("Returning from cache");

    return res.send(myCache.get("result"));
  } else {
    res.send(numbers.join(" "));

    console.log("Returning normally");

    // Cache
    myCache.set(number, number);
    myCache.set("result", numbers.join(" "));
  }
};

const check = (num) => {
  if (num % 3 == 0 && num % 5 == 0) {
    return (num = "FizBuz");
  } else if (num % 3 == 0) {
    return (num = "Fiz");
  } else if (num % 5 == 0) {
    return (num = "Buz");
  }
  return num;
};
