import express from "express";
import mysql from "mysql2";
import connection from "./database.js";
import guyRoutes from "./routes/guy.js";
import userRoutes from "./routes/user.js";
import cors from "cors";
import bodyParser from "body-parser";
const app = express();

app.use(cors());
app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));

app.get("/", function (req, res) {
  let sql3 = "show tables";
  let sql = "SELECT * FROM customer";
  let sql2 =
    "insert into customer values(2,'renu','9990889687','darjeeling, shimla');";
  connection.query(sql, function (err, results) {
    console.log(results);
    if (err) throw err;
    else res.send(results);
  });

  // res.send("hey there");
});

app.use("/guy", guyRoutes); // Every route inside postroutes is gonna start with /posts...localhost5000/posts
app.use("/user", userRoutes);

app.listen(5000, function () {
  console.log("app listening");

  connection.connect(function (err) {
    if (err) throw err;
    console.log("Database connected!");
  });
});
