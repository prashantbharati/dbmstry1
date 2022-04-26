import express from "express";
import mysql from "mysql2";
import connection from "../database.js";

const addposts = (req, res) => {
  const post = req.body.phnumber;
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
