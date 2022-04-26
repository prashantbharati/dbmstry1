import express from "express";
import mysql from "mysql2";
import connection from "../database.js";

const router = express.Router();

router.get("/search");
router.get("/");

router.post("/");

export default router;
