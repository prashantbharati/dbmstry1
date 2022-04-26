import mysql from "mysql2";
var connection = mysql.createConnection({
  host: "localhost",
  database: "homedelivery",
  user: "root",
  password: "Shishir@123",
});

export default connection;
