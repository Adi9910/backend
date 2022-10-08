const express = require("express");
const mongoose = require("mongoose");
const app = express();
const name = require('./schema')
require("./db")


//middleware
const middleware = (req, res, next) => {
  console.log(`hello`);
  next();
};

app.get("/", (req, res) => {
  res.send(`hello world form the server`);
});
app.get("/about", middleware, (req, res) => {
  res.send(`hello world form the about`);
});
// app.get("/contact", (req, res) => {
//   res.send(`hello world form the contact`);
// });
// app.get("/login", (req, res) => {
//   res.send(`hello world form the server`);
// });
// app.get("/register", (req, res) => {
//   res.send(`hello world form the server`);
// });

app.listen(9000, () => {
  console.log("runn");
});
