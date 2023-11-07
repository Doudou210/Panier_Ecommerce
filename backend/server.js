// import express from "express";
// import mysql from "mysql";
// import cors from "cors";

const express = require("express");
const mysql = require("mysql");
const cors = require("cors");
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const cookieParser = require("cookie-parser");

const salt= 10;
const app = express();
app.use(express.json());
app.use(cors());

const db = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"",
    database:"register"
})

app.post('/register', (req, res) => {
    const sql = "INSERT INTO login(`username`, `email`, `password`) VALUES(?)";
    bcrypt.hash(req.body.password.toString(), salt, (err, hash) => {
        if (err) return res.json({Error: "Error for hashing password"});
    })
    const values = [
        req.body.username,
        req.body.email,
        hash
    ]
    db.query(sql, [values], (err, result) => {
        if (err) return res.json({Error: "Inserting data Error in server"});
        return res.json({Status: "Success"});
    })
})

app.listen(8081, () => {
    console.log("Running...");
})