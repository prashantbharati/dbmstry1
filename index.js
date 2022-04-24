var express = require("express");
var app = express();
var mysql = require("mysql");

app.get("/", function (req, res) {
  res.send("hey there");
});

app.listen(3000, function () {
  console.log("app listening");
});
