import express from "express";
import mysql from "mysql2";
import connection from "../database.js";

const getcustomers = (req, res) => {
  let sql = "select * from customer;";

  connection.query(sql, function (err, results1) {
    if (err) throw err;
    res.status(200).json({ ans: results1 });
  });
};

const getorders = (req, res) => {
  let sql = "select * from orders;";

  connection.query(sql, function (err, results1) {
    if (err) throw err;
    res.status(200).json({ ans: results1 });
  });
};

const getpayment=()=>{
  
}

const router = express.Router();

router.get("/customer", getcustomers);
router.get("/orders", getorders);
router.get("/paymentcheck",getpayment);
router.get("/");

router.post("/");

export default router;
