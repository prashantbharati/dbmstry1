var express = require("express");
var app = express();
var mysql = require("mysql2");
var connection = require("./database");

app.get("/", function (req, res) {
  let sql = "SELECT * FROM customer";
  connection.query(sql, function (err, results) {
    console.log(results);
    if (err) throw err;
    else res.send(results);
  });

  // res.send("hey there");
});

app.listen(3000, function () {
  console.log("app listening");

  connection.connect(function (err) {
    if (err) throw err;
    console.log("Database connected!");
  });
});
