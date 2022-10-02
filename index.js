const express = require("express");
const bodyparser = require("body-parser");
const cors = require("cors");
const mysql = require("mysql");

const app = express();

app.use(cors());
app.use(bodyparser.json());

//databse connection

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  databse: "",
  port: "3306",
});

//check database connection

db.connect((err) => {
  if (err) {
    console.log(err, "dberr");
  } else {
    console.log("db connnected...");
  }
});

app.listen(3000, () => {
  console.log("app running on 3000 port");
});
