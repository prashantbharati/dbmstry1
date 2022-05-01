import express from "express";
import mysql from "mysql2";
import connection from "../database.js";

const addposts = (req, res) => {
  const post = req.body;

  let sql3 = "show tables";
  let sql = "SELECT * FROM customer";

  let cid = Math.floor(Math.random() * 100000);
  let oid = Math.floor(Math.random() * 100000);

  // current date
  var today = new Date();
  var date =
    today.getDate() + "-" + (today.getMonth() + 1) + "-" + today.getFullYear();

  // current time
  var today = new Date();
  var time =
    today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
  ("insert into customer values(10,'renu','9990889687','darjeeling, shimla');insert into orders VALUES (2,'01-05-2022','8:25 AM',2);");

  let sql2 =
    `insert into customer values(${cid},"${post.username}","${post.phnumber}","${post.adrs}");\n` +
    `
  INSERT INTO orders VALUES (${oid},"${date}","${time}",${cid});
  `;

  'insert into customer values(63537,"Sai praneeth","9876547896","Hydrabad");\n' +
    "  INSERT INTO orders VALUES (39209,2022-5-1,9:44:27,63537);\n" +
    "  ";

  connection.query(sql2, function (err, results) {
    console.log(results);
    if (err) throw err;
    else res.send(results);
  });

  console.log(post);
};

const giveposts = (req, res) => {
  res.send("hey there");
};

const router = express.Router();

router.get("/search");
router.get("/", giveposts);

router.post("/", addposts);

export default router;
