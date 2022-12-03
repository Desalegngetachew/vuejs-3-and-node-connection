const insertData = require("./insertData");
const createData = (req, response) => {
  const data = req.body;
  console.log(data);
  insertData(data, (err, res) => {
    if (err) {
      res.send(err);
    } else {
      response.json(res);
    }
  });
};
module.exports = createData;
