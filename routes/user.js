import express from "express";
import mysql from "mysql2";
import connection from "../database.js";

const addposts = (req, res) => {
  const post = req.body;

  let sql3 = "show tables";
  let sql = "SELECT * FROM customer";

  let cid = Math.floor(Math.random() * 100000);

  let sql2 = `insert into customer values(${cid},"${post.username}","${post.phnumber}","${post.adrs}");
  INSERT INTO orders VALUES (2,"01-05-2022","8:25 AM",2);
  `;
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
