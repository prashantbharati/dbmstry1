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
  var time = today.getMinutes();

  let sql2 =
    `insert into customer values(${cid},"${post.username}","${post.phnumber}","${post.adrs}");\n` +
    `
  INSERT INTO orders VALUES (${oid},"${date}","${time}",${cid});
  `;

  let sql3 = `select food_id from food where food_name="${post.item}"`;

  connection.query(sql3, function (err, results) {
    console.log(results, "result");

    let fid = results[0].food_id;
    if (err) throw err;
    console.log(fid);
    sql2 =
      sql2 +
      `insert into order_details values(${oid},${fid},1);\n` +
      `insert into delivery values (${oid},"${time}","${time + 30}")`;

    connection.query(sql2, function (err, results1) {
      if (err) throw err;
      res.send(results1);
    });
  });

  console.log(post);
};

const addposts2 = (req, res) => {
  let post = req.body;

  let sql = `select customer_id from customer where customer_name="${post.username}"`;

  connection.query(sql, function (err, results) {
    console.log(results);
    if (err) throw err;
    let cid = results[0].customer_id;
    console.log(cid);

    let sql2 = `select order_id from orders where customer_id=${cid}`;

    connection.query(sql2, function (err, results1) {
      if (err) throw err;
      let oid = results1[0].order_id;
      let sql3 = `delete from order_details where order_id=${oid}`;
      console.log(oid);
      connection.query(sql3, function (err, results) {
        if (err) throw err;
      });

      res.send(results1);
    });
  });
};

const addposts3 = (req, res) => {
  let post = req.body;

  let sql = `select customer_id from customer where customer_name="${post.username}"`;

  connection.query(sql, function (err, results) {
    console.log(results);
    if (err) throw err;
    let cid = results[0].customer_id;
    console.log(cid);

    let sql2 = `select order_id from orders where customer_id=${cid}`;

    connection.query(sql2, function (err, results1) {
      if (err) throw err;
      let oid = results1[0].order_id;
      console.log(oid);
      var today = new Date();
      let ct = today.getMinutes();
      let sql3 = `select deliverytime from delivery where order_id=${oid}`;

      connection.query(sql3, function (err, results2) {
        if (err) throw err;
        console.log(results2, ct);
        let val = results2[0].deliverytime - ct;
        console.log(val, "answer");
        res.status(200).json({ ans: val });
        // res.sendStatus(val);
      });

      // res.send(results1);
    });
  });
};

const giveposts = (req, res) => {
  res.send("hey there");
};

const router = express.Router();

router.get("/search");
router.get("/", giveposts);

router.post("/", addposts);
router.post("/cancel", addposts2);
router.post("/track", addposts3);

export default router;
