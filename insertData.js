const db = require("./database.js");

const insertData = (data, result) => {
  console.log("how is death cometo m e");

  db.query("insert into agri set ?", [data], (err, res) => {
    if (err) {
      console.log(err);
      return err, null;
    } else {
      result(null, res);
    }
  });
};

module.exports = insertData;
