var mysql = require("mysql2");

var connection = mysql.createConnection({
  host: "localhost",
  database: "employee_database",
  user: "root",
  password: "Shishir@123",
});

module.exports = connection;
