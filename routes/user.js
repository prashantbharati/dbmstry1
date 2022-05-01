import express from "express";
import mysql from "mysql2";
import connection from "../database.js";

const addposts = (req, res) => {
  const post = req.body;

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
  3;
  let sql2 =
    `insert into customer values(${cid},"${post.username}","${post.phnumber}","${post.adrs}");\n` +
    `
  INSERT INTO orders VALUES (${oid},"${date}","${time}",${cid});
  `;

  let sql3 = `select food_id from food where food_name="${post.item}"`;

  connection.query(sql3, function (err, results) {
    console.log(results);

    let fid = results[0].food_id;
    if (err) throw err;
    console.log(fid);
    sql2 = sql2 + `insert into order_details values(${oid},${fid},1)`;

    connection.query(sql2, function (err, results1) {
      if (err) throw err;
      res.send(results1);
    });
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
