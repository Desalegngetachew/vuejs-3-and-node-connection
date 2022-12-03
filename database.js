const mysql = require('mysql');
var database = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "agri",
});

module.exports = database;